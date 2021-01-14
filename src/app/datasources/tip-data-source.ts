import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Tip} from '../model/tip';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {TipService} from '../services/tip.service';

export class TipDataSource extends DataSource<Tip> {
  private tipSubject = new BehaviorSubject<Tip[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private tipService: TipService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Tip[] | ReadonlyArray<Tip>> {
    return this.tipSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.tipSubject.complete();
    this.loadingSubject.complete();
  }

  loadTips() {
    this.loadingSubject.next(true);
    this.tipService.getTips().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.tipSubject.next(pagingResult);
    });
  }

}

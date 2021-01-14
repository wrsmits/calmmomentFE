import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Booleananswer} from '../model/booleananswer';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {BooleanAnswerService} from '../services/booleananswer.service';

export class BooleananswerDataSource extends DataSource<Booleananswer> {
  private booleananswerSubject = new BehaviorSubject<Booleananswer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private booleananswerService: BooleanAnswerService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Booleananswer[] | ReadonlyArray<Booleananswer>> {
    return this.booleananswerSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.booleananswerSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.booleananswerService.getBoolAnswers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.booleananswerSubject.next(pagingResult);
    });
  }

}

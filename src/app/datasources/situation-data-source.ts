import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Situation} from '../model/situation';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {SituationService} from '../services/situation.service';

export class SituationDataSource extends DataSource<Situation> {
  private situationSubject = new BehaviorSubject<Situation[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private situationService: SituationService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Situation[] | ReadonlyArray<Situation>> {
    return this.situationSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.situationSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.situationService.getSituations().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.situationSubject.next(pagingResult);
    });
  }

}

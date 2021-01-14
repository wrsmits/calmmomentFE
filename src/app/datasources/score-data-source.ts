import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Score} from '../model/score';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {ScoreService} from '../services/score.service';

export class ScoreDataSource extends DataSource<Score> {
  private scoreSubject = new BehaviorSubject<Score[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private scoreService: ScoreService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Score[] | ReadonlyArray<Score>> {
    return this.scoreSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.scoreSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.scoreService.getScores().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.scoreSubject.next(pagingResult);
    });
  }

}

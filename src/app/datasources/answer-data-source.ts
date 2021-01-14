import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Answer} from '../model/answer';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {AnswerService} from '../services/answer.service';

export class AnswerDataSource extends DataSource<Answer> {
  private answersSubject = new BehaviorSubject<Answer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private answerService: AnswerService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Answer[] | ReadonlyArray<Answer>> {
    return this.answersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.answersSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.answerService.getAnswers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.answersSubject.next(pagingResult);
    });
  }

}

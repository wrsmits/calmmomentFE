import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Question} from '../model/question';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {QuestionService} from '../services/question.service';

export class QuestionDataSource extends DataSource<Question> {
  private questionSubject = new BehaviorSubject<Question[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private questionService: QuestionService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Question[] | ReadonlyArray<Question>> {
    return this.questionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.questionSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.questionService.getQuestion().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.questionSubject.next(pagingResult);
    });
  }

}

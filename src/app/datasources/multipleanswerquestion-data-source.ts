import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MultAnsQuestion} from '../model/multipleanswerquestion';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {MultAnsQuestionService} from '../services/multipleanswerquestion.service';

export class MultipleanswerquestionDataSource extends DataSource<MultAnsQuestion> {
  private multipleanswerquestionSubject = new BehaviorSubject<MultAnsQuestion[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private multipleanswerquestionService: MultAnsQuestionService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<MultAnsQuestion[] | ReadonlyArray<MultAnsQuestion>> {
    return this.multipleanswerquestionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.multipleanswerquestionSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.multipleanswerquestionService.getMultAnsQuestions().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.multipleanswerquestionSubject.next(pagingResult);
    });
  }

}

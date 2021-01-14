import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BooleanQuestion} from '../model/booleanquestion';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {BooleanQuestionService} from '../services/booleanquestion.service';

export class BooleanquestionDataSource extends DataSource<BooleanQuestion> {
  private booleanquestionSubject = new BehaviorSubject<BooleanQuestion[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private booleanQuestionService: BooleanQuestionService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<BooleanQuestion[] | ReadonlyArray<BooleanQuestion>> {
    return this.booleanquestionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.booleanquestionSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.booleanQuestionService.getBoolQuestions().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.booleanquestionSubject.next(pagingResult);
    });
  }

}

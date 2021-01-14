import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MultChoiceQuest} from '../model/multiplechoicequestion';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {MultipleChoiceQuestionService} from '../services/multiplechoicequestion.service';

export class MultiplechoicequestionDataSource extends DataSource<MultChoiceQuest> {
  private multiplechoicequestionSubject = new BehaviorSubject<MultChoiceQuest[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private multiplechoicequestionService: MultipleChoiceQuestionService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<MultChoiceQuest[] | ReadonlyArray<MultChoiceQuest>> {
    return this.multiplechoicequestionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.multiplechoicequestionSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.multiplechoicequestionService.getMultChoiceQuestions().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.multiplechoicequestionSubject.next(pagingResult);
    });
  }

}

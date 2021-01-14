import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MultChoiceAnswer} from '../model/multiplechoiceanswer';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {MultipleChoiceAnswerService} from '../services/multiplechoiceanswer.service';

export class MultiplechoiceanswerDataSource extends DataSource<MultChoiceAnswer> {
  private multiplechoiceanswerSubject = new BehaviorSubject<MultChoiceAnswer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private multiplechoiceanswerService: MultipleChoiceAnswerService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<MultChoiceAnswer[] | ReadonlyArray<MultChoiceAnswer>> {
    return this.multiplechoiceanswerSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.multiplechoiceanswerSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.multiplechoiceanswerService.getMultChoiceAnswers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.multiplechoiceanswerSubject.next(pagingResult);
    });
  }

}

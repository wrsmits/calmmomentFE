import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {OpenQuest} from '../model/openquestion';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {OpenQuestionService} from '../services/openquestion.service';

export class OpenquestionDataSource extends DataSource<OpenQuest> {
  private openquestionSubject = new BehaviorSubject<OpenQuest[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private openquestionService: OpenQuestionService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<OpenQuest[] | ReadonlyArray<OpenQuest>> {
    return this.openquestionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.openquestionSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.openquestionService.getOpenQuestions().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.openquestionSubject.next(pagingResult);
    });
  }

}

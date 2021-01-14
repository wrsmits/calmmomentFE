import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {OpenAnswer} from '../model/openanswer';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {OpenAnswerService} from '../services/openanswer.service';

export class OpenanswerDataSource extends DataSource<OpenAnswer> {
  private openanswerSubject = new BehaviorSubject<OpenAnswer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private openanswerService: OpenAnswerService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<OpenAnswer[] | ReadonlyArray<OpenAnswer>> {
    return this.openanswerSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.openanswerSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.openanswerService.getOpenAnswers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.openanswerSubject.next(pagingResult);
    });
  }

}

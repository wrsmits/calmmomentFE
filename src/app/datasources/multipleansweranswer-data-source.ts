import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MultAnsAnswer} from '../model/multipleansweranswer';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {MultAnsAnswerService} from '../services/multipleansweranswer.service';

export class MultipleansweranswerDataSource extends DataSource<MultAnsAnswer> {
  private multipleansweranswerSubject = new BehaviorSubject<MultAnsAnswer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private multipleansweranswerService: MultAnsAnswerService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<MultAnsAnswer[] | ReadonlyArray<MultAnsAnswer>> {
    return this.multipleansweranswerSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.multipleansweranswerSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.multipleansweranswerService.getMultAnsAnswers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.multipleansweranswerSubject.next(pagingResult);
    });
  }

}

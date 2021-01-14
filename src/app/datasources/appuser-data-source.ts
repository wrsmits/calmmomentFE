import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {AppUser} from '../model/appuser';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {AppuserService} from '../services/appuser.service';

export class AppuserDataSource extends DataSource<AppUser> {
  private appusersSubject = new BehaviorSubject<AppUser[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private appuserService: AppuserService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<AppUser[] | ReadonlyArray<AppUser>> {
    return this.appusersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.appusersSubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.appuserService.getAppUsers().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.appusersSubject.next(pagingResult);
    });
  }

}

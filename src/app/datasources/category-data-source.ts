import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Category} from '../model/category';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {CategoryService} from '../services/category.service';

export class CategoryDataSource extends DataSource<Category> {
  private categorySubject = new BehaviorSubject<Category[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private categoryService: CategoryService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Category[] | ReadonlyArray<Category>> {
    return this.categorySubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.categorySubject.complete();
    this.loadingSubject.complete();
  }

  loadActions() {
    this.loadingSubject.next(true);
    this.categoryService.getCategories().pipe(catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))).subscribe((pagingResult: any) => {
      this.categorySubject.next(pagingResult);
    });
  }

}

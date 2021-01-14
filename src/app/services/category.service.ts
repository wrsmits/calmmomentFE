import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private categoryUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl, {}).pipe(tap(), catchError(this.handleError<Category[]>('getCategory', [])));
  }

  getCategory(categoryId: number): Observable<Category> {
    const categoryDetailUrl = `${this.categoryUrl}/${categoryId}`;
    return this.http.get<Category>(categoryDetailUrl).pipe(tap(), catchError(this.handleError<Category>(`getCategory categoryId=${categoryId}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  createCategory(category: Category): Observable<Category> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
      })
    };
    return this.http.post<Category>(this.categoryUrl, category, httpOptions)
      .pipe(catchError(this.handleError('createCategory', category)));
  }

  // createTest(category: Category) {
  //   this.http.post(this.categoryUrl, category).toPromise().then((data: any) => { console.log(data); } );
  // }
}

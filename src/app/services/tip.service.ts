import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Tip} from '../model/tip';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  private tipUrl = 'http://localhost:8080/tips';

  constructor(private http: HttpClient) {
  }

  getTips(): Observable<Tip[]> {
    return this.http.get<Tip[]>(this.tipUrl, {}).pipe(tap(), catchError(this.handleError<Tip[]>('getTip', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

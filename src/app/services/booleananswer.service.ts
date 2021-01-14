import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Booleananswer} from '../model/booleananswer';

@Injectable({
  providedIn: 'root'
})
export class BooleanAnswerService {

  private booleananswerUrl = 'http://localhost:8080/booleananswer';

  constructor(private http: HttpClient) {
  }

  getBoolAnswers(): Observable<Booleananswer[]> {
    return this.http.get<Booleananswer[]>(this.booleananswerUrl, {}).pipe(tap(), catchError(this.handleError<Booleananswer[]>('getBoolAnswer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

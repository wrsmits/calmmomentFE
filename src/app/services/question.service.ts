import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Question} from '../model/question';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = 'http://localhost:8080/question';

  constructor(private http: HttpClient) {
  }

  getQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl, {}).pipe(tap(), catchError(this.handleError<Question[]>('getQuestion', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

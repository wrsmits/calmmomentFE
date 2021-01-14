import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Answer} from '../model/answer';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private answerUrl = 'http://localhost:8080/answer';

  constructor(private http: HttpClient) {
  }

  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.answerUrl, {}).pipe(tap(), catchError(this.handleError<Answer[]>('getAnswer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

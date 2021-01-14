import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {BooleanQuestion} from '../model/booleanquestion';

@Injectable({
  providedIn: 'root'
})
export class BooleanQuestionService {

  private booleanQuestionUrl = 'http://localhost:8080/booleanquestion';

  constructor(private http: HttpClient) {
  }

  getBoolQuestions(): Observable<BooleanQuestion[]> {
    return this.http.get<BooleanQuestion[]>(this.booleanQuestionUrl, {}).pipe(tap(), catchError(this.handleError<BooleanQuestion[]>('getBooleanQuestion', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

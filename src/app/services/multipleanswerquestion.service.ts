import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MultAnsQuestion} from '../model/multipleanswerquestion';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultAnsQuestionService {

  private multAnsQuestionUrl = 'http://localhost:8080/multAnsQuestion';

  constructor(private http: HttpClient) {
  }

  getMultAnsQuestions(): Observable<MultAnsQuestion[]> {
    return this.http.get<MultAnsQuestion[]>(this.multAnsQuestionUrl, {}).pipe(tap(), catchError(this.handleError<MultAnsQuestion[]>('getmultAnsQuestion', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MultChoiceAnswer} from '../model/multiplechoiceanswer';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceAnswerService {

  private multChoiceAnswerUrl = 'http://localhost:8080/multChoiceAnswer';

  constructor(private http: HttpClient) {
  }

  getMultChoiceAnswers(): Observable<MultChoiceAnswer[]> {
    return this.http.get<MultChoiceAnswer[]>(this.multChoiceAnswerUrl, {}).pipe(tap(), catchError(this.handleError<MultChoiceAnswer[]>('getMultChoiceAnswer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

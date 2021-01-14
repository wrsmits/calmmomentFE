import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MultChoiceQuest} from '../model/multiplechoicequestion';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceQuestionService {

  private multChoiceQuestionUrl = 'http://localhost:8080/multChoiceQuestion';

  constructor(private http: HttpClient) {
  }

  getMultChoiceQuestions(): Observable<MultChoiceQuest[]> {
    return this.http.get<MultChoiceQuest[]>(this.multChoiceQuestionUrl, {}).pipe(tap(), catchError(this.handleError<MultChoiceQuest[]>('getMultChoiceQuestion', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

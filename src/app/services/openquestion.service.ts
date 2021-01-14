import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {OpenQuest} from '../model/openquestion';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenQuestionService {

  private openQuestUrl = 'http://localhost:8080/openQuestion';

  constructor(private http: HttpClient) {
  }

  getOpenQuestions(): Observable<OpenQuest[]> {
    return this.http.get<OpenQuest[]>(this.openQuestUrl, {}).pipe(tap(), catchError(this.handleError<OpenQuest[]>('getOpenQuestion', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {OpenAnswer} from '../model/openanswer';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenAnswerService {

  private openAnswerUrl = 'http://localhost:8080/openAnswer';

  constructor(private http: HttpClient) {
  }

  getOpenAnswers(): Observable<OpenAnswer[]> {
    return this.http.get<OpenAnswer[]>(this.openAnswerUrl, {}).pipe(tap(), catchError(this.handleError<OpenAnswer[]>('getOpenAnswer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MultAnsAnswer} from '../model/multipleansweranswer';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultAnsAnswerService {

  private multAnsAnswerUrl = 'http://localhost:8080/multAnsAnswer';

  constructor(private http: HttpClient) {
  }

  getMultAnsAnswers(): Observable<MultAnsAnswer[]> {
    return this.http.get<MultAnsAnswer[]>(this.multAnsAnswerUrl, {}).pipe(tap(), catchError(this.handleError<MultAnsAnswer[]>('getMultAnsAnswer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

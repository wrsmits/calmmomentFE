import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Score} from '../model/score';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoreUrl = 'http://localhost:8080/score';

  constructor(private http: HttpClient) {
  }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl, {}).pipe(tap(), catchError(this.handleError<Score[]>('getScore', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

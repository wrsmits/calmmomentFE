import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Situation} from '../model/situation';
import {catchError, tap} from 'rxjs/operators';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  private situationUrl = 'http://localhost:8080/situations';

  constructor(private http: HttpClient) {
  }

  getSituations(): Observable<Situation[]> {
    return this.http.get<Situation[]>(this.situationUrl, {}).pipe(tap(), catchError(this.handleError<Situation[]>('getSituation', [])));
  }

  getSituation(situationId: number): Observable<Situation> {
    const situationDetailUrl = `${this.situationUrl}/${situationId}`;
    return this.http.get<Situation>(situationDetailUrl).pipe(tap(), catchError(this.handleError<Situation>(`getSituation situationId=${situationId}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

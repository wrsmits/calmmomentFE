import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AppUser} from '../model/appuser';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {

  private appuserUrl = 'http://localhost:8080/appusers';

  constructor(private http: HttpClient) {
  }

  getAppUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(this.appuserUrl, {}).pipe(tap(), catchError(this.handleError<AppUser[]>('getAppuser', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgencesService {

  constructor(private http: HttpClient) { }

  
  getAllAgence() {
    return this.http.get<any[]>(`${environment.baseUrl}/agence/all`) .pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
}
}

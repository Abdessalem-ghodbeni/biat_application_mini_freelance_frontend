import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  
  getClient() {
    return this.http.get<any[]>(`${environment.baseUrl}/client/all`).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
}
}

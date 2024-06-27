import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
 

  constructor(private http: HttpClient) { }
  getAllAcount() {
    return this.http.get<any[]>(`${environment.baseUrl}/compte/all`) .pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
}
   
  getAllAcountByAgence(id:number) {
    return this.http.get<any[]>(`${environment.baseUrl}/compte/all/${id}`) .pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
}
}

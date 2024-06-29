import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeChequeService {

  constructor(private http: HttpClient) { }
  createChequeBookRequest(request: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/chequeBook`, request);
  }

  approveChequeBookRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/chequeBook/approve/${requestId}`, null);
  }

  refuseChequeBookRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/chequeBook/refuse/${requestId}`, null);
  }
  getAllRequestsByAgentId(agentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/chequeBook/agent/${agentId}`);
  }
  getAllRequestsByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/chequeBook/client/${clientId}`);
  }
}

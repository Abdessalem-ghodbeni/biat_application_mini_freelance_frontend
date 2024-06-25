import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

 
  constructor(private http: HttpClient) { }

  
  getAgents() {
    return this.http.get<any[]>(`${environment.baseUrl}/agent/all`) .pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
}
deleteAgent(id:number){
  return this.http.delete(`${environment.baseUrl}/agent/supprimer/${id}`) .pipe(
    catchError((error) => {
      console.log('errrr', error);
      throw error;
    })
  );
}

  
affecterAgentTOAgence(agenceId:number,agentIds: number[]){
  return this.http.put(`${environment.baseUrl}/agence/${agenceId}/assign-agents`, agentIds) .pipe(
    catchError((error) => {
      console.log('errrr', error);
      throw error;
    })
  );

}

  
desaffecterAgentFromAgence(agentId:number){
  return this.http.put(`${environment.baseUrl}/agent/dassign/${agentId}`,{}).pipe(
    catchError((error) => {
      console.log('errrr', error);
      throw error;
    })
  );

}

}

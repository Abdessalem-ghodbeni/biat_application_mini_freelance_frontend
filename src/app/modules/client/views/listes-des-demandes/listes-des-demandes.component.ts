import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DemandeChequeService } from 'src/app/core/services/Cheque/demande-cheque.service';

@Component({
  selector: 'app-listes-des-demandes',
  templateUrl: './listes-des-demandes.component.html',
  styleUrls: ['./listes-des-demandes.component.css']
})
export class ListesDesDemandesComponent implements OnInit{
  requests: any[] = [];
  clientId : any ;
  public noData!: TemplateRef<NgIfContext<boolean>>;

  constructor(private chequeS : DemandeChequeService){

  }
  ngOnInit(): void {
    this.getAllRequestsByClientId();
  }
  getAllRequestsByClientId(): void {
    const userConnect = localStorage.getItem('userconnect');
    if (userConnect) {
      const user = JSON.parse(userConnect);
      this.clientId = user.id;
    }
    this.chequeS.getAllRequestsByClientId(this.clientId).subscribe(
      (requests) => {
        this.requests = requests;
        console.log('Demandes récupérées avec succès:', requests);
      },
      (error) => {
        console.error('Erreur lors de la récupération des demandes:', error);
      }
    );
  }

}

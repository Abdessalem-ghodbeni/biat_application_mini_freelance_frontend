import { Component, OnInit } from '@angular/core';

import { AgentService } from 'src/app/core/services/Agent/agent.service';
import Chart from 'chart.js/auto';
import { AgentProductivity } from 'src/app/core/models/AgentProductivity ';
import { AgencesService } from 'src/app/core/services/Agence/agences.service';
import { CompteService } from 'src/app/core/services/Comptes/compte.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  listeAgence!:any[];
  showMe:boolean=false;
  ngOnInit() {
    this.compteService.getAllAcount().subscribe({
      next: (data: any) => {
         
        this.totaleAcount = data.length;
        
       
      },
      error: () => {
       
      },
    });
   
    this.agence_services.getAllAgence().subscribe({
      next: (data: any) => {
         
        this.listeAgence = data;
        console.log("ee", this.listeAgence );
       
      },
      error: () => {
       
      },
    });
  }
  constructor(private agentService: AgentService, private agence_services: AgencesService,private compteService:CompteService) { }

  listAgents: any[] = [];
  agentId1!: number ;
  agentId2!: number;
  NbCompteCreatedByAgentNumberOne!: number;
  NbCompteCreatedBySecondAgent!: number;
  selectedAgenceId!:number;
nbCompteByAgence!:number;
totaleAcount!:number;
  onAgenceChange(event: any) {
    this.selectedAgenceId = event.target.value;
    this.getAllAgents();


    this.compteService.getAllAcountByAgence(event.target.value).subscribe({
      next: (data: any) => {
         
        this.nbCompteByAgence= data.length;
        console.log("legth", this.nbCompteByAgence );
       
      },
      error: () => {
       
      },
    });

    console.log("Selected Agence ID:", this.selectedAgenceId);
  }

  onAgentOneChange(event: any) {
    this.agentId1 = event.target.value;
    console.log("Selected Agence ID:", this.agentId1);
  }

  onAgentSecondChange(event: any) {
    this.agentId2 = event.target.value;
    console.log("Selected Agence ID:", this.agentId2);
  }


  lancerComparaison() {
    if (this.agentId1 && this.agentId2) {
      this.loadAgentProductivityData();
      this.showMe=true
    } else {
      console.error('Veuillez sélectionner deux agents pour lancer la comparaison.');
    }
  }
  loadAgentProductivityData() {
  
    this.agentService.getAgentProductivityComparison(this.agentId1, this.agentId2).subscribe(
      (data: any) => {
        console.log("sex", data)
        this.NbCompteCreatedByAgentNumberOne = data.comptesAgent1
        this.NbCompteCreatedBySecondAgent = data.comptesAgent2
       
        // Appelez la méthode pour dessiner le graphique une fois les données chargées
        this.createChart();
       
       
      },
      error => {
        console.error('Error fetching agent productivity comparison data', error);
      }
    );
  }
  getAllAgents() {
    this.agentService.geAgentByIdAgence(this.selectedAgenceId).subscribe({
      next: (data: any) => {

        this.listAgents = data;
        console.log(this.listAgents);

      },
      error: () => {

      },
    });
  }
  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Nombre des Comptes totale dans l agence', 'Nombre des Comptes Crées par premiére Agent', 'Nombre des Comptes Crées par deusiéme Agent'],
        datasets: [{
          label: 'My First Dataset',
          data: [this.nbCompteByAgence, this.NbCompteCreatedByAgentNumberOne, this.NbCompteCreatedBySecondAgent],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }
 
}

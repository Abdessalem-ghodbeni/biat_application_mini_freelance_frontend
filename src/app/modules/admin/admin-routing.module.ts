import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { ListUniversiteComponent } from './views/list-universite/list-universite.component';
import { AjouterAgentComponent } from './views/ajouter-agent/ajouter-agent.component';
import { ListeAgentsComponent } from './views/liste-agents/liste-agents.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-university', component: ListUniversiteComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
      { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
      { path: 'list-reservation', component: ListReservationComponent },
      { path: 'list-agents', component: ListeAgentsComponent },
      { path: 'ajouter-agent', component: AjouterAgentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

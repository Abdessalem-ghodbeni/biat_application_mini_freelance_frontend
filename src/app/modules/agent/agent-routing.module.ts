import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent/layout-agent.component';
import { DemandeChequierComponent } from './views/demande-chequier/demande-chequier.component';

const routes: Routes = [{
  path: '', component: LayoutAgentComponent, children: [
    { path: 'demande_chequier', component: DemandeChequierComponent },
    // { path: 'list-university', component: ListUniversiteComponent },
    // { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
    // { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
    // { path: 'list-reservation', component: ListReservationComponent },
    // { path: 'list-agents', component: ListeAgentsComponent },
    // { path: 'ajouter-agent', component: AjouterAgentComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }

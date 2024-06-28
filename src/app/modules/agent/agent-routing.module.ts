import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAgentComponent } from './layout-agent/layout-agent.component';
import { DemandeChequierComponent } from './views/demande-chequier/demande-chequier.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAgentComponent,
    children: [
      { path: 'demande_chequier', component: DemandeChequierComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}

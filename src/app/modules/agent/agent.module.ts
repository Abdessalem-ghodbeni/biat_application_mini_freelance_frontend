import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { LayoutAgentComponent } from './layout-agent/layout-agent.component';
import { DemandeChequierComponent } from './views/demande-chequier/demande-chequier.component';


@NgModule({
  declarations: [
    LayoutAgentComponent,
    DemandeChequierComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }

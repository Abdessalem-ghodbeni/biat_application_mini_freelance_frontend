import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { LayoutAgentComponent } from './layout-agent/layout-agent.component';
import { DemandeChequierComponent } from './views/demande-chequier/demande-chequier.component';
import { AllClientComponent } from './views/all-client/all-client.component';
import { AddClientComponent } from './views/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { AddAccountComponent } from './views/add-account/add-account.component';
import { AllAccountComponent } from './views/all-account/all-account.component';
import { AgenceComponent } from './views/agence/agence.component';
@NgModule({
  declarations: [
    LayoutAgentComponent,
    DemandeChequierComponent,
    AllClientComponent,
    AddClientComponent,
    AddAccountComponent,
    AllAccountComponent,
    AgenceComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AgentModule { }

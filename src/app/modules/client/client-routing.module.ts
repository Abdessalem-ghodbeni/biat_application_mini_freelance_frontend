import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ClientProfileComponent } from './views/client-profile/client-profile.component';
import { DemandeChequeComponent } from './views/demande-cheque/demande-cheque.component';
import { ListesDesDemandesComponent } from './views/listes-des-demandes/listes-des-demandes.component';

 
const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    { path: 'Liste_des_Demande', component: ListesDesDemandesComponent },
    { path: 'Demande-cheque', component: DemandeChequeComponent },

] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

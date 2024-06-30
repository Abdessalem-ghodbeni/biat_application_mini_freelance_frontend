import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from 'src/app/core/services/Client/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.css']
})
export class AllClientComponent implements OnInit {
  listClients: any[] = [];
  public noData!: TemplateRef<NgIfContext<boolean>>;

  constructor(private clientS : ClientService){}

  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients() {
    this.clientS.getClient().subscribe({
      next: (data: any) => {
        this.listClients = data;
      },
      error: () => {
       console.log(Error);
      },
    });
  }
  deleteAgent(id: number) {
    Swal.fire({
      title: 'Supprimer l\'université ?',
      text: "Êtes-vous sûr de vouloir supprimer cette université ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientS.deleteClient(id).subscribe((res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'L\'agent a été supprimée avec succès',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          this.ngOnInit();  
        }, (error) => {
          Swal.fire({
            icon: 'success',
            title: 'L\'agent a été supprimée avec succès',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/core/services/Comptes/compte.service';

@Component({
  selector: 'app-all-account',
  templateUrl: './all-account.component.html',
  styleUrls: ['./all-account.component.css']
})
export class AllAccountComponent implements OnInit{
  ListofAccount : any[] = []; 
  constructor(
    private compteS : CompteService
  ){

  }
  ngOnInit(): void {
    this.getComptes();
  }
  getComptes() {
    this.compteS.getAllAcount().subscribe(
      (data) => {
        this.ListofAccount = data;
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }
}

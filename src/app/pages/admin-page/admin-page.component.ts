import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [TurnosService]
})
export class AdminPageComponent implements OnInit {
  clients: Turno[] = [new Turno("","","","","",0)];
  date!: string;
  save: boolean = false;
  constructor(private _turnosService: TurnosService) { }

  ngOnInit(): void {
    console.log(this._turnosService.pruebas());
    this._turnosService.getTurnos().subscribe({
      next: (response) => {
        console.log(response);
        this.clients = response.turnos.reverse();
      },
      error: error => {
        console.log(`ha ocurrido un error ${error}`);
      }
    });
    
  }

  addClient(){
    this.clients.unshift(new Turno("","","","","",0));
  }

  refresh(){
    location.reload();
  }

  startList(){
    this._turnosService.delete().subscribe({
      next: (response) => {
        console.log("nueva lista iniciada");
        location.reload();
      },
      error: error => {
        console.log(`ha ocurrido un error ${error}`);
      }
    })
  }

  saveDate(){
    
    this.save = !this.save;
  }


}

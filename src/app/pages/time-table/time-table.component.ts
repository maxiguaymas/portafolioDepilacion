import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  turnos: Turno[] = [];
  date: string = "Proximamente";
  column_1 : Turno[] = [];
  column_2 : Turno[] = [];
  column_3 : Turno[] = [];
  column_4 : Turno[] = [];
  
  constructor(private _turnosService:TurnosService) { }

  ngOnInit(): void {

    this._turnosService.getTurnos().subscribe({
      next: (response) => {
        console.log(response);
        if(response.turnos.length > 0){
          this.turnos = response.turnos.slice();
        }
        else{
          this.turnos.push(new Turno("-","-","-","-","-",0));
        }
        
        console.log(this.turnos);

        this.setDate(this.turnos[0].fecha);
        this.table(this.turnos);
      },
      error: error => {
        console.log(`ha ocurrido un error ${error}`);
      }
    });
    
  }
  setDate(date: string){
    if(date !== "-") {
      this.date = date;
    }
  }
  table(turnos: Turno[]){
    let i = turnos.length-1;
    
    for (let index = i; index < 28; index++) {
      turnos.push(new Turno("-","-","-","-","-",0));
    }
    console.log(turnos);
    for (let index = 0; index < turnos.length; index++) {
      if(index <=6)
      { 
        this.column_1.push(turnos[index])
      }
      if(index >= 7 && index <14){
        this.column_2.push(turnos[index]);
      } 
      if(index >=14 && index <21) {
        this.column_3.push(turnos[index]);
      }
      if(index >=21 && index <28) {
        this.column_4.push(turnos[index]);
      }
    }
  }

  getClassOf(turno:Turno) {
    if (turno.nombre_completo == '-' && turno.hora != "-") {
      return 'green';
    } else if (turno.nombre_completo != '-' && turno.hora != "-") {
      return 'red';
    } else {
      return 'normal'
    }
  }

}

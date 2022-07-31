import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-card-hour',
  templateUrl: './card-hour.component.html',
  styleUrls: ['./card-hour.component.css'],
  providers: [TurnosService]
})
export class CardHourComponent implements OnInit {
  @Input() cliente!: Turno;
  @Output() refresh = new EventEmitter<string>()
  turnoForm! : FormGroup;
  turno: Turno = new Turno("","","","","",0);
  save: boolean = true;
  constructor(private formBuilder: FormBuilder, private _turnosService: TurnosService) { 
    this.turnoForm = this.formBuilder.group({
      hora: ['',Validators.required],
      nombre_completo: ['',Validators.required],
      zonas: ['',Validators.required],
      fecha: ['',Validators.required],
      precio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // console.log(this.cliente);
    if(this.cliente.hora != ""){
      this.save= false;
    }
  }

  

  get hora(){
    return this.turnoForm.get('hora');
  }
  get nombre_completo(){
    return this.turnoForm.get('nombre_completo');
  }
  get zonas(){
    return this.turnoForm.get('zonas');
  }
  get fecha(){
    return this.turnoForm.get('zonas');
  }

  get precio(){
    return this.turnoForm.get('precio');
  }
  
  submitTurno(){
    
      if(this.turnoForm.valid){
        if(this.save){
          console.log("Creando turno");
          console.log(this.turnoForm.value);
          this.turno = this.turnoForm.value;
          
          this._turnosService.saveTurno(this.turno).subscribe({
            next: (response) => {
              // this.turno = response.turnoStored;
              console.log(response);
              
            },
            error: (error) => {
              console.log(`ha ocurrido un error ${error}`);
            }
          })
          this.turnoForm.reset();
          this.refresh.emit("refresh");
        }
        else{
          console.log(this.turnoForm.value);
          this.turno = this.turnoForm.value;
          console.log("editando turno");
          this._turnosService.updateTurno(this.cliente._id,this.turno).subscribe({
            next: (response) => {
              
              console.log(response);
              
            },
            error: (error) => {
              console.log(`ha ocurrido un error ${error}`);
            }
          });
          
          this.turnoForm.reset();
          this.refresh.emit("refresh");
        }
      }
    
    
  }
}

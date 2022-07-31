import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../models/turno';
import { Global } from './global';


@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  public url = Global.url;
  constructor(private _http: HttpClient) { }

  pruebas(){
    return "soy el servicio de turnos"
  }

  getTurnos():Observable<any>{
    return this._http.get(this.url+"get-turnos");
  }

  getTurno(turno_id:string): Observable<any> {
    return this._http.get(this.url+"get-turno");
  }

  saveTurno(turno: Turno) : Observable<any> {
    let params = JSON.stringify(turno);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+ 'save-turno', params, {headers: headers});
  }

  updateTurno(id:string,turno:Turno): Observable <any> {
    let params = JSON.stringify(turno);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.url+ 'update-turno/'+id, params, {headers: headers});
  }

  delete(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+ 'delete-turnos',{headers:headers});
  }

  
  
}

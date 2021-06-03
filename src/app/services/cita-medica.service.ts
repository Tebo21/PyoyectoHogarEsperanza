import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaMedicaService {

  url = 'http://localhost:8080/citasMedicas';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: ban-types
  createCitas( centro: Object): Observable<Object>{
    return this.httpClient.post(`${this.url}/guardar`, centro);
  }


  listCitas(): Observable<any>{
    return this.httpClient.get(`${this.url}/listadoCitasMedicas`);
  }


  deletCentro( id: number): Observable<any>{
    return this.httpClient.delete(`${this.url} +'/eliminar'/${id}`, { responseType: 'text' });
  }
}
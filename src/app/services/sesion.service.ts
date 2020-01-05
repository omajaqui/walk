import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  dataSesion: any[] = [];
  constructor() { }

  sesion(parametros) {
    this.dataSesion.push({
      username: parametros.userName,
    });
  }
}

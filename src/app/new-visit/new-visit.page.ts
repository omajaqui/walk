import { Component, OnInit } from '@angular/core';

// service
import {SesionService} from '../services/sesion.service';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.page.html',
  styleUrls: ['./new-visit.page.scss'],
})
export class NewVisitPage implements OnInit {
  dataS: any[] = [];
  username: string;
  constructor(
    public sesionservice: SesionService,
  ) {
    // tslint:disable-next-line:semicolon
    this.dataS = this.sesionservice.dataSesion;
    // tslint:disable-next-line:no-string-literal
    this.username =  this.dataS[0]['username'];
   }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    console.log('username logeado ' + this.dataS[0]['username']);
    console.log(this.dataS);
  }

}

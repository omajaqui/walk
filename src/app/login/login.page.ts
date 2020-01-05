import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, NavController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// paginas
import {RecoveryPage} from '../recovery/recovery.page';

// service
import {SesionService} from '../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public menuCtrl: MenuController,
    public loadCtrl: LoadingController,
    public navCtrl: NavController,
    public form: FormBuilder,
    public modalCtrl: ModalController,
    public sesionservice: SesionService,
  ) {
    this.loginForm = this.form.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,20}$/)]],
      pass: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{8,20}$/)]],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false, 'menuLeft');
    console.log('loginPage loaded');
  }

  async recoveryPass() {
    const modal = await this.modalCtrl.create({
      component: RecoveryPage
    });
    return await modal.present();
  }

  validLogin() {
    const parametros = {
      userName: this.loginForm.get('userName').value,
    };
    this.sesionservice.sesion(parametros);
    this.showLoader();
  }

   showLoader() {
   /*  const loading = await this.loadCtrl.create({
      message: 'Nada Puede malir Sal',
      duration: 3000,
      spinner: 'lines',
    });
    this.navCtrl.navigateForward('/tabs');
    return await loading.present(); */

    this.loadCtrl.create({
      message: 'Nada Puede malir Sal',
      duration: 3000,
      spinner: 'lines',
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        this.navCtrl.navigateForward('/tabs');
      });
    });
  }

  closeLoader() {
    this.loadCtrl.dismiss({});
  }

}

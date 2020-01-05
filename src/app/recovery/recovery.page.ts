import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss({});
  }

}

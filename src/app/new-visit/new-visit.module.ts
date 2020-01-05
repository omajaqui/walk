import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVisitPageRoutingModule } from './new-visit-routing.module';

import { NewVisitPage } from './new-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewVisitPageRoutingModule
  ],
  declarations: [NewVisitPage]
})
export class NewVisitPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVisitPage } from './new-visit.page';

const routes: Routes = [
  {
    path: '',
    component: NewVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewVisitPageRoutingModule {}

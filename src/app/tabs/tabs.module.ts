import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        { path: 'view-visit', loadChildren:  '../view-visit/view-visit.module#ViewVisitPageModule' },
        { path: 'new-visit', loadChildren: '../new-visit/new-visit.module#NewVisitPageModule' },
        { path: 'agendar', loadChildren: '../agendar/agendar.module#AgendarPageModule' },
        {
          path: '',
          redirectTo: '/tabs/new-visit',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/new-visit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    // TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

import { Component, OnInit, ɵConsole } from '@angular/core';


@Component({
  selector: 'app-view-visit',
  templateUrl: './view-visit.page.html',
  styleUrls: ['./view-visit.page.scss'],
})
export class ViewVisitPage implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
    console.log('loaded view-page');
  }

}

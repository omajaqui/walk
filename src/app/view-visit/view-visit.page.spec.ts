import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVisitPage } from './view-visit.page';

describe('ViewVisitPage', () => {
  let component: ViewVisitPage;
  let fixture: ComponentFixture<ViewVisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

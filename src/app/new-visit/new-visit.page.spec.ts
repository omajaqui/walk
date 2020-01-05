import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewVisitPage } from './new-visit.page';

describe('NewVisitPage', () => {
  let component: NewVisitPage;
  let fixture: ComponentFixture<NewVisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

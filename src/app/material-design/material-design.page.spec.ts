import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignPage } from './material-design.page';

describe('MaterialDesignPage', () => {
  let component: MaterialDesignPage;
  let fixture: ComponentFixture<MaterialDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

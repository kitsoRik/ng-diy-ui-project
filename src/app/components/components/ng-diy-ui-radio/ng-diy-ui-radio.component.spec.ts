import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiyUiRadioComponent } from './ng-diy-ui-radio.component';

describe('NgDiyUiRadioComponent', () => {
  let component: NgDiyUiRadioComponent;
  let fixture: ComponentFixture<NgDiyUiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDiyUiRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiyUiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

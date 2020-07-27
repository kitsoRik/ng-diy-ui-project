import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiyUiRadioGroupComponent } from './ng-diy-ui-radio-group.component';

describe('NgDiyUiRadioGroupComponent', () => {
  let component: NgDiyUiRadioGroupComponent;
  let fixture: ComponentFixture<NgDiyUiRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDiyUiRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiyUiRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

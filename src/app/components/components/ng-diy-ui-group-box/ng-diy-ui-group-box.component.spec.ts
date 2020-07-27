import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiyUiGroupBoxComponent } from './ng-diy-ui-group-box.component';

describe('NgDiyUiGroupBoxComponent', () => {
  let component: NgDiyUiGroupBoxComponent;
  let fixture: ComponentFixture<NgDiyUiGroupBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDiyUiGroupBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiyUiGroupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

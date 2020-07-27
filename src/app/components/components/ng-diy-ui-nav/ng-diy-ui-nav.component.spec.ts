import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiyUiNavComponent } from './ng-diy-ui-nav.component';

describe('NgDiyUiNavComponent', () => {
  let component: NgDiyUiNavComponent;
  let fixture: ComponentFixture<NgDiyUiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDiyUiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiyUiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

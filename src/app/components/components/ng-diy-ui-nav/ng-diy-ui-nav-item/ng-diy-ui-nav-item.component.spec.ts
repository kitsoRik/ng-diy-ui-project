import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiyUiNavItemComponent } from './ng-diy-ui-nav-item.component';

describe('NgDiyUiNavItemComponent', () => {
  let component: NgDiyUiNavItemComponent;
  let fixture: ComponentFixture<NgDiyUiNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDiyUiNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiyUiNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

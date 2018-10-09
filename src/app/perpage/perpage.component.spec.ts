import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpageComponent } from './perpage.component';

describe('PerpageComponent', () => {
  let component: PerpageComponent;
  let fixture: ComponentFixture<PerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

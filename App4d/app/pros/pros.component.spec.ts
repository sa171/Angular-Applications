import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROsComponent } from './pros.component';

describe('PROsComponent', () => {
  let component: PROsComponent;
  let fixture: ComponentFixture<PROsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

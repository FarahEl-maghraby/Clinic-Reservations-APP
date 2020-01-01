import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicRequestsComponent } from './clinic-requests.component';

describe('ClinicRequestsComponent', () => {
  let component: ClinicRequestsComponent;
  let fixture: ComponentFixture<ClinicRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

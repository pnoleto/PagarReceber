import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentosComponent } from './agrupamentos.component';

describe('AgrupamentosComponent', () => {
  let component: AgrupamentosComponent;
  let fixture: ComponentFixture<AgrupamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

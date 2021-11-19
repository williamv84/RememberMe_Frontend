import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBitacoraComponent } from './lista-bitacora.component';

describe('ListaBitacoraComponent', () => {
  let component: ListaBitacoraComponent;
  let fixture: ComponentFixture<ListaBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

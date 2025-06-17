import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarTugasComponent } from './daftar-tugas.component';

describe('DaftarTugasComponent', () => {
  let component: DaftarTugasComponent;
  let fixture: ComponentFixture<DaftarTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DaftarTugasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

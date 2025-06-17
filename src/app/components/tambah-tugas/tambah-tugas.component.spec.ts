import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahTugasComponent } from './tambah-tugas.component';

describe('TambahTugasComponent', () => {
  let component: TambahTugasComponent;
  let fixture: ComponentFixture<TambahTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TambahTugasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

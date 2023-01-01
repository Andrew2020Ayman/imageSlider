import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderAyatComponent } from './re-order-ayat.component';

describe('ReOrderAyatComponent', () => {
  let component: ReOrderAyatComponent;
  let fixture: ComponentFixture<ReOrderAyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReOrderAyatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReOrderAyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

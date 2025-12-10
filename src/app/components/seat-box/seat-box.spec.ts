import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBox } from './seat-box';

describe('SeatBox', () => {
  let component: SeatBox;
  let fixture: ComponentFixture<SeatBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

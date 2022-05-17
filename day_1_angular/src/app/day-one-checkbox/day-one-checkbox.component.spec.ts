import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOneCheckboxComponent } from './day-one-checkbox.component';

describe('DayOneCheckboxComponent', () => {
  let component: DayOneCheckboxComponent;
  let fixture: ComponentFixture<DayOneCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayOneCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOneCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentfour } from './componentfour';

describe('Componentfour', () => {
  let component: Componentfour;
  let fixture: ComponentFixture<Componentfour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentfour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentfour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

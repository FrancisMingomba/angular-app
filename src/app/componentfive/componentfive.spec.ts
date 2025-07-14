import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentfive } from './componentfive';

describe('Componentfive', () => {
  let component: Componentfive;
  let fixture: ComponentFixture<Componentfive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentfive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentfive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

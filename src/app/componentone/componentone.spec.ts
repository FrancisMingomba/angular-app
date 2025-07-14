import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentone } from './componentone';

describe('Componentone', () => {
  let component: Componentone;
  let fixture: ComponentFixture<Componentone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

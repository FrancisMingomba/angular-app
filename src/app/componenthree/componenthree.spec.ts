import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenthree } from './componenthree';

describe('Componenthree', () => {
  let component: Componenthree;
  let fixture: ComponentFixture<Componenthree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenthree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componenthree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

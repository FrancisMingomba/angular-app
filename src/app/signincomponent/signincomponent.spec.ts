import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signincomponent } from './signincomponent';

describe('Signincomponent', () => {
  let component: Signincomponent;
  let fixture: ComponentFixture<Signincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signincomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

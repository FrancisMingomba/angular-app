import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usernamepasswordreset } from './usernamepasswordreset';

describe('Usernamepasswordreset', () => {
  let component: Usernamepasswordreset;
  let fixture: ComponentFixture<Usernamepasswordreset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usernamepasswordreset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usernamepasswordreset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

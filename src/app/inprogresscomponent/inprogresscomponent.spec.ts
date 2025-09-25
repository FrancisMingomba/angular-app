import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inprogresscomponent } from './inprogresscomponent';

describe('Inprogresscomponent', () => {
  let component: Inprogresscomponent;
  let fixture: ComponentFixture<Inprogresscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inprogresscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inprogresscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

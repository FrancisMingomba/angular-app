import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innercontainer } from './innercontainer';

describe('Innercontainer', () => {
  let component: Innercontainer;
  let fixture: ComponentFixture<Innercontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innercontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Innercontainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

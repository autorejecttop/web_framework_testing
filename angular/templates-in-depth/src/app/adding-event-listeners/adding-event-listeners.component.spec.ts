import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEventListenersComponent } from './adding-event-listeners.component';

describe('AddingEventListenersComponent', () => {
  let component: AddingEventListenersComponent;
  let fixture: ComponentFixture<AddingEventListenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddingEventListenersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingEventListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

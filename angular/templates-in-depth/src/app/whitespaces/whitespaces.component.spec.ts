import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitespacesComponent } from './whitespaces.component';

describe('WhitespacesComponent', () => {
  let component: WhitespacesComponent;
  let fixture: ComponentFixture<WhitespacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitespacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitespacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

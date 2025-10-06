import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMessage } from './custom-message';

describe('CustomMessage', () => {
  let component: CustomMessage;
  let fixture: ComponentFixture<CustomMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

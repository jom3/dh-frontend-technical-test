import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomItemButton } from './custom-item-button';

describe('CustomItemButton', () => {
  let component: CustomItemButton;
  let fixture: ComponentFixture<CustomItemButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomItemButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomItemButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

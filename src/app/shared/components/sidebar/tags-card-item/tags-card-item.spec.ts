import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCardItem } from './tags-card-item';

describe('TagsCardItem', () => {
  let component: TagsCardItem;
  let fixture: ComponentFixture<TagsCardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsCardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsCardItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

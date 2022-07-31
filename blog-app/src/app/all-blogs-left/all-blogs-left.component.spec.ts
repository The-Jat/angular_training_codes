import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogsLeftComponent } from './all-blogs-left.component';

describe('AllBlogsLeftComponent', () => {
  let component: AllBlogsLeftComponent;
  let fixture: ComponentFixture<AllBlogsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBlogsLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBlogsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcardsComponent } from './topcards.component';

describe('TopcardsComponent', () => {
  let component: TopcardsComponent;
  let fixture: ComponentFixture<TopcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopcardsComponent]
    });
    fixture = TestBed.createComponent(TopcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

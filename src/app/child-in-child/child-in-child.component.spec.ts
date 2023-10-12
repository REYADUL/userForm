import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInChildComponent } from './child-in-child.component';

describe('ChildInChildComponent', () => {
  let component: ChildInChildComponent;
  let fixture: ComponentFixture<ChildInChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildInChildComponent]
    });
    fixture = TestBed.createComponent(ChildInChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

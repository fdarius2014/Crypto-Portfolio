import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedCoinsComponent } from './collected-coins.component';

describe('CollectedCoinsComponent', () => {
  let component: CollectedCoinsComponent;
  let fixture: ComponentFixture<CollectedCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

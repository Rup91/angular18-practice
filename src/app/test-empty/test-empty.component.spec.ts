import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmptyComponent } from './test-empty.component';

describe('TestEmptyComponent', () => {
  let component: TestEmptyComponent;
  let fixture: ComponentFixture<TestEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestEmptyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

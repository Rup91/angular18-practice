import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIfComponent } from './test-if.component';

describe('TestIfComponent', () => {
  let component: TestIfComponent;
  let fixture: ComponentFixture<TestIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

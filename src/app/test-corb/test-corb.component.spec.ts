import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCorbComponent } from './test-corb.component';

describe('TestCorbComponent', () => {
  let component: TestCorbComponent;
  let fixture: ComponentFixture<TestCorbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCorbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

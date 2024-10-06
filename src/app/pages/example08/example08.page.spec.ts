import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example08Page } from './example08.page';

describe('Example08Page', () => {
  let component: Example08Page;
  let fixture: ComponentFixture<Example08Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Example08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

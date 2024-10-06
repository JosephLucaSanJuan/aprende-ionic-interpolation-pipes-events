import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example05Page } from './example05.page';

describe('Example05Page', () => {
  let component: Example05Page;
  let fixture: ComponentFixture<Example05Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Example05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

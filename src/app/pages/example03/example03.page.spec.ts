import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example03Page } from './example03.page';

describe('Example03Page', () => {
  let component: Example03Page;
  let fixture: ComponentFixture<Example03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Example03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Example07Page } from './example07.page';

describe('Example07Page', () => {
  let component: Example07Page;
  let fixture: ComponentFixture<Example07Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Example07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

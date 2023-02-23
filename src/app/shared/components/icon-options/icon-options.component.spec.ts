import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOptionsComponent } from './icon-options.component';

describe('IconOptionsComponent', () => {
  let component: IconOptionsComponent;
  let fixture: ComponentFixture<IconOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

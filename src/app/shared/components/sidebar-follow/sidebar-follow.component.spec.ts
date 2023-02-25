import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFollowComponent } from './sidebar-follow.component';

describe('SidebarFollowComponent', () => {
  let component: SidebarFollowComponent;
  let fixture: ComponentFixture<SidebarFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

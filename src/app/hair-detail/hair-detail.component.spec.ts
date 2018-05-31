import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDetailComponent } from './hair-detail.component';

describe('HairDetailComponent', () => {
  let component: HairDetailComponent;
  let fixture: ComponentFixture<HairDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

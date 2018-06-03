import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairFormComponent } from './hair-form.component';

describe('HairFormComponent', () => {
  let component: HairFormComponent;
  let fixture: ComponentFixture<HairFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

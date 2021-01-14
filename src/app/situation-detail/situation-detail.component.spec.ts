import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SituationDetailComponent} from './situation-detail.component';

describe('SituationDetailComponent', () => {
  let component: SituationDetailComponent;
  let fixture: ComponentFixture<SituationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SituationDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

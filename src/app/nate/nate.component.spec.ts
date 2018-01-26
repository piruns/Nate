import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NateComponent } from './nate.component';

describe('NateComponent', () => {
  let component: NateComponent;
  let fixture: ComponentFixture<NateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

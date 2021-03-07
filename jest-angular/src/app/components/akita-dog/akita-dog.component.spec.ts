import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaDogComponent } from './akita-dog.component';

describe('AkitaDogComponent', () => {
  let component: AkitaDogComponent;
  let fixture: ComponentFixture<AkitaDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkitaDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkitaDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

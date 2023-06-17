import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedisplayComponent } from './namedisplay.component';

describe('NamedisplayComponent', () => {
  let component: NamedisplayComponent;
  let fixture: ComponentFixture<NamedisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamedisplayComponent]
    });
    fixture = TestBed.createComponent(NamedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

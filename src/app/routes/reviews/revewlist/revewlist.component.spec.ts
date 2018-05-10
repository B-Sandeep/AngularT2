import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevewlistComponent } from './revewlist.component';

describe('RevewlistComponent', () => {
  let component: RevewlistComponent;
  let fixture: ComponentFixture<RevewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

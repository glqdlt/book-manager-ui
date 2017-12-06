import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBookComponent } from './write-book.component';

describe('WriteBookComponent', () => {
  let component: WriteBookComponent;
  let fixture: ComponentFixture<WriteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

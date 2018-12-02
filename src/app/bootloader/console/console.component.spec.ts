import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolefComponent } from './console.component';

describe('ConsolefComponent', () => {
  let component: ConsolefComponent;
  let fixture: ComponentFixture<ConsolefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

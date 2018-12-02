import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootloaderComponent } from './bootloader.component';

describe('BootloaderComponent', () => {
  let component: BootloaderComponent;
  let fixture: ComponentFixture<BootloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

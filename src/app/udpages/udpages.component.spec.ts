import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpagesComponent } from './udpages.component';

describe('UdpagesComponent', () => {
  let component: UdpagesComponent;
  let fixture: ComponentFixture<UdpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

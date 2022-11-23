import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcompanyComponent } from './viewallcompany.component';

describe('ViewallcompanyComponent', () => {
  let component: ViewallcompanyComponent;
  let fixture: ComponentFixture<ViewallcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

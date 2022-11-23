import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTestingComponent } from './material-testing.component';

describe('MaterialTestingComponent', () => {
  let component: MaterialTestingComponent;
  let fixture: ComponentFixture<MaterialTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

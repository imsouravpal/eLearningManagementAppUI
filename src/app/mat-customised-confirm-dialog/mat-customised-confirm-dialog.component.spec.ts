import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCustomisedConfirmDialogComponent } from './mat-customised-confirm-dialog.component';

describe('MatCustomisedConfirmDialogComponent', () => {
  let component: MatCustomisedConfirmDialogComponent;
  let fixture: ComponentFixture<MatCustomisedConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCustomisedConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCustomisedConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

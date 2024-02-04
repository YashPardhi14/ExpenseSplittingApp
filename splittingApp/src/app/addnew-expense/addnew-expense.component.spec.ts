import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewExpenseComponent } from './addnew-expense.component';

describe('AddnewExpenseComponent', () => {
  let component: AddnewExpenseComponent;
  let fixture: ComponentFixture<AddnewExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

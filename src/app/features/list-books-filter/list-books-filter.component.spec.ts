import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksFilterComponent } from './list-books-filter.component';

describe('ListBooksFilterComponent', () => {
  let component: ListBooksFilterComponent;
  let fixture: ComponentFixture<ListBooksFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBooksFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBooksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

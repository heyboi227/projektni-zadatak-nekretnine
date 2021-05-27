import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEstatesComponent } from './search-estates.component';

describe('SearchEstatesComponent', () => {
  let component: SearchEstatesComponent;
  let fixture: ComponentFixture<SearchEstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEstatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

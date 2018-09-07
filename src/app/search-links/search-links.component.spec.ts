import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLinksComponent } from './search-links.component';

describe('SearchLinksComponent', () => {
  let component: SearchLinksComponent;
  let fixture: ComponentFixture<SearchLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

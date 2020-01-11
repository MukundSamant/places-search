import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTextfieldComponent } from './search-textfield.component';

describe('SearchTextfieldComponent', () => {
  let component: SearchTextfieldComponent;
  let fixture: ComponentFixture<SearchTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SearchTextfieldComponent should emit values entered by the user', (done) => {
    spyOn(component.valueChange, 'emit');

    const input = fixture.nativeElement.querySelector(`input`);
    input.value = 'fake-search-query';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // Delaying assertion because we are debouncing the output emissions.
    setTimeout(() => {
      expect(component.valueChange.emit).toHaveBeenCalledWith(input.value);
      done();
    }, 200);
  });
});

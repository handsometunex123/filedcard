import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLoaderComponent } from './quick-loader.component';

describe('QuickLoaderComponent', () => {
  let component: QuickLoaderComponent;
  let fixture: ComponentFixture<QuickLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

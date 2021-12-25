/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectioncardComponent } from './sectioncard.component';

describe('SectioncardComponent', () => {
  let component: SectioncardComponent;
  let fixture: ComponentFixture<SectioncardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioncardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

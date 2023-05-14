import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTextComponent } from './template-text.component';

describe('TemplateTextComponent', () => {
  let component: TemplateTextComponent;
  let fixture: ComponentFixture<TemplateTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

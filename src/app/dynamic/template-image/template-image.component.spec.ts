import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateImageComponent } from './template-image.component';

describe('TemplateImageComponent', () => {
  let component: TemplateImageComponent;
  let fixture: ComponentFixture<TemplateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

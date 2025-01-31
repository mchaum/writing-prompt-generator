import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptDisplayComponent } from './prompt-display.component';

describe('PromptDisplayComponent', () => {
  let component: PromptDisplayComponent;
  let fixture: ComponentFixture<PromptDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

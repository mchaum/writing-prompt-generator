import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prompt-display',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './prompt-display.component.html',
  styleUrls: ['./prompt-display.component.scss']
})
export class PromptDisplayComponent {
  @Input() prompt: any = {};
}


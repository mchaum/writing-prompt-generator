import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PromptService } from 'src/app/services/PromptService';

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
  constructor(private promptService: PromptService) {}

  resetAll() {
    this.promptService.resetPrompt();
  }
  
}
import { Component, EventEmitter, Output } from '@angular/core';
import { PromptService } from 'src/app/services/PromptService';

@Component({
  selector: 'app-button-group',
  standalone: true,
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent {
  constructor(private promptService: PromptService) {}

  generateWho() {
    this.promptService.generateWho();
  }

  generateWhere() {
    this.promptService.generateWhere();
  }

  generateGenre() {
    this.promptService.generateGenre();
  }

  generateTrope() {
    this.promptService.generateTrope();
  }

  generateEvent() {
    this.promptService.generateEvent();
  }
}
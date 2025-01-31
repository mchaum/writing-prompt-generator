import { Component, OnInit } from '@angular/core';
import { ButtonGroupComponent } from 'src/app/components/button-group/button-group.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PromptDisplayComponent } from 'src/app/components/prompt-display/prompt-display.component';
import { PromptService } from 'src/app/services/PromptService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonGroupComponent,
    PromptDisplayComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  prompt: any = {
    who: '',
    where: '',
    when: '',
    trope: '',
    event: ''
  };

  constructor(private promptService: PromptService) {
    this.promptService.prompt$.subscribe(updatedPrompt => {
      console.log('Updated prompt in HomeComponent:', updatedPrompt);
      this.prompt = updatedPrompt;
    });
  }
}

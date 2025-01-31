import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private prompt = {
    who: '',
    where: '',
    when: '',
    trope: '',
    event: ''
  };

  private promptSubject = new BehaviorSubject(this.prompt);
  prompt$ = this.promptSubject.asObservable();

  generateWho() {
    this.prompt.who = 'a mysterious traveler';  // Exemple
    this.updatePrompt();
  }

  generateWhere() {
    this.prompt.where = 'on a distant planet';  // Exemple
    this.updatePrompt();
  }

  generateWhen() {
    this.prompt.when = 'in the year 2045';  // Exemple
    this.updatePrompt();
  }

  generateTrope() {
    this.prompt.trope = 'enemies to lovers';  // Exemple
    this.updatePrompt();
  }

  generateEvent() {
    this.prompt.event = 'a mysterious disappearance';  // Exemple
    this.updatePrompt();
  }

  private updatePrompt() {
    console.log('Updated prompt:', this.prompt);
    this.promptSubject.next(this.prompt);
  }
}


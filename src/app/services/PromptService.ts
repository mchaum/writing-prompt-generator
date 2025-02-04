import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private prompt = {
    who: '',
    where: '',
    genre: '',
    trope: '',
    event: ''
  };

  private promptSubject = new BehaviorSubject(this.prompt);
  prompt$ = this.promptSubject.asObservable();

  private nounAdjectivesUrl = '../../assets/data/nounAdjectives.json';
  private whoDataUrl = '../../assets/data/who.json';
  private placesUrl = '../../assets/data/places.json'; 
  private adjectivesUrl = '../../assets/data/adjectives.json';
  private eventsUrl = '../../assets/data/events.json'; 
  private genresUrl = '../../assets/data/genres.json';
  private tropesUrl = '../../assets/data/tropes.json';

  constructor(private http: HttpClient) {}

  generateWho() {
    this.http.get<any>(this.whoDataUrl).subscribe(data => {
      const randomNoun = data.nouns[Math.floor(Math.random() * data.nouns.length)];
  
      this.http.get<any>(this.nounAdjectivesUrl).subscribe(nounAdjectivesData => {
        const randomAdjective = nounAdjectivesData.nounAdjectives[Math.floor(Math.random() * nounAdjectivesData.nounAdjectives.length)];
  
        if (!randomAdjective) {
          console.error("Adjective is undefined or empty");
          return;
        }
  
        // "a" ou "an" en fonction de la première lettre de l'adjectif
        const article = ['a', 'e', 'i', 'o', 'u'].includes(randomAdjective.charAt(0).toLowerCase()) ? 'an' : 'a';
  
        const who = `${article} ${randomAdjective} ${randomNoun}`;
          
        this.prompt.who = who;
        this.updatePrompt();
      });
    });
  }
  

  generateWhere() {
    this.http.get<any>(this.placesUrl).subscribe(placesData => {
      const randomPlace = placesData.places[Math.floor(Math.random() * placesData.places.length)];

      this.http.get<any>(this.adjectivesUrl).subscribe(adjectivesData => {
        const randomAdjective = adjectivesData.adjectives[Math.floor(Math.random() * adjectivesData.adjectives.length)];

        const article = /[aeiou]/i.test(randomAdjective.charAt(0)) ? 'an' : 'a';

        const preposition = ['beach', 'island', 'ship', 'lake', 'bridge', 'dock', 'train station'].includes(randomPlace) ? 'on' : 'in';

        const placeDescription = `${preposition} ${article} ${randomAdjective} ${randomPlace}`;
      
        this.prompt.where = placeDescription;
        this.updatePrompt();
      });
    });
  }

  generateGenre() {
    this.http.get<any>(this.genresUrl).subscribe(genreData => {
      const genres = genreData.genres;
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  
      this.prompt.genre = randomGenre;
      this.updatePrompt();
    });
  }
  

  generateTrope() {
    this.http.get<any>(this.tropesUrl).subscribe(tropeData => {
      const tropes = tropeData.tropes;
      const randomTrope = tropes[Math.floor(Math.random() * tropes.length)];
  
      // Mise à jour du prompt
      this.prompt.trope = randomTrope;
      this.updatePrompt();
    });
  }
  

  generateEvent() {
    this.http.get<any>(this.eventsUrl).subscribe(eventsData => {
      const eventRequest = eventsData.events;

      const event = eventRequest[Math.floor(Math.random() * eventRequest.length)];

      this.prompt.event = `${event}`;
      this.updatePrompt();
    });
  }
  
  resetPrompt() {
    this.prompt = {
      who: '',
      where: '',
      genre: '',
      trope: '',
      event: ''
    };
    this.updatePrompt();
  }  

  private updatePrompt() {
    console.log('Updated prompt:', this.prompt);
    this.promptSubject.next(this.prompt);
  }
}


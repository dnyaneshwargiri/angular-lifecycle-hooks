import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-heroes-list',
  template: `
    <hero *ngFor="let h of heroes" [hero]="h">
      <span class="name">{{ h.name }}</span>
      <h1 class="superPower">{{ h.superPower }}</h1>
    </hero>
    <button type="button" class="success" (click)="addhero()">
      Add heroes
    </button>
    <button type="button" class="danger" (click)="deletehero()">
      Clear heroes
    </button>
  `,
  styles: [
    '.success { background-color: #30e930;border:none;margin:5px; }',
    '.danger { background-color: #f38484;border:none;margin:5px; }',
  ],
})
export class HeroesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  heroes: Hero[] = [];
  allHeroes: Hero[] = [
    { id: 123, name: 'Windstorm', superPower: 'I can fly', hide: true },
    { id: 124, name: 'SpiderMonkey', superPower: 'I can jump high', hide: true },
    { id: 125, name: 'CanonBall', superPower: 'I can roll fast', hide: true },
    { id: 126, name: 'Magneta', superPower: 'I can lift metals', hide: true },
  ];
  addhero() {
    this.heroes.unshift(
      this.allHeroes[Math.floor(Math.random() * this.allHeroes.length)]
    );
  }

  deletehero() {
    this.heroes = [];
  }
}

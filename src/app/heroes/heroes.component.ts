import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  @Input('hero')
  data!: Hero;
  constructor() {
    console.log(`constructor invoked data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      console.log(`${key} changed. 
      Current: ${JSON.stringify(changes[key].currentValue)}. 
      }`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${JSON.stringify(this.data)}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  toggle(data: Hero) {
    data.hide = !data.hide;
  }
}

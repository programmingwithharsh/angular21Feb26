import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
})
export class Star implements OnInit, OnChanges {
  @Input() rating = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // custom event

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log("Current rating: ", this.rating);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log("Rating inside ngOnInit", this.rating);
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); // Emits an events
  }
}

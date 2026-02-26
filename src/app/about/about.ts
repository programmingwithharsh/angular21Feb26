import { Component, computed, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit, OnChanges, OnDestroy {
  count = signal(0); // intial value is 0
  firstname = signal('Prudhvi');
  lastname = signal('Pachipulusu');

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  /*
    When either firsName or lastName changes -> fullName auto recalculates
  */
  // computed signal
  fullName = computed(() => {
    return this.firstname() + ' ' + this.lastname()
  })

  changeFirst() {
    this.firstname.set('Programming with');
  }

  changeLast() {
    this.lastname.set('Harsh');
  }

  increase() {
    this.count.update(c => c + 1);
  }

  totalCount = computed(() => this.count()); // calculate signal -> auto recalculate when count changes

  add(num: number) {
    this.count.update(c => c + num);
  }

  reset() {
    this.count.set(0);
  }

}

import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  count = signal(0); // intial value is 0

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

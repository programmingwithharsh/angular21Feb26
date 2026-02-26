import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit, OnChanges {
  @Input() appHighlightBc: string | undefined; // background color 
  @Input() hightlightTextColor: string | undefined; // text color 
  @Input() hightlightBorder: string | undefined; // border style

  constructor(private e1: ElementRef) { }

  ngOnInit(): void {
    if (!this.appHighlightBc) {
      this.e1.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlightBc) {
      this.e1.nativeElement.style.backgroundColor = this.appHighlightBc;
    }
    if (this.hightlightTextColor) {
      this.e1.nativeElement.style.color = this.hightlightTextColor;
    }
    if (this.hightlightBorder) {
      this.e1.nativeElement.style.border = this.hightlightBorder;
    }
  }
}

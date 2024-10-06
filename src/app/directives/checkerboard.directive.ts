import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckerboard]'
})
export class CheckerboardDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
    el.nativeElement.style.backgroundColor = 'lightgreen';
    const customStyle = el.nativeElement.style;
    const color1 = '#aba';
    const color2 = '#797';
    const size = 50;
    customStyle.backgroundImage = `
      linear-grandient(45deg, ${color1} 25%, transparent 25%, transparent 75%, ${color1} 75%),
      linear-grandient(45deg, ${color1} 25%, ${color2} 25%, ${color2} 75%, ${color1} 75%)`;
    customStyle.backgroundSize = `${size}px ${size}px`;
    customStyle.backgroundPosition = `0 0, ${size/2}px ${size/2}px`;
  }

}

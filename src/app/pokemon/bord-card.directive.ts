import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[kBordCard]'
})
export class BordCardDirective {

  constructor(private el: ElementRef) {
    this.setBordColor('#f5f5f5');
    this.setHeight(180);
}
  
  @HostListener("mouseenter") onMouseEnter()
  {
    this.setBordColor("'009789");

  }
  @HostListener("mouseleave") onMouseleave()
  {
    this.setBordColor("f5f5f5");
  }

  private setBordColor(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
}

private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
}
}

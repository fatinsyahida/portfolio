import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  @Input('appScrollAnimation') direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
    this.renderer.addClass(this.el.nativeElement, `translate-${this.direction}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate-fadeInUp');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.el.nativeElement);
  }
}

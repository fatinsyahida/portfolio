import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  @Input('appScrollAnimation')
  direction: 'left' | 'right' | 'top' | 'bottom' | 'dot' | 'line' = 'bottom';
  @Input() delay = 0; // seconds

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const element = this.el.nativeElement;

    // Initial styles before animation triggers
    if (this.direction === 'line') {
      this.renderer.setStyle(element, 'height', '0');
      this.renderer.setStyle(element, 'opacity', '0');
      this.renderer.setStyle(element, 'overflow', 'hidden');
      this.renderer.setStyle(element, 'transform-origin', 'top');
    } else if (this.direction === 'dot') {
      this.renderer.setStyle(element, 'transform', 'scale(0.8)');
      this.renderer.setStyle(element, 'opacity', '0');
      this.renderer.setStyle(element, 'transition', `all 0.6s ease ${this.delay}s`);
      // ensure dot is slightly closer to the line
      this.renderer.setStyle(element, 'margin-left', '-2px');
    } else {
      this.renderer.addClass(element, 'opacity-0');
      this.renderer.addClass(element, `translate-${this.direction}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (this.direction === 'line') {
              this.renderer.addClass(element, 'animate-growLine');
              this.renderer.setStyle(element, 'opacity', '1');
            } else if (this.direction === 'dot') {
              this.renderer.addClass(element, 'animate-fadeDot');
              this.renderer.setStyle(element, 'opacity', '1');
            } else {
              this.renderer.addClass(element, 'animate-fadeInUp');
              this.renderer.removeClass(element, 'opacity-0');
            }
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' } // triggers earlier
    );


    observer.observe(element);
  }
}

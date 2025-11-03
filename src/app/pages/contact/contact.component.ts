import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  downloadResume() {
    const url = '/assets/Fatin_Syahida_Saharudin_Resume.pdf';
    window.open(url, '_blank');
  }
}

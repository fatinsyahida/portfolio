import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showModal = false;
  selectedProject: any = null;

  skills = ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Tailwind', 'Flutter', 'Laravel', 'Docker'];

  projects = [
    {
      title: 'E-Lelong Platform',
      description: 'A live auction system for vehicle bidding built with Flutter & Laravel.',
      tags: ['Flutter', 'Laravel', 'API Integration'],
      image: 'assets/projects/elelong.jpg',
      link: 'https://example.com/elelong'
    },
    {
      title: 'Refund Portal',
      description: 'A government refund management system using Angular & Tailwind CSS.',
      tags: ['Angular', 'Tailwind', 'REST API'],
      image: 'assets/projects/refund.jpg',
      link: 'https://example.com/refund'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal website to showcase my work and skills.',
      tags: ['Angular', 'Tailwind', 'Responsive Design'],
      image: 'assets/projects/portfolio.jpg',
      link: 'https://example.com/portfolio'
    }
  ];

  experience = {
    title: 'Software Developer - HeiTech Padu Berhad',
    period: 'July 2023 – Present',
    details: 'Building and maintaining enterprise-level web and mobile applications for clients.'
  };

  certifications = [
    'Google Flutter Development Bootcamp',
    'Angular Advanced Workshop',
    'AWS Cloud Practitioner'
  ];

  downloadResume() {
    const url = '/assets/resume.pdf';
    window.open(url, '_blank');
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }

  scrollToContact() {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceComponent } from "../experience/experience.component";
import { CertificationsComponent } from "../certifications/certifications.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent
],
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

@ViewChild('aboutSection', { read: ElementRef }) aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('certificationsSection') certificationsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  scrollToSection(section: string) {
    let element: ElementRef;

    switch (section) {
      case 'about': element = this.aboutSection; break;
      case 'skills': element = this.skillsSection; break;
      case 'projects': element = this.projectsSection; break;
      case 'experience': element = this.experienceSection; break;
      case 'certifications': element = this.certificationsSection; break;
      case 'contact': element = this.contactSection; break;
      default: return;
    }

    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

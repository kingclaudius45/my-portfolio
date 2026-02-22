import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
}

@Component({
  selector: 'app-porfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Distributed Job Processing System',
      description: 'A production-style backend system built with NestJS, designed to handle asynchronous job processing with retries, caching, authentication, and observability.',
      image: 'assets/job.png', 
      link: 'https://job-processing-distributed-system-production.up.railway.app/api',
      techStack: ['NestJS', 'Redis', 'BullMQ', 'PostgreSQL']
    },
    {
      title: 'AI Mental Health Tracker',
      description: 'A full-stack wellness platform featuring personalized AI-driven insights, mood tracking, and mental health recommendations.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop', 
      link: 'https://github.com/Kanishka-Verma', // Replace with live link if available
      techStack: ['Angular', 'Node.js', 'MongoDB', 'AI/ML']
    },
    {
      title: 'FontManagerPro',
      description: 'An advanced enterprise font management interface supporting thousands of font styles with high-efficiency rendering and seamless user interaction.',
      image: 'assets/fontmanager.png',
      link: 'https://www.quark.com/about/blog/enhanced-visual-fonts-palette-and-access-to-google-fonts-with-quarkxpress-2024', // <-- Put your company project link here (your prompt cut off before providing it)
      techStack: ['Angular', 'TypeScript', 'C++', 'Win32 API']
    }
  ];
}
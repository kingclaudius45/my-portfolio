import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  // Receives the project object from portfolio.component.html
  @Input() project!: {
    title: string;
    description: string;
    image: string;
    link: string;
    techStack: string[];
  };
}
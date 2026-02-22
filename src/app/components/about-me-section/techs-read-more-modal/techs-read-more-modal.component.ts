import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-techs-read-more-modal',
  templateUrl: './techs-read-more-modal.component.html',
  styleUrls: ['./techs-read-more-modal.component.css'],
  standalone: true
})
export class TechsReadMoreModalComponent {
  // Use 'public' so it's accessible in the HTML template
  public activeModal = inject(NgbActiveModal);
}
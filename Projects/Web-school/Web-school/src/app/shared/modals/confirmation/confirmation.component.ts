import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'web-confirmation-modal',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() closeTitle: string;
  @Input() closeAction: string;
  @Input() saveTitle: string;
  @Input() saveAction: string;
  @Input() modalMessage: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  close(action: string): void {
    this.activeModal.close(action);
  }
}

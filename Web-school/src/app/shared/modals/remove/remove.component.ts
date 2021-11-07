import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'web-remove-modal',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
})
export class RemoveComponent implements OnInit {
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

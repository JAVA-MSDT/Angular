import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationModalComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'web-generic-confirmation-modal',
  templateUrl: './generic-confirmation-modal.component.html',
  styleUrls: ['./generic-confirmation-modal.component.scss']
})
export class GenericConfirmationModalComponent implements OnInit {
  
  confirmationModalRef: NgbModalRef;

  @Input() modalTitle: string = 'remove.course';
  @Input() closeTitle: string = 'no';
  @Input() closeAction: string = 'no';
  @Input() saveTitle: string = 'yes';
  @Input() saveAction: string = 'yes';
  @Input() modalMessage: string = 'delete.course.message';

  constructor( 
    private modal: NgbModal,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.openDeleteCourseModal()
  }

  private openDeleteCourseModal(): void {
    this.confirmationModalRef = this.modal.open(ConfirmationModalComponent, {
      centered: true,
      backdrop: 'static',
      ariaLabelledBy: 'modal-title',
    });

    this.translateService
      .get(this.modalTitle)
      .subscribe(
        (result) =>
          (this.confirmationModalRef.componentInstance.modalTitle = result)
      );
    this.translateService
      .get(this.closeTitle)
      .subscribe(
        (result) =>
          (this.confirmationModalRef.componentInstance.closeTitle = result)
      );
    this.translateService
      .get(this.saveTitle)
      .subscribe(
        (result) =>
          (this.confirmationModalRef.componentInstance.saveTitle = result)
      );
    this.translateService
      .get(this.modalMessage)
      .subscribe(
        (result) =>
          (this.confirmationModalRef.componentInstance.modalMessage = result)
      );

    this.confirmationModalRef.componentInstance.closeAction = this.closeAction;
    this.confirmationModalRef.componentInstance.saveAction = this.saveAction;
    this.confirmationModalRef.result.then(
      (result) => {
       console.log(result);
      },
      (reason) => {
       console.log(reason);
      }
    );
  }

}

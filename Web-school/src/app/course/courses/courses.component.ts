import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CourseDomain } from 'src/app/domain/course-domain';
import { RemoveComponent } from 'src/app/shared/modals/remove/remove.component';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses: CourseDomain[] = [];
  deleteCourseModalRef: NgbModalRef;
  filterText: string;
  orderByOption: string;
  courseIdToDelete;
  closeResult: string = '';

  modalTitle: string = 'remove.course';
  closeTitle: string = 'no';
  closeAction: string = 'no';
  saveTitle: string = 'yes';
  saveAction: string = 'yes';
  modalMessage: string = 'delete.course.message';

  constructor(
    private coursesService: CoursesService,
    private modal: NgbModal,
    private translateService: TranslateService
  ) {}
  ngOnDestroy(): void {
    this.deleteCourseModalRef.close();
  }

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  searchCourse(event, searchArg: string): void {
    this.courses = this.coursesService.getCourseOnSerach(searchArg);
    event.preventDefault();
  }

  searchCourseOnKeyup(event): void {
    this.filterText = event.target.value;
  }

  deleteCourse(courseId: number): void {
    this.courseIdToDelete = courseId;
    this.openDeleteCourseModal();
  }

  orderBy(option: string): void {
    this.orderByOption = option;
  }

  private openDeleteCourseModal(): void {
    this.deleteCourseModalRef = this.modal.open(RemoveComponent, {
      centered: true,
      backdrop: 'static',
      ariaLabelledBy: 'modal-title',
    });

    this.translateService
      .get(this.modalTitle)
      .subscribe(
        (result) =>
          (this.deleteCourseModalRef.componentInstance.modalTitle = result)
      );
    this.translateService
      .get(this.closeTitle)
      .subscribe(
        (result) =>
          (this.deleteCourseModalRef.componentInstance.closeTitle = result)
      );
    this.translateService
      .get(this.saveTitle)
      .subscribe(
        (result) =>
          (this.deleteCourseModalRef.componentInstance.saveTitle = result)
      );
    this.translateService
      .get(this.modalMessage)
      .subscribe(
        (result) =>
          (this.deleteCourseModalRef.componentInstance.modalMessage = result)
      );

    this.deleteCourseModalRef.componentInstance.closeAction = this.closeAction;
    this.deleteCourseModalRef.componentInstance.saveAction = this.saveAction;
    this.deleteCourseModalRef.result.then(
      (result) => {
        this.deleteCourseOnConfirm(result);
      },
      (reason) => {
        this.deleteCourseOnConfirm(reason);
      }
    );
  }

  deleteCourseOnConfirm(result: string): void {
    if (result === this.saveAction) {
      this.courses = this.coursesService.deleteCourseById(
        this.courseIdToDelete
      );
    }
  }
}

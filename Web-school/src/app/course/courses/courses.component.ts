import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { CourseDomain } from 'src/app/domain/course-domain';
import { ShareDataService } from 'src/app/services/share-data.service';
import { RemoveComponent } from 'src/app/shared/modals/remove/remove.component';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: CourseDomain[] = [];
  deleteCourseModalRef: NgbModalRef;
  filterText: string;
  orderByOption: string;
  courseIdToDelete;
  closeResult: string = ROUTER_PATH.loginPage;

  modalTitle: string = 'remove.course';
  closeTitle: string = 'no';
  closeAction: string = 'no';
  saveTitle: string = 'yes';
  saveAction: string = 'yes';
  modalMessage: string = 'delete.course.message';

  constructor(
    private coursesService: CoursesService,
    private modal: NgbModal,
    private translateService: TranslateService,
    private router: Router,
    private shareDataService: ShareDataService
  ) {}

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

  addCourse(): void {
    this.shareDataService.setIsEdit(false);
    this.router.navigate([`${ROUTER_PATH.coursesPage} ${ROUTER_PATH.contextPath}  ${ROUTER_PATH.courseAdd}`]);
  }
}

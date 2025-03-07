import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { CourseDomain } from 'src/app/domain/course-domain';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ConfirmationModalComponent } from 'src/app/shared/modals/confirmation/confirmation.component';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  courses: CourseDomain[] = [];
  deleteCourseModalRef: NgbModalRef;
  filterText: string;
  orderByOption: string;
  courseIdToDelete: number;
  closeResult: string = ROUTER_PATH.loginPage;

  modalTitle: string = 'remove.course';
  closeTitle: string = 'no';
  closeAction: string = 'no';
  saveTitle: string = 'yes';
  saveAction: string = 'yes';
  modalMessage: string = 'delete.course.message';

  constructor(
    private courseService: CoursesService,
    private modal: NgbModal,
    private translateService: TranslateService,
    private router: Router,
    private shareDataService: ShareDataService,
  ) {
  }

  ngOnInit(): void {
    this.setCourses();
    this.searchCourseOnKeyup();
  }

  searchCourseOnKeyup(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          this.filterText = event.target.value;
          return event.target.value;
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.searchGetCall(text).subscribe(
          (res: CourseDomain[]) => this.courses = res,
          (error: any) => console.error('Http Error searching courses:', error)
        );
      });
  }

  private searchGetCall(term: string): Observable<CourseDomain[]> {
    if (term === '') {
      return this.courseService.getCourses();
    }
    return this.courseService.getCourseOnSerach(term);
  }

  deleteCourse(courseId: number): void {
    this.courseIdToDelete = courseId;
    this.openDeleteCourseModal();
  }

  orderBy(option: string): void {
    this.orderByOption = option;
  }

  private openDeleteCourseModal(): void {
    this.deleteCourseModalRef = this.modal.open(ConfirmationModalComponent, {
      centered: true,
      backdrop: 'static',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-message',
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
      this.courseService.deleteCourseById(this.courseIdToDelete).subscribe(
        (result) => this.setCourses(),
        (error) => console.log(error)
      );
    }
  }

  addCourse(): void {
    this.shareDataService.setIsEdit(false);
    this.router.navigate([
      `${ROUTER_PATH.coursesPage}${ROUTER_PATH.contextPath}${ROUTER_PATH.courseAdd}`,
    ]);
  }

  setCourses(): void {
    this.courseService
      .getCourses()
      .subscribe(
        (courses) => (this.courses = courses),
        (error) => console.log('Http Error getting courses:', error)
      );
  }
}

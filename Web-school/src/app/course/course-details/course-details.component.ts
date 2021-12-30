import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AddCourse } from 'src/app/actions/course.actions';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { CourseDomain } from 'src/app/domain/course-domain';
import { State } from 'src/app/reducers';
import { CommonService } from 'src/app/services/common-service.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ConfirmationModalComponent } from 'src/app/shared/modals/confirmation/confirmation.component';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  confirmCourseModalRef: NgbModalRef;
  addModalTitle: string = 'add.course.label';
  editModalTitle: string = 'edit.course.label';
  closeTitle: string = 'no';
  closeAction: string = 'no';
  saveTitle: string = 'yes';
  saveAction: string = 'yes';
  modalAddMessage: string = 'add.course.message';
  modalEditingMessage: string = 'edit.course.message';
  addAuthor: string = 'add.author';

  readonly titleMaxLengthChars = 50;
  readonly descriptionMaxLengthChars = 500;
  readonly durationMinimumTime = 10;

  courseId: number;
  course: CourseDomain;
  isEdit: boolean;
  isLoading = true;
  titleMaxLength: string;
  titlerRequired: string;
  descriptionMaxLength: string;
  descriptionRequired: string;
  durationMinimumTimeMessage: string;
  durationRequired: string;
  authorRequired: string;
  addAuthorPlaceHolder: string;

  courseIdTracker: number;
  courseTracker: CourseDomain;
  courseForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private shareDataService: ShareDataService,
    private formBuilder: FormBuilder,
    private modal: NgbModal,
    private translateService: TranslateService,
    private store: Store<State>,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.courseId = id;
    });

    if (this.courseId) {
      this.courseService.getCourseById(this.courseId).subscribe((result) => {
        this.setCourse(result);
      });
    }

    this.shareDataService.isEditControl.subscribe(
      (value) => (this.isEdit = value)
    );
    setTimeout(() => {
      this.generateCourseForm();
      this.isLoading = false;
      this.initErrorMessages();
    }, 1000);
    
    this.translateService
      .get(this.addAuthor)
      .subscribe((result) => (this.addAuthorPlaceHolder = result));
  }

  generateCourseForm(): void {
    this.courseForm = this.formBuilder.group({
      courseDescription: [
        this.isEdit && this.course ? this.course.description : null,
        [
          Validators.required,
          Validators.maxLength(this.descriptionMaxLengthChars),
        ],
      ],
      courseTitle: [
        this.isEdit && this.course ? this.course.title : null,
        [Validators.required, Validators.maxLength(this.titleMaxLengthChars)],
      ],
      courseDuration: [
        this.isEdit && this.course ? this.course.duration : null,
        [Validators.required, Validators.min(this.durationMinimumTime)],
      ],
      courseCreatingDate: [
        this.isEdit && this.course ? this.course.creatingDate : null,
        Validators.required,
      ],
      authors: this.formBuilder.array(
        this.isEdit && this.course ? this.course.authors : [],
        Validators.required
      ),
    });
  }

  setCourse(result: CourseDomain): void {
    this.course = result;
  }
  backToCourses(): void {
    this.router.navigate([ROUTER_PATH.contextPath + ROUTER_PATH.coursesPage]);
  }

  onFormSubmit(): void {
    const course: CourseDomain = {
      title: this.courseForm.value.courseTitle,
      creatingDate: this.courseForm.value.courseCreatingDate,
      duration: this.courseForm.value.courseDuration,
      topRated: false,
      description: this.courseForm.value.courseDescription,
      authors: this.courseForm.value.authors,
    };
    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, course).subscribe(
        (result) => {
          this.openDeleteCourseModal();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // this.store.dispatch(new AddCourse(course));
      this.courseService.addCourse(course).subscribe(
        (result) => {
          this.openDeleteCourseModal();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  private openDeleteCourseModal(): void {
    this.confirmCourseModalRef = this.modal.open(ConfirmationModalComponent, {
      centered: true,
      backdrop: 'static',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-message',
    });

    if (!this.courseId) {
      this.setModalTitleAndMessage(this.addModalTitle, this.modalAddMessage);
    } else {
      this.setModalTitleAndMessage(
        this.editModalTitle,
        this.modalEditingMessage
      );
    }

    this.translateService
      .get(this.closeTitle)
      .subscribe(
        (result) =>
          (this.confirmCourseModalRef.componentInstance.closeTitle = result)
      );
    this.translateService
      .get(this.saveTitle)
      .subscribe(
        (result) =>
          (this.confirmCourseModalRef.componentInstance.saveTitle = result)
      );

    this.confirmCourseModalRef.componentInstance.closeAction = this.closeAction;
    this.confirmCourseModalRef.componentInstance.saveAction = this.saveAction;
    this.confirmCourseModalRef.result.then((result) => {
      if (result === this.closeAction) {
        this.backToCourses();
      }

      if (result === this.saveAction && !this.courseId) {
        this.courseForm.reset();
      }
    });
  }

  private setModalTitleAndMessage(
    modalTitle: string,
    modalMessage: string
  ): void {
    this.translateService
      .get(modalTitle)
      .subscribe(
        (result) =>
          (this.confirmCourseModalRef.componentInstance.modalTitle = result)
      );
    this.translateService
      .get(modalMessage)
      .subscribe(
        (result) =>
          (this.confirmCourseModalRef.componentInstance.modalMessage = result)
      );
  }

  initErrorMessages(): void {
    this.titleMaxLength = this.translateService.instant('title.max.length', {
      maxLength: this.titleMaxLengthChars,
    });
    this.titlerRequired = this.translateService.instant('title.required');
    this.descriptionMaxLength = this.translateService.instant(
      'description.max.length',
      {
        maxLength: this.descriptionMaxLengthChars,
      }
    );
    this.descriptionRequired = this.translateService.instant(
      'description.required'
    );
    this.durationMinimumTimeMessage = this.translateService.instant(
      'duration.minimum.time',
      {
        minimumTime: this.durationMinimumTime,
      }
    );
    this.durationRequired = this.translateService.instant('duration.required');
    this.authorRequired = this.translateService.instant('author.required');
  }

  isErrorBroder(courseForm: FormGroup, inputformName: string): boolean {
    return this.commonService.isErrorBroder(courseForm, inputformName);
  }
  ngOnDestroy(): void {
    this.shareDataService.setIsEdit(false);
  }
}

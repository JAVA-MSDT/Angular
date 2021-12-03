import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { CourseDomain } from 'src/app/domain/course-domain';
import { ShareDataService } from 'src/app/services/share-data.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  courseId: number;
  course: CourseDomain;
  isEdit: boolean;
  isLoading = true;

  courseIdTracker: number;
  courseTracker: CourseDomain;
  courseForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private shareDataService: ShareDataService,
    private formBuilder: FormBuilder
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
    }, 1000);
  }

  generateCourseForm(): void {
    this.courseForm = this.formBuilder.group({
      courseDescription: [
        this.isEdit && this.course ? this.course.description : null,
        Validators.required,
      ],
      courseTitle: [
        this.isEdit && this.course ? this.course.title : null,
        Validators.required,
      ],
      courseDuration: [
        this.isEdit && this.course ? this.course.duration : null,
        Validators.required,
      ],
      courseCreatingDate: [
        this.isEdit && this.course ? this.course.creatingDate : null,
        Validators.required,
      ],
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
    };
    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, course).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.courseService.addCourse(course).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  ngOnDestroy(): void {
    this.shareDataService.setIsEdit(false);
  }
}

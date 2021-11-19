import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.course = this.courseService.getCourseById(this.courseId);

    this.shareDataService.isEditControl.subscribe(
      (value) => (this.isEdit = value)
    );

    this.generateCourseForm();
  }

  generateCourseForm(): void {
    this.courseForm = this.formBuilder.group({
      courseTitle: this.isEdit ? this.course.title : null,
      courseDescription: this.isEdit ? this.course.description : null,
      courseDuration: this.isEdit ? this.course.duration : null,
      courseCreatingDate: this.isEdit ? this.course.creatingDate : null,
    });
  }

  backToCourses(): void {
    this.router.navigate([ROUTER_PATH.contextPath + ROUTER_PATH.coursesPage]);
  }

  onFormSubmit(): void {
    console.log('ToDo');
  }
  ngOnDestroy(): void {
    this.shareDataService.setIsEdit(false);
  }
}

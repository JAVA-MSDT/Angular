import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseDomain } from 'src/app/domain/course-domain';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  courseId: number;
  course: CourseDomain;

  courseIdTracker: number;
  courseTracker: CourseDomain;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.courseId = id;
    });
    this.course = this.courseService.getCourseById(this.courseId);
  }

  backToCourses(): void {
    this.router.navigate(['/courses']);
  }
}

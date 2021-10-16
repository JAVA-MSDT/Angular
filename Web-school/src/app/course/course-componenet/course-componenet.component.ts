import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseDomain } from 'src/app/domain/course-domain';

@Component({
  selector: 'web-course-componenet',
  templateUrl: './course-componenet.component.html',
  styleUrls: ['./course-componenet.component.sass'],
})
export class CourseComponenetComponent implements OnInit {
  @Input() course: CourseDomain;
  courseId: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.courseId = id;
    });
  }

  editCourse(course: CourseDomain) {
    this.router.navigate([course.id], { relativeTo: this.route });
  }

  deleteCourse(course: CourseDomain): void {
    console.log(`Course ID Delete: ${course.id} Course title: ${course.title}`);
  }
}

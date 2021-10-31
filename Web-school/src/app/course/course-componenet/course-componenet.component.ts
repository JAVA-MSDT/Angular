import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseDomain } from 'src/app/domain/course-domain';

@Component({
  selector: 'web-course-componenet',
  templateUrl: './course-componenet.component.html',
  styleUrls: ['./course-componenet.component.scss'],
})
export class CourseComponenetComponent implements OnInit {
  @Input() course: CourseDomain;
  @Input() titleFilter: string;
  @Output() deleteACourse = new EventEmitter();
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
    this.deleteACourse.emit(course.id);
  }
}

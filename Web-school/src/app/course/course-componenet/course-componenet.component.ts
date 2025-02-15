import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseDomain } from 'src/app/domain/course-domain';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'web-course-componenet',
  templateUrl: './course-componenet.component.html',
  styleUrls: ['./course-componenet.component.scss'],
})
export class CourseComponenetComponent implements OnInit {
  @Input() course: CourseDomain;
  @Input() titleFilter: string;
  @Input() descriptionFilter: string;
  @Output() deleteACourse = new EventEmitter();
  courseId: number;
  isEdit: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.courseId = id;
    });
    this.shareDataService.isEditControl.subscribe(
      (value) => (this.isEdit = value)
    );
  }

  editCourse(course: CourseDomain) {
    this.shareDataService.setIsEdit(true);
    this.router.navigate([course.id], { relativeTo: this.route });
  }

  deleteCourse(course: CourseDomain): void {
    this.deleteACourse.emit(course.id);
  }
}

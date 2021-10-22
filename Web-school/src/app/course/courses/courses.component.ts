import { Component, OnInit } from '@angular/core';
import { CourseDomain } from 'src/app/domain/course-domain';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'web-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: CourseDomain[] = [];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  searchCourse(event, searchArg: string): void {
    this.courses = this.coursesService.getCourseOnSerach(searchArg);
    event.preventDefault();
  }

  deleteCourse(courseId: number): void {
    this.courses = this.coursesService.deleteCourseById(courseId);
  }
}

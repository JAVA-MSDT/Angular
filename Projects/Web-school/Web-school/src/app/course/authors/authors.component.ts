import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { Author } from 'src/app/domain/author';

@Component({
  selector: 'web-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() authorsControl: FormArray;
  @Input() parentForm: FormGroup;
  @Input() placeholder: FormGroup;
  authorCtrl = new FormControl();
  filteredAuthors: Observable<Author[]>;
  allAuthors: Author[];

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.getAuthors();
  }

  remove(author: Author): void {
    const index = this.authorsControl.value.indexOf(author);

    if (index >= 0) {
      this.authorsControl.removeAt(index);
    }

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.authorsControl.push(new FormControl(event.option.value));
    this.authorInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
  }

  onInputFocus(): void {
    if (!this.authorCtrl.value) {
      this.authorCtrl.setValue('');
    }
  }

  private getAuthors() {
    this.courseService.getAuthors().subscribe(
      (author) => {
        this.allAuthors = author;
        this.initializeFilteredAuthors();
      },
      (error) => console.log('Http Error of getting authors:', error)
    );
  }

  private initializeFilteredAuthors() {
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      map((value) => (typeof value === 'string' ? this._filter(value) : this.allAuthors.slice()))
    );
  }

  private _filter(value: any): Author[] {
    const filterValue = value.toLowerCase();
    return this.allAuthors
      .filter((author) =>
        author.title.toLowerCase().includes(filterValue) ||
        author.lasttitle.toLowerCase().includes(filterValue)
      );
  }
}

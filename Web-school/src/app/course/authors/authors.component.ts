import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { Author } from 'src/app/domain/author';

@Component({
  selector: 'web-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  @Input() authorsControl: FormArray;
  @Input() parentForm: FormGroup;
  @Input() placeholder: FormGroup;
  authorCtrl = new FormControl();
  filteredAuthors: Observable<Author[]>;
  allAuthors: Author[];

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;

  constructor(private coursesService: CoursesService) {
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      map((author: Author) =>
        author ? this._filter(author) : this.allAuthors?.slice()
      )
    );
  }

  ngOnInit(): void {
    this.coursesService.getAuthors().subscribe((author) => {
      this.allAuthors = author;
    });
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

  private _filter(value: Author): Author[] {
    return this.allAuthors.filter((authors) => authors === value);
  }
}

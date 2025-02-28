import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  isEdit: boolean = false;
  isEditControl: BehaviorSubject<boolean>;
  constructor() {
    this.isEditControl = new BehaviorSubject(this.isEdit);
  }

  setIsEdit(isEditParam: boolean): void {
    this.isEditControl.next(isEditParam);
  }
}

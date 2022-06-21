import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  // @ViewChild('attributeInput') attributeInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredAttributes = this.attributeControl.valueChanges.pipe(
      startWith(null),
      map((attribute: string | null) => (attribute ? this._filter(attribute) : this.allAttributes.slice())),
    );
   }

  keywords = new Set(['angular']);
  attributeControl = new FormControl(['']);
  filteredAttributes: Observable<string[]> ;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  attributes: string[] = ['Важное'];
  allAttributes: string[] = ['Важное', 'Срочное', 'Неважно', 'Интересно', 'Не интересно'];

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our attribute
    if (value) {
      this.attributes.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.attributeControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.attributes.indexOf(fruit);

    if (index >= 0) {
      this.attributes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.attributes.push(event.option.viewValue);
    this.attributeControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAttributes.filter(attribute => attribute.toLowerCase().includes(filterValue));
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }
}

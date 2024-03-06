import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.scss']
})
export class DropdownPageComponent implements OnInit {
  firstDropdownItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options if needed
  ];

  secondDropdownItems: { [key: string]: { label: string; value: string }[] } = {
    option1: [
      { label: 'SubOption 1', value: 'suboption1' },
      { label: 'SubOption 2', value: 'suboption2' },
    ],
    option2: [
      { label: 'SubOption 3', value: 'suboption3' },
      { label: 'SubOption 4', value: 'suboption4' },
    ],
    // Add more options if needed
  };

  selectedItem: string = '';
  selectedSubItem: string | null = null;
  textInput: string = '';

  filteredSecondDropdownItems: { label: string; value: string }[] = [];

  ngOnInit(): void {
    this.filteredSecondDropdownItems = this.secondDropdownItems[this.firstDropdownItems[0].value];
    this.selectedItem = this.firstDropdownItems[0].value;
  }

  onFirstDropdownChange(): void {
    this.filteredSecondDropdownItems = this.secondDropdownItems[this.selectedItem];
    this.selectedSubItem = ''; // Reset the sub-item selection
  }

  onButtonClick(): void {
    // Handle button click event
  }
}

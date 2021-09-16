import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent implements OnInit, OnChanges {
  @Input() showHeader: boolean = false;
  showHead: any;
  
  navbarItems: any = [
    {
      title: 'Billing', dropdown: [
        { header: '', subHeader: [{ name: 'Person Search', component: '' }] },
        { header: '', subHeader: [{ name: 'Another action', component: '' }] },
        { header: '', subHeader: [{ name: 'Something else here', component: '' }] }
      ]
    },
    {
      title: 'Enrollment', dropdown: [
        { header: 'HouseHolds', subHeader: [{ name: 'Person Search', component: '' }] },
        { header: 'Applications', subHeader: [{ name: 'Enter Application Data', component: '' }] },
        { header: 'Employer Accounts', subHeader: [{ name: 'Search', component: '' }, { name: 'Add', component: '' }] }
      ]
    },
    {
      title: 'Work Queue', component: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.showHead = this.showHeader;
  }

}

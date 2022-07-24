import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: any[] = [
    {
      name: 'Cars',
      link: 'https://www.google.com',
    },
    {
      name: 'Clothes',
      link: 'https://www.google.com',
    },
    {
      name: 'Computers',
      link: 'https://www.google.com',
    },
    {
      name: 'Boats',
      link: 'https://www.google.com',
    }
  ];
  
  sidebarIsOn: any;

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarService.sidebarstateOB.subscribe(state=>this.sidebarIsOn = state);
  }

}

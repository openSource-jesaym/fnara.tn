import { Component, OnInit } from '@angular/core';

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
    },
    {
      name: 'Books',
      link: 'https://www.google.com',
    },
    {
      name: 'Sports',
      link: 'https://www.google.com',
    },
    {
      name: 'Gaming',
      link: 'https://www.google.com',
    },
    {
      name: 'Movies',
      link: 'https://www.google.com',
    },
    {
      name: 'Music',
      link: 'https://www.google.com',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

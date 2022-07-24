import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarService.sidebarIsOn = true;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  sidebarIsOn: any = true;
  private sidebarIsOnSource = new BehaviorSubject<boolean>(this.sidebarIsOn);
  sidebarstateOB = this.sidebarIsOnSource.asObservable();
  
  constructor() { }

  toggleSidebar() {
    this.sidebarIsOn = !this.sidebarIsOn;
    this.sidebarIsOnSource.next(this.sidebarIsOn);
  }
}

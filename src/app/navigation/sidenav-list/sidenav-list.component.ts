import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthService} from "../../authorization/auth.service";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.onClose();
    this.authService.logout();
  }
  onClose(){
    this.closeSidenav.emit();
  }
}

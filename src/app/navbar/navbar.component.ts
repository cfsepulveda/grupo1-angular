import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit() {
  }

  public sessionClose(): void {
    this.storageService.isLogged = false;
  }

}

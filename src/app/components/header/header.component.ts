import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue = '';

  constructor(private backend: BackendService) {}

  ngOnInit() {}

  search() {
    this.backend.globalSearch();
  }
}

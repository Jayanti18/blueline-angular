import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BusService } from './services/bus.services';
import Bus from './models/bus.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
  ) {}
  ngOnInit() {

  }
}

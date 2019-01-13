import { Response } from '@angular/http';
import { BusService } from '../services/bus.services';
import Bus from '../models/bus.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private busService: BusService
    ) { }
    //Declaring the new bus Object and initilizing it
    public newBus: Bus = new Bus()
  
    //An Empty list for the visible bus list
    busesList: Bus[];
    editbuses: Bus[] = [];

  ngOnInit() {
    //code to clear the form
     this.busService.getBuses()
      .subscribe(buses => {
        //assign the buslist property to the proper http response
         this.busesList = buses
        console.log(buses)
      })
  }

  // create will get excuted to add the new bus when submit button is clicked
  create() {
    console.log(this.newBus)
    this.busService.createBus(this.newBus)
      .subscribe((res) => {
        this.busesList.push(res.data)
        console.log("bus data from create:", res.data)
        this.newBus = new Bus()
      })
  }

}

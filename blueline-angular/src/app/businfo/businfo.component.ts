import { Response } from '@angular/http';
import { BusService } from '../services/bus.services';
import { Component, OnInit } from '@angular/core';
import Bus from '../models/bus.models';

@Component({
  selector: 'app-businfo',
  templateUrl: './businfo.component.html',
  styleUrls: ['./businfo.component.scss']
})
export class BusinfoComponent implements OnInit {

  constructor(
    //Private busservice will be injected into the component by Angular Dependency Injector
    private busService: BusService
  ) { }

  //Declaring the new bus Object and initilizing it
  public newBus: Bus = new Bus()

  //An Empty list for the visible bus list
  busesList: Bus[];
  editBuses: Bus[] = [];


  ngOnInit(): void {

    //At component initialization the 
    this.busService.getBuses()
      .subscribe(buses => {
        //assign the buslist property to the proper http response
        this.busesList = buses
        console.log(buses)
      })
  }
 
  editBus(bus: Bus) {
    console.log(bus)
     if(this.busesList.includes(bus)){
      if(!this.editBuses.includes(bus)){
        this.editBuses.push(bus)
      }else{
        this.editBuses.splice(this.editBuses.indexOf(bus), 1)
        this.busService.editBus(bus).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editBus(bus)
            console.error('Update Unsuccesful')
          })
        }
      }
    }
    doneBus(bus:Bus){
      bus.status = 'Done'
      this.busService.editBus(bus).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editBus(bus)
        console.error('Update Unsuccesful')
      })
    }
    submitBus(event, bus:Bus){
      if(event.keyCode ==13){
        this.editBus(bus)
      }
    }
    deleteBus(bus: Bus) {
      this.busService.deleteBus(bus._id).subscribe(res => {
        this.busesList.splice(this.busesList.indexOf(bus), 1);
      })
    }  
}
import Bus from '../models/bus.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
// import { GuardsCheckStart } from '@angular/router';

@Injectable()
export class BusService {

  api_url = 'http://localhost:3000';
  busUrl = `${this.api_url}/api/buses`;

  constructor(
    private http: HttpClient) { }
 // .....some code 

//Create Bus, takes a Bus Object

createBus(bus: Bus): Observable<any>{
    //returns the observable of http post request 
    let addUrl = `${this.busUrl}`
    return this.http.post(addUrl, bus);
  }

//Read bus, takes no arguments
getBuses(): Observable<Bus[]>{
    return this.http.get(this.busUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Bus[];
    }))
  }

//Update todo, takes a ToDo Object as parameter
editBus(bus:Bus){
    let editUrl = `${this.busUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, bus);
  }

  // delete funtion
deleteBus(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.busUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
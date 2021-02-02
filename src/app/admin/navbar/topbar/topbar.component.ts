import { SharedService } from './../../../_helpers/sharedService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  message:string = 'Valerie Luna';


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }

}

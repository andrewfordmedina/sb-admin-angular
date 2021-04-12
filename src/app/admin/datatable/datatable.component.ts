import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../_services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/_models/user';
import { first } from 'rxjs/operators';
import { SharedService } from 'src/app/_helpers/sharedService';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {

  message:string;

  users: User[];
  loading = false;
  sampleList = [
    {firstName: "alec",middleName: "m", lastName:"last", role:"admin",dateCreated:"10/16/2020" },
    {firstName: "andrew",middleName: "M", lastName:"name", role:"admin",dateCreated:"10/16/2020" },
  ];
  
  constructor(private userService: UserService,private sharedService: SharedService,private activatedRoute:ActivatedRoute) { 
    this.loadScripts();
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
    this.sharedService.nextMessage("Second Message")
  } 

load(){
}

  ngOnInit() {
  
    this.activatedRoute.data.pipe(first()).subscribe((data)  => {
      this.users = data[0].user;
      this.loading = true;
    });
  //   this.userService.getAll().pipe(first()).subscribe(users => {
  //     this.users = users.user;
  //     console.log(this.users);
  //     this.loading = true;
  // });
    
}


  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      "assets/vendor/datatables/jquery.dataTables.min.js",
      "assets/vendor/datatables/dataTables.bootstrap4.min.js",
      "assets/js/demo/datatables-demo.js"

    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
 }

 

  

}

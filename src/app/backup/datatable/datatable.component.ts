import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent  {

 
  constructor() { 
    this.loadScripts(); 
  } 

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      "assets/vendor/jquery/jquery.min.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/jquery-easing/jquery.easing.min.js",
      "assets/js/sb-admin-2.min.js",
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

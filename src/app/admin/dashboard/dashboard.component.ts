import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  
  constructor(private toastr: ToastrService) { 
    this.loadScripts(); 
  } 

  toast(){
    this.toastr.info('Generating report...','', {positionClass:'toast-bottom-right'});
    setTimeout(()=>{ this.toastr.success('Successfully generated','',{positionClass:'toast-bottom-right'});    
  },6000 )
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
      // "assets/vendor/jquery/jquery.min.js",
      // "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      // "assets/vendor/jquery-easing/jquery.easing.min.js",
      // "assets/js/sb-admin-2.min.js",              
      "assets/vendor/chart.js/Chart.min.js",
      "assets/js/demo/chart-area-demo.js",
      "assets/js/demo/chart-pie-demo.js"

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

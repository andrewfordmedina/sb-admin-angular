import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { first, startWith, pairwise } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
declare var moment;

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit{


  constructor(private userService: UserService,private fb: FormBuilder) {
   
    // this.userForm.get('firstName')
    // .valueChanges
    // .pipe(startWith(null), pairwise())
    // .subscribe(([prev, next]: [any, any]) => {
    //   if(prev!=next){ 
    //     let value:String = next; 
    //     this.userForm.patchValue({firstName:value.toUpperCase()});
    //    }
    // } );


   }

  ngOnInit(): void {
    this.selectAll();
    
  }

  user: User;
  users: User[];
  loading = false;
  userLoad:User = { id: 1, username: '', password: '', firstName: '', lastName: '',email:'',role: '',middleName:'' };
  pic = "https://vignette.wikia.nocookie.net/twicenation/images/4/4e/Wake_Me_Up_Momo.jpg/revision/latest?cb=20180417231631";

  userForm = this.fb.group({
    id: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    email: ['']
  });


  add(){
    this.user = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User',email:'test',role: 'admin',middleName:'' };
      this.userService.add(this.user).pipe(first()).subscribe(users => {
      console.log(users);
      this.selectAll();
  });
  }

  void(id:string){
  console.log(`removing ${id} ...`);
  this.userService.delete(id).pipe(first()).subscribe(users => {
  this.selectAll()
  });
  }

  selectUser(id:string){
    this.userLoad = this.users.find(e => e.id.toString() == id);
    this.userForm.patchValue(this.userLoad);
    console.log(`loading ${id} ...`);
  }

  selectAll(){
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
      this.loading = true;
      
    });
  }

  update() {
    this.userService.update(this.userForm.value).pipe(first()).subscribe(users => {
    this.selectAll();
    });
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }


}

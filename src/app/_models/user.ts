export class User {
   id: number;
   username: string;
   email: string;
   password: string;
   firstName: string;
   middleName: string;
   lastName: string;
   token?: string;
   access_token?: string;
   role: string;

   constructor(id:number , username: string, email:string){
      id = this.id;
      username = this.username;
      email = this.email; 
   }
    

}
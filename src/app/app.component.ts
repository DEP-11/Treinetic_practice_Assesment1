import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'name_display_app';
  
  inputName:string="Nilan";
  inputDistrict:string="Hambantota";
  getValName(name:any){
    console.warn(name)
    this.inputName=name
}
getValDistrict(district:any){
  console.warn(district)
  this.inputDistrict=district
}
}

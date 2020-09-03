import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrls: ['./control-message.component.css']
})
export class ControlMessageComponent  {

  @Input() control: FormControl;
  @Input() isFormSubmitted : boolean;
  constructor() { }

  
  get errorMessage() {
    if(this.control === undefined || this.control == null){
        return null;
    }
    for (let propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.isFormSubmitted)) {
            if(propertyName == "minlength" || propertyName == "maxlength")
            {
               
            }
            return 'This field is required';
        }
    }
    return null;
}

}

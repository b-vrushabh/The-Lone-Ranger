import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private register: RegistrationService) { }

  onSubmit() {
    this.submitted = true;

     let user =new User(this.registerForm.value.username,this.registerForm.value.password);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   
    this.register.registerUser(user);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
    validator: this.MustMatch('password', 'confirmPassword')
});
  }

   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {

  sendOTPMessage : string = 'Send OTP';
  verifyOTPMessage : string = 'Verify OTP';
  OTP : number = 210500;
  verified : boolean = false;
  isDisplayed : boolean = false;
  isDisplayedText : string = 'Likes are free only once per Email and Instagram ID combined. Only personal Instagram accounts are valid and account should be public!';

  constructor() { }

  ngOnInit(): void {
    this.isDisplayed = true;
    setTimeout(() => {
      this.isDisplayed = false;
    }, 50000)
  }

  userDetailsForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    otp: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    insta: new FormControl('',[Validators.required])
  });

  sendOTP() {
    this.sendOTPMessage = 'OTP Sent';
    this.OTP = 1234;
  }

  verifyOTP() {
    if(this.userDetailsForm.value.otp == this.OTP) {
      this.verifyOTPMessage = 'Verified';
      this.verified = true;
    }
    else
      this.verifyOTPMessage = 'Failed';
  }

  submitUserDetails() {
    this.isDisplayedText = 'You will recieve 100 likes within 24 hours!'
    this.isDisplayed = true;
    setTimeout(() => {
      this.isDisplayed = false;
    }, 5000)
  }

}

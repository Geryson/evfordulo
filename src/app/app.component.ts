import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from "@angular/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('slideInOutReversed', [
      transition(':enter', [
        style({transform: 'translateY(300%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(300%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isFormLinear = false;
  firstGroup = FormGroup;
  secondGroup = FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  title = 'Üdvözlünk titeket!';
  giftVisible = true;
  formVisible = false;

  ngOnInit() {
    // this.firstGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // })
  }

  onGiftClick() {
    this.giftVisible = false;

    setTimeout(() => {this.formVisible = true}, 1001)

    this.title = "Nemsokára kinyílik..."
  }
}

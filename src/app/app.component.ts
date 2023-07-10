import {Component, OnInit, ViewChild} from '@angular/core';
import { trigger, transition, animate, style } from "@angular/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {MatSliderChange} from "@angular/material/slider";

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
  firstGroup = FormGroup;
  secondGroup = FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  title = 'Üdvözlünk titeket!';
  giftVisible = true;
  formVisible = false;

  anniversaryList: number[] = [28, 29, 30, 31];
  selectedAnniversary: number = -1;
  anniversaryMessage = "";
  anniversaryCompleted: boolean | undefined;

  lovemeterValue = 1;
  lovemeterMessage = "";
  lovemeterCompleted: boolean | undefined;

  surpriseMessage = "";
  surpriseCompleted: boolean | undefined;

  postVideoMessage = "";

  ngOnInit() {
    // this.firstGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // })
    screen.orientation.lock("portrait");
    this.generateRandomNumber(1, 300);
  }

  generateRandomNumber(min: number, max: number): void {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomNumber);
    }, 1000);
  }

  onGiftClick() {
    this.giftVisible = false;

    setTimeout(() => {this.formVisible = true}, 1001)

    this.title = "Nemsokára kinyílik..."
  }

  onAnniversarySelected(anniversary: number) {
    this.selectedAnniversary = anniversary;
    switch (anniversary) {
      case 30: {
        this.anniversaryMessage = "HELYES VÁLASZ!";
        this.anniversaryCompleted = true;
        break;
      }
      default: {
        this.anniversaryMessage = "ROSSZ VÁLASZ!";
        this.anniversaryCompleted = false;
        break;
      }
    }
  }

  onLovemeterChange(event: MatSliderChange) {
    if (event.value == 10) {
      this.lovemeterMessage = "NAGYON HELYES! EZ MÁR IGEN!"
      this.lovemeterCompleted = true;
    } else {
      this.lovemeterMessage = "Még egy kicsit..."
      this.lovemeterCompleted = false;
    }
  }

  onSurpriseAnswered(answer: boolean) {
    this.surpriseMessage = answer ?
      "Számítottatok rá?... Végülis nem baj... reméljük, hogy sikerült teljesítenünk a célt!" :
      "Még szép, hogy nem számítottatok rá. Pontosan ezért csináltuk!";
    this.surpriseCompleted = true;
  }

  onVideoIncoming() {
    setTimeout(() => {this.postVideoMessage = "Reméljük, tetszett ez a videó! De az a helyzet, hogy még itt sincs vége. A hozzátok közel álló személyeknél talán van még ajándék..."}, 240000)
  }
}

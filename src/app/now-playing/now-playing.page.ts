import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

   play(){
var audio = new Audio('/src/assets/s.mp3');
audio.play();
     }
}

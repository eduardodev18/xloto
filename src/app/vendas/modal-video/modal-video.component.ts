import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  id = 'le2dFuclFeY';
  private player;
  private ytEvent;


  constructor() { }

  ngOnInit(): void {
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}

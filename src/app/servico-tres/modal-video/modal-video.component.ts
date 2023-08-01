import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  id = 'le2dFuclFeY';
  private player;
  private ytEvent;


  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log('DATA',this.data);
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

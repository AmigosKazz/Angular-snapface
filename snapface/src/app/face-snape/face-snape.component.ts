import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {

  @Input() faceSnap !: FaceSnapModel;
  buttonText !: String;

  ngOnInit() {
    this.buttonText = "Add Snap";
  }

  onSnap() {
    if (this.buttonText == "Add Snap") {
      this.faceSnap.snaps++;
      this.buttonText = "Remove Snap";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Add Snap";
    }


  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {

  @Input() faceSnap !: FaceSnapModel;
  buttonText !: String;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  ngOnInit() {
    this.buttonText = "Add Snap";
  }

  onSnap() {
    if (this.buttonText == "Add Snap") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Remove Snap";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Add Snap";
    }

  }


  protected readonly FaceSnapModel = FaceSnapModel;
}

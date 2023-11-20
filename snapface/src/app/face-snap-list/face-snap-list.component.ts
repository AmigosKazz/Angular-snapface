import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnapModel[];

  constructor(private faceSnapsService: FaceSnapsService) {
    this.faceSnaps = faceSnapsService.faceSnaps;
  }

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}

import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mysnap !: FaceSnapModel;
  myOtherSnap !: FaceSnapModel;
  myLastSnap !: FaceSnapModel;
  ngOnInit() {
    this.mysnap = new FaceSnapModel(
        "My First Snap",
        "This is my first snap",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        new Date(),
        0,
        "Paris"
    );

    this.myOtherSnap = new FaceSnapModel(
        "My Second Snap",
        "This is my second snap",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        new Date(),
        1,
        "London"
    );

    this.myLastSnap = new FaceSnapModel(
        "My Last snap",
        "This is my last snap",
        "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        new Date(),
        2
    );

  }

}

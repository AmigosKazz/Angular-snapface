import {Injectable} from "@angular/core";
import {FaceSnapModel} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps : FaceSnapModel[] = [
    {
      id: 1,
      title: 'My First Snap',
      description: "This is my first snap",
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createDate: new Date(),
      snaps: 40,
      location: "Paris"
    },
    {
      id: 2,
      title: 'My Second Snap',
      description: "This is my second snap",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
      createDate: new Date(),
      snaps: 263,
      location: "London"
    },

    {
      id: 3,
      title: 'My Last Snap',
      description: "This is my last snap",
      imageUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
      createDate: new Date(),
      snaps: 126
    }

  ]

  getAllFaceSnaps(){
    return this.faceSnaps;
  }

  getFaceSnapById(id_snaps: number): FaceSnapModel{
    const faceSnap = this.faceSnaps.find(
      (faceSnapObject) => {
        return faceSnapObject.id === id_snaps;
      }
    );
    if (faceSnap){
      return faceSnap;
    } else {
      throw new Error("Face Snap not found");
    }
  }

  snapFaceSnapById(id_snaps: number, snapType: 'snap' | 'unsnap') : void{
    const faceSnap = this.getFaceSnapById(id_snaps);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}

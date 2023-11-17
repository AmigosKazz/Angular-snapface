export class FaceSnapModel{
  constructor(public title: String,
              public description: String,
              public imageUrl: String,
              public createDate: Date,
              public snaps: number,
              public location ?: String
              ) {
  }

}

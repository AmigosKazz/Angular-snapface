export class FaceSnapModel{
  id !: number;
  title !: string;
  description !: string;
  imageUrl !: string;
  createDate !: Date;
  snaps !: number;
  location ?: string;
}

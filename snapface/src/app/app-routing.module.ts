import {NgModule} from "@angular/core";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {RouterModule} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes = [
  {
    path: 'facesnaps', component: FaceSnapListComponent
  },
  {
    path:'', component: LandingPageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}

import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';


import {
  faHome,
  faUser,
  faClock,
  faGear
} from '@fortawesome/free-solid-svg-icons';

import {
  faAngular,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJira,
  faFigma,
  faSass,
  faStripe,
  faAws,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [FontAwesomeModule], 
  exports: [FontAwesomeModule], 
})
export class IconsModule {
  constructor(iconLib: FaIconLibrary) {
    iconLib.addIcons(
   
      faHome,
      faUser,
      faClock,
      faGear,

     
      faAngular,
      faJs,
      faHtml5,
      faCss3Alt,
      faReact,
      faNodeJs,
      faJira,
      faFigma,
      faSass,
      faStripe,
      faAws,
      faBootstrap
    );
  }
}

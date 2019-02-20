import { Component } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  skills = ['Java', 'Angular'];
  projects = [new Project({
    clientName: "Uline",
    duration: "Jan 2017 to present",
    description: `Uline is a shipping supply company which has active operations in US, Canada, and
    Mexico. As part of the G2 modernization project they have migrating all of thier services
    into new systems using latest technologies like Angular, Spring boot, Hibernate. For the past
    two years I have been working as a full stack developer.`
  })]
}

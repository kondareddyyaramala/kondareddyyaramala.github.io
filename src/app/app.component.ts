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
    duration: "Feb 2017 to present",
    description: `Uline is a shipping supply company which has active operations in US, Canada, and
    Mexico. As part of the G2 modernization project they have migrating all of thier services
    into new systems using latest technologies like Angular, Spring boot, Hibernate. For the past
    two years I have been working as a full stack developer.`
  }), new Project({
    clientName: "Wellsfargo",
    duration: "Jan 2016 to Jan 2017",
    description: `Wellsfargo (Mortgage) aplication is a giant application and has been processing a
    huge number of mortagage applications in US. During my tenure at Wellsfasrgo, I got chance to 
    work on developing new features and integrating with other external services using different
    technologies AngularJS, Spring, Hibernate.`
  })]
}

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
    description: `Uline is a rapidly growing shipping supplies company, which has more than twenty branches across US, Canada, and Mexico. Currently at Uline we are converting all the legacy services and applications to modern web applications and web services using cutting edge technologies available in the market.
    My daily duties at Uline includes:
    1. Working with business team on requirements gathering and grooming stories.
    2. Working with development team on vetting out the design and implementation approaches for the feature work.
    3. Develop rich responsive web applications using Angular framework.
    4. Building REST services using Sprintboot, Java, Hibernate.
    5. Writing tests for the feature work using different testing tools like Jasmine, Mockito, Karma, Puppeteer.
    6. Helping QA team in testing the feature work and fixing any bugs that are blocking their testing`
  })]
}

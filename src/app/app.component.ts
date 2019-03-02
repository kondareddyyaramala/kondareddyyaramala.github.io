import { Component } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects = [new Project({
    clientName: "Uline",
    duration: "Feb 2017 to present",
    description: `Uline is a shipping supply company which has active operations in US, Canada, and
    Mexico. As part of the G2 modernization project they are migrating all of thier legacy systems
    into new microservices and responsive web applications using latest technologies like Angular, 
    Spring boot, Hibernate. I have been working for Uline for past two years on one of the key project, Quotes.
    My daily duties include working with business team to groom stories, sorting out technical approaches, working with 
    UX designers to get mock ups for the screens and active coding both in front-end and back-end.`
  }), new Project({
    clientName: "Wellsfargo",
    duration: "Jan 2016 to Jan 2017",
    description: `Wellsfargo (Mortgage) aplication was a giant application and was one of the leading company in processing a
    huge number of mortagage applications in the US. During my tenure at Wellsfasrgo, I worked on a webapplication which was embedded into the
    existing application.
    `
  }),
  new Project({
    clientName: "All Tech Media",
    duration: "Jan 2014 to July 2014",
    description: `All Tech Media is an IT consulting firm which helps clients in all pahses of the
    application development. During my perios at All Tech Media, I was part of a development team in building
    responsive web applications using variety of front-end technologies and creating Rest services using using Java and Spring framework`
  })]


  // skills
  skills = ['React', 'Angular', 'Javascript', 'HTML5', 'CSS3', 'Redux', 'Jasmine', 'Protractor', 'Karma', 'ngRx',
    'Java', 'Spring', 'Spring boot', 'Hibernate', 'Junit', 'Microservices', 'Rest API'];
}

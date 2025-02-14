import { Component, ViewChild, ElementRef } from '@angular/core';
import { Project } from './models/project';
import { Education } from './models/education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[] = [
    {
      clientName: "AWS",
      duration: "Aug 2024 to present",
      description: `AWS is a cloud computing platform that provides a wide range of services for businesses and developers. It offers infrastructure, storage, and computing services to support a variety of applications and workloads.`
    },
    {
      clientName: "Ozette Technologies",
      duration: "Jan 2023 to Aug 2024",
      description: `Ozette Technologies is a software development company that specializes in providing custom software solutions to businesses. They offer a range of services, including web development, mobile app development, and enterprise software solutions.`
    },
    {
      clientName: "Meta",
      duration: "July 2022 to Jan 2023",
      description: `Meta is a social media platform that allows users to connect with friends and family. It offers a range of services, including social networking, messaging, and video sharing.`
    },
    {
      clientName: "Maximus",
      duration: "July 2020 to present",
      description: `Maximus enables citizens around the globe to successfully engage with their governments at all levels and across a variety of programs by delivering innovative business process management and technology solutions that contribute to improved outcomes for citizens and higher levels of productivity, accuracy, accountability, and efficiency of government-sponsored programs.`
    }, {
      clientName: "Uline",
      duration: "Feb 2017 to June 2020",
      description: `Uline is a shipping supply company which has active operations in US, Canada, and
      Mexico. As part of the G2 modernization project, they are migrating all of thier legacy systems
      into new microservices and responsive web applications using latest technologies like Angular, 
      Spring boot, Hibernate. I have been working for Uline for past two years on one of the key project, Quotes.
      My daily duties include working with business team to groom stories, sorting out technical approaches, working with 
      UX designers to get mock ups for the screens and active coding both in front-end and back-end.`
    }, {
      clientName: "Wellsfargo",
      duration: "Jan 2016 to Jan 2017",
      description: `Wells Fargo Mortgage is a giant web application which processes mortgage 
      applications across the U.S. I have worked on multiple projects during my tenure at Wells Fargo 
      which are mainly focussed on adding additional features to the existing mortgage application. 
      I have worked on IITS project which was to pull the customer bank account information to the 
      mortgage application which needed a lot of integration effort with the external services. 
      `
    },
    {
      clientName: "Oklahoma Christian University",
      duration: "Aug 2014 to Dec 2015",
      description: `During my Masters at OCU, I was given an opportunity to work with the internal 
      application team; I was mainly helping web application team in fixing bugs that were found in 
      the university's web site, also worked on some of the enhancements that were requested by the 
      users/admin department. During this time, I was working with HTML, Jquery, CSS, and Java.
      `
    }]


  // educationDetails
  educationDetails: Education[] = [
    {
      collegeName: 'Oklahoma Christian University',
      duration: 'July 2014 to Dec 2015',
      degreeName: 'Master of Science in Engineering',
      description: 'Completed masters with 3.5 GPA'
    }
  ];

  // skills
  skills: string[] = ['React', 'Angular', 'VueJS', 'Javascript', 'HTML5', 'CSS3', 'Redux', 'Jasmine', 'Pug', 'SCSS', 'Typescript', 'DOM', 'CSSOM',
    'Protractor', 'Karma', 'ngRx', 'Java', 'Spring', 'Spring boot', 'Hibernate', 'Junit', 'Microservices', 'Rest API', 'Docker', 'Apigee', 'Pivotal Cloud Foundry'];
}

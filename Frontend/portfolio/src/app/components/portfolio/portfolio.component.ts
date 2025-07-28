import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Todo List',
      subtitle: 'Angular',
      image: 'assets/images/todo.jpg',
      technologies:"HTML5, CSS, Angular 17, Bootstrap, Typescript",
      sourceUrl: 'https://github.com/your-portfolio',
      showDescription: false,
      showSource: false,
      description: `Built a responsive task management application using Angular, enabling users to create, edit, mark complete, and delete tasks. Leveraged localStorage to persist data across sessions without a backend.`
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Angular & Express',
      image: 'assets/images/Portfolio.jpg',
      technologies:"HTML5, CSS, Angular 17, Bootstrap, Typescript",
      sourceUrl: 'https://github.com/your-portfolio',
      showDescription: false,
      showSource: false,
      description: `A personal portfolio built using Angular for the frontend and Express.js for the backend,
                    showcasing projects and contact information.`
    },
    {
      title: 'E-commerce Dashboard',
      subtitle: 'Admin Panel',
      image: 'assets/images/Portfolio.jpg',
      technologies:"HTML5, CSS, Angular 17, Bootstrap, Typescript",
      sourceUrl: 'https://github.com/your-portfolio',
      showDescription: false,
      showSource: false,
      description: `An admin dashboard for managing products, orders, and users. Built using Angular Material and REST API.`
    }
    // Add more project objects here...
  ];
   toggleDescription(project: any) {
    project.showDescription = !project.showDescription;
  }

  toggleSource(project: any) {
    project.showSource = !project.showSource;
  }

}

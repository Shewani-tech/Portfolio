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
      sourceUrl: 'https://github.com/Shewani-tech/todo-app',
      websiteLink:"https://shewani-tech.github.io/todo-app/list",
      showDescription: false,
      showSource: false,
      description: `Built a responsive task management application using Angular, enabling users to create, edit, mark complete, and delete tasks. Leveraged localStorage to persist data across sessions without a backend.`
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Angular & Express',
      image: 'assets/images/Portfolio.jpg',
      technologies:"HTML5, CSS, Angular 17, Bootstrap, Typescript,Express",
      sourceUrl: 'https://github.com/your-portfolio',
      websiteLink:"https://shewani-tech.github.io/Portfolio/",
      showDescription: false,
      showSource: false,
      description: `A personal portfolio built using Angular for the frontend and Express.js for the backend,
                    showcasing projects and contact information.`
    },
    {
      title: 'Tic Tac Toe',
      subtitle: 'HTML, CSS & Javascript',
      image: 'assets/images/game.jpg',
      technologies:"HTML5, CSS, Javascript",
      sourceUrl: 'https://github.com/Shewani-tech/Tic-Tac-Toe',
      showDescription: false,
      showSource: false,
      websiteLink:"https://shewani-tech.github.io/Tic-Tac-Toe/",
      description: `Built a classic Tic Tac Toe game using HTML, CSS, and JavaScript, enabling two players to take turns marking cells on a 3×3 grid. Implemented win-condition logic for horizontal, vertical, and diagonal matches, and included draw detection for tied games.`
    }
    // Add more project objects here...
  ];
   toggleDescription(project: any) {
    project.showDescription = !project.showDescription;
  }

  toggleSource(project: any) {
    project.showSource = !project.showSource;
  }
  openPortfolio(link:any) {
  window.open(link, '_blank');
}

}

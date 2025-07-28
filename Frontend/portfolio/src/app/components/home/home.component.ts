import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngAfterViewInit() {
     setTimeout(() => {
    new TypeIt("#type-target", {
      strings: ["I'm a Full Stack Developer",
        "I'm an Angular Expert",
        "I'm a Node.js Developer",
        "I'm a Problem Solver",
        "I'm a Team Player",
        "I Build Modern Web Apps"],
      speed: 100,
      breakLines: false,
      loop: true,
      deleteSpeed: 75,
      waitUntilVisible: true,
    }).go();
  });
  }
}

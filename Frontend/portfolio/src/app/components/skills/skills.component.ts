import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit{
 mySkills:any={
    technologies:[{name:"HTML",percent:70,remark:'good'}, {name:"CSS",percent:60,remark:'good'},{name:"Javascript",percent:80,remark:'good'},{name:"Angular",percent:70,remark:'good'}, {name:"BootStrap", percent:90,remark:'excellent'},{name:"Javascript",percent:80,remark:'good'},{name:"Express",percent:50,remark:'average'}, {name:"Moongo", percent:50,remark:'average'}],
    tools:[{name:"Git",percent:90,remark:'excellent'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'}]
  };
   ngAfterViewInit(): void {
    AOS.init();
  }

}

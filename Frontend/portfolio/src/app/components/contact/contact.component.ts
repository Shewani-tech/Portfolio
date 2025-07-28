import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import * as AOS from 'aos';
import { ContactService } from '../../service/contact.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  contactService = inject(ContactService);
  submitted = false;
  ngAfterViewInit(): void {
    AOS.init({ duration: 1000 });
  }
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      this.contactService.sendMessage(this.formData).subscribe({
        next: () => {
          this.submitted = true;
          form.resetForm();

          setTimeout(() => {
            this.submitted = false;
          }, 2000);
        },
        error: () => {
          alert('Failed to send message');
        },
      });
    }
  }


}

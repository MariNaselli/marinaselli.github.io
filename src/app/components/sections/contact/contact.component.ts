import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactData: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos
    this.contactService.getContactData().subscribe((data) => {
      this.contactData = data.contact;
    });
  }

}

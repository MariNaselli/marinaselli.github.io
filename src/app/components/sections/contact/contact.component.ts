import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactData: any = null;
  whatsappLink: string = '';
  emailLink: string = '';
  locationLink: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos
    this.contactService.getContactData().subscribe((data) => {
      this.contactData = data.contact;   
      
      // Crea el enlace
      const phoneNumber = this.contactData.phone.number;
      this.whatsappLink = this.createWhatsappLink(phoneNumber);

      const emailAddress = this.contactData.email.email;
      this.emailLink = this.createEmailLink(emailAddress);

      const location = this.contactData.address.location;
      this.locationLink = this.createLocationLink(location);
    });
  }

  private createWhatsappLink(phoneNumber: string): string {
    // Elimina cualquier espacio y formato adicional del número
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  }

  private createEmailLink(emailAddress: string): string {
    const subject = encodeURIComponent('Consulta desde el sitio web');
    const body = encodeURIComponent('Hola Mariana!');
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  private createLocationLink(address: string): string {
    const query = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }
}

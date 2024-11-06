import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'section-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{

  resumeData: any;

  constructor(private resumeService: ResumeService){}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos
    this.resumeService.getResumeData().subscribe((data) => {
      this.resumeData = data.resume;
    });
  }
}

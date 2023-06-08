import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectDescriptionSrc: string;
  @Input() image: string;
  @Input() link: string;

  projectDescription: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Retrieved the description file from assets
    this.http.get(this.projectDescriptionSrc, { responseType: 'text' })
      .subscribe(fileContent => {
        this.projectDescription = fileContent;
    })
  }
}
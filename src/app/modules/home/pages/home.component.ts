import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  text = '';
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getText();
  }

  getText(): void {
    this.homeService.getResult().subscribe(
      (text) => {
        this.text = text.data.text;
      },
      (error) => {
        console.error('Erro ao buscar texto:', error);
      }
    );
  }
}

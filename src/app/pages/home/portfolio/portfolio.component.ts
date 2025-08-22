import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

interface PortfolioItem {
  imageUrl: string;
  detailsLink: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements AfterViewInit {
  portfolioItems: PortfolioItem[] = [
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
  ];

  @ViewChildren('card', { read: ElementRef }) cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    this.cards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}

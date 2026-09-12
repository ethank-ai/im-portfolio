import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

type PortfolioPiece = {
  name: string;
  category: string;
  image: string;
  alt: string;
  size: 'wide' | 'tall' | 'square';
};

type StudioNote = {
  number: string;
  title: string;
  copy: string;
};

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly instagramUrl = 'https://www.instagram.com/illusionalmacrame/';

  protected readonly pieces: PortfolioPiece[] = [
    {
      name: 'Sunroom Tapestry',
      category: 'Statement wall hanging',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85',
      alt: 'Textured cream wall hanging above a warm neutral interior',
      size: 'wide'
    },
    {
      name: 'Cove Swing',
      category: 'Slow living object',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
      alt: 'Handmade hanging chair in a sunlit, calm interior',
      size: 'tall'
    },
    {
      name: 'Desert Bloom',
      category: 'Custom installation',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
      alt: 'Organic neutral-toned textile detail in a considered home',
      size: 'square'
    }
  ];

  protected readonly studioNotes: StudioNote[] = [
    {
      number: '01',
      title: 'Drawn by hand',
      copy: 'Every piece begins as a quiet sketch, shaped around the room it is meant to live in.'
    },
    {
      number: '02',
      title: 'Tied with intention',
      copy: 'Natural fibres, considered knots, and a patient pace give each work its own rhythm.'
    },
    {
      number: '03',
      title: 'Made to linger',
      copy: 'Textural heirlooms for softening spaces, marking moments, and staying awhile.'
    }
  ];

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }
}

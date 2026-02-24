import { Component, signal } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { Card } from './card/card';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Header } from './header/header';
@Component({
  selector: 'app-root',
  imports: [Carousel, Card, Navbar, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}

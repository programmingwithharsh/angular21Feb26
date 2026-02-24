import { Component, signal } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { Card } from './card/card';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Carousel, Card, Navbar, Footer, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}

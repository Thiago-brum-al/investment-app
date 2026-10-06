import { Component, signal } from '@angular/core';

// LAYOUT
import { Header } from './layout/header/header';
import { Main } from './layout/main/main';
import { Footer } from './layout/footer/footer';
import { Form } from "./components/form/form";
import { Table } from './components/table/table';

@Component({
  imports: [Header, Main, Footer, Form, Table],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}

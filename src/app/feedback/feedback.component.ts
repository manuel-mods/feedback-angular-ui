import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  name = 'John Doe';
  email = 'johndoe@example.com';
  description = '';
  rating = 0;
  feedbackTags = [
    'Claridad',
    'Rapidez de respuesta',
    'Conocimiento del producto',
    'Calidad del servicio',
    'Tiempo de envío',
    'Relación calidad-precio',
    'Satisfacción general',
    'Servicio al cliente',
    'Disponibilidad del producto',
    'Condición del producto',
    'Soporte post-venta',
  ];
  selectedTags: string[] = [];
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  toggleSelection(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    } else {
      if (this.selectedTags.length < 3) {
        this.selectedTags.push(tag);
      }
    }
  }

  isSelected(tag: string) {
    return this.selectedTags.includes(tag);
  }

  loading = false;
  async generateLink() {}

  async submitFeedback() {
    this.loading = true;
    this.spinner.show();
    await this.delay(2000);
    this.spinner.hide();
    // url shorten example
    this.loading = false;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

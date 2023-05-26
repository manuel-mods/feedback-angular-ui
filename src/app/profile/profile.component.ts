import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  feedbacks_counts = 20;
  nombre = 'Juan Pérez';
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
  edad = 32;
  ubicacion = 'Madrid, España';
  feedbacks = [
    {
      profileImage: 'https://picsum.photos/200',
      username: 'John Doe',
      date: '01/01/2023',
      time: '12:00 PM',
      rating: 3,
      text: 'This is a great profile! Keep up the good work.',
    },
    {
      profileImage: 'https://picsum.photos/200',
      username: 'Jane Doe',
      date: '01/01/2023',
      time: '12:30 PM',
      rating: 4,
      text: 'I love the design of this profile. Very creative!',
    },
    {
      profileImage: 'https://picsum.photos/200',
      username: 'Jim Smith',
      date: '01/01/2023',
      time: '01:00 PM',
      rating: 5,
      text: 'This profile is simply amazing. I am impressed!',
    },
  ];

  feedbacksTable = [
    { id: 1, type: 'Venta', status: 'Completo', tools: '-' },
    { id: 2, type: 'Asesoría', status: 'Pendiente', tools: '-' },
    { id: 3, type: 'Servicio', status: 'Completo', tools: '-' },
  ];
  constructor(
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private clipboardService: ClipboardService
  ) {}

  @ViewChild('modalContent')
  private content: TemplateRef<any> | undefined;

  @ViewChild('modalContent2')
  private content2: TemplateRef<any> | undefined;

  @ViewChild('modalContent3')
  private content3: TemplateRef<any> | undefined;

  ngOnInit(): void {}
  ngbModalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
  };
  openModal() {
    this.modalService.open(this.content, this.ngbModalOptions);
  }
  openModal2() {
    this.modalService.open(this.content2, this.ngbModalOptions);
  }
  openModal3() {
    this.modalService.open(this.content3, this.ngbModalOptions);
  }
  urlGenerate = '';
  urlLoad = false;
  urlDone = false;
  async generateLink() {
    this.urlLoad = true;
    this.spinner.show();
    await this.delay(2000);
    this.spinner.hide();
    // url shorten example
    const url = 'https://feedb.app/123e4567-e89b-12d3-a456-426614174000';
    this.urlGenerate = url;
    this.urlDone = true;
  }

  deleteFeedback(id: number) {
    this.feedbacksTable = this.feedbacksTable.filter((feedback) => feedback.id !== id);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  copyToClipboard() {
    this.clipboardService.copyFromContent(this.urlGenerate);
  }
}

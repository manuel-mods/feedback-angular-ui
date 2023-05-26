import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/@shared/services/auth.service';
import { finalize } from 'rxjs/operators';

declare var Masonry: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  username = 'Usuario'; // Deberías obtener esto desde tu servicio de autenticación
  feedbacks = [
    { serviceType: 'Servicio 1', name: 'Feedback 1', description: 'Descripción 1', rating: 3, comment: 'Comentario 1' },
    // Más feedbacks aquí...
  ];
  user: any;
  constructor(private auth: AuthService) {
    this.auth.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    const grid = document.querySelector('.grid');
    console.log(grid);
    const a = new Masonry(grid, {
      // Opciones de Masonry
      itemSelector: '.grid-item',
      percentPosition: true,
    });
  }
  year = new Date().getFullYear();
}

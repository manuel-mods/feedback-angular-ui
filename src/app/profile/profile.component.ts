import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  feedbacks_counts = 20;
  nombre = 'Juan Pérez';
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
  constructor() {}

  ngOnInit(): void {}
}

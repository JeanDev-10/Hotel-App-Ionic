import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { ReservationsListComponent } from "../components/reservations-list/reservations-list.component";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, ReservationsListComponent]
})
export default class ReservationsPage implements OnInit {
  reservations: any[] = [
    {
      id: 2,
      date_start: "2025-01-30T22:16:45.000Z",
      date_end: "2025-01-30T22:16:45.000Z",
      price_total: 20,
      user_id: 2,
      room_id: 3,
      status_id: 1,
      user: {
        id: 2,
        name: "jean",
        lastname: "rodriguez",
        email: "jean@hotmail.com",
        password: "$2b$10$SqtYX3MYB8/5Unu6fefjB.aRoIRpNuF0s5klv22kz0GiTRVspNI4C",
        role_id: 2,
      },
      status_reservation: {
        id: 1,
        name: "Pendiente",
      },
      room: {
        id: 3,
        name: "Habitación Estándar",
        description: "Habitación cómoda y acogedora.",
        price: 22,
        type_id: 1,
        types_room: {
          id: 1,
          name: "Estándar",
        },
        images: [
          {
            id: 11,
            url: "https://via.placeholder.com/150",
            public_id: "asdsada",
            room_id: 3,
          },
        ],
      },
    },
    // Más reservaciones...
  ];

  constructor() { }

  ngOnInit() {
  }

}

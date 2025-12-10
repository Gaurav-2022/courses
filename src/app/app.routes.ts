import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movie } from './pages/movie/movie';
import { Showtime } from './pages/showtime/showtime';
import { SeatBox } from './components/seat-box/seat-box';
import { BookingConfirmation } from './pages/booking-confirmation/booking-confirmation';
import { MyBookings } from './pages/my-bookings/my-bookings';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "movies/:id", component: Movie },
    // { path: "movies", component: Movie },
    // { path: "movies", component: Movie },
    { path: "show/:id", component: Showtime },
    { path: "seats/:showId", component: SeatBox },
    { path: "booking-confirmation/:bookingId", component: BookingConfirmation },
    { path: "my-bookings", component: MyBookings },
  ];

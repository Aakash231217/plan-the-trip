export interface Destination {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
}

export interface BookingForm {
  name: string;
  email: string;
  destination: string;
  date: string;
  guests: number;
  message: string;
}

export interface Memory {
  _id: string;
  title: string;
  image: string;
  location: string;
  date: string;
}
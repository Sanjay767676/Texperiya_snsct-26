
export interface Event {
  id: string;
  title: string;
  description: string;
  prizePool: string;
  icon: string;
  category?: string;
}

export interface Domain {
  id: string;
  name: string;
  tagline: string;
  description: string;
  events: Event[];
  accentColor: string;
  bgLabel: string;
}

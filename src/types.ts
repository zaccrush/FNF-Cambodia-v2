
export interface Fight {
  id: string;
  opponent: string;
  opponentId: string;
  event: string;
  date: string;
  outcome: 'Win' | 'Loss' | 'Draw' | 'NC';
  method: string;
  round: number;
  time: string;
  videoUrl?: string;
  weightClass: string;
}

export interface Fighter {
  id: string;
  name: string;
  nameKhmer?: string;
  nickname: string;
  record: {
    wins: number;
    losses: number;
    draws: number;
    ko: number;
  };
  style: 'Kun Khmer' | 'MMA' | 'Muay Thai';
  hometown: string;
  age: number;
  height: string;
  weight: string;
  weightClass: string;
  reach?: string;
  bio: string;
  image: string;
  history: Fight[];
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface Gym {
  id: string;
  name: string;
  location: string;
  headCoach: string;
  description: string;
  facilities: string[];
  notableFighters: string[];
  image: string;
  facebook?: string;
  telegram?: string;
  phone?: string;
  email?: string;
  youtube?: string;
}

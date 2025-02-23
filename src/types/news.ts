interface News {
  id?: string;
  type: 'youtube' | 'image' | 'facebook' | 'instagram';
  url: string;
  title: string;
  description: string;
  timestamp: any;
}

export type { News }; 
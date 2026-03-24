import ALT from '@/assets/imgs/ai_app_learn_transform.jpeg';
import BLT from '@/assets/imgs/baking_learn_transform.jpeg';
import CLT from '@/assets/imgs/cooking_learn_transform.jpeg';
import MLT from '@/assets/imgs/mixology_learn_transform.jpeg';

export const useLearnTfData = (): { data: Array<LearnTf> } => {
  const data: Array<LearnTf> = [
    {
      id: '1',
      type: 'image',
      img: MLT,
    },
    {
      id: '2',
      type: 'text',
      tit: 'Hands-on\nand Practical',
      desc: 'The Beverage Preparation course gave me real-world skills I could apply immediately in a professional environment.',
      author: 'Michael R.',
    },
    {
      id: '3',
      type: 'image',
      img: BLT,
    },
    {
      id: '4',
      type: 'text',
      tit: 'Confidence\n in Baking',
      desc: 'I learned the fundamentals of baking from scratch and gained the confidence to create my own recipes.',
      author: 'Lena P.',
    },
    {
      id: '5',
      type: 'text',
      tit: 'Improved \nMy Cooking Skills',
      desc: 'Professional Cooking training helped me understand techniques, timing, and presentation in a much more structured way.',
      author: 'Samantha T.',
    },
    {
      id: '6',
      type: 'image',
      img: CLT,
    },
    {
      id: '7',
      type: 'text',
      tit: 'Practical\n AI Knowledge',
      desc: 'The AI Applications course made complex concepts easy to understand and helped me apply them in real projects.',
      author: 'Chris B.',
    },
    {
      id: '8',
      type: 'image',
      img: ALT,
    },
  ];
  return { data };
};

export type LearnTf = {
  id: string;
  type: string;
  tit?: string;
  desc?: string;
  img?: string;
  author?: string;
};

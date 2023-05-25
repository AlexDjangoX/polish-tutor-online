import {
  mobile,
  backend,
  creator,
  web,
  polishFlagTransparent,
  coatOfArms,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
  },
  {
    id: 'philosophy',
    title: 'Philosophy',
  },

  {
    id: 'teaching',
    title: 'Teaching',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'One-to-one tailored lessons',
    icon: web,
  },
  {
    title: 'From beginner to advanced',
    icon: mobile,
  },
  {
    title: 'Available across time zones',
    icon: backend,
  },
  {
    title: 'Expand your mind by learning about Polish Culture',
    icon: creator,
  },
];

const NationalSymbols = [
  {
    name: 'Flag 1',
    icon: polishFlagTransparent,
  },
  {
    name: 'Coat of Arms 1',
    icon: coatOfArms,
  },
  {
    name: 'Flag 2',
    icon: polishFlagTransparent,
  },
  {
    name: 'Flag 3',
    icon: polishFlagTransparent,
  },
  {
    name: 'Coat of Arms 2',
    icon: coatOfArms,
  },
  {
    name: 'Flag 4',
    icon: polishFlagTransparent,
  },
];

const philosophies = [
  {
    title: 'How do we learn Languages',
    company_name: 'Approach',
    icon: polishFlagTransparent,
    iconBg: '#fff',
    date: 'Approach and Attitude',
    points: [
      'Each language is a code waiting to be cracked',
      'Children effortlessly acquire languages, and we can learn from their care-free attitude and approach.',
      'Playing language games',
      'Read books appropriate to your level, A1 - C2',
      'Embrace a carefree mindset and embark on a language learning journey',
      'Ultimately, we learn languages by repeating, speaking, reading, listening, and thinking in the language',
    ],
  },
  {
    title: 'Benefits',
    company_name: 'Neuroplasticity',
    icon: polishFlagTransparent,
    iconBg: '#fff',
    date: 'Your Brain and Neuroplasticity',
    points: [
      'Boost brain power and improve memory',
      'Enhance the ability to multi-task (switch seamlessly between tasks).',
      'Sharpen the mind.',
      'Keep the mind sharper for longer.',
      'Enhance decision-making.',
    ],
  },
  {
    title: 'Setting Achievable Goals',
    company_name: 'Achieve',
    icon: polishFlagTransparent,
    iconBg: '#fff',
    date: 'Effort is Rewarded',
    points: [
      'Set effective language learning goals',
      'Envision the desired level of proficiency and reinforce it with a mental image',
      'Create a drawing of yourself holding a paper stating "I SPEAK (TARGET LANGUAGE) FLUENTLY!"',
      'Practice patience, enjoy the process, and acknowledge your achievements',
      'Focus on strengths, not grammatical errors, and strive for improvement',
      'Believe in yourself for faster progress',
      'Even imagine dreaming in the target language as your brain continues its work while you sleep.',
    ],
  },
  {
    title: 'Leverage latest Technologies',
    company_name: 'From Artificial to Real Intelligence',
    icon: polishFlagTransparent,
    iconBg: '#fff',
    date: 'Leverage Technologies',
    points: [
      'Say goodbye to awkward silences and panicked Google searches! ChatGPT can provide instant translations to make sure we are all on the same page (or, you know, the same słownik 😉).',
      'Grammar giving you a headache? No problem! ChatGPT can break down even the trickiest grammar rules into bite-sized, easy-to-digest pieces',
      'Need more practice materials? ChatGPT has access to a treasure trove of resources, so you will never run out of ways to practice your skills.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Dziękuję bardzo... i have been able to learn a lot in polish in a weeks time...it is because of your guidance and effort...thank you so much !! ',
    name: 'anuj.chopra2002',
    date: '2022-03-25',
  },
  {
    testimonial:
      'I have  been learning from Janusz for 6 months. He is an amazing tutor! He is always supportive and helps with my weaknesses. He customizes lessons for me and finds ways to improve areas I struggle with. He prioritizes understanding over speed. Janusz is highly engaging and I highly recommend him!',
    name: 'dvw113',
    date: '2021-11-13',
  },
  {
    testimonial:
      'Janusz has been my language tutor and guide for 2 years. It has been a difficult, but rewarding journey. Only the impossible is worth doing !!!! ',
    testimonial_2:
      'Jestem w stanie pracować i mieszkać w Polsce teraz, że umiem mówić po polsku!!!',
    name: 'Alexander Mc Lachlan',
    date: '2023-05-10',
  },
];

export { services, NationalSymbols, philosophies, testimonials };

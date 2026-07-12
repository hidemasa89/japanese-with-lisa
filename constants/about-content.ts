import type { Locale } from '@/types';

export interface MethodItem {
  title: string;
  description: string;
}

export interface AboutContent {
  methodItems: MethodItem[];
  qualifications: string[];
  hobbies: string[];
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    methodItems: [
      {
        title: 'Built around you',
        description:
          "No fixed textbook path — lessons follow your goals, whether that's JLPT, business, travel, or just curiosity.",
      },
      {
        title: 'Speaking every session',
        description:
          "You'll produce full sentences from lesson one, with corrections woven in gently rather than saved for the end.",
      },
      {
        title: 'Honest feedback',
        description:
          "Encouraging, but direct — you'll always know exactly what to work on next.",
      },
    ],
    qualifications: [
      'Certified Japanese Language Teacher (日本語教師)',
      'JLPT N1',
      '5+ years teaching students online, worldwide',
      'Specialized JLPT & business Japanese training',
    ],
    hobbies: ['Calligraphy', 'Matcha & coffee', 'Hiking', 'J-dramas', 'Baking'],
  },
  ja: {
    methodItems: [
      {
        title: 'あなたに合わせて設計',
        description:
          '決まった教科書通りには進めません。JLPT、ビジネス、旅行、あるいは純粋な興味など、あなたの目標に合わせてレッスンを組み立てます。',
      },
      {
        title: '毎回、実際に話す',
        description:
          '初回から文章で話す練習をします。訂正は最後にまとめてではなく、会話の中で自然に取り入れます。',
      },
      {
        title: '率直なフィードバック',
        description: '励ましながらも、率直に。次に何を練習すべきか、いつも明確にお伝えします。',
      },
    ],
    qualifications: [
      '日本語教師資格保有',
      'JLPT N1',
      'オンライン指導歴5年以上（世界中の生徒を指導）',
      'JLPT対策・ビジネス日本語の専門トレーニング',
    ],
    hobbies: ['書道', '抹茶とコーヒー', 'ハイキング', '日本のドラマ鑑賞', 'お菓子作り'],
  },
};

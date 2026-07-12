import type { Locale } from '@/types';

export interface FeatureContent {
  icon: 'sparkles' | 'messages' | 'award' | 'briefcase' | 'plane' | 'video';
  title: string;
  description: string;
}

export interface StatContent {
  key: 'students' | 'lessons' | 'countries';
  value: string;
}

export interface TestimonialContent {
  quote: string;
  name: string;
  meta: string;
}

export const features: Record<Locale, FeatureContent[]> = {
  en: [
    {
      icon: 'sparkles',
      title: 'Beginners welcome',
      description:
        "Never studied Japanese? Perfect. Lessons start from hiragana and everyday phrases — no prior knowledge assumed.",
    },
    {
      icon: 'messages',
      title: 'Conversation-focused',
      description:
        'Grammar supports the goal, not the other way around: you\u2019ll be speaking full sentences from lesson one.',
    },
    {
      icon: 'award',
      title: 'JLPT preparation',
      description:
        'Structured prep for N5–N1, with mock questions, kanji drills, and a study plan built around your test date.',
    },
    {
      icon: 'briefcase',
      title: 'Business Japanese',
      description:
        'Keigo, email etiquette, and meeting phrases for work in a Japanese-speaking environment.',
    },
    {
      icon: 'plane',
      title: 'Travel Japanese',
      description:
        'Order food, ask directions, and handle everyday situations with confidence before your trip.',
    },
    {
      icon: 'video',
      title: 'Online lessons',
      description:
        'Live, face-to-face lessons over Zoom or Google Meet — join from anywhere, no commute required.',
    },
  ],
  ja: [
    {
      icon: 'sparkles',
      title: '初心者歓迎',
      description: '日本語ゼロからでも大丈夫。ひらがなや日常フレーズから、無理なく始められます。',
    },
    {
      icon: 'messages',
      title: '会話中心',
      description: '文法は「話すため」の手段。初回のレッスンから、実際に文章で話す練習をします。',
    },
    {
      icon: 'award',
      title: 'JLPT対応',
      description: 'N5〜N1まで、模擬問題・漢字ドリル・試験日から逆算した学習計画で対策します。',
    },
    {
      icon: 'briefcase',
      title: 'ビジネス日本語',
      description: '敬語、メールの書き方、会議で使えるフレーズなど、職場で使う日本語を練習します。',
    },
    {
      icon: 'plane',
      title: '旅行日本語',
      description: '注文・道案内・トラブル対応など、旅行前に自信を持って使えるフレーズを身につけます。',
    },
    {
      icon: 'video',
      title: 'オンラインレッスン',
      description: 'ZoomまたはGoogle Meetによるライブレッスン。世界中どこからでも受講できます。',
    },
  ],
};

export const stats: Record<Locale, StatContent[]> = {
  en: [
    { key: 'students', value: '500+' },
    { key: 'lessons', value: '10,000+' },
    { key: 'countries', value: '40+' },
  ],
  ja: [
    { key: 'students', value: '500人以上' },
    { key: 'lessons', value: '10,000回以上' },
    { key: 'countries', value: '40カ国以上' },
  ],
};

// Placeholder testimonials for the template — swap in real student
// feedback (with permission) before launch.
export const testimonials: Record<Locale, TestimonialContent[]> = {
  en: [
    {
      quote:
        'I\u2019d tried apps for a year with no real progress. Three months of lessons with Lisa and I can hold a full conversation.',
      name: 'Amelia',
      meta: 'Learner from the UK · Conversation course',
    },
    {
      quote:
        'Lisa built my JLPT N3 study plan around my actual test date. I passed on the first try.',
      name: 'Marco',
      meta: 'Learner from Italy · JLPT course',
    },
    {
      quote:
        "My company transferred me to Tokyo with six weeks' notice. Lisa's business Japanese crash course got me through my first meetings.",
      name: 'Priya',
      meta: 'Learner from Canada · Business course',
    },
  ],
  ja: [
    {
      quote:
        'アプリだけで1年勉強しても伸び悩んでいましたが、Lisa先生のレッスンを3ヶ月受けたら、日常会話が続けられるようになりました。',
      name: 'Amelia',
      meta: 'イギリス在住 · 会話コース',
    },
    {
      quote: '試験日から逆算したJLPT N3の学習計画を組んでもらい、一発合格できました。',
      name: 'Marco',
      meta: 'イタリア在住 · JLPTコース',
    },
    {
      quote:
        '6週間後に東京転勤が決まり、ビジネス日本語の集中レッスンで最初の会議を乗り切ることができました。',
      name: 'Priya',
      meta: 'カナダ在住 · ビジネスコース',
    },
  ],
};

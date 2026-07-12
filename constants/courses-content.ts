import type { Locale } from '@/types';
import type { FeatureContent } from '@/constants/home-content';

export interface CourseContent {
  icon: FeatureContent['icon'];
  title: string;
  level: string;
  description: string;
  highlights: string[];
}

const formatTagsEn = ['1-on-1', 'Zoom', 'Google Meet'];
const formatTagsJa = ['マンツーマン', 'Zoom', 'Google Meet'];

export const courses: Record<Locale, CourseContent[]> = {
  en: [
    {
      icon: 'sparkles',
      title: 'Beginner Japanese',
      level: 'For complete beginners',
      description:
        'Hiragana, katakana, core grammar, and enough everyday vocabulary to start forming real sentences.',
      highlights: ['Hiragana & katakana', 'Everyday phrases', 'Basic grammar patterns'],
    },
    {
      icon: 'messages',
      title: 'Conversation Course',
      level: 'For beginner–advanced',
      description:
        'Structured practice for natural, flowing conversation — small talk, opinions, storytelling, and more.',
      highlights: ['Real-life scenarios', 'Natural expressions', 'Listening practice'],
    },
    {
      icon: 'award',
      title: 'JLPT Preparation',
      level: 'N5 through N1',
      description:
        'Grammar, vocabulary, and kanji drills mapped to your target level, with mock exam practice.',
      highlights: ['Mock test questions', 'Kanji & vocabulary drills', 'Study plan by exam date'],
    },
    {
      icon: 'briefcase',
      title: 'Business Japanese',
      level: 'Intermediate & up',
      description:
        'Keigo, email writing, and meeting language for working comfortably in a Japanese-speaking workplace.',
      highlights: ['Keigo (polite speech)', 'Email & documents', 'Meeting phrases'],
    },
    {
      icon: 'plane',
      title: 'Travel Japanese',
      level: 'For beginners',
      description:
        'The practical phrases you need for restaurants, transport, hotels, and everyday situations on a trip.',
      highlights: ['Ordering & shopping', 'Directions & transport', 'Handling the unexpected'],
    },
  ],
  ja: [
    {
      icon: 'sparkles',
      title: '初心者コース',
      level: '完全に初めての方向け',
      description: 'ひらがな・カタカナ、基本文法、日常会話に必要な語彙を身につけます。',
      highlights: ['ひらがな・カタカナ', '日常フレーズ', '基本文法パターン'],
    },
    {
      icon: 'messages',
      title: '会話コース',
      level: '初級〜上級',
      description: '雑談・意見交換・エピソードトークなど、自然な会話の流れを練習します。',
      highlights: ['実践的なシーン練習', '自然な表現', 'リスニング強化'],
    },
    {
      icon: 'award',
      title: 'JLPT対策コース',
      level: 'N5〜N1',
      description: '目標レベルに合わせた文法・語彙・漢字ドリルと、模擬試験対策を行います。',
      highlights: ['模擬試験問題', '漢字・語彙ドリル', '試験日から逆算した学習計画'],
    },
    {
      icon: 'briefcase',
      title: 'ビジネス日本語',
      level: '中級以上',
      description: '敬語、メール・文書作成、会議で使う表現など、職場で困らない日本語を練習します。',
      highlights: ['敬語', 'メール・文書', '会議フレーズ'],
    },
    {
      icon: 'plane',
      title: '旅行日本語',
      level: '初心者向け',
      description: 'レストラン・交通機関・ホテルなど、旅行中に役立つ実践フレーズを学びます。',
      highlights: ['注文・買い物', '道案内・交通機関', 'トラブル対応'],
    },
  ],
};

export const formatTags: Record<Locale, string[]> = {
  en: formatTagsEn,
  ja: formatTagsJa,
};

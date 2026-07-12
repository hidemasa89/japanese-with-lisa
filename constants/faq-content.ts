import type { Locale } from '@/types';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: 'Is this okay for a complete beginner?',
      answer:
        "Yes — most students start with zero Japanese. Lisa begins with hiragana, basic pronunciation, and everyday phrases, and adjusts pace to how quickly you're picking things up.",
    },
    {
      question: 'How long is a lesson, and how often should I take one?',
      answer:
        'Lessons typically run 45–60 minutes. Once a week is common for steady progress; twice a week works well if you\u2019re preparing for the JLPT or an upcoming move to Japan.',
    },
    {
      question: 'What platform do lessons happen on?',
      answer:
        'Zoom or Google Meet, whichever you prefer — both support screen sharing for slides, kanji practice, and shared documents.',
    },
    {
      question: 'What are the payment methods?',
      answer:
        'Payment details are being finalized alongside pricing (see the Pricing page). Get in touch and Lisa will confirm current options directly.',
    },
    {
      question: 'What is the cancellation policy?',
      answer:
        'Life happens — just give as much notice as you can. Specific cancellation terms will be confirmed when you book, so there are no surprises.',
    },
    {
      question: 'Do I need to buy textbooks or materials?',
      answer:
        'No purchase required to get started. Lisa provides original worksheets and slides tailored to your goals; specific textbooks are only suggested if they genuinely help your particular course.',
    },
  ],
  ja: [
    {
      question: '完全な初心者でも大丈夫ですか？',
      answer:
        'はい、ほとんどの生徒さんが日本語ゼロからスタートしています。ひらがな・発音・日常フレーズから始め、理解のスピードに合わせてペースを調整します。',
    },
    {
      question: 'レッスン時間はどのくらいですか？頻度の目安は？',
      answer:
        'レッスンは通常45〜60分です。着実に上達したい場合は週1回、JLPT対策や渡航準備を進めたい場合は週2回がおすすめです。',
    },
    {
      question: 'レッスンはどのプラットフォームで行いますか？',
      answer:
        'ZoomまたはGoogle Meet、ご希望の方をお選びいただけます。どちらも画面共有に対応しており、スライドや漢字練習、資料の共有がスムーズに行えます。',
    },
    {
      question: 'お支払い方法を教えてください。',
      answer:
        '料金プールと合わせて、現在お支払い方法を確定中です（料金ページをご参照ください）。お問い合わせいただければ、現在ご案内可能な内容をお伝えします。',
    },
    {
      question: 'キャンセルポリシーはありますか？',
      answer:
        '予定が変わることもありますので、できるだけ早めにご連絡ください。具体的なキャンセル規定はご予約時にご案内し、後から驚かれることのないようにしています。',
    },
    {
      question: '教材は購入する必要がありますか？',
      answer:
        '始めるにあたって教材の購入は不要です。目標に合わせたオリジナルのワークシートやスライドをLisaが用意します。特定の教材は、あなたのコースに本当に役立つ場合のみおすすめします。',
    },
  ],
};

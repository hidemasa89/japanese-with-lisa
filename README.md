# Learn Japanese with Lisa

日本語教師 Lisa の公式サイト。Next.js (App Router) + TypeScript + Tailwind CSS v4 +
shadcn/ui + next-intl (en/ja) + Supabase + React Hook Form + Zod。

## セットアップ

このサンドボックスにはネットワーク接続がないため、依存パッケージのインストールは
お手元の環境（または Vercel のビルド時）で行ってください。

```bash
npm install
cp .env.example .env.local   # Supabase の値は step 5 で設定
npm run dev
```

http://localhost:3000 を開く。

## ビルド / デプロイ

```bash
npm run build
npm start
```

Vercel にリポジトリを接続するだけでデプロイ可能。`.env.example` にある環境変数を
Vercel の Project Settings > Environment Variables に設定してください。

## Supabase セットアップ（ステップ⑤）

1. https://supabase.com でプロジェクトを新規作成。
2. SQL Editor で `supabase/migrations/0001_contact_messages.sql` の内容を実行
   （`contact_messages` テーブルを作成し、RLSで「INSERTのみ許可」を設定）。
3. Project Settings > API Keys から Project URL と Publishable key
   （表示されない場合はレガシーの anon key でも可）を取得。
4. `.env.local` に設定：
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
   ```
5. 送信されたメッセージは Supabase Dashboard の Table Editor から確認できます
   （RLSにより、サイト側からは一覧取得・閲覧はできない設計です）。

## ステップ⑧ 動作確認（サンドボックス内で実施した検証）

このサンドボックスはネットワーク接続がなく `npm install` ができないため、実際に
`next dev` を起動しての確認はできません。代わりに、以下を静的に検証済みです：

- TypeScript構文チェック（全83ファイル / 3,507行）— 実質的なエラー0件
  （残る5件は `@types/react` 未インストールによる誤検知と特定済み）
- `@/` インポート148件 → すべて実ファイルに解決することを確認
- `any` 型の使用 → プロジェクト全体で0件
- `messages/en.json` と `messages/ja.json` → 105キーずつ、翻訳漏れ0件
- 全 `page.tsx` に `export default` があることを確認
- SQLマイグレーション・JSON設定ファイルの構文チェック済み

## お手元で確認する手順

```bash
npm install
npm run lint
npm run type-check
npm run build   # 本番ビルドが通ることを確認
npm run dev     # http://localhost:3000 で実際の画面を確認
```

## 残タスク（Claudeでは用意できない、実際の情報が必要な項目）

- [ ] Supabaseプロジェクトを実際に作成し、URL・キーを `.env.local` に設定
- [ ] 本番ドメインを取得し、`constants/site.ts` の `url` を更新
- [ ] Lisaの実際の写真を `public/images/` に追加し、`AvatarPlaceholder` を `next/image` に差し替え
- [ ] 料金プランが決まり次第、Pricingページの内容を更新
- [ ] プライバシーポリシー・利用規約を実際の内容に差し替え（法律専門家のレビュー推奨）
- [ ] SNSリンクがあれば `constants/site.ts` の `social` に設定
- [ ] テスト用のダミー統計（500+ 満足した生徒数など）を実数値に更新

## 技術メモ

- **Next.js 16**: `middleware.ts` は `proxy.ts` にリネームされています（本プロジェクトは
  最初から `proxy.ts` を使用）。
- **Tailwind CSS v4**: `tailwind.config.ts` はなく、`app/globals.css` の `@theme` で
  デザイントークンを定義しています。
- **next-intl v4**: デフォルトロケールは `en`（初心者を含む世界中の学習者が対象のため）。
  `ja` は `/ja/...` プレフィックスあり、`en` はプレフィックスなし。
- **Motion**（旧 Framer Motion）: `motion/react` からインポート。
- **Supabase**: 新しい「publishable key」命名を使用（従来の anon key と同じ役割）。
  RLSにより `contact_messages` は INSERT のみ許可、SELECT/UPDATE/DELETE は不可。
- カラーシステムは `app/globals.css` 冒頭のコメント参照（sakura / beni / sumi / washi / kinari）。

## 進捗

- [x] ① プロジェクト作成
- [x] ② ディレクトリ作成
- [x] ③ 共通コンポーネント
- [x] ④ ページ作成
- [x] ⑤ Supabase 設定
- [x] ⑥ フォーム
- [x] ⑦ SEO
- [x] ⑧ 動作確認

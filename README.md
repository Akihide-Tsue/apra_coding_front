# 面接用コーディング課題

## 環境構築

まずはクローンをお願いします。

```bash
git clone https://github.com/Akihide-Tsue/apra_coding_front.git
```

起動コマンド

```bash
yarn
yarn dev
```

※ yarnのインストールが必要な場合は

```bash
npm install -g yarn
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 課題内容

[サンプル](https://apra-coding-front-7r2u-git-master-atsueapracojps-projects.vercel.app/)を参照し、モックのAPIから取得したデータを使用して同じUIを実装して下さい。  
cssはおおまかな目測で問題ありません。

## チェックポイント

1.UIが正しい順番で表示できているか  
2.クリック時の遷移を正しく実装できているか

## 補足

1.取得したuserListの中にprofileのidと一致するデータが含まれる場合は1番目に表示して下さい。  
2.合計で6つのリンクを表示して下さい。遷移先はサンプルに従って下さい。  
3.idはフェッチごとに変わります。定期的にrefetchしています。  
4.手を加えるファイルは`/src/pages/index.tsx`だけで大丈夫です。

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

ローカル環境 [http://localhost:3000](http://localhost:3000) を立ち上げる。

## 課題内容

[サンプル](https://apra-coding-front-7r2u-git-master-atsueapracojps-projects.vercel.app/)を参照し、モックのAPIから取得したデータを使用して同じUIを実装して下さい。  

修正対象のファイルはこちらです。  
`src/pages/index.tsx`

- マージン・パディングの数値は問いません。8~24pxなど現実的な数値を設定してください。
- 背景色は白、枠線は黒、テキストカラーも黒で設定してください。  

※CSSはおおまかな目測で問題ありません。


## チェックポイント

1. 一覧表示できているか
2. 一覧の各アイテムが正しい順番で表示できているか  
3. クリック時の遷移を正しく実装できているか

## 補足

1. モックのAPIはuserListとprofileの２種類が使用されています。それぞれ、userListはユーザー一覧、profileは自身のユーザー情報を取得します。
2. 取得したuserListの中にprofileのidと一致するデータが含まれる場合は1番目に表示して下さい。  
3. 一覧に合計で6つのアイテムを表示して下さい。遷移先は[サンプル](https://apra-coding-front-7r2u-git-master-atsueapracojps-projects.vercel.app/)に従って下さい。  
4. idは取得したデータごとに変わります。定期的にデータの再取得が行われています。

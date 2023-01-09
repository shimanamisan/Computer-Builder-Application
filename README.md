# Computer-Builder-Application

Recursion Project4 -Computer Builder-

# Description

コンピュータサイエンスを学習できるプラットフォーム、Recursion の課題のアプリです。

# Features

必要なコンピュータのパーツを選択して、最終的にゲーミング PC と作業用のスコアを算出して比較するアプリケーションです。

パーツのデータは API から取得して表示しています。

## DEMO:

![demo-movie](https://user-images.githubusercontent.com/49751604/211248237-cd215162-3f3d-4e70-b314-e8c9c2257f92.gif)

# Pages URL

[https://demo-app.hn-pgtech.com/computer-builder-application/](https://demo-app.hn-pgtech.com/computer-builder-application/)

# Person-hour

- 画面コーディング: 約 3 時間
- 実装（JavaScript）： 約 20 時間
- TypeScript へ変換：約 5 時間
- ESLint など調整：約 2 時間

# Points that have been devised

- コンピュータのスコアを表示する部分にスライダーを実装
- MVCモデルに軽量DDDを適応
- できるだけ単一責務のクラスを意識して実装
- 値の処理は ValueObject にまとめて不変になるように意識
- typedoc でコードからドキュメントが作成されるようにした
  - [https://shimanamisan.github.io/Computer-Builder-Application/modules.html](https://shimanamisan.github.io/Computer-Builder-Application/modules.html)

# Improvements

- 冗長と思われる書き方をしている箇所があるので、小規模なアプリケーションなのでもっとまとめて良かったかもしれない
- `plugin:@typescript-eslint/recommended`のルールで`warning  Forbidden non-null assertion`が出ている箇所がある

# Installation

```bash
$ git clone git@github.com:shimanamisan/Computer-Builder-Application.git

$ cd Computer-Builder-Application

$ yarn install

# Webpack DevServer Start
$ yarn run start

# Development Build
$ yarn run dev

# Production Build
$ yarn run prod

# Code Format
$ yarn run format

# Start Linter
$ yarn run lint
```

# Author

[@hn_pgtech](https://twitter.com/hn_pgtech)

# License

The MIT License (MIT)

Copyright (c) since 2022 shimanamisan All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

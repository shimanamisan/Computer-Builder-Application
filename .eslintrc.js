module.exports = {
  // この階層よりも親階層のディレクトリを探しに行かなくなる
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // 検証するJavaScriptの実行環境を指定する
  env: {
    // ブラウザで動作するJavaScriptなのかNode.jsで動作するJavaScriptなのか指定する
    browser: true, // console.log() などを使用してもエラーとならない
    es2021: true, // es2020までの構文を利用してもエラーとならない
    node: true,
  },
  // 外部で提供されるルールを適応させる
  // extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  // ルールを指定する
  // extendsで指定したルールと重複した場合はこちらの設定が有効になる
  rules: {
    'no-console': 'off',
    'prefer-const': 'error', // 更新をしない変数の宣言にconst以外が指定されていたらエラーが発生するルール
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  parserOptions: {
    sourceType: 'module', // import, export などのesmodulesの構文を利用してもエラーとならない
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },
};

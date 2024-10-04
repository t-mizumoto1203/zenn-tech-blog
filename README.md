## 事前準備

[nodebrew](https://formulae.brew.sh/formula/nodebrew) 等で node.js をインストールしてください<br/>
Node.js 14 以上が必要です

### Zenn CLI 等をインストールします

```bash
$ npm i
```

## 記事の作成

### 1. Zenn CLI で記事を作成します

```bash
$ npm run new-article
```

`articles`は以下にマークダウンファイルが作成されます<br/>
また、`articles`内のファイル名は記事の URL になります（そのままで）

### 2. 記事をプレビューします

```bash
$ npm run preview
```

プレビュー画面にはマークダウン記法や画像アップロード方法などが記載されています

## 記事の公開

記事内の`published`を`true`に変更してください<br/>


## フルスクリーンキャプチャ方法

### Google Chromeの場合

1. [Command] + [Option] + [i]を押下し、デベロッパーツールを開く

<img width="480" src="/readme_images/full_screen_capture/developer_tools.png" alt="デベロッパーツール" />

2. 右上の３点リーダーより、デベロッパーツールをフローティングウィンドウにする

<img width="480" src="/readme_images/full_screen_capture/floating_window.png" alt="フローティングウィンドウ" />


3. [Command] + [Shift] + [p]を押下し、検索バーが出てくるので`full`と入力し、`Capture full size screenshot`を選択する

<img width="480" src="/readme_images/full_screen_capture/search.png" alt="検索" />

4. フルスクリーンキャプチャがダウンロードされるので完了

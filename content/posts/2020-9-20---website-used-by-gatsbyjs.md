---
title: gatsby.jsを使ったウェブサイト構築
date: "2020-09-20T22:00:00.000Z"
template: "post"
draft: false
slug: "website-used-by-gatsbyjs"
category: "gatsby.js"
tags:
  - "gatsby.js"
  - "Netlify"
description: "はてなブログも続けて半年ほど経ったので、そろそろ自分のブログを作ることにしました。そこで気になっていた「静的サイトジェネレーター」を今回使ってみることにしました。ありがとう、ギャッツビー。"
socialImage: "/media/42-line-bible.jpg"
---

- [gatsbyをインストールしてブラウザに表示](#gatsbyをインストールしてブラウザに表示)
- [ブログをGitHubにプッシュ](#ブログをGitHubにプッシュ)
- [Netlifyでホスティング](#Netlifyでホスティング)
- [おわりに](#おわりに)


そろそろ自分のサイト作りたいと思っていたいので  
気になっていたGatsbyを使ってみました！  

## gatsbyをインストールしてブラウザに表示

まずgatsbyをインストールします。  
```
$ npm install -g gatsby-cli
```

インストールできたかを確認
```
$ gatsby --help
```

(僕の場合、なぜかインストールできませんでした。)
```
zsh: command not found: gatsby
```
`gatsby -h`で動作確認しても上記のように表示があった場合は以下の二点を試してみてください。  
```
npm config delete prefix
npm config set prefix /usr/local
```



https://qiita.com/takumi1005/items/28b74aa36cf47c0916e7


公式が専用のスターターを準備してくれていますので、好きなスターターを洗濯して`new`します  
wordpressのようにテーマが準備されている感覚ですね  
![42-line-bible.jpg](/media/42-line-bible.jpg)
```
$ gatsby new tamakipedia gatsby new gatsby-starter-lumen https://github.com/alxshelepenok/gatsby-starter-lumen

```
`hello-world`がサイト名で`https~`がスターターのurlです。  
スターターは以下のリンクから選択できます。  
https://www.gatsbyjs.com/starters/


作成したブログのディレクトリに移動してローカルで起動！
```
$ cd my-blog
$ gatsby develop
```
そうすると`localhost:8000`で作成したブログが確認できます。  

![42-line-bible.jpg](/media/42-line-bible.jpg)


## ブログをGitHubにプッシュ 
作成したブログをホスティングして公開してくれるサービスNetlifyを使うために、  
まずはGitHubにリポジトリを作ってプッシュします。  
```
git init
git add .
git commit -m "Initial commit"
```
```
git remote add origin https://github.com/yourname/your-blog-name.git
git push -u origin master
```

## Netlifyでホスティング

無料でホスティングしてくれるサービスNetlify
https://www.netlify.com/
アカウントを登録して`new site from git`をクリック  
![42-line-bible.jpg](/media/42-line-bible.jpg)

githubを選択します。  
![42-line-bible.jpg](/media/42-line-bible.jpg)

デプロイしたいリポジトリを選択します。  
![42-line-bible.jpg](/media/42-line-bible.jpg)

Build Command の項目は自動的に gatsby build となっていますので、  
そのままDeploy Siteボタンを押します。  
![42-line-bible.jpg](/media/42-line-bible.jpg)

これでデプロイ完了です。  
![42-line-bible.jpg](/media/42-line-bible.jpg)

この場合だと
https://tamakipedia.netlify.app/  
こちらにアクセスすると自分のブログが確認できるようになります。  
もちろんこのサイトなのです(笑)  


## おわりに
今回出てきたよくからなかった単語たちです。 

`github CLI`  
 - コマンドライン上でGitHubの操作を行えるCLIツールのことです。今年の七月にリリースされました。リポジトリやイシューの操作もコマンドラインで完結です。    
github  
https://github.com/cli/cli
参考記事    
https://qiita.com/ryo2132/items/2a29dd7b1627af064d7b

`npm config delete prefix`  
 - ここでいうprefixとはnpmのグローバルパッケージのありかを教えてくれるパスのことです。`npm config list`でグローバルパッケージのインストール情報を確認してみましょう。 

```
 ❯ npm config list
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.14.5 node/v14.4.0 darwin x64"

; userconfig /Users/kotamaki/.npmrc
prefix = "/usr/local"    //グローバルのパス

; node bin location = /Users/kotamaki/.anyenv/envs/nodenv/versions/14.4.0/bin/node
; cwd = /Users/kotamaki/Documents/blogs
; HOME = /Users/kotamaki
; "npm config ls -l" to show all defaults.

   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New patch version of npm available! 6.14.5 → 6.14.8       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.14.8   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

```

 上記のようにグローバルパッケージのパスが記載されています。  
 今回はパスを通すために`delete prefix`し、`set prefix /usr/local` し直しました。  
 `get prefix`で現在のprefixを確認することもできます。  



Gatsby公式  
https://www.gatsbyjs.com/#gatsby-is-fast

Gatsby Starters  
https://www.gatsbyjs.com/starters/

グローバルパッケージの場所を変更する(記事)
https://www.webprofessional.jp/beginners-guide-node-package-manager/

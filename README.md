# quote
  forked by [Quote Tool](https://github.com/editor-js/quote)

## fork先からの変更
### data
  ```javascript
  {
    "type" : "quote",
    "data" : {
        "text" : "The unexamined life is not worth living.",
        "caption" : "Socrates",
        // 標準ライブラリでは作動しないので削除
        "alignment" : "left"
    }
  }
  ```
  この変更に伴ってtoolbox内で左寄せ右寄せは存在しなくなる。

### style
  background-colorなどが本体のカラーシステムと離れているため変更


## config
  ```javascript
    var editor = EditorJS({
      ...

      tools: {
        ...
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
      },

      ...
    });
  ```
Enter a quoteとQuote\'s authorをi18nで変更させることができないので注意

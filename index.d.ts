import type {
    BlockTune,
    BlockTool,
    BlockToolConstructable,
    BlockToolConstructorOptions
} from '@editorjs/editorjs';

/*
 * @class Quote
 * @classdesc Quote Tool for Editor.js
 * @property {QuoteData} data - Tool`s input and output data
 * @propert {object} api - Editor.js API instance
 *
 * @typedef {object} QuoteData
 * @description Quote Tool`s input and output data
 * @property {string} text - quote`s text
 * @property {string} caption - quote`s caption
 * @property {'center'|'left'} alignment - quote`s alignment
 */
export type QuoteData = {
  text: string
  caption: string
  alignment: 'center'|'left'
}

/*
 * @typedef {object} QuoteConfig
 * @description Quote Tool`s initial configuration
 * @property {string} quotePlaceholder - placeholder to show in quote`s text input
 * @property {string} captionPlaceholder - placeholder to show in quote`s caption input
 * @property {'center'|'left'} defaultAlignment - alignment to use as default
 */
export type QuoteConfig = {
  quotePlaceholder?: string
  captionPlaceholder?: string
  defaultAlignment?: 'center'|'left'
}

/*
  * @typedef {object} TunesMenuConfig
 * @property {string} icon - menu item icon
 * @property {string} label - menu item label
 * @property {boolean} isActive - true if item should be in active state
 * @property {boolean} closeOnActivate - if true tunes menu should close once any item is selected
 * @property {() => void} onActivate - item activation callback
 */
/* 機能しないため削除 */
// export type TunesMenuConfig = {
//   icon: string
//   label: string
//   isActive: boolean
//   closeOnActivate: boolean
//   onActivate: () => void
// }

declare class Quote implements BlockToolConstructable {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported(): true

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox(): {
    icon: string
    title: string
  }

  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless(): boolean

  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks(): boolean

  /**
   * Default placeholder for quote text
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUOTE_PLACEHOLDER(): string

  /**
   * Default placeholder for quote caption
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_CAPTION_PLACEHOLDER(): string

  /**
   * Allowed quote alignments
   *
   * @public
   * @returns {{left: string, center: string}}
   */
  static get ALIGNMENTS(): {
    left: 'left'
    center: 'center'
  }

  /**
   * Default quote alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT(): string

  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig(): {
    /**
     * To create Quote data from string, simple fill 'text' property
     */
    import: 'text'
    /**
     * To create string from Quote data, concatenate text and caption
     *
     * @param {QuoteData} quoteData
     * @returns {string}
     */
    export: (quoteData: QuoteData) => string
  }

  /**
   * Tool`s styles
   *
   * @returns {{baseClass: string, wrapper: string, quote: string, input: string, caption: string}}
   */
  get CSS(): {
    baseClass: string
    wrapper: string
    text: string
    input: string
    caption: string
  }

  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get settings(): Array<{
    name: string
    icon: string
  }>

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: QuoteData, config: QuoteConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  new(
    data: QuoteData,
    config: BlockToolConstructorOptions<
      QuoteData,
      QuoteConfig
    >,
    api: Object
  ): BlockTool

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render(): Element

  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(quoteElement: HTMLDivElement): QuoteData

  /**
   * Sanitizer rules
   */
  static get sanitize(): {
    text: {
      br: true
    }
    caption: {
      br: true
    }
    alignment: {}
  }

  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   *
   * @returns {TunesMenuConfig}
   *
   */
  renderSettings(): Array<ReturnType<BlockTune['render']>>

  /**
   * Toggle quote`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleTune(tune: string)

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(tagName: string, classNames: Array<string> | string | null, attributes: Object): Element
}

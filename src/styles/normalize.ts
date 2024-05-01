import { css } from 'styled-components';

export const normalize = css`
  html {
    line-height: 1.15; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    padding: 0;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  figcaption,
  figure,
  main {
    /* 1 */
    display: block;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: 'DM Sans', 'Roboto', 'sans-serif'; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  code,
  kbd,
  samp {
    font-family: 'DM Sans', 'Roboto', 'sans-serif'; /* 1 */
    font-size: 1em; /* 2 */
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: 'DM Sans', 'Roboto', 'sans-serif'; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  html [type="button"], /* 1 */
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* 2 */
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details, /* 1 */
  menu {
    display: block;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${p => p.theme.color.text};
    -webkit-box-shadow: 0 0 0px 1000px
      ${({ theme }) => theme.color.inputBackground} inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  pre::-webkit-scrollbar {
    background-color: ${p => p.theme.color.additionalText};
  }
  pre::-webkit-scrollbar-button {
    background-color: ${p => p.theme.color.colorScrollbar};
  }
  pre::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.color.colorScrollbar};
  }
`;
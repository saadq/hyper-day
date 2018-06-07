const black = '#000000'
const white = '#FFFFFF'
const lightGray = '#868e96'
const darkGray = '#555d65'
const red = '#ff6b6b'
const yellow = '#fcc419'
const green = '#51cf66'

const foregroundColor = darkGray
const backgroundColor = white
const borderColor = white
const cursorColor = darkGray
const activeColor = '#212529'

const colors = {
  black,
  white,
  red: red,
  yellow: yellow,
  green: green,
  blue: lightGray,
  magenta: darkGray,
  cyan: darkGray,
  lightBlack: darkGray,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: darkGray,
  lightMagenta: darkGray,
  lightCyan: darkGray,
  colorCubes: white,
  grayscale: darkGray
}

exports.decorateConfig = config =>
  Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
    ${config.termCSS || ''}
    .cursor-node {
      border-left: 2px solid;
    }
    ::selection {
      background: #eee !important;
    }
  `,
    css: `
      ${config.css || ''}
      .tab_tab {
        font-size: 11px;
        text-transform: uppercase;
        margin-top: -1px;
      }
      .tab_tab.tab_active {
        color: ${activeColor};
        font-weight: bold;
      }
      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${lightGray};
        opacity: .5;
        transform: scaleX(0);
        will-change: transform;
      }
      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 400ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  })

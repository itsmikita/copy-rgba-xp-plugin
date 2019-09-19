const { error } = require( "./node_modules/@adobe/xd-plugin-toolkit/lib/dialogs.js" );
const { copyText } = require( "clipboard" );

const getRgbaValues = ( color ) => {
  const { r, g, b, a } = color;
  return `rgba( ${ r }, ${ g }, ${ b }, ${ Math.round( a / 255 * 100 ) / 100 } )`;
};

const copyRgbaFillValues = ( selection ) => {
  try {
    if( ! selection.items.length ) {
      throw new Error( "Select an object to copy rgba() values from." );
    }
    const rgba = getRgbaValues( selection.items[ 0 ].fill );
    copyText( rgba );
  } catch( { message } ) {
    error( "Could not copy fill RGBA values", message );
  }
};

const copyRgbaBorderValues = ( selection ) => {
  try {
    if( !selection.items.length ) {
      throw new Error( "Select an object to copy rgba() values from." );
    }
    const rgba = getRgbaValues( selection.items[ 0 ].border );
    copyText( rgba );
  } catch( { message } ) {
    error( "Could not copy border RGBA values", message );
  }
};

module.exports = {
  commands: {
    copyRgbaFill: copyRgbaFillValues,
    copyRgbaBorder: copyRgbaBorderValues
  }
};

/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  grey:'#a19f9d',
  lightGreen:'#e9f8ef',
  error: '#dc3545',
  orange:'#fed9cc',
  msg:'#dd4f1b',
  blue:'#2c7fe0',
  lightBlue:'#eaf3fc',
 orange:'#ffb347' ,
  lightOrange:'#fff8ed',
  brown:'#d83b01',
  lightBrown:'#ffece6',
  purple:'#e02cc3',
  lightPurple:'#fceaf9',
  violet:'#8d47ff',
  lightViolet:'#f4edff'

}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 25,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}

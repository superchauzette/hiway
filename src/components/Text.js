import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
} from 'styled-system'

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)
export const textDecorationLine = props =>
  props.textDecorationLine
    ? { textDecorationLine: props.textDecorationLine }
    : null

const Text = styled.p`
  font-family: "Circular-Std-Book";
  ${space} ${color} ${fontSize} ${fontWeight} ${textAlign} ${lineHeight} ${textDecorationLine};
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

export default Text

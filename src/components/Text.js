import styled from 'styled-components'
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
  ${width} ${space} ${color} ${fontSize} ${fontWeight} ${textAlign} ${lineHeight} ${textDecorationLine};
`

Text.displayName = 'Text'

export default Text

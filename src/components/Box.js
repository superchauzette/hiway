import styled from 'styled-components'
import {
  space,
  width,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  propTypes,
  position,
  height,
} from 'styled-system'

const Box = styled.div`
  ${space} ${width} ${color}  ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection} ${position} ${height};
`

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.color,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
}

Box.displayName = 'Box'

export default Box

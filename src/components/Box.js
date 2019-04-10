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
  textAlign,
} from 'styled-system'

const backgroundImage = props =>
  props.backgroundImage
    ? {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }
    : null

const getDisplay = props => `display: ${props.display || 'flex'};`

const Box = styled.div`
  ${getDisplay}
  ${space} ${width} ${color} ${textAlign} ${backgroundImage} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection} ${position} ${height};
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

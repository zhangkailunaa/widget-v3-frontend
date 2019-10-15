import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import env from 'UTILS/env'

const { assetsPath } = env

const Img = styled(({ ...props }) => <img {...props} />)`
  width: ${props => props.width || '1em'};
  height: ${props => props.height || '1em'};
  margin: ${props => props.m || 0};
  color: ${props => props.color};
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  flex: 0 0 auto;
`

interface PropsType {
  name: string
  className?: string
  width?: string
  height?: string
  m?: string
  color?: string
}

const Icon: React.FC<PropsType> = props => {
  const themeContext = useContext(ThemeContext)
  const theme = themeContext.palette.icon || 'white'
  const { name, ...otherProps } = props
  return (
    <Img
      {...otherProps}
      src={`${assetsPath}/assets/img/${theme}/56/${name}.svg`}
    ></Img>
  )
}

export default Icon

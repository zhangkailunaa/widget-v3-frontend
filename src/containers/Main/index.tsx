import React from 'react'
import styled from 'styled-components'
import { MainUiLayout, BaseUiLayoutOption } from 'TYPES/Widget'
import TileContainer from 'COMPONENTS/base/TileContainer'
import Typography from 'COMPONENTS/base/Typography'

interface MainUiProps {
  options: BaseUiLayoutOption
}

const StyledTileContainer = styled(TileContainer)`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
`

const Grow = styled.div`
  flex: 1 0 auto;
`

const Main: React.FC<MainUiProps> = props => {
  const { options } = props
  const { size, data } = options
  const [column, row] = size

  const {
    location,
    temperature,
    text,
    today,
    updateAt
  } = (data as MainUiLayout[])[0]
  const { low, high } = today

  console.log(data[0])

  return (
    <StyledTileContainer className="sw-ui-main" column={column} row={row}>
      <Typography>
        {location}{' '}
        <Typography component="span" variant="caption" color="textSecondary">
          {updateAt}
        </Typography>
      </Typography>
      <Grow />
      <Typography variant="h2" align="center">
        {temperature}
      </Typography>
      <Typography variant="caption" align="center">
        {text} {low}~{high}
      </Typography>
    </StyledTileContainer>
  )
}

export default Main

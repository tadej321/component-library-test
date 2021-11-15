import styled from 'styled-components'


export const Icon = ({ active, icon, margin, width, height, open, onClick, mobileWidth, color }) => {

  return(
    <Svg color={color} onClick={onClick} open={open} width={width} height={height} margin={margin} active={active}>
      <use xlinkHref={`../raw/${icon}.svg#${icon}`} />
    </Svg>
  )
}

const Svg = styled.svg(props => ({
  margin: props.margin,
  width: props.width ? props.width : 15,
  minWidth: props.width ? props.width : 15,
  height: props.height ? props.height : 15,
  minHeight: props.height ? props.height : 15,
  transform: props.open ? "rotate(180deg)" : "rotate(0deg)",
  cursor:"pointer",
  stroke: props.color ? props.color : "currentColor",
  "@media (max-width: 650px)": {
    width: props.mobileWidth ? props.mobileWidth : props.width,
    minWidth: props.mobileWidth ? props.mobileWidth : props.width,
    height: props.mobileWidth  ? props.mobileWidth : props.height,
    minHeight: props.mobileWidth  ? props.mobileWidth : props.height,
  },
}));

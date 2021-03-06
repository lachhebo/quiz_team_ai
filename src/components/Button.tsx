import styled from "styled-components"


export const COLORS = {
  white: "#ffffff",
  black: "#1B1A1A",
}

interface Props {
  $selected?: boolean
  $color?: string
  $small?: boolean
}

const Button = styled.button<Props>`
  display: block;
  font-family: 'Boogaloo';
  font-size: 20px;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid ${COLORS.black};
  padding: ${({ $small }) => ($small ? "8px 15px" : "15px 30px")};
  margin: 10px;
  &,
  span {
    transition-duration: 0.2s;
  }
  &:not(:disabled):hover {
    color: ${({ $color, $selected }) => ($selected ? COLORS.white : $color)};
    border-color: ${({ $color, $selected }) => ($selected ? COLORS.white : $color)};
    span {
      border-left-color: ${({ $color }) => $color};
    }
    transform: translateY(2px);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    box-shadow: 0 0 0 5px ${({ $color }) => $color || "#666666"}66;
  }
`

export default Button

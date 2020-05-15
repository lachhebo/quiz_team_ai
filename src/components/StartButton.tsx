import styled from "styled-components"
import Button from "./Button"

interface ButtonProps {
  $selected?: boolean
  $color: string
}

const StartButton = styled(Button)<ButtonProps>`
  display: block;
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
  `

export default StartButton

import React from "react"
import styled from "styled-components"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Title>Hello world!</Title>
      <Header headerText="About Gatsby" />
    </div>
  )
}

const Title = styled.h1`
  color: purple;
`

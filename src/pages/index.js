import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Title>Hello world!</Title>
    </div>
  )
}

const Title = styled.h1`
  color: red;
`

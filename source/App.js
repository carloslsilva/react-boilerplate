import React from 'react'
import styled from 'styled-components'
import { Title } from './components/Title'
import { Paragraph } from './components/Paragraph'
import { Picture } from './components/Picture'
import picture from './assets/picture.jpg'

export const App = props => (
  <>
    <header>
      <Title>React Boilerplate</Title>
    </header>
    <Main>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Picture src={picture} />
    </Main>
  </>
)

const Main = styled.main`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

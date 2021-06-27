import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from './components/Title'
import { Paragraph } from './components/Paragraph'
import { Picture } from './components/Picture'
import picture from './assets/picture.jpg'

export const App = props => (
  <BrowserRouter>
    <Nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/another'>Another</Link>
        </li>
      </ul>
    </Nav>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/another'>
        <Another />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
)

const Home = props => (
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

const Another = props => (
  <>
    <header>
      <Title>Another Page</Title>
    </header>
    <Main>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </Paragraph>
      <Picture src={picture} />
    </Main>
  </>
)

const NotFound = props => (
  <>
    <header>
      <Title>Not Found Page</Title>
    </header>
    <Main>
      <Paragraph>Oppss!!!</Paragraph>
    </Main>
  </>
)

const Main = styled.main`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Nav = styled.nav`
  margin-top: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin: 0;
    padding: 0;
    align-items: center;
    list-style: none;
  }
  li + li {
    margin-left: 1rem;
  }
  a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 250ms ease;
    &:hover {
      color: black;
    }
  }
`

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Title from './components/Title'
import PageContent from './components/PageContent'
import picture from './assets/picture.jpg'
import moon from './assets/moon.jpg'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact strict path='/another'>
        <Another />
      </Route>
      <Route exact strict path='/'>
        <Home />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App

const Home = () => (
  <Layout>
    <PageContent
      title='React Boilerplate'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.'
      imgUrl={picture}
    />
  </Layout>
)

const Another = () => (
  <Layout>
    <PageContent
      title='Another Page'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.'
      imgUrl={moon}
    />
  </Layout>
)

const NotFound = () => (
  <Layout>
    <Title>Not Found Page</Title>
  </Layout>
)

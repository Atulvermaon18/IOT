import React, {
  Component
} from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import Headers from './components/Header'
import {
  Route,
  Link
} from 'react-router-dom';
import indexRoutes from "./routes/routes.js";

class App extends Component {
  state = {
    visible: false
  }

  handleButtonClick = () => {
    console.log(this.state.visible)
    this.setState({
      visible: !this.state.visible
    })

  }

  handleSidebarHide = () => this.setState({
    visible: false
  })

  render() {
    const {
      visible
    } = this.state
    return ( <
      div >
      <
      Headers toggleSideBar = {
        this.handleButtonClick
      }
      />

      <
      Sidebar.Pushable as = {
        Segment
      } >
      <
      Sidebar as = {
        Menu
      }
      animation = 'overlay'
      icon = 'labeled'
      inverted onHide = {
        this.handleSidebarHide
      }
      onClick = {
        this.handleSidebarHide
      }
      vertical visible = {
        visible
      }
      width = 'thin' >
      <
      Menu.Item >
      <
      Link to = "/home" >
      <
      Icon name = 'home' / >
      Home <
      /Link> < /
      Menu.Item > <
      Menu.Item >

      <
      Link to = "/contact" >
      <
      Icon name = 'gamepad' / > Contact < /Link> < /
      Menu.Item > <
      /Sidebar>

      <
      Sidebar.Pusher dimmed = {
        visible
      } >
      <
      Segment basic > {
        indexRoutes.map((prop, key) => {
          return <Route path = {
            prop.path
          }
          component = {
            prop.component
          }
          key = {
            key
          }
          />;
        })
      } <
      /Segment> < /
      Sidebar.Pusher > <
      /Sidebar.Pushable>

      <
      /div>
    );
  }
}

export default App;
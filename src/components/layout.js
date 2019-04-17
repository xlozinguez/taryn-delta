import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core'
import Header from "./header"
import "./layout.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2d761c',
      main: '#41a928',
      dark: '#67ba53',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a9a9a9',
      main: '#f2f2f2',
      dark: '#f4f4f4',
      contrastText: '#000',
    },
  },
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '90%',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

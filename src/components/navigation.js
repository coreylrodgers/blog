import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Navigation extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(25),
          padding: `${rhythm(0.5)} ${rhythm(2 / 4)}`,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog">Projects</Link>
      </div>
    )
  }
}

export default Navigation

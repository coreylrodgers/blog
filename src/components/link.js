import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Link extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(2 / 4)}`,
        }}
      >
        {" "}
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    )
  }
}

export default Link

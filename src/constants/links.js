import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about me",
    url: "/aboutme",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  // {
  //   id: 4,
  //   text: "blog",
  //   url: "/blog/",
  // },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!
const navLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

export default navLinks

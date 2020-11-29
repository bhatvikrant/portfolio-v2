import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaDev,
  FaMedium,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/bhatvikrant",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/vikrantbhat1022",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/bhatvikrant",
  },
  {
    id: 4,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://dev.to/vikrantbhat",
  },
  {
    id: 5,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://medium.com/@vik.bhat223",
  },
  {
    id: 6,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/c/codewithvic",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

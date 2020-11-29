import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaReact } from "react-icons/fa"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>Hi,</h2>
            <div className="underline"></div>
            <h1>i'm vikrant</h1>
            <h2>
              I build things with React{" "}
              <FaReact className="social-icon react-icon" />
            </h2>
            <h3>
              I'm a software engineer based out of Delhi, India specializing in
              building (and occasionally designing) exceptional web apps, mobile
              apps and everything in between.
            </h3>
            <h3>
              I also often write{" "}
              <a
                href="https://underreacted.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="black-links"
              >
                blogs
              </a>{" "}
              and make{" "}
              <a
                href="https://www.youtube.com/c/codewithvic"
                target="_blank"
                rel="noopener noreferrer"
                className="black-links"
              >
                youtube
              </a>{" "}
              videos about tech
            </h3>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero

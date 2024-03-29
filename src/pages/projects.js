import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SeoComponent from "../components/SEO"

const ProjectsPage = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SeoComponent title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        githuburl
        applicationurl
        stack
        description {
          description
        }
        banner {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ProjectsPage

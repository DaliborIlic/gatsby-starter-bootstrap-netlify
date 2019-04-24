import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template ({ data }) {
  const { markdownRemark: phone } = data
  return (
    <Layout>
      <div>
        <Helmet title={`${phone.frontmatter.model} ${phone.frontmatter.model} | ${data.site.siteMetadata.title}`} />
        <Container>
          <h1 className='display-3'>{phone.frontmatter.model}</h1>
        </Container>
        <Container dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const phoneQuery = graphql`
  query Phone($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        model
        manufacturer
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

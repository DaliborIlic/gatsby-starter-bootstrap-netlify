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
        <Helmet title={` | ${data.site.siteMetadata.title}`} />
        <Container>
          <h1 className='display-3'></h1>
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
        manufacturer
        model        
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

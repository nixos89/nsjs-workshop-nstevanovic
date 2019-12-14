import React from 'react';
import { graphql, Link } from 'gatsby';
import '../css/base.css'
import Title from '../components/Title';
import Img from 'gatsby-image';
// import payson from '../images/payson-wick-B8VbQj7Y9WI-unsplash.jpg'; //  NOT recommended approcah
import Helmet from 'react-helmet';

export const pageQuery = graphql`
query TestQuery {
  site {
    siteMetadata {
      title
      description
    }
  }

  allFile (filter: {ext: {eq: ".md"}}){
    nodes {
      name
      base
      childMarkdownRemark {
        html
        frontmatter {
          title
          author
          date(fromNow: true)
        }
      }
    }
  }

  file(name: {eq: "payson-wick-B8VbQj7Y9WI-unsplash"}) {
    childImageSharp {      
      fluid(maxWidth: 600, quality: 97) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
// invoking fragment like this '...fragmentName' inside of GraphQL
export const sampleFragment = graphql`
  fragment ChildImageSharp on ImageSharpFixed {
    srcWebp
  }
`;


const Home = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Link to="/blog">Blog</Link>
      <Helmet>
        <title>{data.site.siteMetadata.title} Inkubator</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Title title={data.site.siteMetadata.title} />
      <p>{data.allFile.nodes[0].childMarkdownRemark.frontmatter.author}</p>
      <p>{data.allFile.nodes[0].childMarkdownRemark.frontmatter.date}</p>
      <p>{data.site.siteMetadata.description}</p>
      {/* <img src={data.file.childImageSharp.fixed.srcWebp} alt='payson' /> */}
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

export default Home;
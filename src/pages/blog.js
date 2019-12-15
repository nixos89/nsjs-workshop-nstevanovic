import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
    query BlogQuery {
        blog:  allContentfulPost {
            items: nodes {
                id
                author
                createdAt(fromNow: true)
                slug
                title
                thumbnail {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
  }
    }
`;

export default ({ data }) => {
    console.log('data:', data);
    return (
        <div>
            <Link to="/">Home</Link>
            <div className="blog">
                {data.blog.items.map(( blogPost ) => (
                    <Link to={`blog/${blogPost.slug}`}
                        key={blogPost.id} >
                        <article className="blog-post">
                            <h4>{blogPost.title}</h4>
                            <small>
                                {blogPost.author},
                                {blogPost.createdAt}
                            </small>
                            <Img fluid={blogPost.thumbnail.fluid} />
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => {
    console.log(data);
    const { contentfulPost } = data;

    return (
        <div>
            <Link to="blog">Back to blog!</Link>
            <h1>{contentfulPost.title}</h1>
            <small>{contentfulPost.author}, {contentfulPost.createdAt}</small>
            <div dangerouslySetInnerHTML={{
                __html:
                contentfulPost.content.childContentfulRichText.html
            }} />
            <Img fluid={data.contentfulPost.thumbnail.fluid} />
        </div>
    )
};

// if not String then BREAK <=> 'String!' expression
export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            author
            content {
                childContentfulRichText {
                    html
                }
            }
            createdAt(fromNow: true)
            subtitle
            title
            thumbnail {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;
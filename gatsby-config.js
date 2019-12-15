const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

module.exports = {
    siteMetadata: {
        title: `NSJS Workshop`,
        description: `Test`
    },
    plugins: [{
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `markdowns`,
            path: `${__dirname}/src/blog`,
        }
    },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `@contentful/gatsby-transformer-contentful-richtext`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
    }
    ]
};

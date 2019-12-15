const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const posts = await graphql(`
        query Test{
            allContentfulPost {
                nodes {                  
                    slug
                }     
            }           
        }
    `);

    if (posts.errors) {
        reporter.panicOnBuild(`Error while creating pages`);
        return;
    }

    // passing RELATIVE path
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

    posts.data.allContentfulPost.nodes.forEach((post) => {
        createPage({
            path: `blog/${post.slug}`,
            component: blogPostTemplate,
            context: {
                slug: post.slug
            },
        })
    });

    // reporter.panicOnBuild(JSON.stringify(markdownFiles));

    // reporter.info(JSON.stringify(posts, null, 2));
};
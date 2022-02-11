const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};
  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `post`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/post${relativeFilePath}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

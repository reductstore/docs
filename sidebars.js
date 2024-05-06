/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    docSidebar: [
        "getting-started",
        "configuration",
        "how-does-it-work",
        {
            type: "category",
            label: "Guides",

            collapsed: false,
            collapsible: false,
            items: [
                "guides/buckets",
                "guides/data-ingestion",
                "guides/data-querying",
                "guides/data-replication",
                {
                    type: "category",
                    label: "Integration",
                    items: [
                        "guides/integration/azure",
                    ],
                }
            ]
        },
        {
            type: "category",
            label: "API Reference",
            items: [
               "http-api/index",
                "http-api/server-api",
                "http-api/bucket-api",
                "http-api/entry-api",
                "http-api/token-authentication",
                "http-api/replication-api",
            ]
        },

        {
            type: "category",
            label: "Client SDKs",
            items: [
                {
                    type: "link",
                    label: "Rust Client",
                    href: "https://github.com/reductstore/reduct-rs",
                },
                {
                    type: "link",
                    label: "Python Client",
                    href: "https://github.com/reductstore/reduct-py",
                },
                {
                    type: "link",
                    label: "JavaScript Client",
                    href: "https://github.com/reductstore/reduct-js",
                },
                {
                    type: "link",
                    label: "C++ Client",
                    href: "https://github.com/reductstore/reduct-cpp",
                },
            ],
        },
        {
            type: "category",
            label: "Tools",
            items: [
                {
                    type: "link",
                    label: "CLI Client",
                    href: "https://github.com/reductstore/reduct-cli",
                },
                {
                    type: "link",
                    label: "Web Console",
                    href: "https://github.com/reductstore/web-console",
                }
            ],
        },
    ],

    // But you can create a sidebar manually
    /*
    docSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */
};

export default sidebars;

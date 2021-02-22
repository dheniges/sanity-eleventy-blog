export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6033ec94cf3c5a0d4e3536ec',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6rttdgmv',
                  apiId: '9fd55b59-38ee-4f94-bf25-103d32a4b6e4'
                },
                {
                  buildHookId: '6033ec94226abe0c4dd4028e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-r97iokoi',
                  apiId: '2a9f3837-84df-4ec4-89e5-d4e0fdf23780'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dheniges/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-r97iokoi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

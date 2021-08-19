export default {
  widgets: [
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
                  buildHookId: '611eded0bf6734873bc1dcfe',
                  title: 'Sanity Studio',
                  name: 'cripto-asesoramiento-studio',
                  apiId: '00993047-55f9-4cb9-ad35-7cede2a5132b'
                },
                {
                  buildHookId: '611eded09d61346c983fd15c',
                  title: 'Blog Website',
                  name: 'cripto-asesoramiento',
                  apiId: '2ac2a60f-afa7-4dce-90a9-8669827a1660'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/despijim/Cripto-Asesoramiento',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cripto-asesoramiento.netlify.app', category: 'apps'}
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

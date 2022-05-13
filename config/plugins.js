module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 100,
      apolloServer: {
          tracing: false,
        },
      },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        job: {
          field: 'slug',
          references: 'title',
        },
        'job-mission': {
          field: 'slug',
          references: 'title',
        },
        'social-network': {
          field: 'slug',
          references: 'title',
        },
        'profile': {
          field: 'slug',
          references: [ 'firstname', 'lastname' ],
        },
        'skill': {
          field: 'slug',
          references: 'name'
        },
        'job-skill': {
          field: 'slug',
          references: 'name'
        },
        'language': {
          field: 'slug',
          references: 'name'
        },
        'icon': {
          field: 'slug',
          references: 'title'
        },
        'interest': {
          field: 'slug',
          references: 'name'
        },
        'school': {
          field: 'slug',
          references: 'name'
        },
        'school-project': {
          field: 'slug',
          references: 'title'
        },
      },
    },
  },
});

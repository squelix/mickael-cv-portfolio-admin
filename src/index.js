'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    [
      'profile.profile',
      'icon.icon',
      'interest.interest',
      'job.job',
      'job-mission.job-mission',
      'job-skill.job-skill',
      'language.language',
      'school.school',
      'school-project.school-project',
      'skill.skill',
      'social-network.social-network',
      'project.project',
      'techno.techno',
    ].forEach((name) => {
      strapi
        .plugin('graphql')
        .service('extension')
        .shadowCRUD(`api::${name}`)
        .disableActions(['create', 'delete', 'update']);
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};

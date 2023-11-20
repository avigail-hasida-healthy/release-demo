module.exports = {
  //gcrImageDir: 'tomk-test/test',
  staging: {
    // enableMilestones: true,
    // helmFiles: ['smiling-diode-638/be-staging-uk_universe-staging.yaml'],
    deploy: [
      // {
      //   type: 'jenkins',
      //   host: 'https://jenkins-ci.healthy.io',
      //   job: '/Urine Commercial/Deploy staging',
      //   parameters: {
      //     labels: 'name=adherence-cronjobs-develop',
      //     helmfiles: 'adherence'
      //   }
      // },
      {
        type: 'github',
        workflow: 'deploy.yaml',
      }
    ],
    // k8s: [
    //   {
    //     cluster: 'be-staging-uk',
    //     zone: 'europe-west2-a',
    //     project: 'smiling-diode-638',
    //     namespace: 'adherence-staging'
    //   }
    // ],
  },
  production: {
    // database: 'postgres-adherence-algo',
    // helmFiles: ['smiling-diode-638/be-production-uk_universe-staging.yaml'],
  }
};
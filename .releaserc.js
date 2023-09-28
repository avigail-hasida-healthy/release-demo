module.exports = {
  gcsImageDir: 'tomk-test/test',
  enableMilestones: false,
  helmFiles: {
    staging: ['smiling-diode-638/be-staging-uk_universe-staging.yaml'],
    production: ['smiling-diode-638/be-production-uk_universe-staging.yaml']
  },
  deploy: {
    staging: [
      {
        type: 'jenkins',
        host: 'https://jenkins-ci.healthy.io',
        job: 'zz-JenkinsTests/Morad-tests/helm-charts-deployment',
        parameters: {
          chart: 'testing-chart'
        }
      },
      {
        type: 'jenkins',
        host: 'https://jenkins-ci.healthy.io',
        job: 'Urine Commercial/Deploy staging',
        parameters: {
          labels: 'adherence-develop',
          helmfiles: 'adherence'
        }
      },
      {
        type: 'github',
        workflow: 'deploy.yaml',
      }
    ],
    production: []
  },
  k8s: {
    staging: [
      {
        cluster: 'be-staging-uk',
        zone: 'europe-west2-a',
        project: 'smiling-diode-638',
        namespace: 'adherence-staging'
      }
    ],
    production: []
  }
};
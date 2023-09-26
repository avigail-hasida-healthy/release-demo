module.exports = {
  gcsImageDir: 'tomk-test/test',
  enableMilestones: false,
  helmFiles: {
    staging: [
      'smiling-diode-638/be-staging-uk_universe-staging.yaml'
    ],
    production: [
      'smiling-diode-638/be-production-uk_universe-staging.yaml'
    ]
  }
};
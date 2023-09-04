# Release Demo

This repository should be a template for the release process in Healthy.io

## Commit Message

The commit message standard is as the following:

[action(service)]: Sentence case description

action == fix, feat, chore, test,

## Branch Strategy

A `main` branch exist, in which all the daily work is done and merged into.

For each new feature/hotfix a new branch is created from the `main` branch with the naming convention: `feature/description-of-the-feature` or `hotfix/description-of-the-hotfix`

When the work on the feature is done, a PR should be opened and `Squash and Merge` into the `main` branch would be done after the PR is approved.

# Release Strategy

At the end of each cycle (two-weeks), A release branch will be created out of the `main` branch.

The release branch naming is `release/1.0.x` it is automatically labeled with `v1.0.0` and `staging` labels.

Once there is a fix to the release branch the PR should be merged into the `main` branch and use `cherry-pick` to the current `release/1.0.x` branch. This new commit will be labeled with `v1.0.1`.

This branch will be deployed to "staging" environment

Once the verifications process is done on "staging" environment, the release branch should be labeled with `production` and be deployed to "production" environment.

A hotfix will be `cherry-pick`ed into `production` branch and into `staging` branch when the label is on a different branch

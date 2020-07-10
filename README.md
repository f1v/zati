# zati

## React component library

## About semantic-release

- The idea is as long as we use semantic format commit messages, we won't have to think about version numbers or changelogs.
- Use the commits message formats found [here](https://github.com/semantic-release/semantic-release#commit-message-format) or [here](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- On all pull requests, there is a check that runs that verifies if commit or PR title is in a semantic approved format
- We should exclusively use the `squash and merge` option when merging a PR
- The `package.json` version should kept as `0.0.0-development` - see reasoning [here](https://semantic-release.gitbook.io/semantic-release/support/faq#why-is-the-package-jsons-version-not-updated-in-my-repository)

### More resources:

- [FAQ for semantic-release](https://semantic-release.gitbook.io/semantic-release/support/faq)
- [Using GitHub Actions with semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/github-actions.md)
- [Guide for setting up semantic-release](https://github.com/zeke/semantic-release-with-github-actions)

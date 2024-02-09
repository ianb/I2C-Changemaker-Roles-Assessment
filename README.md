# inspire-to-change-survey

A survey page for Inspire To Change

## Site/etc

The site is in `docs/` and the survey data in particular is in `data/survey-data.js`

The idea of version in survey-data.js is that you can add new versions and old links will still work.

The data in `questions` is a list of questions with tabs separating the fields. The field order is: `question <tab> Category <tab> 1/-1` (where -1 means that "Strongly Agree" counts against Category).

## Deploying

This is deployed via GitHub Pages, so any commits to main will be deployed immediately

Tailwind needs to be build, so run `npm run build` to update stylesheets. This isn't needed when updating only data.

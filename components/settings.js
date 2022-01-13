const settings = {
  defaultTitle: 'GHProfile Summary',
  defaultDescription: `Find your GitHub profile and \
  look it's summary with charts`,
  keywords: 'GitHub API, nextjs, chart.js',
  appGithubRepo: 'https://github.com/ryuuto829/ghprofile-summary',
  twitter: '@ryuuto829',

  // Open Graph image
  ogURL: 'ghprofile-summary.vercel.app',
  ogImage: 'ghprofile-summary.vercel.app/og.png',
  ogWidth: '1646',
  ogHeight: '926',

  themeColor: '#031218',

  // Number of user's public repos requested from Github API
  // NOTE: API limit is 100 items per page
  maxReposItems: 100,

  // Max number of items displayed on the chart
  maxChartItems: 10,

  // Number of repos displayed in the "Latest Repos" section
  maxLatestRepos: 10,
}

export default settings

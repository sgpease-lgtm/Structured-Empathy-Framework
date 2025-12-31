module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "src/_data/version.json"],
        message: "chore(release): ${nextRelease.version} [skip ci]"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "src/_data/version.json", label: "version.json" }
        ]
      }
    ]
  ],
  generateNotes: {
    preset: "conventionalcommits"
  }
};

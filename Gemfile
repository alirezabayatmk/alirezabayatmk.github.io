source "https://rubygems.org"

# Plain Jekyll instead of the `github-pages` meta-gem — that meta-gem pins
# everything (incl. a newer Ruby) and is overkill for a site that only uses
# whitelisted plugins. GitHub Pages still builds the deployed site exactly the
# same way; this just controls what runs locally.
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-paginate", "~> 1.1"
end

# Faster file watching on Linux.
gem "webrick", "~> 1.8"

# Windows / JRuby compatibility — harmless on Linux.
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]

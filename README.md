# Personal site

A small Jekyll site for GitHub Pages: homepage, publications, teaching,
projects, blog, and thoughts.

## Local development

Requires Ruby (3.1+ is fine).

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://127.0.0.1:4000>.

## Filling in the site

| What | Where |
| --- | --- |
| Your name, links, profile image, CV path | `_config.yml` |
| Intro paragraph on the homepage | `index.html` |
| News bullets on the homepage | `_data/news.yml` |
| Publications (group by year + select with `selected: true`) | `_data/publications.yml` |
| Personal projects | `_data/projects.yml` |
| Teaching content | `teaching.md` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Thoughts (short notes) | `_posts/...` with `categories: [thoughts]` |
| Profile photo | `assets/images/profile.jpg` |
| CV PDF | `assets/cv/cv.pdf` |

Posts whose front-matter contains `categories: [thoughts]` show up on the
Thoughts page and are hidden from the Blog list. Everything else shows up
under Blog.

## Deploying to GitHub Pages

Two options:

1. **User site** — push to a repo named `yourusername.github.io`. The site
   is served at `https://yourusername.github.io`. Leave `baseurl: ""` in
   `_config.yml`.
2. **Project site** — push to any repo and enable Pages from the repo
   settings. The site is served at `https://yourusername.github.io/<repo>`.
   Set `baseurl: "/<repo>"` in `_config.yml`.

Either way, update the `url:` field in `_config.yml` and push to `main`.
GitHub builds and serves the site within a minute or so.

# happylinze.github.io

Personal academic homepage of Linze Li, served by GitHub Pages at https://happylinze.github.io.

## Updating content

Everything on the page comes from a few plain files. You rarely need to touch HTML.

| What | Where |
| --- | --- |
| Name, title, email, links, photo, CV | `_config.yml` |
| News items | `_data/news.yml` |
| Publications | `_data/publications.yml` |
| Competition results | `_data/awards.yml` |
| Projects | `_data/projects.yml` |
| Reviewing and other service | `_data/services.yml` |
| About text and research interests | `index.html`, the `#about` section |

Images for publications go in `assets/img/publications/`, project screenshots in `assets/img/projects/`.
To use a real profile photo, add it under `assets/img/` and set `avatar` in `_config.yml`.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

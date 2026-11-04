# happylinze.github.io

Personal academic homepage of Linze Li, served by GitHub Pages at https://happylinze.github.io.

## Editing content without code (recommended)

The site is set up for [Pages CMS](https://pagescms.org), a free editor that gives every section a form.

1. Go to https://app.pagescms.org and sign in with GitHub.
2. Install the Pages CMS GitHub App on this repository when asked.
3. Open `happylinze/happylinze.github.io`.

You can now add, edit, reorder and delete news, publications, competitions, projects and service entries.
You can also upload figures, a profile photo and a CV.
Every save is a commit, and GitHub Pages republishes the site within a few minutes.
The forms are defined in `.pages.yml`.

## Chinese version

The Chinese page lives at https://happylinze.github.io/zh/, and the sidebar has an EN / 中文 switch.
Section titles and buttons are translated in `_data/ui.yml`.
Your Chinese name, positions, About text, interests and job-market text are in the **中文版** group under **Profile & About** in Pages CMS.
News, projects, special award names and service roles each have an optional Chinese field.
Any Chinese field left empty shows the English text instead.
Paper titles, authors, venues and challenge names stay in English on both pages.

## Job-market mode

Open **Profile & About** in Pages CMS and turn on **Show job-market card**.
The page then shows an "Open to positions" card at the top and a badge under your name.
Turn it off to go back to the normal academic homepage.
Without Pages CMS, set `job_market.enabled` to `true` or `false` in `_data/profile.yml`.

## Where content lives

| What | File |
| --- | --- |
| Name, links, photo, CV, About text, interests, job-market mode | `_data/profile.yml` |
| News | `_data/news.yml` |
| Publications, including BibTeX | `_data/publications.yml` |
| Competition results | `_data/awards.yml` |
| Projects | `_data/projects.yml` |
| Reviewing and other service | `_data/services.yml` |

You can also edit these files directly on GitHub with the pencil icon.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

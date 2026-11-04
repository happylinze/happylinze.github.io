# Notes for Claude

- Do not add any Claude attribution to commits or pull requests in this repository: no `Co-Authored-By: Claude` or `Claude-Session` trailers in commit messages, and no "Generated with Claude Code" line or session link in PR descriptions.
- Page content lives in `_data/*.yml` and is edited through Pages CMS (`.pages.yml`). Keep new content in data files rather than in HTML, and update `.pages.yml` when adding a field.
- Empty fields may be saved as null or as an empty string. In templates, check both, e.g. `{% if x and x != "" %}`.

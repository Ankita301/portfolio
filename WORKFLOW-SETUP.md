# Enabling the Pages deploy

The deploy workflow is not in this repo yet — pushing it needs the `workflow`
OAuth scope. To add it:

```bash
gh auth refresh -h github.com -s workflow
```

Then restore and push it:

```bash
git check-ignore -v .github/workflows/ >/dev/null && \
  sed -i '' '/.github\/workflows\//d' .gitignore
git add -f .github/workflows/deploy.yml .gitignore && \
  git commit -m "Add Pages deploy workflow" && git push
```

The workflow builds with `VITE_BASE=/portfolio/` and copies `index.html` to
`404.html` so deep links resolve. GitHub's default static build does neither,
so the site needs this workflow rather than Pages' built-in builder.

# Release Process

## Commands

```bash
pnpm release          # Automatic release with version detection
git push --follow-tags  # Push changes and tags to trigger CI
```

## How It Works

### Automatic Version Detection

Based on conventional commits since last release:

- **patch**: `fix:` and `perf:` commits (0.1.0 → 0.1.1)
- **minor**: `feat:` commits (0.1.0 → 0.2.0)
- **major**: `BREAKING CHANGE:` footer or `!` after type (0.1.0 → 1.0.0)

### Release Flow

1. **Local (bumpp):**
   - Analyzes commits to determine version
   - Updates `package.json` version
   - Updates `CHANGELOG.md`
   - Creates git commit with message `chore: release vX.Y.Z`
   - Creates git tag `vX.Y.Z`

2. **CI (GitHub Actions):**
   - Triggered by tag push
   - Builds the project
   - Publishes to npm
   - Creates GitHub release via conventional-github-releaser

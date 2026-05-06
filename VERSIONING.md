# Versioning and Deployment

The live Vercel project can keep its current name: `emergency-response-video-vignettes`.

Recommended workflow:

1. Keep source code in a GitHub repository with the same name.
2. Connect that repository to the existing Vercel project rather than creating a new Vercel project.
3. Use `main` as the latest public production version.
4. Develop changes on branches or pull requests so Vercel can create preview deployments.
5. Tag stable releases in Git, for example `v1.0.0`, `v1.1.0`, and `v2.0.0`.
6. Record each stable release and its deployment URL in `CHANGELOG.md`.

Older versions can be kept available in two ways:

- Link to Vercel's generated deployment URLs for tagged or commit-based deployments.
- For versions that must remain permanently easy to find, publish archived copies under stable paths such as `/versions/v1/` or separate subdomains.

Because this site includes a service worker, test archived versions carefully if they are hosted under different paths. Cache names and service-worker scope may need adjusting so one version does not serve stale assets from another.

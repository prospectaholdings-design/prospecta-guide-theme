# prospecta-guide-theme


This repository contains the source code for the PROSPECTA GUIDE Shopify OS 2.0 theme. It is developed with a continuous GitHub-connected workflow, ensuring a living codebase, scalable product, and version-controlled system.

## Development Philosophy

This theme is treated as a continuously evolving architecture, not a disposable AI generation or a single-output code dump. All changes are incremental, preserving valid architecture and avoiding overwriting unrelated systems.

## Repository Structure

- `/layout`: Theme layout files.
- `/templates`: Shopify template files.
- `/sections`: Reusable sections for the Shopify Theme Editor.
- `/snippets`: Reusable Liquid code snippets.
- `/assets`: Theme assets (images, CSS, JavaScript).
- `/config`: Theme configuration files.
- `/locales`: Translation files.
- `/.github`: GitHub Actions workflows and other GitHub-related configurations.

## Getting Started

1. Clone the repository:
   ```bash
   gh repo clone prospectaholdings-design/prospecta-guide-theme
   ```
2. Navigate to the theme directory:
   ```bash
   cd prospecta-guide-theme
   ```
3. Install Shopify CLI and dependencies (if not already installed).
4. Run the theme locally:
   ```bash
   shopify theme dev
   ```

## Contributing

All contributions should follow the established branching workflow:

- `main`: Production-ready code.
- `development`: Integration branch for new features.
- `feature/*`: Feature development branches.
- `experimental/*`: Experimental branches.
- `hotfix/*`: Hotfix branches.

Commit messages should be modular and meaningful, following a conventional commit style (e.g., `feat(hero): add cinematic founder hero`).

## Validation

This theme is compatible with Shopify Theme Check, Shopify CLI, and GitHub Actions for automated validation pipelines.

## License

[Specify License Here]

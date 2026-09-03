# Standalone Scramjet GitHub Pages frontend

This repository is a static frontend starter for a Scramjet-based proxy.

## Important

GitHub Pages only serves static files. A working Scramjet deployment also
needs a compatible transport/backend endpoint. This repository deliberately
does not ship or depend on a random public proxy.

## Setup

1. Put the files in a GitHub repository.
2. Edit `config.js` and set `window.PROXY_CONFIG.transport` to a
   Wisp/transport endpoint that you operate or are authorized to use.
3. Add the current Scramjet client build and transport integration following
   the official Scramjet project documentation.
4. Enable GitHub Pages for the repository.
5. Open the resulting `https://USERNAME.github.io/REPOSITORY/` site.

The official Scramjet project documents its current build and client APIs.
Because those APIs can change, this starter avoids pinning an outdated
third-party bundle.

## GitHub Pages

The included workflow publishes the repository with GitHub Actions.

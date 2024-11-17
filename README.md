# BeigeBadger.github.io

Created following a combination of these guides:
- [Official Create React App GitHub Pages documentation](https://create-react-app.dev/docs/deployment/#github-pages)
- [PluralSight guide on deploying GitHub Pages with Create React App](https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app)

# Development

## Dependencies

- NPM
- Node
	- Will need Node v16 or lower as we're using a version of react-scripts that is less than v5 which has an OpenSSL issue. More information is available [here](https://stackoverflow.com/a/71334532).

## Commands

- Should be run from inside the `my-cv` folder.

# Deployment

Run `npm run deploy` to deploy (which will push to the `cv` branch that is configured [here](https://github.com/BeigeBadger/BeigeBadger.github.io/settings/pages) as the default branch for GitHub Pages).

**NOTE:** The deployment will only run if there are actually changes to the files that are served as part of the site. Hence running the `deploy` command multiple times or when only the README has been updated will generate a "Published" message but a deployment will not be created.

See [here](https://www.npmjs.com/package/gh-pages#when-get-error-branch-already-exists) for deployment tips:

```
when get error branch already exists

{ ProcessError: fatal: A branch named 'gh-pages' already exists.

    at ChildProcess.<anonymous> (~/node_modules/gh-pages/lib/git.js:42:16)
    at ChildProcess.emit (events.js:180:13)
    at maybeClose (internal/child_process.js:936:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:220:5)
  code: 128,
  message: 'fatal: A branch named \'gh-pages\' already exists.\n',
  name: 'ProcessError' }

The gh-pages module writes temporary files to a node_modules/.cache/gh-pages directory. The location of this directory can be customized by setting the CACHE_DIR environment variable.

If gh-pages fails, you may find that you need to manually clean up the cache directory. To remove the cache directory, run node_modules/gh-pages/bin/gh-pages-clean or remove node_modules/.cache/gh-pages.
```


# Ideas

- React Helmet for page titles (if there are separate pages)
- Use SCSS instead of CSS
- Use material UI styling?
- https://create-react-app.dev/docs/adding-a-sass-stylesheet/

# Printing

Chrome
0.6, 0.6
0.0, 0.0
Scale 80%
Background graphics


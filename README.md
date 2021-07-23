# selfsite

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Wait, how is this configured?

To my future self:

Content is in `content/` as markdown files

Pages are all in.. `pages/`. Content is dynamically loaded in `pages/projects/_slug.vue`. That's probably what you want to look at.

Index page redirect happens in `middleware/index-redirect.js`

Components in `components/`are automagically loaded as tags (e.g. `<dots>`)!



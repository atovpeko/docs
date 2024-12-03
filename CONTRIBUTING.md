# Introduction

Timescale documentation is open for contribution from all community members. This document explains the process
and the guidelines to follow when contributing.

## Contribution process

You can contribute to Timescale documentation in the following ways:

- Open a ticket in the [documentation repository][github-docs] and describe the proposed change. Our doc team will get in touch.
- [Fork the documentation repository][github-fork] and propose changes there.
- Create a branch from `latest` and raise a pull request directly in the documentation repository. For this, you need to have the write access.

When raising a PR, you will be prompted to sign a Contributor License Agreement (CLA). This helps to ensure that the community is free to use your contributions.

Once you raise a PR for any branch, GitHub will **automatically** generate a preview for your changes and attach the link in the comments. Any new commits will be visible at the same URL. If you don't see the latest changes, try an incognito browser window.

## Documentation guidelines

This section provides pointers on how to write, structure, and organize your contribution. Do not worry if you don't get it right on the first try - our documentation team is always there to help.

### Language

Aim to write in a clear, concise, and actionable manner. Timescale documentation uses the [Google Developer Documentation Style Guide][google-style] with the following exceptions:

- No capitalization after a colon.

### Documentation structure

Each major doc section has a dedicated directory with `.md` files inside, representing its child pages. This includes an `index.md` that serves as a landing page of that doc section. To edit a page for content, modify the corresponding `.md` file. 

#### `page-index`

The navigation hierarchy of a doc section is governed by `page-index/page-index.js` within the corresponding directory.  To change the structure, for example, add or delete pages in a section, modify the corresponding `page-index.js`.

Every `page-index.js` includes the following fields: 

|Key|Type|Required| Description|
|-|-|-|-|
|`href`|string|Yes| The URL segment to use for the page. If there is a corresponding Markdown file, `href` must also match the name of the Markdown file, minus the file extension.|
|`title`|string|Yes| The title of the page, used as the page name within the TOC on the left. |
|`type`|One of `[directory, placeholder, redirect-to-child-page]`|No| If no type is specified, the page is built as a default page, turning the corresponding Markdown file into a webpage. If the type is `directory`, the corresponding file is turned into a webpage, _and_ the page becomes a directory. `directory` pages are the exception to the rule that the page index matches the file directory structure. Child pages of `directory` pages sit on the same level as the `directory` page inside the repository. They only become children during the site build. If the type is `placeholder`, an entry is made in the navigation tree, but a Markdown file is not converted into a webpage. The Markdown file doesn't even need to exist. Rather, the corresponding page is produced programmatically upon site build. If not produced, the link in the navigation tree returns a 404. If the type is `redirect-to-child-page`, an entry is made in the navigation tree, no page is built, and the link in the navigation tree goes directly to the first child. |
|`children`|Array of page entries|No| Child pages of the current page. If the parent page's type is not `directory`, the children should be located in a directory with the same name as the parent. The parent is the `index.md` file in that directory. If the parent page's type is `directory`, the children should be located in the same directory as the parent. |
|`pageComponents`|One of `[['featured-cards'], ['content-list']]`|No| Any page that has child pages can list its children in either card or list style at the bottom of the page. Specify the desired style with this key.

#### Partials

Partials allow you to reuse snippets of content in multiple places. All partials
live in the `_partials` top-level directory. To make a new partial, create a new
`.md` file. The filename must be in CamelCase and start with an underscore.

### Visuals


### Formatting

See the example page for available elements

Variables

Links




### Meta tags















[google-word-list]: https://developers.google.com/style/word-list











[github-docs]: https://github.com/timescale/docs
[github-fork]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
import { note } from "@clack/prompts"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { getAllSegmentPrefixes } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Mastodon: {link: "https://aus.social/@dcbuchan", icon: "fa-brands fa-mastodon"},
      "Subscribe (RSS)": {link: "https://quantumgardener.info/feed", icon: "fa-solid fa-square-rss"},
      Flickr: {link: "https://www.flickr.com/photos/dcbuchan/", icon: "fa-brands fa-flickr"},
      Pixelfed: {link: "https://pixelfed.au/dcbuchan", icon: "fa-solid fa-photo-film"},
      Github: {link: "https://github.com/quantumgardener", icon: "fa-brands fa-github"}
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      hideOnRoot: false,
      showCurrentPage: false
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({
      showLandscapes: false,
    }),
    //Component.TagList(),
  ],
  left: [
    Component.SiteLogo(),
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Spacer()
    ),
    Component.Search(),
    Component.DesktopOnly(
      Component.MyExplorer({
        title: "Menu (Landscapes)",
        folderClickBehavior: "link",
        sortFn: undefined,
        order: ["filter", "sort", "map"]
      }),
    )
  ],
  right: [
    Component.DesktopOnly(
      Component.TableOfContents(),
    ),
    Component.MobileOnly(
      Component.MyExplorer({
        title: "Menu",
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        sortFn: undefined,
        order: ["filter", "sort", "map"]
      }),
    ),
    Component.Backlinks({
      hideWhenEmpty: false
    }),
    Component.RecentNotes({
      title: "Recent blog posts",
      limit: 8,
      filter: (f) => Boolean((f.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes).includes('class/blog'))
    }),
    // Component.Graph({localGraph: {
    //   showTags: false,
    //   }, globalGraph: {
    //   showTags: false,
    //   }}),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      hideOnRoot: false,
      showCurrentPage: false,
    }),
    Component.ArticleTitle(), 
    Component.ContentMeta({
      showReadingTime: false,
      showDate: false,
      showLandscapes: false,
    }),
  ],
  left: [
    Component.SiteLogo(),
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Spacer()
    ),
    Component.Search(),
    ],
  right: [
    Component.RecentNotes({
      title: "Recent blog posts",
      limit: 8,
      filter: (f) => Boolean(f.slug?.startsWith("blog/") && !f.slug?.endsWith("index"))
    })
  ],
}

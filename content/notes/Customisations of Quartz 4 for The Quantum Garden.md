---
aliases: []
tags: 
datetime: 2024-07-25T19:40:59
updated: 
title: 
---

> [!info] Customisations are not longer documented here
> As of 25 July 2024, the number of deviations from the source code is too many to track manually. See the [Github activity](https://github.com/quantumgardener/qg.info/activity?ref=v4) for a full list of commits. Those labelled "Quartz sync" are content. The others are code.

The modifications I've made from [the original quartz codebase](https://github.com/jackyzha0/quartz) are listed below with the file(s) where the change has been made. You're more than welcome to view them in-situ at the [site's Github repository](https://github.com/quantumgardener/qg.blog). The majority are to support [[Designing The Quantum Garden]] and others are purely informational/cosmetic.
### Generate RSS for only certain pages
By default [[Quartz 4]] considers every page for RSS inclusion in the [Blog](/blog/index). That doesn't suit the way I write and use content. Some is reference, other is commentary and there is too much reference material to blog it. I've modified the RSS generation to only include files in the `/blog` folder.
- `quartz\plugins\emitters\contentIndex.ts`
	- Code in feed location, copyright year from start to dynamic current year and filter for only files that start with `rssRootFolder`
	- Set 
- `\quartz.config.ts`
	- to set up RSS and pass through the root folder "blog" - look at `Plugin.ContentIndex` emitter parameters.
	- `includeEmptyFiles` is set to `False` so that the year and month index files are not included in the RSS feed
### Remove Links to Pages That Don't Exist
I believe it's poor design to link to any pages that I can know don't exist.
- `\quartz\plugins\transformers\ofm.ts`
### Hide Tags From the Graph View
At this stage of the garden's development this hides the fact that many pages are not as inter-linked as they should be.
- `\quartz.layout.ts`
### Force All URLs and Links to Lower Case
For future proofing as mixed case URLs only cause problems when page names change.
- `\quartz\plugins\transformers\ofm.ts`
- `\quartz\util\path.ts`

There is also a custom rule applied to Cloudflare to convert all incoming URLs to lower case for any off-site references except if the file is `/static/contentIndex.json` as that breaks Search.
### Hide Folder Structure
The folder structure behind the site doesn't add as much value as good writing and linking.
- `\quartz.layout.ts`
### Automatically Show Social Icons for Social Links in Footer
Save me some work for any new social links in the footer. Solving for this change improved my Javascript and Typescript knowledge.
- `\quartz\components\Footer.tsx`
- `\quartz.layout.ts`
### Format Dates to my Liking
Some small configuration options. Note that dates are no longer being shown as part of [[Designing The Quantum Garden]].
- `\quartz\components\Date.tsx`
### Display .webp images
Include images for the new compressed web image format.
- `\quartz\plugins\transformers\ofm.ts`
### Display Tag Icon as Part of Tag Link
Display tags with a icon rather than a `#`
- `\quartz\components\PageLiist.tsx`
- `\quartz\components\TagList.tsx`
### Tag Pages List Their Tags
Tag pages can themselves be tagged and show the list of their tags.
- `\quartz\components\pages\TagContent.tsx`
### Tag Pages Hide Their Tag Name from Linked Items
If you are on a tag page, the list of notes with that tag no longer display the name of the page itself. It's completely redundant information.
- `\quartz\components\PageLiist.tsx`
### Landscape Index pages
Add pages to index all notes within one or more landscapes.
- `\quartz\quartz.config.ts`
- `\quartz\components\index.ts`
- `\quartz\components\ContentMeta.tsx`
- `\quartz\components\pages\LandscapeContent.tsx`
- `\quartz\plugins\emitters\index.ts`
- `\quartz\plugins\emmiters\landscapePage.tsx`
- `\quartz\plugins\transformers\frontmatter.ts`

### Change tags folder to topics folder
I prefer topics over tags. Possibly could have done this with a site redirect, but I like this way better. Fixes it at the root.
- `\quartz\components\Explorer.tsx`
- `\quartz\components\PageList.tsx`
- `\quartz\components\RecentNotes.tsx`
- `\quartz\components\TagList.tsx`
- `\quartz\components\pages\LandscapeContent.tsx`
- `\quartz\components\pages\TagContent.tsx`
- `\quartz\components\scripts\graph.inline.ts`
- `\quartz\plugins\emitters\folderPage.tsx`
- `\quartz\plugins\emitters\tagPage.tsx`
- `\quartz\plugins\transformers\ofm.ts`
- `\quartz\util\path.test.ts`

### Replace topic indicator for topics that don't have a dedicated note
The default is to say "Topic: abcd". Now the [FontAwesome Message icon](https://fontawesome.com/icons/message?f=classic&s=regular) is displayed instead, and throughout the site for all topic labels.
- `\quartz\components\Articles.tsx`
- `\quartz\components\PageList.tsx`
- `\quartz\components\TagList.tsx`
- `\quartz\components\pages\LandscapeContent.tsx`
- `\quartz\components\pages\TagContent.tsx`
## Removal of growth status for pages

> [!warning]
> As of [[2024-05-25]], I have disabled the display of maturity levels on posts and will no longer be applying a `growth` property to source notes within [[Obsidian]]. I don't find them useful myself, so I suspect any reader - who is a further degree away from the content than I am - will not find them useful either. See [[The value of growth maturity in a digital garden is marginal]].
>> [!note] My original Mastodon post outlining my thoughts
>> 
>> My [[Personal knowledge management|pkm]] system in [[Obsidian]] and the flow onwards to my website use seedling, budding and evergreen markers to indicate a note's maturity.
>> 
>> The more content I put online the more it starts as evergreen and I find it's obvious if something is a seedling or not - so the marker doesn't help much. Usually, if there is a note in progress I’ll mark it clearly as such anyway.
>> 
>> After a few days thinking I've decided to remove the cognitive overhead of seedling, budding and evergreen. They add zero value to me and I would be surprised if anyone who visits my site looks at them with more than a care factor of zero.
>> 
>> Retrieved from [Aus.Social](https://aus.social/@dcbuchan/112496137021327763)
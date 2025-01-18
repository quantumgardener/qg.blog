---
tags:
  - class/blog
datetime: 2024-09-14T18:07:26
---
Until now I have kept notes and blog entries filed separate from each other. The note I have on [[Blogging]] says, 

> My sense is that blogging is sharing the process of live thinking which provides context, and notes are the knowledge that come from that.

There remains a truth in that statement in so far as it refers to the nature of a piece of writing, yet something isn't quite optimal in the way my thinking about ideas meets the rubber of the writing road.

I think first in blog entries, then in notes. The view of blogs being time based and notes timeless is stopping me from getting ideas down. Yet I can't commit to one or the other. Thankfully, I have found a way to make it work.

I will blog as I see fit. Thoughts, ideas, developed concepts as they arise, and instead of filing in a `/blog/yyyy/mm/` folder structure I will file them alongside my `/notes`. In other words, it's all notes all the way down. However, I do still want to keep the idea of a "blog" post as being something time based because there is a difference.

- Blog entries appear in a subscription [[RSS Feed]], whereas notes don't. A note that only has a reference to a software plugin isn't anything to put in a feed.
- Blog entries are a live conversation, whereas notes are done and dusted - more fact and less subject to change.

Both are capable of being linked to anything else in my [[Digital garden]]. Therein lies the value.
## Technical changes
Quite a few changes are needed to make this work.

1. Add a `#class/blog` tag so that I can track what I consider blog entries vs. regular notes. I will script this rather than add 200+ tags manually.
2. Move all existing blog entries from `/blog` to `/notes`.
3. Create redirects so existing external links to blog pages continue to work.
4. Modify "Recent Notes" to pick up blog entries by tag instead of folder.
5. Possibly reorganise the current blog page to show blog entries by date. As time passes the difference between the two types of notes lessens so this may not be necessary. It can be recreated from metadata at any time should I need it. 
6. Reduce the number of RSS entries shown in the RSS feed. 
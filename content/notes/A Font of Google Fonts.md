---
tags:
  - sample-code
date: 2023-10-19
landscapes:
  - "[[the-garden-shed]]"
description: Instructions on how I added Google Fonts to Obsidian Publish.
---
The right font is everything. You can add more options for fonts on your site by hooking into [Google Fonts](https://fonts.google.com/). With [[Obsidian Publish]] and a [custom publish.css file](https://help.obsidian.md/Licenses+%26+add-on+services/Obsidian+Publish#Custom+CSS) this is remarkably easy to do.

These are instructions for [[Obsidian Publish]], a tool for publishing [[Obsidian]] vaults as a website. I currently use [[Quartz 4]] for this purpose.

> [!TLDR]
> Since shutting down my [[Obsidian Publish]] site, these instructions are effectively deprecated but are kept for historical reference if needed.

1. Find the font you want on [Google Fonts](https://fonts.google.com/). I'm going to add [Lemonada](https://fonts.google.com/specimen/Lemonada) simply because it's different enough to help illustrate my example.
2. Select the style you want. I suggest you start with just the one for now.
3. In the popout that appears, select <i class="fa-solid fa-circle-dot"></i> **Import** and copy everything between `<style>` and `<\style>`.

```css
<style>  <!-- ignore this line -->
@import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap');  
</style> <!-- and ignore this line -->
```

Now, paste the import line into towards the to top of your `publish.css` file.

Using the example above, it would be:

```css
@import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap');
```

Mine actually looks like this as I have multiple fonts coming in.
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Lemonada:wght@500&family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap');
```

## Testing it out
Try changing `<h2>` to use the new font by adding this to your `publish.css` file &mdash; change the name to match whatever font you selected (if your font has a space in the name you'll need to enclose the font name in single quotes)

```css
h2 {
	font-family: Lemonada;
}
```

Alternatively, if you want to try the new font on just one piece of text, create a test Obsidian file and add `<p style="font-family: Lemonada">The text you want to see in the new font.</p>`

Finally, upload ```publish.css``` (and your test page if you created one) using Obsidian. uou may need to wait a bit, and/or do a [hard refresh](https://www.documate.org/automation/what-is-a-hard-refresh-how-to-do-a-hard-refresh-in-any-browser/) in the browser on your Obsidian site to get the new CSS to load.

<i class="fa-solid fa-trophy trophyicon"></i> And with that, you're using Google Fonts on your site.
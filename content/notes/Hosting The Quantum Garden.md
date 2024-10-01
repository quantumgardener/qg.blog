---
aliases: Hosting The Quantum Gardens
tags: 
datetime: 2024-07-25T15:48:40
updated: 
title: 
---
[[The Quantum Garden]]'s public persona is built within [[Obisidan]] and converted to static web pages by [[Quartz 4]]. When content or structure changes are committed to Github, they are seen by Cloudflare which then builds the site for public consumption.

[[The Quantum Garden folder structure]] exists within my primary vault in a top-level folder called `Quartz`. To publish a note publicly all I need to do is:

1. Move the note to right location with [[The Quantum Garden folder structure]]
2. Sync my local [[Quartz 4]] clone repository to my master repository on Github
3. Wait a few minutes for Cloudflare to build the site

> [!warning]
> I learned the hard way that Cloudflare will build the site fast and server new pages, but keeps style changes cached. I normally test these locally, then trust they will have updated properly the next morning.

There are many [[Customisations of Quartz 4 for The Quantum Garden]].
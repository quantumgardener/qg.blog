---
JD-ID: "[[01.02 Managing Knowledge & Content]]"
landscapes:
  - "[[quantum-os]]"
date: 2024-03-10
growth: "[[Evergreen]]"
---
These are guidelines, not rules. They recogise that [[Personal Knowledge Management Systems Must Be Flexible]].

## When to tag
Before starting, become familiar with the concepts in [[The Difference Between Good and Bad Tags]].

Tags are used for:
- State tracking
	- Throughout the life of a note it may change state multiple times, across multiple areas. 
	- Within a parent/child tag, it should only have one state at a time. This needs to be manually controlled. 
	- The main tags for tracking are `#state\...`
- Typing
	- Allows quick identification of notes of the same type across the system without the need to manage them in folders (which are unsuitable for this and should be tied more to content than type.)
	- Notes may have multiple types as applicable but this would be rare
	- Video games are tagged for the platform they were played on, not the platform they were released for ie. a [[PlayStation 4|PS4]] game played on a [[PlayStation 5|PS5]] is tagged as a `#platform/playstation-5`  game.
- Grouping
	- There are any number of "groups" something may belong to. Some of the grouping tags are `#project`, `genre\...`

Tags are not used for:
- Classifying note content. Instead of tags, make copious use of [[Backlinks are Important|Links and Backlinks]] and [[Map of Contents|Maps of Content]].

## Tag Location Within a Note
Tags relating to the note as a whole, should be entered using the [[Obsidian]] property tab for consistency and will be displayed in YAML at the top of a note. Manual tag adjustment here must keep to each on a separate line - **even if there is only a single tag**. This allows for bulk processing in the future if required.

```
---
tags:
  - tag1
  - tag2
---
```

Within a note, `[[link]]` is preferred unless discussing a tag in which case use backticks to wrap a tag when referring, but not linking to the tag. 

> [!TIP] If tempted to use a tag in it's normal `#tag` form, think hard about why and find a proper `[[link]]` instead.
> This situation usually points to the need for a [[Map of Contents]].

## Maintaining tags
`fas:Plus` Tags can be renamed at any time, at both the parent and child levels. This is one reason why they are unsuitable to classify note content.

Be aware that when renaming tags, those within a [[Dataview (Obsidian Plugin)]] query will not be renamed even though the front-matter tag will have been changed.

<pre>```dataview
list from #project
where contains(tags,"role/home-tech")
```
</pre>
## What should not be a tag
To facilitate linking, some items which could be tags, are not.

- Author Name
	- In the body of the note, with two colons to allow for [[Dataview (Obsidian Plugin)]] searching and link brakets i.e., `Author:: [[Stephen King]]`
	- Do this even if the author may never be referenced again. You never know.
	- The creation of a `Person` for an author is optional.
- Source
	- In the body of the note, with two colons to allow for [[Dataview (Obsidian Plugin)]] searching and link brakets i.e., `Source:: raw URL`
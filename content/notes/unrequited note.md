---
tags: []
datetime: 2024-05-26T13:48:00
updated:
---

An [[unrequited note]] in [[Obsidian]] is a note where backlinks exist, but the notes are only linked in one direction. When dealing with [[map of content]], this is an indicator the MOC can be further improved.

I first heard the term from [[Nick Milo]] in one of his regular newsletter mailouts. He provided code for the [[Dataview (Obsidian Plugin)]], but this can be just as easily done by referring to backlinks in a document.

```
```dataview
LIST
FROM [[]] and !outgoing([[]])
SORT file.name asc
```


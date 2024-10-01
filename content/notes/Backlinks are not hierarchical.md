---
tags: 
datetime: 2024-05-31T10:26:47
updated: 
description: If *TopicA* links to *TopicB*, it may not be obvious that there is a connection when looking at *TopicB* particularly as content in a [[Digital garden]] is almost always non-hierarchical.
---
If *TopicA* links to *TopicB*, it may not be obvious that there is a connection when looking at *TopicB* particularly as content in a [[Digital garden]] is almost always non-hierarchical. Instead of:

```mermaid
flowchart TD
TopicA --> TopicB
TopicB --> TopicC
TopicB --> TopicD
```

we have:

```mermaid
flowchart TD
TopicA --> TopicB
TopicB --> TopicA
TopicA --> TopicC
TopicC --> TopicB
TopicD --> TopicB
TopicC --> TopicD
```

It's a lot of work to create and maintain all these [[Backlink|backlinks]] and secondly, by simply writing and linking pages, the list of automatically generated backlinks can highlight connections between pages in unexpected ways which generate new ideas and relationships.
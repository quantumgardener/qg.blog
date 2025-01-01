---
aliases: 
tags: 
datetime: 2024-07-25T18:40:59
updated: 2024-12-30T21:54:00
title:
---
This site is built using [[Quartz 4]], and is organised using a folder structure to keep content, blog post and navigational items separate.

```mermaid
flowchart TD
    R["/"]
    R --> Public
    R --> Assets
    R --> Calendar
    R --> Efforts
    Public --> notes(fa:fa-note-sticky notes)
    Public --> assets(fa:fa-lock assets)
    Public --> src(fa:fa-code source)

classDef highlight fill:#f9f,stroke:#333,stroke-width:2px;
class Public,notes,assets,src highlight;
```
- `notes` is the folder where most of the garden's content is kept.
- `assets` holds supporting images and attachments, logically grouped by type and is not publicly accessible.
- `src` holds supporting source code for features such as image sliders.

The `Public` folder exists at the root level of my [[Obsidian]] vault. The [[Quartz 4]] system accesses this via a symlink from `content` to `Public`, keeping the systems separate.

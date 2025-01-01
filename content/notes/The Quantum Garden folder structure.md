---
aliases: 
tags: 
datetime: 2024-07-25T18:40:59
updated: 2024-12-30T21:54:00
title:
---
This site is built using [[Quartz 4]], and is organised using a folder structure to keep content, blog post and navigational items separate.

<!--[mermaid.live](https://mermaid.live/edit#pako:eNplkE9LAzEQxb9KmF4UsgjuyRQE6XoX9aTxMGYnu6HZZMkfain97qZtqoUGAvN-vJl5yQ6U7wkEaOs3asSQ2HsnHSvn9VPCnYSvqljTPLKX_G2NuiRPMVKKl2SFllyP4ZI9a-3D2XYacuTOJ4o3GoXG5lA3MRm13p747ZUdj8uq33q1ruTaGYOqtsP7WPQ5KCo26ZQtPR1pNpphtOUmpo21YqEfNI8p-DWJRdu2tW42pk-juJ9_lrW3ruHHjPwUgJd9_wOXwGGiMKHpy8_uDuEkpJEmkiBK2ZPGbJME6fbFijn5t61TIFLIxCH4PIxQsttYVJ57TNQZHAJOf3RG9-H9We9_AbqPlcE)-->

![[the-quantum-garden-folder-structure.svg|700]]

- `notes` is the folder where most of the garden's content is kept.
- `assets` holds supporting images and attachments, logically grouped by type and is not publicly accessible.
- `src` holds supporting source code for features such as image sliders.

The `Public` folder exists at the root level of my [[Obsidian]] vault. The [[Quartz 4]] system accesses this via a symlink from `content` to `Public`, keeping the systems separate.

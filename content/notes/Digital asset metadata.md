---
aliases:
  - Digital asset metadatas
tags: []
datetime: 2023-08-11T19:26
updated: 
title: Digital asset metadata
---
Digital assets within a [[Digital asset management]] system include source and added metadata.

Fields include date and time, GPS information, who is in a photo, copyright information and much more[^1].

## General IPTC Standard for reference
[IPTC Standard](https://www.iptc.org/standards/photo-metadata/iptc-standard/)

## Unknown, uncertain and approximate dates
Media creation dates are not always known.

The [Extended Date Time Format (EDTF) Specification](https://www.loc.gov/standards/datetime/) is used to identify what is known, approximate and outright guessed.
- Dates are specified in full where possible eg. 2023-08-XX rather than 2023-08. This makes it easier to parse.
- Values are stored in The [IPTC Circa Date Created Field](https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#circa-date-created)

I have documented [[My photo dating strategy for uncertain dates]]

[^1]: [[Siebert (2017), Guide to Photo Metadata Fields]] - https://www.carlseibert.com/guide-iptc-photo-metadata-fields/
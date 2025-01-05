---
aliases: 
tags: 
JD-ID: "[[12.02 Mediabank Photos and Videos]]"
datetime: 2023-12-21T00:00:00
updated: 2025-01-06T10:34
title: My photo dating strategy for uncertain dates
---
Digital photos have the date and time taken embedded. Scanned prints, negatives and slides do not. This is a problem in [[Photography]] when the original non-digital image is scanned and there is no record alongside it of the date the photo was made. We fix it my modifying [[Digital asset metadata]]

[[Digital asset management]] software such as [[IMatch]] or [[Lightroom]] requires a date. You can't have just a year, or know it was December but not which day. The software requires a year, month and date. And if you're thinking ahead, it requires a time as well (and a timezone).

I have many thousands of scanned photos in my system and have settled on the following system. I will always try to get the most accurate date I can and depending on the information in the image and surrounding images, I can usually get pretty close - if not to the month, they certainly 
the year.

![[imatch-media-and-folders.webp]]

> [!DANGER] Part of me hates that I can't get accurate dates for all my photos. I have to live with that daily.
## Handling Certainty and Uncertainty

Whenever I have a certainty or a high confidence in the date I will use the *Date Created* field and nothing else. For other dates, I use a combination of *Date Created*[^XMP::photoshop\DateCreated], *Circa Date Created*[^{XMP::iptcExt\CircaDateCreated] and *Coverage*[^XMP::dc\coverage].

> [!TIP] When dates are uncertain, I set the year, month and day to the earliest possible. For example, if I know an event happened in September 2018 I would set the date to 2018-09-01 and complete additional metadata fields to show how certain I am.

**All uncertain dates** will have an entry in the *Circa Date Created* field and if required because I'm really uncertain, a comment in the *Coverage* field. I have had many systems to do this over the years. The one I am currently using meets my needs and is simple.

| Time Period | Certain? | Approximate? | Uncertain? |
| ---- | :--: | :--: | :--: |
| Year | Y | ~ | _ |
| Month | M | ~ | _ |
| Day | D | ~ | _ |

Using the table above we have quite a few options but they are easy to read. Normally I would use `-` between date fields, but to be consistent with [[IMatch]] I use the same date separate it uses which is `:`.

- `Y:M:_` means I am certain of the year and month, and uncertain about the day.
- `Y:M:~` means I am certain of the year and month, and reasonably certain about the day
- `~:_:_` means I know the approximate year.
- `~:M:D` means I know the month and day for certain, but the year is reasonably estimated. I have one ANZAC Day photo where I don't know the year.
- `_:_:_` means I have no idea. See the Coverage field for details.

One value, `Y:M:D` is never used. The *Date Created* field is correct.

## Examples of Application

Christmas Day is obvious. People are sitting around a tree opening presents. I can be sure of the day and month, and can work out the year by looking forward and back. If I have photos from Christmas 2004 and 2006, and I know the current photo set lies between those dates via the proximity of other images and events, then I can be certain the *Date Created* is 2005-12-25^[ISO format is the standard. YYYY-MM-DD.

For one of my daughter's birthday parties I'll know the year and month but maybe not the day. Early on parties were the weekend after a mid-week birthday so I tend to choose the Saturday and leave it as certain. Later on, we'd celebrate on the day.

Holidays become tricky. I might know they are the "September holidays" but can't be sure of the date. In this case I will set the year and month correctly, and the day to the first of the month e.g. *Date Created* is `2018-09-01` and *Circa Date Created* is `Y:M:_`..

I can tell by the fashions it was taken in the 1980's. I may choose 1985 as the year and set *Date Created* to `1985-01-01` and then *Circa Date Created* to `~:_:_` and *Coverage* to `Sometime in the mid-1980's.`

## Time
Time is always set to 00:00:00 (midnight). There are zero photos taken at this time so I can be sure I'm not falsely setting a time that can be misinterpreted.

There is one example where a timestamp of 00:00:00 may be legitimate and that's the **exact second** New Year's Eve turns into New Year's Day. If that happened, confusion can be avoided by checking the date.





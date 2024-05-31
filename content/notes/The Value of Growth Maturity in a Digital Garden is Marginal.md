---
tags: []
datetime: 2024-05-25T15:58:00
---
For some time I used [[seedling]], [[budding]] and [[evergreen]] as markers of note maturity. The idea was to inform an external reader of how advanced or stable a published note was. After six months it became apparent to me the value of tagging notes in this manner is marginal. I wasn't getting value from it personally as an author, so I am sure there was even less value for those one more degree distant from the notes than myself.

I found the initial status of most notes was [[evergreen]]. Those few [[seedling]] notes were often clearly marked as being in draft[^1] and I went back to them quickly. Any other seedling or [[budding]] notes were not revisited. In other words, the markers to come back and update something were being swamped by the noise of all the evergreen notes still being uploaded.

There was also the problem of index notes to which a growth maturity didn't really apply, yet because of the way the system was set up, had to have one. None of the three options ever felt right and I defaulted to [[evergreen]].

The display of growth maturities also added a significant programming overhead in the management of differences between the [[Quartz 4]] primary code base and my own changes. Any update of the base code had the potential to require several hours of my time tracking down and accommodating for the differences introduced. Doing that more than a couple of times makes upgrading to the latest backend features a scary proposition.

Based on this, I reversed the system on [[2024-05-25]], and removed the growth status from all notes in [[Obsidian]]. Anyone interested in the code as it existed at that point in time can find further information at [[Quartz 4#Removal of growth status for pages]].

[^1]: For publishing layout purposes it is often beneficial to publish prematurely to confirm everything is looking and behaving as expected.
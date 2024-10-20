---
tags:
  - class/blog
datetime: 2024-10-18T10:58:00
updated: 
title:
---
Too much information in too many places. [[A digital garden must be tended to like a real garden]] and piles of rubbish will accrue if you are not careful.

I'm faced with 63 unprocessed article notes from [[Omnivore]][^1], plus 43 already marked as processed [[Literature note|Literature notes]], each with an indeterminable status[^2]. I know there are notes from my [[Kindle Scribe]] not yet even looked at. I'm completely ignoring the 329 old blog posts I'm still to review and integrate.

## The problemss
The signs are obvious. I'm collecting faster than I can ingest and my time is spent filing instead of developing new knowledge. I archive articles only when I have made a note and Omnivore will only sync archived articles to [[Obsidian]].

- I want filenames standardised to `Surname (year) — Title`. I also want standardised properties of `datetime`, `title`, `author`, and `publication year` for indexing and search.
	- [[Omnivore]] sync is reasonable at parsing the information into the format I want. Substack subscription items are emailed in (🤷) and there is less structured information for Omnivore to work with.
- Notes are headlined "Literature Notes"
	- I've defined a [[Literature note]] as a type of [[Permanent note]]. Notes coming from Omnivore are often anything but permanent. Their DNA is truthfully that of [[Fleeting note|Fleeting notes]].
	- Tagging [[Literature note|Literature notes]] is of unknown value.
	- Tagging [[Fleeting note|Fleeting notes]] does not occur, but may help with new article processing.
- Sources and [[Literature note|Literature notes]] are treated as equivalent.
	- The [[Sieler (2003) -- Coaching to the Human Soul (Volume I)]] note is both source and literature note. [[Don't duplicate public knowledge]] means I don't create a book page to track the author of a book. It's easy to see how notes end up on the book page.
	- [[Omnivore]] synced articles differ. The "book" information, content and notes all come into the same page.
	- I want to reference sources consistently. I won't always give away my personal notes. [[Way of Being]] references directly into the literature notes on [[Sieler (2003) -- Coaching to the Human Soul (Volume I)]]. 

## The solutions
- Create a template to rename a source note from it's properties.
	- Time is saved correcting note titles manually for consistency.
- Update Omnivores input template to say "Fleeting notes" instead of "Literature notes"
- Never publish sources. As long as I never publish a source page, the reference makes sense to everyone, and I can link/backlink[^3] privately and safely. I can enforce this with the Auto Note Mover plugin. It files based on tag and will move back into safety any sources I accidentally expose[^4].

[^1]: `+/Omnivore` folder. The Omnivore plugin downloads to here.
[^2]: `Atlas/Sources` folder. 
[^3]: Don't forget [[Backlinks are important]]
[^4]: [[Quartz 4]] publishes notes on the website, but only when the are in the `Quartz` subfolder in [[Obsidian]]. If all sources remain in `Atlas/sources` they will never be published. I will be disciplined to add the `#class/source` tag to each of them. Auto Note Mover will monitor for that tag, and when detected, move any note, anywhere, back to the `Atlas/sources` folder. See [[Organising digital knowledge across multiple systems]] for more on this riveting topic.
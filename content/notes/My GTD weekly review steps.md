---
aliases: 
tags: 
datetime: 2024-08-31T12:34:27
updated: 2024-09-02T19:08:00
title: 
---
Each week, normally on the last day I'm working I undertake a [[Getting Things Done]] weekly review.

It is an important grounding process to make sure I have not missed anything important, and to create clarity about what is coming due in the future.

> [!INFO] Where are the screenshots?
> I'd love to be able to include screenshots for each section below. However, I use this system at work and everything would be confidential. All you'd see is a blur anyway. 

## 0. My weekly review template
Every item in my weekly review template is a task to check off. I mostly do them in the same order as listed below. Sometimes, I might jump around a bit and check in a different order just to add some spice to the mix.
<script src="https://gist.github.com/quantumgardener/92c9297c4aa8ed903cb14398e0c98bab.js"></script>

> [!note] Bonus template to help create the template
> I like to file my weekly review template alongside my meeting notes. The location is `/Calendar/Year/Month`. To make it quicker I have an [[Obsidian Templater]] template that creates the a file using the template above, and then files it based on today's date. To activate I run `CTRL-SHIFT-T`[^3] and choose `weekly review`.
>> [!warning] Warning
>> Be careful with this one until you understand it, as the second line moves the newly created note automatically to a new location.  
>
><script src="https://gist.github.com/quantumgardener/566b69f119ddb82ec7f6c0dabf41def7.js"></script>

## 1. Inbox zero
I mostly achieve [[Inbox zero]] each week. There are always one or two emails left mostly because the email contains information I know that I'll need soon. There will always be a project or next action to deal with it. This is a happy medium for me. I normally run a very lean inbox anyway because [[My inbox is not my filing cabinet]].
## 2. Check @overdue
Each morning I check my [[@overdue]] list so by the time I get here for a weekly review, it's usually ok. Just in case, I have an explicit check. [[@overdue]] is a page that uses the [[Dataview (Obsidian Plugin)]] to perform two queries. One for task I had to do yesterday (or earlier), and another for items overdue from others.

I've included the raw [[Markdwown]] code I use below. Copy this into your own overdue page.
<script src="https://gist.github.com/quantumgardener/eb918c5230214ee57e8999b01635752e.js"></script>
## 3. @today
Similar to [[@overdue]] I have an [[@today]] page that brings to my attention items I've scheduled for today. My past has been a longstanding battle between knowing that [[Adding a due date to your tasks is a mistake]] and  [[Committing to tasks without dates]] but the habit is strong. The ultimate purpose is to remind me of something I've pre-thought needs doing today, so why not let the system tell me.

Why check for what's due today? It gives me a grounding when reviewing projects, and also protects against me starting a weekly review late in the day and leaving myself no time to do something that **had** to happen today.

By design [[@today]] does not include items that are overdue. Cognitively it helps me to have this clear separation. It **requires** I have the discipline to check.

I've included the raw [[Markdwown]] code I use below. Note how I use [Modular CSS Layout](https://efemkay.github.io/obsidian-modular-css-layout/) to add some quick links across the top — including a link to [[@overdue]]. You can guess what [[@tomorrow]] does. The same as @overdue but for the future. At work I have an [[@monday]] as well.
<script src="https://gist.github.com/quantumgardener/091c215a7a43ffc468f466c1b859103c.js"></script>
## 4. @long term waiting
So, not everybody gets back to me with what they have promised. To be honest, that can be a good thing if I'm busy 🤣. The [[@long term waiting]] page is one I check every few days just in case. It brings all my `#wf` items together organised by age.

The question I'm answering here is, "Do I still need this? If so, who do I need to give a kick up the arse to get something finished!"

I've included the raw [[Markdwown]] code I use below. This serves as a good example of what you can do with [[Dataview (Obsidian Plugin)]] and some playing around. Line 9 demonstrates how I tag tasks with dates. On 2024-06-05, this would have appeared on the [[@today]] page.
<script src="https://gist.github.com/quantumgardener/fc77461d0b32e427c550c58a37b17fb4.js"></script>
## 5. @next actions
By this point I've checked everything that's overdue or due today. What about those other actions I have committed to work on? I check the list of every non-`#wf` task in my system. It's always a pleasant surprise to find some I've done and missed checking off.

I've included the raw [[Markdwown]] code I use below. Note line 3 where I exclude tasks in my templates. They aren't valid for this list.
<script src="https://gist.github.com/quantumgardener/c3f728086c936f822fde3bd9d0a29d61.js"></script>
## 6. @active projects
This is the part of my weekly review that takes the longest.[^1] For every project that is due for review, I open it up and check the next actions, add any missing actions or close it if I need to. I then set the reviewed date to today causing it to drop off the list. I usually pin this page otherwise opening a link in my system causes it to close.

II've included the raw [[Markdwown]] code I use below. Lines 4–9 provide a count of **all** projects. Lines 11–17 list all projects that are active and due for review. `date_reviewed` is a property on all my projects.
<script src="https://gist.github.com/quantumgardener/ee10b4e12a370b2283b997f9000592df.js"></script>

> [!INFO] Bonus code to speed up reviewing
> I have this [[Obsidian Templater]] template mapped to `ALT-R` to automatically update `date_reviewed`. It's all about [[Productive laziness]]. Credit to Zach Young for the initial [update frontmatter seed code](https://zachyoung.dev/posts/templater-snippets#update-frontmatter) to get me started on this.
> <script src="https://gist.github.com/quantumgardener/f8336de562266b770e21fea201f07fe0.js"></script>
## 7. @pending projects
Similar to [[@active projects]] this is a quick check of projects marked `#status/pending`. Do they need to be activated now?
## 8. @no next action
A quick quality assurance check after reviewing all my open projects. Have I missed next actions on any that need them? There are always some I'm happy to have no action on. Nothing needs to be done in the next week and I'm not going to mess around with the status as the project is still active.

I've included the raw [[Markdwown]] code I use below. Note how on line 3 I have to exclude my templates folder again.
<script src="https://gist.github.com/quantumgardener/d9231aa3123ae8433fa323ab0c39caf2.js"></script>
## 9. Review past 2 weeks of calendar
This step, and the next, are direct out of the [[Getting Things Done]] playbook. After everything I've looked at, a scan of the past two weeks of meetings will sometimes remind me of something promised but not yet done. Good note taking in the moment avoids this **most** of the time. It doesn't hurt to check and is important in building trust in my relationships with others.
## 10. Review upcoming 6 weeks of calendar
Knowing what I know now, do I need to shuffle events around, make a booking not yet made, forget to book my holidays! As much as the other steps help me get a handle on things, this steps makes the future calmer. No surprises.
## 11. Check QA
I have a page that does several data quality control checks across my system eg.
- Have I marked a project `#status/closed` but missed setting the close date
- Do I have projects without organisation or individual contact?
- Have I misfiled something?

I've included the code I use below. There is a lot going on here, but if you take it step-by-step you can see what's happening. There are a couple of items where I'm checking file paths. You can see that's where I'm removing the `.md` to extract the note name and then put it back[^2]. 
<script src="https://gist.github.com/quantumgardener/2fd2456a75432b74f945a73c26926fa8.js"></script>
## 12. Inbox folder filing
Almost there. Any new notes in my Obsidian vault's inbox that have not yet been properly filed are filed now.
## 13. Learnings and highlights
I like to finish by adding at least one line tagged `#learnings` and another tagged `#highlights` to note reflect on the week and note what was important. I finish by clearing out the tasks from the weekly review note and leave my ruminations for future me to come back to with [[Gratitude]].

[^1]: Unless I'm really not in the mood and quickly skip through all my projects. Yeah, I'm only human.
[^2]: Likely there is a better way to do this, but it's what I started working with and it works, so no benefit refactoring the code at this point.
[^3]: My hotkey mapping for `Templater: Opem insert template modal`.
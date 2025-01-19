---
datetime: 2022-06-09T00:00:00
tags:
  - class/blog
---
I find myself entering dates all the time. In filenames, for tasks and in documents. As I continually seek [[Productive Laziness]] I use a text expander to save me time.
## Date formats
I use 2 date formats. YYYY-MM-DD and d MMMM YYYY. For today these are _2022-06-09_ and _9 June 2022_. To create these I use [[Expanso]] with the following keystrokes. All are set to run immediately upon keying in.

All calculations are smart enough to wrap over month and year boundaries.
### Standard day text, used anywhere

| Autotext abbreviation | Purpose                  | Example      |
| --------------------- | ------------------------ | ------------ |
| d==                   | Today as YYYY-MM-DD      | 2022-06-09   |
| d++                   | Tomorrow as YYYY-MM-DD   | 2022-06-10   |
| d--                   | Yesterday as YYYY-MM-DD  | 2022-06-08   |
| dd=                   | Today as d MMMM YYYY     | 9 June 2022  |
| dd+                   | Tomorrow as d MMMM YYYY  | 10 June 2022 |
| dd-                   | Yesterday as d MMMM YYYY | 8 June 2022  |
| d2w                   | 2 weeks from today       | 23 June 2022 |
### Getting Things Done

Within [[Obsidian]] I use the [[Dataview (Obsidian Plugin)]]'s features to help me manage tasks. The way I work, I only need created and due dates. All are in YYYY-MM-DD format and is prefixed with a "| " to help split dates on a row eg "| 📆2022-06-09".

The "Next" abbreviations are smart enough to know that if today is Thursday, you mean Thursday next week, but Saturday this week.

| Autotext abbreviation | Purpose                | Example |              |
| --------------------- | ---------------------- | ------- | :----------- |
| `#==`                 | Due today              |         | 📆2022-06-09 |
| `#++`                 | Due tomorrow           |         | 📆2022-06-10 |
| `#1w`                 | Due 1 week from today  |         | 📆2022-06-16 |
| `#2w`                 | Due 2 weeks from today |         | 📆2022-06-23 |
| `#3w`                 | Due 3 weeks from today |         | 📆2022-06-30 |
| `#4w`                 | Due 4 weeks from today |         | 📆2022-07-07 |
| `#--`                 | Due yesterday          |         | 📆2022-06-08 |
| `#mon`                | Next Monday            |         | 📆2022-06-13 |
| `#tue`                | Next Tuesday           |         | 📆2022-06-14 |
| `#wed`                | Next Wednesday         |         | 📆2022-06-15 |
| `#thu`                | Next Thursday          |         | 📆2022-06-16 |
| `#fri`                | Next Friday            |         | 📆2022-06-17 |
| `#sat`                | Next Saturday          |         | 📆2022-06-19 |
| `#sun`                | Next Sunday            |         | 📆2022-06-19 |

I use !!! and a the Dataview plugin to filter out the **must do today** items.

| Autotext abbreviation | Purpose            | Example |     |              |
| --------------------- | ------------------ | ------- | :-- | :----------- |
| `!!!`                 | Important          |         | 🏆  |              |
| `!==`                 | Imporant today     |         | 🏆  | 📆2022-06-09 |
| `!++`                 | Important tomorrow |         | 🏆  | 📆2022-06-10 |

Whenever I have a "`@waiting for`" task, I put in the date I started waiting using:

| Autotext abbreviation | Purpose                   | Example     |
| --------------------- | ------------------------- | ----------- |
| `+==`                 | Started waiting today     | ➕2022-06-09 |
| `+--`                 | Started waiting yesterday | ➕2022-06-08 |

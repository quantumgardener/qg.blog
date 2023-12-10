---
tags:
  - personal-knowledge-management
  - extending-obsidian
landscapes:
  - "[[productive-laziness]]"
date: 2023-11-09
growth: "[[Budding]]"
---
This article is about how I have implemented the [Getting Things Done Methodology (GTD)](https://gettingthingsdone.com/) within the [Obsidian](https://obsidian.md/) note taking application. It is not commentary on how to follow the GTD methodology, nor will it necessarily reflect the methodology in its pure form^[Those familiar with GTD no there is no such thing as a pure implementation.].

## My needs
I have used many systems for GTD over the years. My current implementation within Obsidian is proving to be the fastest and most effective at tracking next actions and projects.

For me, a GTD system needs to be:
- fast for data entry, lookup and adjustment - getting information in and out quickly is critical
- accessible anywhere - who doesn't need access anywhere in today's day and age
- frictionless - the software shouldn't get in the way of the data

## The bits and pieces
Before I get into configuration and use, here is a list of the various bits and pieces that go into my Obsidian GTD system.

| Component                                                                     | Purpose                                                                                                                   |     |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --- |
| [[Obsidian]]                                              | The underlying text based note taking software.                                                                           |     |
| [Obsidian Sync](https://obsidian.md/sync)                                     | Used to sync across multiple computers and iOS - fast and reliable.                                                       |     |
| [Obsidian-dataview plugin](https://github.com/blacksmithgu/obsidian-dataview) | A high-performance data index and query language over Obsidian files. Brings together lists of information super quickly. |     |
| [Obsidian Templater plugin](https://github.com/SilentVoid13/Templater)        | Templates for projects, meetings, organisations                                                                           |     |
| [PhraseExpress](https://www.phraseexpress.com/)                              | Text expander used primary for the entry of dates against next actions.                                                   |     |
| [Font Awesome](https://fontawesome.com/), emojis and CSS                      | Formatting highlights for quick status identification.                                                                   |     |

## Describing the system
I'll describe the system I use from the ground up. Starting with next actions, I'll move to how I bring them together in useful lists, allocate them to projects, and provide organisation summaries of current projects. I'll finish off with how this all ties together for a weekly review.

## Next Actions
WIthin GTD, a **next action** is the next physical task you can do to move something forward. My tasks take the form,

```
- [ ] context, [[name]], description, start date..., action date
```

For a simple next action, **context** is option. If a person is involved, it will be one of:
- `#agenda` - I need to speak with someone about something
- `#wf` - I'm waiting for something from someone
- `#call` - I use `#agenda` more often than not as enough of a reminder to contact someone

**name** is a link to the person who the next action relates to. Always paired with **context**.

**description** is the next action task that needs completing. If an `#agenda` item it will be what I have to raise with the named person, or if `#wf` what I am waiting for them to complete.

**start date** is required for a `#wf` item. It is the date that I first started waiting. Second and third dates (or more) are added for subsequent follow ups. A start date looks like | ➕2022-01-14

The ➕ is a special [Dataview plugin annotation](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/) that denotes the start date of a task. I use it when I create lists of next actions from the system. 

**action date** is the date action is required or I need to follow up. This is despite my belief that [[Adding a due date to your tasks is a mistake]] I still have many tasks that need to be date based. An action date looks like this | 📆2022-01-14

The 📆 is a special [Dataview plugin annotation](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/) that denotes the due date of a task.

Here are a couple of examples. One of the niceities of Obsidian is we can pick up next actions from anywhere in the system. They don't need to be created on particular pages to be seen. This goes a long way to reducing friction in the system. Next actions can be created close by any page they are relevant to.

![[Getting Things Done with Obsidian - sample tasks.png]]
*Examples of tasks. Note the `#wf` has been styled using CSS.*

## @overdue, @today, @undated

Each day I ask myself what is @overdue from yesterday, what is due @today and once they are all dealt with what is @undated that I can work on now.

### Step 1, check what's overdue
The first step in my daily process is to confirm I've not missed anything from yesterday. As @today only looks at today's tasks, I am at risk of missing something since I've last checked.

For this I have a page called @overdue which used the Dataview plugin to query tasks within Obsidian. It pulls up everything that has a due date prior to today's current date.

    ### My tasks

    ```dataview
    task where due < date(today)
    and !completed
    and due != null
    and !contains(text,"#wf")
    ```

    ### Waiting for

    ```dataview
    task where due < date(today)
    and !completed
    and due != null
    and contains(text,"#wf")
    ```
	
I split things into two queries. Things I should have done and items I was waiting for.

Note the use of `due != null` to restrict the results to dated items only. Anything without a date is assumed to be before today.

Tasks are listed under the page they appear on. This is great when you have a page per project.

With this list open I will:

1. Pin the list (`CTRL-SHIFT-P`)
2. `CTRL-CLICK` any items that need updating so they open in a second window and adjust the dates.

### Step 2, check what's due today

The @today page employs the Dataview plugin to make some queries. The first one brings up all task due today, with a 🏆 icon by the dates. These are the "drop dead" actions that I can't move. They have to occur today.

     ### 🏆
    ```dataview
    task where due = date(today) and !completed
    and contains(text, "🏆")
    ```

Under that is a second query for the tasks ideally done today. It picks up all tasks that are not "drop dead" or waiting for.

    ### My tasks
	
    ```dataview
    task where due = date(today) 
    and !completed
    and !contains(text,"#wf")
    and !contains(text,"🏆")
    ```

Then a final query for everything I'm waiting for that's due today from someone else.

    ### Waiting For

    ```dataview
    task where due = date(today) 
    and !completed
    and contains(text,"#wf")
    ```

## Projects
### Project templates
### @active-projects, @pending-projects

## Organisation summary pages
## Weekly review

## CSS etc.
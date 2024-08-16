---
JD-ID: "[[01.02 Managing Knowledge & Content]]"
landscapes:
  - "[[Quantum OS]]"
  - "[[The Garden Shed]]"
datetime: 2024-03-11T12:00:00
---
Digital knowledge comes at us in all forms and it can be a challenge to manage. This note describes how I manage information in my [[Personal knowledge management]] system.

> [!success] My system works when...
> - I am easily able to find something I've saved
> - I am confident nothing important is missing

## Knowledge and Records
It has taken many iterations of many systems to realise there is a difference between knowledge and records.

| Knowledge                            | Records                             |
| ------------------------------------ | ----------------------------------- |
| Created by me                        | Created by others                   |
| Date is unimportant                  | Point in time, usually dated        |
| Connected to other knowledge         | Each record is complete unto itself |
| Difficult to organise in a hierarchy | Easy to organise in a hierarchy     |
Examples of records include:
- Letters
- Certificates
- Receipts
- Tax records
- Operating Manuals
- Results

Knowledge is pretty much everything else in my system. And because knowledge and records are so different, I need complimentary tools.

## I Use Obsidian for Knowledge
My tool of choice for knowledge such as this note is [[Obsidian]]. I make extensive use of all its features and use it also to store my [[Johnny.Decimal]] **[[Home Life Index]]**.

> [!INFO] Not all [[Obisidan]] pages are filed using the index. It's an ever evolving field.

At the core of the [[Johnny.Decimal]] system are the concepts of [Areas, Categories](https://johnnydecimal.com/10-19-concepts/11-core/11.02-areas-and-categories/) and [IDs](https://johnnydecimal.com/10-19-concepts/11-core/11.03-ids/). This page sits within:

| Area         | Category      | ID                                 |
| ------------ | ------------- | ---------------------------------- |
| 00-09 System | 01 Quantum OS | 01.02 Managing Knowledge & Content |

To file any page, I use a [custom Obsidian property](https://help.obsidian.md/Editing+and+formatting/Properties) called `JD-ID` and for this page that is assigned to `[[01.02 Managing Knowledge & Content]]`. My system allows me to make use of the [[Johnny.Decimal]] index without being constrained by a folder structure. It allows me to properly categories both personal and public notes (as seen on this site).
### The Obsidian Index Build
Areas, Categories and IDs are all pages within Obsidian. Both Areas and Categories make use of the [Folder Notes plugin](https://github.com/LostPaul/obsidian-folder-notes) to provide a folder and file of the same name. It's best explained by creating a sample Area, Category, ID and note.

> [!TIP]
> In all the examples below I use `.md` to refer specifically to the Obsidian Markdown file. **Do not** create the filename with the .md extension. Obsidian and the Folder Notes Plugin will do that for you.
#### Create the Area
Within the Home Life Index folder, create a folder for the Area. Use the Folder Notes plugin to create a file of the same name as the folder.

**Folder**: `Home Life Index/10-19 Life Administration`
**File**: `Home Life Index/10-19 Life Administration/10-19 Home Life Administration.md`

A [[Dataview (Obsidian Plugin)]] query is added to the `10-19 Home Life Administration.md` file.

~~~
```dataview
TABLE WITHOUT ID file.link as Categories
where JD-Area = [[]]
sort file.link
```
~~~

This code will list all Categories in this Area.

> [!TIP]
> Here and below you can eliminate the use of the Dataview plugin code and instead turn on `Backlinks in document` for the same effect. I like the way Dataview formats and at the Category level (below) means I can have additional information such as what systems store information related to that category.
#### Create the Category
Within the Area folder, create a folder for the Category. Use the Folder Notes plugin to create a file of the same name as the Category folder.

**Folder**: `Home Life Index/10-19 Life Administration/12 Home Technology`
**File**: `Home Life Index/10-19 Life Administration/12 Home Technology/12 Home Technology.md`

A [[Dataview (Obsidian Plugin)]] query is added to the `12 Home Technology.md` file.

~~~
```dataview
TABLE WITHOUT ID file.link as IDs, JD-Storage
where JD-Category = [[]]
sort file.link
```
~~~
This  code will list all ID files in the category.

Now for the important part. Linking the Category to the Area. 

1. Create a property called `JD-Area`
2. Set the property to `[[10-19 Life Administration]]`

If you go back to the Area page, you will now see the `12 Home Technology` page listed.

#### Create the ID record
Within the Category folder, create a single file `12.01 Backups`.  Now link it.

1. Create a property called `JD-Category`
2. Set the property to `[[12 Home Technology]]`

Since this is my index, I use another property to flag where notes and records relating to this ID are stored.

1. Create a second property, and call it `JD-Storage`
2. Assign one or more storage locations, e.g., `[[Filed in Obsidian]]` or `[[Filed in Zotero]]`.

#### Create a Note
Any note that relates to my backups is easily "filed" by adding a property called `JD-ID` and setting it to the relevant ID which in this example is `[[12.01 Backups]]`.

#### Example Summary
The Obsidian File Navigator looks like this.
![[jd-file-navigation-example.webp]]

The Area looks like this:
![[jd-area-example.webp]]

The Category looks like this:
![[jd-category-example.webp]]

And the ID file looks like this:
![[jd-id-example.webp]]
## I Use Zotero for Records
Records are stored in [[Zotero]], within a folder structure ("Collections") that follow my [[Johnny.Decimal]] index. More on that below.

![[Zotero Johnny Decimal Collection Structure.webp]]

The screenshot above shows some of the categories within [[Zotero]]. There are gaps because not every index item has records associated with it. A Zotero collection is only created when needed. This is not my [[Johnny.Decimal]] index but merely those items needed in Zotero.

> [!INFO] Benefits of Zotero for storing records:
> - Metadata can be added. I typically set a Date and a tag such as Receipt.
> - Documents can exist in multiple collections. In the back-end of the system documents are stored independently from their mapping to a collection. This is quite different from a filesystem directory structure where documents exist in only one location.
> - Zotoro runs as a WebDAV server on my [[Synology DiskStation DS920+]] so I can access it from multiple computers in the house.

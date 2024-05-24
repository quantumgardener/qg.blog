---
JD-ID: "[[01.02 Managing Knowledge & Content]]"
landscapes:
  - "[[quantum-os]]"
datetime: 2024-03-10T11:53:00
updated: 2024-05-24T10:46:00
growth: "[[Evergreen]]"
---
By convention, as there is no way to enforce this, the properties added to file should be in this order. As I read them, this puts the most important information at the top.

| Rank | Name                     | Comment                                                                                                    | Multiple Values |
| ---- | ------------------------ | ---------------------------------------------------------------------------------------------------------- | :-------------: |
| 1.   | **aliases**              | Note link aliases within [[Obsidian]].                                                                     |        Y        |
| 2.   | **css-classes**          | Note formatting changes within [[Obsidian]].                                                               |        Y        |
| 3.   | **tags**                 | Note tags. See [[Tag Guidelines]].                                                                         |        Y        |
| 4.   | **title**                | Alternative page title. Used when filename does not allow wanted characters.                               |        N        |
| 5.   | **JD-Area**              | A [[Johnny.Decimal]] area.                                                                                 |        N        |
| 6.   | **JD-Category**          | A [[Johnny.Decimal]] category. Must be paired with JD-Storage.                                             |        N        |
| 7.   | **JD-Storage**           | Lists locations where notes in the [[Johnny.Decimal]] system are stored. Must be paired with JD-Category.  |        Y        |
| 8    | **JD-ID**                | A [[Johnny.Decimal]] ID.                                                                                   |        N        |
| 9    | **date** or **datetime** | Original date of an artefact and typically the date of writing or publication by myself or another.        |        N        |
| 10   | **updated**              | The date and time an artefact was meaningfully updated and it's deemed worth recording the time of update. |        N        |
| 11   | **landscapes**           | For published pages, which [[Landscapes]] the note belongs to.                                             |        Y        |
| 12   | **growth**               | For published notes, the current growth level. One of [[Seedling]], [[Budding]], or [[Evergreen]].         |        N        |
| 13   | **description**          | For published pages, a description to override the automatically generated excerpt.                        |        N        |
| 14   | all other properties     | Other properties which are valuable in the context of the note e.g,. Author, Series.                       |        Y        |

> [!Help] Dates are timezone agnostic
> Times used in date properties, and throughout the system in general, are timezone agnostic. Most can be assumed personal to me and so UTC+10:00.

## Naming Properties
- All property names should be lowercase unless abbreviations (e.g., `JD-` examples above.)
- Instead of spaces, use camelCase
---
[[2024-05-24]] - replaced `publishDate` with datetime to give me a distinction between dates without a known time and dates with a time. The use of `date` and `datetime` is consistent with programming language conventions. I find it easier to read and solves the problem of missing times which `publishDate` would also suffer from. As articles are updated I will progressively move from `date` to `datetime`. Added `updated` as a standard property.

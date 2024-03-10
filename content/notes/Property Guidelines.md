---
JD-ID: "[[01.02 Managing Knowledge & Content]]"
landscapes:
  - "[[quantum-os]]"
date: 2024-03-10
growth: "[[Evergreen]]"
---
By convention, as there is no way to enforce this, the properties added to file should be in this order. As I read them, this puts the most important information at the top.


| Rank | Name            | Comment                                                                                                   | Multiple Values |
| ---- | --------------- | --------------------------------------------------------------------------------------------------------- | :-------------: |
| 1.   | **aliases**     | Note link aliases within [[Obsidian]].                                                                    |        Y        |
| 2.   | **css-classes** | Note formatting changes within [[Obsidian]].                                                              |        Y        |
| 3.   | **tags**        | Note tags. See [[Tag Guidelines]].                                                                        |        Y        |
| 4.   | **title**       | Alternative page title. Used when filename does not allow wanted characters.                              |        N        |
| 5.   | **JD-Area**     | A [[Johnny.Decimal]] area.                                                                                |        N        |
| 6.   | **JD-Category** | A [[Johnny.Decimal]] category. Must be paired with JD-Storage.                                            |        N        |
| 7.   | **JD-Storage**  | Lists locations where notes in the [[Johnny.Decimal]] system are stored. Must be paired with JD-Category. |        Y        |
| 8    | **JD-ID**           | A [[Johnny.Decimal]] ID.                                                                                  |        N        |
| 9    | **landscapes**      | For published pages, which [[Landscapes]] the note belongs to.                                            |        Y        |
| 10   | **date**            | Original online publication date.                                                                         |        N        |
| 11   | **growth**          | For published notes, the current growth level. One of [[Seedling]], [[Budding]], or [[Evergreen]].        |        N        |
| 12   | **publishDate**     | Currently used as a modified date for published notes.                                                    |        N        |
| 13   | **description**     | For published pages, a description to override the automatically generated excerpt.                       |        N        |

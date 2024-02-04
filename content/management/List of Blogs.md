---
draft: "true"
---

> [!INFO] [[19.01 Daily Journal]] entries marked with `#journal/blogged` indicate entries which were originally blogged compared to `#journal/handwritten`.

```dataview
table
  date as "Published", tags, landscapes, growth
from "Quartz/blog"
where date != null 
sort date desc
```
---
landscapes:
  - "[[The Garden Shed]]"
datetime: 2024-05-23T19:03:00
---
## Move and rename
Command to organise and rename from SD card to IMatch import.

```powershell
& 'C:\Program Files\photools.com\imatch6\exiftool.exe' -r -o . -d S:/memories/import/%Y/%m/%Y-%m-%d/%Y-%m-%d_%H.%M.%S%%-c.%%e "-filename<datetimeoriginal" E:\
```

## Copy and file, keep original in place
```powershell
& 'C:\Program Files\photools.com\imatch6\exiftool.exe' -r -o . -d S:/memories/import/%Y/%m/%Y-%m-%d "-directory<datetimeoriginal" -progress e:\
```

[FileName and Directory tags](https://exiftool.org/filename.html)
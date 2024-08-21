---
datetime: 2024-07-18T16:08:03
updated: 2024-08-21T23:28:22
---
> [!INFO] 
> The information below remains relevant as it describes how I use [[Zotero]] as part of my document management solution, but for my current overall process see [[Organising digital knowledge across multiple systems]].
>
> The major difference is documents are no longer stored in [[OneDrive]] with links to Zotero, but in a locally hosted webdav server on my [[Synology DiskStation DS920+]] NAS.

[[Zotero]] is a tool used by academics to manage their research journals and citations. I am using it as my digital filing cabinet. The idea of a filing cabinet is just one of many were a physical medium has been translated into a digital one, often bringing the limitations of the physical into the digital. When I say, "filing cabinet" I mean the single place of storage for those documents that would otherwise have a paper-based equivalent.

The folder (or directory) structure of storage systems is limited because it is hierarchical. A single document cannot exist in two places at once without there being two copies^[Windows shortcuts or symlinks do allow this with so much effort it's not worth it]. 

The typical way around this is to use software to provide a level of abstraction over the top of the file system. Applications such as [[DevonThin]]k or Zotero do this. They provide the means to:
- add metadata such as tags, publisher etc. to a file
- group files in collections - thereby overcoming the limitations of the hierarchical structure
- bring all files together in a single database

This last point has been a problem for me. Sometimes I want to quickly access a file without having to go through a piece of software to get there. Perhaps that software is not available on all the platforms I use (either not available outright, too expensive to cover all options, or limited on some platforms). The "files" are all kept in what I'm sure is a highly efficient access structure. It's also usually not human friendly.

My Zotero setup has:
- synced database of metadata, collections and tags within the app environment. This allows me to find everything I need on multiple platforms.
- ~~all documents **linked** to the Zotero database, not stored within it. This means I can store all files on OneDrive and sync them to all my devices for quick access outside of Zotero and without the need to pay for Zotero storage or increase my risk of a security breach~~.

Files are stored in folders by author/publisher and that means I can find them quickly.

Why is this possible? Because Zotero is smart enough to say, "If you are storing files outside of Zotero that's fine. Just tell me where. Oh, and if they are in another location on a different computer, I can handle that as well".
## My setup
- Every document has a parent index item that allows me to add metadata.
- I set appropriate tags and store similar files in a hierarchy of collections for fast access.
- ~~Files are all linked and stored in OneDrive (the Zutilo plugin allows for renaming)~~
- ~~Files are stored on OneDrive in a folder for author or publisher, then the filename~~
- Documents are related with Zotero if it makes sense. For example, I'll relate a receipt to a warranty document.
- Older groups of files eg. past tax records, are not added individually. Instead I'll add a zip archive of the original folder and add that for reference.
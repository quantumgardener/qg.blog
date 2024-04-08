---
tags:
  - metadata-strategy
JD-ID: "[[12.02 Mediabank Photos and Videso]]"
landscapes:
  - "[[hobby-together]]"
growth: "[[Budding]]"
date: 2024-04-08
---
**Mediabank** is the name given to our family [[Photography]] and video archive. It collects all digital media assets (hereafter media) into a single location managed by [[IMatch]]. As of March 2024 there are close to 38,000 items being catalogued and managed consuming 525GB.
## Storage
| Location                         | Purpose                                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `S:\memories\assets`             | Final storage location for media in `YYYY\mm -MMMM\` folders.                                               |
| `S:\memories\database`           | Location of the Mediabank.imd5 file.                                                                        |
| `S:\memories\database\Pack & Go` | Periodic backups of the [[Mediabank]] environment using IMatch Pack & Go[^pack].                            |
| `S:\memories\home videos`        | Videos from when we had a video camera. Separated from the other assets to allow easy indexing by [[Plex]]. |
| `S:\memories\import`             | Location of media prior to culling and addition of metadata                                                 |
| `S:\memories\tools`              | Additional reference information e.g., geneaology, scripts                                                  |

`S:\` is a motherboard mounted, high-speed 1TB M.2 SSD drive.
## High Level Process

At a very high level, media are brought into the system, catalogued by having metadata added and filed. From here, some are shared publicly.

```mermaid
flowchart TD
otherMobiles[Other Family Member's Mobile Phones] --> OneDrive
myMobile[My Mobile] --> MyOneDrive[My OneDrive]
OneDrive -- "Shared to" --> MyOneDrive
camera[Digital Cameras] --> CardReader
MyOneDrive -- cull --> IMatchImport[IMatch Import Folder `S:\memories\import`]
CardReader --> IMatchImport
IMatchImport -- catalog ---> IMatchAssets[IMatch Assets Folder `S:\memories\assets`]
Scans --> IMatchImport
IMatchAssets --> Publish
```

## 1. Ingestion to Import Folder

### Digital Cameras

Photos and video from DSLR or Mirrorless cameras are copied to the `import` folder using a card reader (preferred), local wi-fi connection between camera and computer, or USB cable. 
### Mobile Phones
With 3 iPhones[^samsung] in the house, I needed a way to reliably get photos from the phone to the PC. Plugging each into a USB port and copying files is unworkable. Photo files are typically not stored with dates in the filename, so although the first copy is easy, the next requires I keep track of the last number photo I copied.

Initially I used Dropbox to automatically upload photos in the background. That worked until Apple removed the ability for an application to constantly run in the background. And I would sometimes run into issues filling a family member's Dropbox capacity. I've moved to OneDrive now, and that has fixed the space problem but the background download problem remains. Periodically I have to remind everyone to go into OneDrive on their phone which reignites the transfer for a few days and catches everything up.

> [!warning] iCloud for Windows is so unreliable in our household I don't go near it.

OneDrive, and Dropbox before it, rename photos on the way in to a date-time format. Sometimes, when importing photo from iPhones they end up in the wrong day (more on that later) but usually within the same month so I can easily see the date corrections I need to make. The two main culprits are `.mov` files which reference UTC instead of local time, and photos sent from someone else's phone. They have the date sent, not the date taken.

My daughter and wife's Camera Roll folders are shared into my OneDrive account, and those three folders are indexed in situ by [[IMatch]]. I'll perform an initial cull right here before moving the files to the `import` folder to remove the many screenshots of whatever has taken their fancy on social media, or in the shops, or... Approximately half- to two-thirds of images disappear here.

I use IMatch's [Renamer](https://www.photools.com/help/imatch/index.html#ren_basics.htm) to move and rename files for me. 

> [!example] The "To Import" renamer definition
> ![[imatch-import-renamer.webp]]
> 
> The first three lines create a filename based on the date and time the media was created. At the end between `[` and `]` is a global six-digit unique number. Here the next is 43,411. This ensures if a file has the same date and time, the filename is unique.
> 
> The green line converts the filename extension to lower-case for consistency.
> 
> Finally, the blue Move File line takes the previously renamed file and moves it to the import folder within a `yyyy\mm\yyyy-mm-dd\` structure.
> 
> >> [!NOTE] In this example `20240301_042423338_iOS.jpg` becomes `2024-03-01 15.24.23 [043411],jpg`.
### Scans
600dpi scans from a [[Fujitsu ScanSnap 1300]] are saved directly into the import folder in a sub-folder based on the name of the album they came from. Dates are of no use here. The date is the date of scanning.

# 2. Cataloging

To be fully cataloged, every digital asset will have:
- Date/Time (When)
- Location (Where)
- GPS coordinates (a bit more where)
- People (Who)
- Event (What)

If a value cannot be determined, the closest is used. In some cases, "Unknown" is a valid choice.
### Date/Time

Every image has the date and time set. 
- Photo date and time from a camera
	- Usually reliable
	- May need adjustment if taken in a different time zone
	- May need setting if photos come from someone else
- Movie files
	- From iPhones need the correct time zone set and a subsequent file rename
- Scanned files
	- Dates and times are entered by hand as a best effort guess.

Ingestion files images by day within a month. This makes it easier to identify and correct date time errors across different media sources. A `.mov` file that has not been corrected will normally be the day before (one advantage of being +10/+11 hours ahead of UTC).

When I have to set a date and I don't know the exact details I follow [[My Photo Dating Strategy for Uncertain Dates]].
### Location

Location is a keywords hierarchy. It follows:

- Country
	- State/Province
		- City/Town
			- Location/Suburb
				- Street
					- Building address

The category is colour-coded ==blue== for a visual indicator of an address being present.
### GPS

==Describe how GPS is added==

### People
Uses the built in "People" tab. Information is stored and managed by [[IMatch]]. The connection from asset to People is via an annotation. Either through face matching, or direct application (without a matched face). IMatch also stores names in the *XMP:Person in Image* field.
- Each person record made up of
	- Name Surname
	- Sort order (Surname, Name)
	- Date of birth/death
	- Tag gender (male or female)
	- Add categories
		- Gender
		- Nationality
		- Relationships

Pets use the same system.
- Each pet record made up of
	- Name
	- Date of birth/death
	- Gender
	- Group = Pet
	- Add tags
		- Any relevant ie. domestic cat, budgie...
	- Add category - broad class of pet ie. dog, cat, bird, fish

The top-level Who category is dynamically calculated directly off the *XMP:Person in Image* field.

### The Final Flag

Once I'm happy with everything and have added all the metadata I can, I add a label called `Final`.

==Add some examples and more explanation==

## Words on the Working Folder

==Some explanation to come on how I QA what metadata is there==
## Media Filename Convention

Media are filed in `S:\memories\assets` following a strict naming convention by date, time and a global unique file number that increases by 1 each use. The use of a global identifier means media with the same date and time remain unique.

```
- yyyy-mm-dd
	- mm MMMM
		- yyyy-mm-dd hh:MM:ss [nnnnn0].ext
		- yyyy-mm-dd hh:MM:ss [nnnnn1].ext
```

![[imatch-media-and-folders.webp]]

As soon as possible after the date and time of a file are confirmed correct during ingestion, the media is renamed.

The process for handling uncertain dates is described in [[My Photo Dating Strategy for Uncertain Dates]].

# File storage and backup


Refer to [[My Backup Strategy]] for how digital assets and the database are backed up.

## RAW Photo Processing

1. Lens correction - I do this automatically on import in to [[Lightroom]]
2. Transform
3. Crop
4. White Balance
5. Exposure
6. Contrast
7. Colour
8. Dodging & Burning
9. Cleanup
10. Sharpening

[^pack]: [Pack & Go Help](https://www.photools.com/help/imatch/index.html#packandgo.htm)
[^samsung]: And previously 1 Samsung as well.
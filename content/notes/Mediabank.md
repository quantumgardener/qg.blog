---
tags:
  - metadata-strategy
JD-ID: "[[12.02 Mediabank Photos and Videos]]"
datetime: 2024-04-08T00:00:00
updated: 2024-12-30T18:52:00
cssclasses:
  - firstcol-300
---
[[Mediabank]] is the name given to our family [[Photography]] and video archive. It collects all digital media assets (hereafter media) into a single location managed by [[IMatch]]. 

| Files  | Size  |
| ------ | ----- |
| 38,458 | 538GB |

## Storage
| Storage Folder                   | Purpose                                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `S:\memories\assets`             | Final storage location for media in `YYYY\mm -MMMM\` folders.                                               |
| `S:\memories\database`           | Location of the Mediabank.imd5 file.                                                                        |
| `S:\memories\database\Pack & Go` | Periodic backups of the [[Mediabank]] environment using IMatch Pack & Go[^1].                               |
| `S:\memories\home videos`        | Videos from when we had a video camera. Separated from the other assets to allow easy indexing by [[Plex]]. |
| `S:\memories\import`             | Location of media prior to culling and addition of metadata                                                 |
| `S:\memories\tools`              | Additional reference information e.g., geneaology, scripts                                                  |

`S:\` is a motherboard mounted, high-speed 1TB M.2 SSD drive.
## High Level Process

At a very high level, media are brought into the system, catalogued by having metadata added and filed. From here, some are shared publicly.

<!--[mermaid.live](https://mermaid.live/edit#pako:eNp1kctqwzAQRX9l0Kab5Ae8KJSYQBYmoe6qniwm8sQW6BEkucWE_HvlV1L62M3VvTNzGF2FdDWLTJy1-5Qt-QhvOVoXW_aFOynNodoPArZklO6hYHNi_xRgcuHQOsvhCOv1M-wt5159MFrTT3ZV9HNwShT9khmcpT6iXcqUAhRlAuEaokPxow2tJMOeqlw1KpKGzShngA35-pWpZo_20TPMPCsfIshO6zG4KyjKdmcuzsdqEjAp2Dqd-qHMEA0b5xUHRDV6ifOx4dcctN_VsFRSInQNkK0TgE20M8C98yUEjmEhmNTfBDR6iaCUZMO_y-cRg33oTlqFVqxEupAhVadfvqKFdN_0oYZRZKms-UydjijQ3lKUuujK3kqRRd_xSnjXNa3IzqRDUt2lpsi5osaTub9eyL47t-jbFwb90HA)-->

![[mediabank-ingestion-process.svg|600]]

## Ingestion to Import Folder
### Digital Cameras
Photos and video from DSLR or Mirrorless cameras are copied to the `import` folder using a card reader (preferred), local wi-fi connection between camera and computer, or USB cable. 
### Mobile Phones
With 3 iPhones[^2] in the house, it is difficult to reliably get photos from the phone to the PC in a way that makes managing them once imported easy. Plugging each into a USB port and copying files is unworkable because I need to keep track of the last number photo copied from each phone. The file names do not include the date and time the photo was taken.

OneDrive uploads files and renames them on the way[^3].  However, Apple does disable the app from running the background after a while so periodically I have to remind everyone to go into OneDrive on their phone which reignites the transfer for a few days and catches everything up.

> [!warning] iCloud for Windows is so unreliable in our household I don't go near it. 
> It would frequently fail to sync files, and at other times would chew up 40% of the CPU doing nothing at all. That type of unreliability is unacceptable when dealing with family memories.

Sometimes, when importing photo from iPhones they end up in the wrong day (more on that later) but usually within the same month so I can easily see the date corrections I need to make. The two main culprits are `.mov` files which reference UTC instead of local time, and photos sent from someone else's phone. They have the date received, not the date originally taken.

My daughter and wife's Camera Roll folders are shared into my OneDrive account, and those along with my own are indexed in situ by [[IMatch]]. I perform an initial cull of screenshots of whatever has taken our fancy on social media, or in the shops, before moving the files to the `import` folder. Approximately half- to two-thirds of images disappear here. The iPhone as a camera is used very differently from a dedicated camera such as my [[Canon R50 Mirrorless|Canon R50]].

Rather than move files manually, I use IMatch's [Renamer](https://www.photools.com/help/imatch/index.html#ren_basics.htm) to move and rename files for me. 

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
## Cataloguing
To be fully catalogued, I aim to have every digital asset with:
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
	- Usually need setting if photos come from someone else (sharing photos seems to strip the original date and time out)
- Movie files
	- From iPhones need the correct time zone set and a subsequent file rename. This is a weird quirk that iPhone photos have the correct timezone, yet movie files have their time referenced to UTC. IMatch makes it easy to adjust the time and add a timezone. 
- Scanned files
	- Dates and times are entered by hand as a best effort guess.

Ingestion files images by day within a month. This makes it easier to identify and correct date time errors across different media sources. A `.mov` file that has not been corrected will normally be the day before (one advantage of being +10/+11 hours ahead of UTC).

When I have to set a date and I don't know the exact details I follow [[My Photo Dating Strategy for Uncertain Dates]].

> [!TIP] Metadata for Dates
> Dates are stored in the `Date Created` and `DateTimeOriginal` fields.
### Location

> [!NOTE] Keywords or Categories
> Location (and Events) were stored as keywords prior to December 2024 when they were converted to categories for privacy protection. Keywords are metadata written to the file giving the advantage of true portability across platforms—a database can be populated from the information in the photos. However, keywords as metadata also provide a vector for private information to leak out with the photo if it is posted online. Categories exist in the local database only which is backed up at least daily.

Location is a category hierarchy. The structure of level si:

- Country
	- State/Province
		- City/Town
			- Location/Suburb
				- Street
					- Building address

A building's address will be `number` - `descriptor` e.g.

- Australia
	- Victoria
		- Bendigo
			- CBD
				- High Street
					- 63 - McDonalds

I don't use the IPTC Country, State/Province, City, Location fields at all[^4]. 

If I can't determine a location with specificity, I'll set the lowest category I can. For example, a photo taken in a car whilst travelling in Victoria, without GPS, will be tagged `Australia | Victoria.`

The category is colour-coded blue for a thumbnail's visual indicator of an address being present.
### GPS
If the device doesn't add GPS directly, it is added via the in-built map function. Photos that are all in the same location e.g., home, all have the same GPS address and make use of [[IMatch|IMatch's]] various location features.

![[imatch-geocoding example.webp]]
When it's easy to separate pins to where a photo was taken I set separate pins. For searched results, I will use the pin provided.

Common locations, such as our house, family member's houses, or other locations we visit regularly are created as a location with a n-metre radius. Media within that radius are all set to the same location. It's enough to know a photo has been taken on our house property. Nobody needs to know which room.

Not all images will have GPS, just as not all will have a location.
### People
The decision to tag people is difficult to navigate. Do you tag only those people close to you, or do you tag everyone you know. The latter makes for a lot of work, particularly in those media when I personally don't know everyone. That happens a lot with my daughter's friends.

> [!NOTE] My default has been to tag everyone, but I recognise there is limited value in that and may change. 

People are identified using the [built-in "People" function](https://www.photools.com/help/imatch/index.html#people.htm). Metadata about a person is stored and managed by [[IMatch]]. The connection from asset to People is via an XMP annotation either through face matching, or direct application (without a matched face). IMatch also stores names in the *XMP:Person in Image* field.
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
	- Add tags e.g., `WHAT|nature|animal|mammal|domestic dog` or `WHAT|nature|animal|bird|cockatiel`
	- Add category e.g., `Pets|Dog` or `Pets|Bird`

> [!TIP] Relationships via category means information is stored in the database but not in the images themselves. For my daughters, the grandparents category brings together images of all their four grandparents.

A top-level Who category is dynamically calculated directly off the *XMP:Person in Image* field. 
### Events
I do not use IMatch's built-in Events feature. It's good, but neither fast enough, nor flexible enough for my needs. Event media thumbnails have a pink marker.

![[imatch-top-level-events.webp]]

Events all have their own category. Most are tagged `year - event` e.g.

- Travel & Time Away
	- 1995 - Melbourne Zoo
	- 2000 - Denmark
- Visitors
	- 2007 - Sophie

You'll see Christmas is just the one category. There is one "Decorating the Tree" sub-category. A dynamic category splits the photos out by year.

![[imatch-christmas-category-by-year.webp]]

It's a simple filter by keyword then split by year on the first 4 numbers of the DateCreated field.

![[imatch-christmas-data-driven-category.webp]]

I also split Easter by year, Travel by year, then event, and Who by Year, then name.
### General Keywording
I only apply obvious keywords for situations where I think I may want to look for photos containing a sunset, cake, or kangaroo. 

> [!NOTE] AI Keywording in IMatch 2025
> The next version of IMatch has improved AI keywording so I may revisit my approach. Manual keywording doesn't give back the time it takes.
### The Final Flag
Once I'm happy with everything and have added all the metadata I can, I add a label called `Final`.
### Words on the Working Folder
I rely extensively on [[IMatch]] categories with formulas to streamline the process mentioned earlier. Each category monitors for missing metadata relative to the current working folder. As I add metadata, images are removed from the categories until all necessary metadata is added. This approach eases the workload, as I don't have to keep track of what I've completed and what I haven't.

The `Working folder` category points to the current file system folder I am working on. It is currently set to `"@RFolder[file://S:/memories/import/2024/06/]"`. The `RFolder` means the current folder and any sub-folders (R = recursive).

In the example below, you can see there are 137 photos and I have not yet pulled out duplicates, bad photos, screenshots etc.

![[imatch-working-folder-categories.webp]]

Every other category references this category plus the metadata I'm looking to add. Most also reference `NOT "@Collection[Label|Final]"` on the understanding that if I've flagged it `FINAL` then I'm done.

> [!code] **Check movie timezones** formula
> `"IMatch Processing|Working folder" AND ("@FileRegExp[\.mov$]" OR "@FileRegExp[\.mp4$]") NOT "@Collection[Label|Final]"`
> 
> Select all images in the working folder with a `.mov` or `.mp4` file extension so that I can manually add the correct time zone to the date and time fields.

> [!code] **No copyright** formula
> `("IMatch Processing|Working folder" AND "@MetadataTag[rights,novalue]") NOT "@Collection[Label|Final]"`
> 
> Select all images where Copyright has not yet been set. I have a metadata template to detect the year of the image and set the copyright value.
> 
> ![[imatch-copyright-metadata.webp]]

> [!code] **No Digital Source Type** formula
> `("@MetadataTag[XMP::iptcExt\DigitalSourceType\DigitalSourceType\0,novalue]" AND "IMatch Processing|Working folder") NOT "@Collection[Label|Final]"`
> 
> Select all images where the Digital Source Type metadata field has not been set. I set this manually upon import now, so there will be no new images missing this value.

> [!code] **No event** formula
> `("IMatch Processing|Working folder" NOT "Event") NOT "@Collection[Label|Final]"`
> 
> Select all images without an `Event` keyword set. Not all images receive and event.

> [!code] **No genre** formula
> `("IMatch Processing|Working folder" AND "IMatch Workflow Categories|No Genre") NOT "@Collection[Label|Final]"`
> 
> Select all images in the working folder without a genre. Primarily of use for [[IMatch to Socials]] which requires genre. AI changes may help me here in the future.
> 
> The `No Genre` category lists all images without a genre and has the formula `"@All" NOT "Image Characteristics|Genre"`[^5].

 > [!code] **No GPS** formula
> `("IMatch Processing|Working folder" AND "IMatch Workflow Categories|No GPS Data") NOT "@Collection[Label|Final]"`
> 
> Select all images without a GPS location. One of the few categories that begins with only a few images in it. 
> 
> The `No GPS Data` category lists all images without a genre and has the formula `"@MetadataTag[gpslatitude,novalue]"`[^5], checking for missing latitude only.

 > [!code] **No location** formula
> `("IMatch Processing|Working folder" AND "IMatch Workflow Categories|No Location") NOT "@Collection[Label|Final]"`
> 
> Select all images in the working folder without a location. 
> 
> The `No Location` category lists all images without a genre and has the formula `"@All" NOT "Location"`[^5].

 > [!code] **No person** formula
> ![[imatch-person-category-formula.webp]]
> 
> Select all images in the working folder without a person. As soon as one person is added, the image falls out of this category. (Sorry for the screenshot, couldn't get it to display properly).

 > [!code] **No people (animals)** formula
> `("IMatch Processing|Working folder" NOT "@Keywords|nature|animal") NOT "@Collection[Label|Final]"`
> 
> Select all images in the working folder an animal in them. How else can I find our pets?

 > [!code] **Not marked final** formula
> `"IMatch Processing|Working folder" NOT "@Collection[Label|Final]"`
> 
> Select all images in the working folder not yet marked final.
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
## File storage and backup
Refer to [[My Backup Strategy]] for how digital assets and the database are backed up.

## Still to come
- Versioning and buddy strategy


[^1]: [Pack & Go Help](https://www.photools.com/help/imatch/index.html#packandgo.htm)
[^2]: And previously 1 Samsung as well.
[^3]: I used Dropbox to automatically upload photos in the background which worked until Apple removed the ability for an application to constantly run in the background. And I would sometimes run into issues filling a family member's Dropbox capacity. OneDrive still has the same background upload timeout, but there are no practical storage limits to worry about so no need to change back.
[^4]: I am considering a revisit of this to limit accidentally placing too much location information on the web when sharing photos. It will mean updating [[IMatch to Socials]] to remove tagged locations, but adds another cataloguing step.
[^5]: The power of this system starts to build. In one category I see all images across the database without a genre, GPS data, or location, or in another category, the same but limited to just those in the working folder.
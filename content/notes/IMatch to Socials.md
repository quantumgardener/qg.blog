---
tags: 
landscapes:
  - "[[hobby-together]]"
growth: "[[Seedling]]"
date: 2024-04-14
---
The **IMatch to Socials** system automates the addition, update and deletion of images between [[IMatch]] and [flickr](https://flickr.com) or [pixelfed](https://pixelfed.org). I created it to reduce the time taken updating and managing photos across all three platforms.

> [!warning] Page under development. Scripts have only just been written.
## Features
- Uses metadata directly from the [[IMatch]] database and formats it (to my liking) for sharing with others.
- Processes photos from a dedicated "Socials" category within [[IMatch]] and adds any new photos to the matching social platform.
- Updates photos flagged for update.
- Deletes photos flagged for deletion.
- When the target platform is flickr, adds/removes the photo from albums and groups.
- When the target platform is pixelfed, provides alt-text alongside the photo.
- Can be run as an [IMatch app](https://www.photools.com/help/imatch/app_basics.htm) for processing without leaving [[IMatch]].
### Platform actions

**flickr**
- Add
	- Upload image
	- Set title and description
	- Set date taken
	- Add to album(s)
	- Add to group(s)
- Update
	- Upload image
	- Set title and description
	- Set date taken
	- Add to/remove from albums(s)
	- Add to/remove from groups(s)
- Delete
	- Delete image
- Typical error conditions - mean add/update/delete won't happen
	- Missing title or description
	- Photo size > 200MB

**pixelfed**
- Add
	- Upload image
	- Set title, description and image alt-text
- Update
	- Set title, description and image alt-text
- Delete
	- Delete image
- Typical error conditions - mean add/update/delete won't happen
	- Missing title, description or headine (for alt-text)
	- Photo size > 15MB

## Requirements
For this system to run you need:
- Experience with code. I cannot emphasise this enough. I have taken steps to automate and bullet-proof this system **as much as I can and as much as I need for my own purposes**. It may not be right for you. The system modifies data and **deletes** data. 

> [!warning] It is your responsibility to test how this system works for you and to support that testing with adequate backups for your needs.

- [[IMatch]] from https://www.photools.com (and this means Windows 10 or Windows 11)
- [Python](https://www.python.org) at least version 3.10
- For flickr
	- [Python Flickr API](https://stuvel.eu/software/flickrapi/)  - once you have Python installed run `pip install flickrapi`
	- TZ data for timezone manipulation - once you have python installed run `pip install tzdata`
- For pixelfed
	- [Mastodon.py](https://pypi.org/project/Mastodon.py/) - once you have Python installed run `pip3 install Mastodon.py`
	- Your own Pixelfed account and 'personal access token'
- Code downloaded from [GitHub](https://github.com/quantumgardener/IMatch-to-Socials)

## Installation and Configuration

### Environment
1. Set up with all the [[#Requirements]] listed above.
2. ...
### Create IMatch Categories
### Create IMatch Application Variables

### Create IMatch Attributes

### Configure IMatch Application
## Under the Hood
So, what's going on under the hood?



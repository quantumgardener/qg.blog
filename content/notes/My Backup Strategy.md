---
cssclasses: 
tags:
  - backup-strategy
landscapes:
  - "[[Public/uses]]"
  - "[[Quantum OS]]"
JD-ID: "[[12.01 Backups]]"
datetime: 2023-12-03T00:00:00
---
I value backups of my data and systems. Having them means a level of security if something is lost, damaged, hacked, breaks. I may be over-compensating in some areas with multiple on-site and off-site backups. Where I do that, I'm also considering the other aspect of backups which is speed of restoration.
## 3-2-1 Backup!
I follow a 3-2-1 backup strategy.
- 3 copies
- using at least 2 physical media
- and 1 offsite.

For example, my family’s photos are stored on an SSD within the main home PC. 1 copy, 1 physical media, not offsite. I use [[Duplicacy]] to backup to a NAS daily. Now I have 2 copies, 2 physical media and none offsite. I then use [[Duplicacy]] again to copy them to [[OneDrive]] cloud storage. 3 copies, 2 physical media, 1 offsite. I’ve hit the 3-2-1 rule.
## What do I back up?
- C:\ operating systems or equivalent for all computers in the house
- Personal photos/home video library
- Documents/files

<!--[mermaid.live](https://mermaid.live/edit#pako:eNqdVU2PmzAQ_SuWz2v145hDpQTaaqWmSZdWlbbkMLEnCQrYyODtRqv97zUMkEDS7LI5RHiYee-N59k8cWkU8gnfpOav3IEt2be7WDP_K9x6ayHfsS-QJelBLAOK_yrQFn82MNmAUFjsS5NTbMWEiHno8jSRIA8xF-IT-_FVfJ9G4v1HERrpMtRlQTDJT6dxiEPBF4DmqBIgkDlmxiZnMG34KtAH0aYR1jLFxwFOFXq9mGUgFtEQIaD6OUibuIzd4SZFWcac9aXcZrDt2vCb-YCW0aKaj__LcrB4VrAiZtRqMLMukeL3pkRr-vAUGze0hcbQJg_YIMnUONUF2VRK43wuYQbVy-igJWG2WTOQe5f3pRzb6mc17c2M2Q_2BuvYu6lTiVlXj68f0zUhXSsN_6jNOZ_C_CD84Ct9jV1p0XCmkNdmpSDzaCOPkK-c_RduETVjALs2mgUmPzA_Eo2WUD8_-vFrSKMobAD86VdC1e23L6mC-ZxTp9HjBVmt-aGENRR4zcEnVaSTDbr-PZ11bjhjIOO9zNbN80g2FF87Y5TwuuLipHqaT4FH6yWOvtbjhTVC7rHoouIw6Cnuwb9BdMNUWWSonS6sWkN1KVQHjC2t6Zvx3IkX-KIctEZ1NGnNXqz4Dc_QZpAo_z17qvhjXu4ww5hP_KPCDbjUX72xfvap4EpTCeGT0jq84da47Y57srTwK5f7jjFMwB_krIt64ntj2vXzPyU5ZCw)-->
![[my-backup-strategy-flowchart.svg]]

<!--[mermaid.live)](https://mermaid.live/edit#pako:eNpl0DtuwzAMANCrEJzTC3hr425BF3dqlIGR6A-qH2gpgRHkLj1LTxamcDq0gkCQwoNE6oI2OcYGe5_OdiQp8N6aCLrmehyE8gg7Hji6--H3F9C-p6anJ0eFjjQztDX7yZJdoCtJaOCDiep025Van6qD7U_8a_hhtAsNIZMwvEYrSy7s4IXsZ82_Oq56ZjmxwNtz9__C6HCDgSXQ5HSuy71vg2XkwAYbTR33VH0xaOJVKdWSuiVabIpU3qCkOoyor_hZq5p1UG4n0q8ID5IpfqQUVnS9AZqXdnc)-->
![[my-backup-strategy-legend.svg]]
## Where do I back up to?
My backup targets are:
- [[Synology DiskStation DS920+]] This is the primary backup store. It consists of 4 x 4TB drives, with single-redundancy. I can lose any drive and still operate/recover. Only some of the space is backup. The rest is mostly media files.
- [[Synology DS115 NAS]] - 1 unit each of 4TB and 3TB. These are the backup targets for systems held on the [[Synology DiskStation DS920+|DS920+]] e.g., [[OneDrive]] backups, Docker etc.
- [OneDrive](https://www.microsoft.com/en-au/microsoft-365/onedrive/online-cloud-storage) - comes with Microsoft Office subscription. Backups of the NAS are sent to the spare space on our family OneDrive accounts. With 1TB each, there is more than enough.
- Any number of external USB drives 
	- 3 x 4TB USB3 portable drives as a single Bitlocker encrypted Windows spanned drive
	- 1 x 1TB USB3 portable drive - System images to Bitlocker encryption

## What do I backup with?
My backup software is
- [[Macrium Reflect Home Edition]] - primarily for imaging whole disks and quick restore in case of disk failure
- [[Duplicacy]] is the main backup tool. It works very well and runs on all operating systems. I've purchased the web interface as it's easier to manage.
- Synology HyperBackup - file backup for 1-2 backups from the NAS
- [SyncBack Pro](https://www.2brightsparks.com/syncback/sbpro.html) - copying files in bulk and transfer to Wasabi cloud storage and usb drives
- OneDrive's built-in sync

## For God’s sake, test

There is some complexity here. And I tested as I built it. I’ll also periodically monitor backups are occurring and test a restore. No matter what you personally decide to do, test you are backing up what you think and know how to recover it

I hope this has helped you understand backups a little more than before. There are lots of resources out there, usually provided by the backup software providers themselves.

## Addendum - OneDrive, iCloud etc.

Microsoft and Apple spruke the backup benefits of their cloud solutions. They are better than nothing, but are not the same as a backup solution like I’ve described here.

Firstly, they have limited retention periods. Let’s say you accidentally delete a file from OneDrive and remember 100 days later that you need it. Too bad. It’s gone. Microsoft and iCloud retention periods are not as long as you think. Refer their docs for more information.

Secondly, there is versioning for OneDrive at least. That’s good, but still limited in time.

I'm happy to use OneDrive as my offsite backup. It's highly unlikely I'll ever need it and it works fine for what I need,

> [!TIP] If you have an iPhone, ensure you’re syncing photos to the cloud. Pay the AUD \$1.50/\$4.99 for an extra 50GB/200GB to make sure you have enough space. Check your Settings for the status of your backups.

## Restore media
Restore media on USB lets me do a bare metal restore if I ever need to.
- [[Macrium Reflect Home Edition]] - last build [[2024-03-15]]
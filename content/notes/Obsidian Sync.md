---
landscapes:
  - "[[the-garden-shed]]"
date: 2024-03-10
growth: "[[Budding]]"
---
> [!INFO] [Obsidian Sync](https://obsidian.md/sync) is a paid sync service from the developers of [[Obsidian]]. It is the most reliable sync solution I've found.
## Fix Uninitialized Sync Error

This caused me all sorts of hell syncing across 3 systems. Each time I restarted [[Obsidian]] the sync was lost. The fix worked for me on [[Windows 10]].

> This seems to be a rare error that we haven’t yet nailed down a pattern for.
> 
> It seems like something went wrong with your data storage for sync cache.
> 
> First, make sure you have enough free space on your disk drive.
> 
> If you do have enough space, restart the app and try to Sync again.
> 
> If restarting the app does not work, you may have to wipe the indexedDB folder in Obsidian’s appdata folder:
> 
> - Uninstall Obsidian from your device. (This will not affect your vault’s settings or files.)
> - Head over to this folder and delete everything inside (while Obsidian is closed) and restart the app. (Again, this will not affect your vault’s settings or files, nor will it affect your remote vault.)
>     - Windows: %appdata%\obsidian\IndexedDB
>     - Mac: ~/Library/Application Support/obsidian/IndexedDB/
>     - Linux: ~/.config/obsidian/IndexedDB  
>         Reinstall Obsidian.  
>         Relaunch the vault and try again.
> 
> This should reset the sync data for all your local vaults and fix up the indexedDB.
>
> Source: [Vault does not automatically sync on Ubuntu anymore - "Cannot read properties of null (reading 'put')" - Bug graveyard - Obsidian Forum](https://forum.obsidian.md/t/vault-does-not-automatically-sync-on-ubuntu-anymore-cannot-read-properties-of-null-reading-put/51607/6?u=dcb)


---
aliases: Instructions to fix Uninitialized Sync Error with Obsidian Syncs
tags: 
datetime: 2024-07-23T19:36:52
updated: 
title: 
---
This caused me all sorts of hell syncing across 3 systems. Each time I restarted [[Obsidian]] the connection to [[Obsidian Sync]] was lost and had to be recreated. With almost 4,000 files this was a problem.

The fix worked for me on [[Windows 10]].

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
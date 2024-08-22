---
aliases:
  - WSL
tags: 
datetime: 2024-08-21T08:46:37
updated: 
title:
---
Reaching the limit of how I can engage with some systems on [[Github]], [dSebastien@pkmsocial](https://pkm.social/@dsebastien) recommended I try WSL to work on their [obsidian-dataview-serializer plugin](https://github.com/dsebastien/obsidian-dataview-serializer) for [[Obsidian]]. There were a couple of tweaks I though I could make, but was unable to get the build running in native Windows.

- [[How to install WSL]]
- [[How to start WSL]]

<iframe width="560" height="315" src="https://www.youtube.com/embed/_fntjriRe48?si=0lsrYvXO9oOrQ8zT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Code to get snap working on Ubuntu 24.04 LTS
sudo apt-get update && sudo apt-get install -yqq daemonize dbus-user-session fontconfig  
sudo daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target  
exec sudo nsenter -t $(pidof systemd) -a su - $LOGNAME

[WSL2- Ubuntu 20.04 Snap store doesn't work due to systemd dependency · Issue #5126 · microsoft/WSL · GitHub](https://github.com/microsoft/WSL/issues/5126#issuecomment-653715201)

## Install node.js and NPM
[How to install Node.js and NPM on WSL2](https://cloudbytes.dev/snippets/how-to-install-nodejs-and-npm-on-wsl2)
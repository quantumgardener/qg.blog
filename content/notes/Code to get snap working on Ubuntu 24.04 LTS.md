---
tags: 
datetime: 2024-08-30T08:21:59
updated: 
title: 
---
I tried to use Snap to install a local copy of [[Obsidian]] on the [[Windows Subsystem for Linux]]. Couldn't get it to work, but keeping this update code for reference.

```
sudo apt-get update && sudo apt-get install -yqq daemonize dbus-user-session fontconfig  

sudo daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target  

exec sudo nsenter -t $(pidof systemd) -a su - $LOGNAME
```

[WSL2- Ubuntu 20.04 Snap store doesn't work due to systemd dependency · Issue #5126 · microsoft/WSL · GitHub](https://github.com/microsoft/WSL/issues/5126#issuecomment-653715201)
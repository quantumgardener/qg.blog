---
tags:
  - class/blog
datetime: 2024-09-07T15:41:59
---
Last weekend I had the bright idea of upgrading my home network to segment Internet of Things access from our personal home data. If you're not aware, Internet of Things or IoT is the name given to pretty much anything that connects to a network which is not a computer[^1]. In my house that's the TV, [[PlayStation 5]], light globes, power points, cameras and most recently a washing machine.

Security on these items is know to be low. So low that South Korea and Singapore are actively pushing for IoT certification systems[^2].
## Reflections on the week
During the week I have learned a lot and I would like to share it here but as yet I don't know the best way to do that. Today I'm wondering if [[Sharing is harder once the learning is complete]]. Thinking through problems naturally had me creating blog entries in my mind as a [[Conversation for learning]]. Today, with most of the new work complete, I am not as inspired.

Most of the knowledge I gained was from YouTube videos and conversations with friends and colleagues at work (I work for a tech firm so that helps with access). I made some observations along the way.

- Before asking questions, do some basic research at least. It helped me to respectfully use the time of others. I could get answers on the direct points I didn't yet understand without wasting my time or theirs going over known ground.
- Not everybody has the whole picture. It could be just me, but I have watched many videos on network subnetting and VLANs to pick up there are some connecting concepts that are just glossed over or ignored completely. It has taken multiple conversations in real life and with YouTube to connect it all.

The reticence to detail everything is a combination of detail and the back story I would need to provide. I do not want to teach people networking. There is, I judge, value in understanding my approach to how I've learned.

I've at least written [[A cobbled history of home networks]].
## My list of learning achievements
- Understanding what a VLAN is and how it might help segregate physical networks into logical networks within the home.
- What type of router and switches I needed to upgrade to for VLANs to work.
- How to buy a router and switch that wouldn't break the budget.
- How to put my TP-Link modem into bridge mode and connect to my new [[Ubiquiti EdgeRouter X]]
- How to set up the [[Ubiquiti EdgeRouter X]]
- How not to throw things across the kitchen when being frustrated by it not working and wriggly cables that would not sit where I wanted them. [[Keeping my cool]] can be difficult at times when working on a project where nothing goes right.
- How to accidentally lock off parts of the network and recover 🙂
- How to reassign network IP addresses which led to fixing backups and NFS links
- Understanding subnetting and what the /nn CIDR notation means.
- How to install a digital certificate on my [[Synology DiskStation DS920+]] so that I can punch through to internally hosted services.
- How to punch through to internally hosted services using Cloudflare Tunnels

Quite a week. I wonder how much of a formal university course that would take up.

[^1]: Yes, I know they are all computers at some level.
[^2]: [MSIT and KISA signed an MoU with CSA of Singapore for mutual recognition of IoT security certification systems](https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=938&searchOpt=ALL&searchTxt=)
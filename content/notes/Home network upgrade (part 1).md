---
tags:
  - class/blog
datetime: 2024-09-27T14:59:00
updated: ""
---
A few weeks ago I made the decision to better secure my home network. We had just purchased a new washing machine which can be controlled from the internet. One more [[Internet of Things]] device in the home and yet another potential point of poor security.

I was also experiencing speed issues when watching video. Some high bitrate movies in [[Plex]] were struggling to play without stopping all together. It's never fun sitting down to watch a movie in anticipation only to have it stop after 2 minutes of play.

Like many, [[A cobbled history of home networks|my network has evolved]] from a simple internet connection to a home network entertaining multiple devices, of all different types and with their individual 
need, purposes and security risks.
## The starting point
![[Home network (start).svg]]
*Starting home network topology. A mixture of cables and wi-fi.*

The image above shows my network's topology at the beginning of this project. The feed from my Internet Service Provider (ISP) comes into a standard wireless modem and is then cabled to two switches at either end of the house. I do not use the wireless function of the modem.

On the left side we can see connection to a PC, printer and wireless access point. For wireless connectivity throughout the house I use 3 x Deco M5 units in a mesh configuration and the one on the left is the controller. Meshing the wi-fi simply means as we wander around the house our mobile devices will connect to the nearest wireless access point without us needing to do anything.

At the bottom-left is another wireless access point connected to a switch, which is in turn bringing three networked attached storage (NAS) devices into the fold. All hail the top of cupboards for extra storage space.

On the right side we hit the loungeroom with [[Sony Bravia KD-55X9000F TV|Smart TV]], [[Sony UBP-X700 4K Bluray player|4K Bluray player]], [[PlayStation 5]] and [[Apple TV]]. The third wi-fi access point is connected here as well. The Apple TV has a thread network which it controls for some of my home automation devices. Not all are up to the [[Matter]] standard yet and they sit directly on the wi-fi network. [[Internet of Things|IoT]] devices on the thread network I'm treating as secure because they cannot connect to the internet of their own accord.

The remainder of devices are free to roam around the house using the Deco mesh network created by the three units. Laptops and mobiles are "trusted". The remaining devices are IoT and "untrusted" for security purposes. 

There is no guest network, and although the Decos will let me create an IoT network, the moment I do, all those devices will be unable to connect to anything else, including the Apple TV home automation hub.

> [!warning] The problem with this topology from a security point of view is that all devices are on the same network and can talk to each other unhindered.

![[Home network (start with speeds).svg]]
*Same topology as above, showing speeds.*

Now let's consider speed across the network and what problems we may solve there. 

The incoming internet speed of 38 Mbps is something I can't solve until NBN upgrade my street from copper to fibre. I don't even both crossing my fingers anymore on their plan to hit mid-2025. My house is 1.3km from the pillar so even my copper speed is below what it could be and recent line faults haven't helped.

Therefore, the fact that my modem/router can only handle 100 Mbps of internet traffic isn't a problem, except that it manages internal traffic too. Outside of the wi-fi network, all traffic passes through the router and it limits traffic to 100 Mbps. My fault for buying the wrong unit and being cheap when the last one failed. This is the cause of slow video in the house because the cabling and other network devices are plenty fast enough.

The switches are all "gigabit switches" and capable of 1000 Mbps. Data transfer between devices on the same switch is shall we say, "more than adequate."

Throughout the house wi-fi speed varies. The maximum is a theoretical 867 Mbps yet in testing the best I've seen is about 600 Mbps. Mostly it was in the 400-500 Mbps range. Good enough for my needs. However the loungeroom wireless access point, probably due to its location, manages only 100-200 Mbps. That explains why streaming video over the wi-fi was no better than cable.

So there are problems. A top-quality 4K movie streaming at say 117 Mbps will transfer from the NAS to the PC via wi-fi with headroom to spare, and then get clobbered by the router's limit of 100 Mbps. The fact all switches involved are 1000 Mbps doesn't matter.
## The problem I'm trying to solve
The speed problem caused by the modem/router bottleneck of 100 Mbps is easily solved. Head to the local computer store and purchase a faster one.

My other problem—everything on the same network—is harder to solve. To fix that I must create [[Virtual LAN|Virtual LANs]] to segregate traffic and put rules in place that deny cross-talk unless I give explicit permission.

The target virtual topology has been overlaid on top of the original diagram. I expect some items will connected differently as the physical design will also change.

![[Home network (target topology).svg]]
*Topology showing Virtual LAN membership.*

The Virtual LANs will be:
- Management VLAN (blue)—contains all network devices
- Trusted VLAN (green)—contains devices with our personal data on them, i.e., PC, laptops, mobile phones, NAS.
- IoT VLAN (red)—untrusted [[Internet of Things]] devices, i.e., everything not in the two groups above.
- Guest VLAN (not depicted)—a proper guest VLAN that permits internet access only.

I've already begun skilling myself up on network knowledge and I have some shopping to do. I need a new faster and VLAN capable router, VLAN capable switches and VLAN capable wi-fi access points.

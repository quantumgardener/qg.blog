---
tags:
  - class/blog
datetime: 2024-10-14T20:47:00
updated: 
title:
---
I made a mistake. I thought I could quickly learn to create [[Virtual LAN]]s on networking devices from different manufacturers because each device met the IEEE 802.1Q VLAN standard.

I successfully created VLAN 20 for my trusted devices. When I duplicated those steps to create VLAN 100 for [[Internet of Things|IoT]] devices everything broke and I was unable to find out why. I reset the router three times, switch once and wireless network twice in the same frustrating day.

The English language varies in "implementation" across the United Kingdom. Different areas have their manner of speaking. I found the same with networking devices. The IEEE 802.1Q standard was implemented differently which is why I couldn't find a path forward.

So, I reset the devices a final time for resale and purchased another solution. 

|         | Failed Solution Suite      | Working Product Suite               |
| ------- | -------------------------- | ----------------------------------- |
| Router  | Ubiquiti UISP EdgeRouter X | Ubiquiti Unifi Ultra Cloud Gateway  |
| Switch  | TP-Link SG108PE            | Ubiquiti Lite 8-port Managed Switch |
| Wirless | TP-Link Deco M5 mesh       | Ubiquiti 6 Pro access point         |

> [!tip]
> I'll provide a tip for young players. Within the same brand, there are different product lines which may be incompatible. The Ubiquiti UISP and Unifi systems are different. TP-Link has Deco and OneMesh. Brand name compatibility is not enough.

The interface complexity caused problems. It was too difficult tracking new concepts across fragmented screens. Comparatively, I had the new Unifi network set up in 10 minutes for two different VLANs. First go.

I made a mistake. It cost me money and time. I learned a lot along the way so overall I'm ahead.

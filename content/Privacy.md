---
datetime: 2023-09-27T00:00:00
updated: 2024-08-23T18:45:00
---
*quantumgardener.info* is cookie free. I use [tinylytics](https://tinylytics.app) to record unique hits on the site in order to understand what articles are popular so that I don't accidentally delete or move something others rely upon.

I know nothing identifiable about any visitor to the site.
## Tinylytics
For a full read on how tinylytics gathers information, visit [Understanding Unique Hit Tracking](https://tinylytics.app/docs/unique_hits). Here are the key points[^2].

> - No personal data or visitor IP addresses are ever stored.
> - We use only Cloudflare’s IP addresses in our calculations, not your visitors’ addresses.
> - The 12-hour salt rotation ensures that long-term tracking is impossible.
> - Our hashing process is one-way, so original visit data can’t be reconstructed.

I chose tinylytics because of the overall balanced approach taken and to maintain the highest visitor protection.
## Cloudflare hosting
The domains *quantumgardener.info* and *quantumgardener.blog* are both hosted on Cloudflare and because of that basic information is recorded. The *.blog* domain maps directly to the *.info* domain and can be considered the same.

> These [Cloudflare] metrics include legitimate user requests as well as crawlers and threats. The Traffic tab features the following panels: 
> 
> **Web Traffic** - Displays metrics for Requests, Bandwidth, Unique Visitors, and Status Codes. 
> 
> **Web Traffic Requests by Country** - Is an interactive map that breaks down the number of requests by country. This panel also includes a data table for Top Traffic Countries / Regions that display the countries with the most number of requests (up to five, if the data exists).
> 
> [Zone Analytics · Cloudflare Analytics docs](https://developers.cloudflare.com/analytics/account-and-zone-analytics/zone-analytics/#:~:text=Web%20Traffic%20%2D%20Displays%20metrics%20for,number%20of%20requests%20by%20country.)

This information is rolled up to totals and there is no way for me to see any individual user's visit. The only way would be if they accessed the site from a country with a population of one!

[^1]: This is described in full at [Plausible: Privacy focused Google Analytics alternative | Plausible Analytics](https://plausible.io/privacy-focused-web-analytics). 
[^2]: Retrived 23 August 2024.
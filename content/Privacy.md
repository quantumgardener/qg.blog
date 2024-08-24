---
datetime: 2023-09-27T00:00:00
updated: 2024-08-24T10:32:00
---
*quantumgardener.info* is cookie free. I use [[tinylytics]] to record unique hits on the site to understand what articles are popular so that I don't accidentally delete or move something others rely upon. This information will also help me understand the feasibility of putting some content out via subscription in the future.

I know nothing identifiable about any visitor to the site.

## tinylytics
For a full read on how tinylytics gathers information, visit [Understanding Unique Hit Tracking](https://tinylytics.app/docs/unique_hits). Here are the key points[^2].

> [!tip] Public Stats
> The hit stats for this site can be viewed anytime at [The Quantum Garden | Stats page | tinylytics](https://tinylytics.app/public/E3iDvbUS_jM8JfgnY6Ae)

> - No personal data or visitor IP addresses are ever stored.
> - We use only Cloudflare’s IP addresses in our calculations, not your visitors’ addresses.
> - The 12-hour salt rotation ensures that long-term tracking is impossible.
> - Our hashing process is one-way, so original visit data can’t be reconstructed.

I chose [[tinylytics]] because of the overall balanced approach taken and to maintain the highest visitor protection.

The full list of fields provided to me are:
- `url` (the full URL)
- `path` (url without `https://quantumgardener.info`)
- `referrer` (when linked to from somewhere else)
- `country` (2-ltr ISO code)
- `browser_name` (Chrome, Firefox etc.)
- `platform name` (Windows, Android, MacOS etc.)
- `is_mobile` (true or false)
- `unique_id` (a secure id that only counts visits from the same location once within a rolling 12 hours, prevents long term tracking)
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
[^2]: Retrieved 23 August 2024.
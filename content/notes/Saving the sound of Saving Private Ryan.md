---
datetime: 2021-09-08T00:00:00
tags:
  - class/blog
---
In _Saving Private Ryan_ one scene has a tank approaching from the distance. At first, all you can hear is the low rumbling sound of it's impending arrival. However, a couple of weekends ago when I watched the movie, I was left asking, "Where's the tank?"

My home system was not sending the sound to the speakers and through to my ears. Something was wrong. In the past, on a near identical setup, I'd heard the tank and got up to see what truck was slowly moving past my house!

This article is the result of two weeks diving into technologies I thought I understood. Those very same technologies you have sitting in your house and are very likely not reaping the full benefit of. I hope to be able to explain why you're not getting what you paid for, even if it's right in front of you.

Most people think of it as just a new TV and a soundbar they have plugged a Bluray player into and it looks and sounds better than the old _much smaller_ TV, so it great. My contention is that much of the benefit they have paid for, which is still available to them, isn't due to the interaction of various fast moving technologies and standards. How your each part of your system connects is critical, or you might not know what you're missing out on.

It took me almost two years to realise that my new whizz-bang TV had modified my setup in such a way that I'd lost a whole German WWII tank. And I thought I had it right.

We need to start with some terminology first or none of this will make sense.

## Terminology
### What is a 4K TV anyway?
A 4K, or 4K Ultra UHD TV, is a TV with a resolution of 3840 pixels across, by 2160 pixels down and 4K (4,000) is easier to say than 3840. It does not matter if you have a 40" TV or a 100" TV, if it is 4K then the number of pixels is the same only on a 100" TV each pixel will be larger. This has an impact on the size of screen for your room. Too large means too close and you will start to see the individual pixels.

4K is the next step in increasing resolution sizes that really began with DVD and then Bluray, though techically these are storage formats and not resolutions. Starting with the introduction of flat screen TVs we've had 720p/HD (lines down), 1080p/FullHD and the standard for Bluray movies, and now 2160p/UHD (ultra-high definition) aka 4K.

To give an indication of size you could show 16 DVD movies at full resolution on a 4K TV.

For my eyes the real benefit of a 4K TV is not the increased number of pixels. Bluray movies look just as good if not better on my 4K TV as they did on my FullHD TV because "upscaling" technology is now very advanced. The real benefit is the colour.

You may have heard the term HDR if you have an iPhone as it was introduced several years ago for photos. As I understand it, the phone would take 3 photos at different exposures and combine them into a single image that had a wider range of light to dark than a single photo could manage. HDR is short for High Dynamic Range and means there are more colours available to display. You do need to see it for yourself to properly experience the benefits. Though they can be subtle you will see more in the dark areas if there is backlighting and more natural colours throughout. It just looks better.
### Surround sound
5.1 or 7.1 are used to refer to the number of speakers in your sound system. A 5.1 system has 5 speakers and 1 subwoofer. The 5 speakers are left, centre, right and left rear surround and right rear surround. A 7.1 system adds 2 extra speakers left and right.

My system is 5.1 as my living area doesn't warrant the extra speakers (or cost!). The observant among you may have already worked out where my tank went. It was in the missing .1. A subwoofer is designed to put out low frequency sound (\< 180hz) and mine wasn't doing anything.

The configuration between amplifier and subwoofer wasn't right, and the TV wasn't sending the right audio format to the amplifier.

So, what do I mean by audio format. If you've been to the cinema and seen an opening trailer with balls bouncing around all the speakers, then you've seen Dolby Digital in action. It's a format for encoding all the 5.1 or 7.1 channels into a single audio "stream" that is decoded and sent to all speakers individually. This decoding can happen at the level of the source player (Bluray or gaming console or TV) or at the level of the amplifier. Other formats include DTS, TrueHD, Dolby Atmos and so on. To get the most sound possible, you need the right number of speakers and equipment that can use or translate the sound encoding for your speakers. Don't worry though if you don't have the latest. Your equipment will, if set up right, fallback gracefully to something you can use.

### HDMI
I'm sure you've heard of HDMI or the High Definition Multimedia Interface but I wager you may have been thinking of it wrong. It's not a type of plug or cable, but rather a standard for transmitting audio and video data between devices. And this is were things get gnarly.

There are 3 HDMI standards you may come across at the time of writing. I could have this wrong as it has been doing my head in, but this is what I'm working on as there is a combination of resolution and frequency to consider.

- HDMI 1.4 is all that you need for Bluray and 3D Bluray, even if you have a 4K TV. It also introduced the Audio Return Channel (ARC) so that a TV can send audio from devices through to an amplifier and then out to the speakers. It will do 4K resolution at up to 30hz. For this you need a HDMI cable labelled "High speed"
- HDMI 2.0b brings in HDR for increased colour range and 4K up to 60hz (the impact of all this hz stuff will be explained later). As far as I can tell a "High speed" cable is sufficient for HDMI 2.0
- HDMI 2.1 increases gets us up to 10K at 120hz, dynamic HDR for adjusting colours on a scene-by-scene or even frame-by-frame basis (called Dolby Vision or HDR10+), enhanced ARC for Dolby Atmos and DTS:X audio encodings, and Auto Low Latency Mode (ALLM) for a device to set the configuration of the TV based on its understanding of the content (read computer gaming). For this signal you need a "Ultra High Speed" labelled HDMI cable.
## The rise of the gamer
It only takes a quick search on the statistics of computer gaming to see it is the biggest entertainment industry on the planet so I'll leave you to look those up in wonder. One impact of this is driving technology and as from the description of HDMI 2.1, and the increased refresh rates (in hz) you can see a couple of gaming driving advances. Movies just don't need them.

The new generation consoles ([[PlayStation 5]] and X-Box Series X) along with the latest PC graphics cards are beasts of computing power. They are approximately 5 times faster than the world's fastest supercomputers at the start of the millennium. I've got one sitting in my TV cabinet. Crazy times.

What they do, with their trillions of calculations per second, is generate the visuals for a computer game. Unlike a movie, the camera is often in the control of the player and each time it moves, additional parts of the scene must be created on the fly. Doing this smoothly is a combination of resolution and complexity. It takes more time to generate a higher resolution scene with high complexity (lighting, fog, effects) than a lower resolution version as there is by definition less detail. Push the system too hard and the frame rate, or number of new images per second, falls. A frame rate of 30fps is the minimum acceptable standard but 60fps is much smoother and offers a better gaming experience. Although not 100% the same, a game that pushes out 60fps along a HDMI cable that can only take 30hz is wasting effort, and vice-versa.

To achieve consistent frame rates, a game may lower the resolution. New PlayStation 5 games offer a quality v performance option. They will achieve 60fps at a lower quality. This can be less detail, or lower resolution. ALLM (above) improves this process by instructing the TV to match what the console is producing moment-by-moment.
## Putting it all together

That's a lot going on there, and that is why many people aren't getting what they could be getting in terms of performance and quality. You have to have a handle on all this to get it working.

What do you need to get a HDR signal out of a PlayStation 5 connected into your amplifier that then passes the video to the TV and audio to the speakers? You need everything working at the same standards.

This will mean:
- PlayStation 5 connected to amplifier via Ultra High Definition HDMI cable
- Amplifier that supports HDMI 2.1 ports and passthrough, i.e., send the signal from one device to another without modification
- Another Ultra High Definition HDMI cable to go to your TV
- TV that has HDMI input supporting HDMI 2.1
- Speakers, they are the easy bit, but you do have to have your amplifier set to read the signal correctly

To display a 4K UHD movie in in Dolby Vision you'll also need:
- 4K Bluray player that supports Dolby Vision
- Another 2.1 cable
- A movie that is encoded in Dolby Vision (all 4K movies have HDR, not all have Dolby Vision or HDR+)

Any wonder it's confusing.

Further, research tells me that amplifiers are only now (late 2020) coming out with models that support HDMI 2.1. And with another nod to gaming, that is explicitly why they are doing it according to their brochures.
## Finding the tank

My amplifier supports only HDMI 1.4. To get HDR from my PlayStation 4 I needed to plug it directly into my Sony 4K TV — I couldn't pass the signal through the amplifier and get HDR. The PS4 could do HDR for games in 1080p right in line with the HDMI 2.0b standard. Similar for my 4K Apple TV which would send a Dolby Vision signal to my TV. When I plugged these into the TV I set up for the audio signal to come from the TV to the amplifier and somewhere here the TV was not sending through what I thought. After many hours testing I still don't know why.

The solution was to purchase a HDMI 2.1 switch. The PS4 (now PS5) and Apple TV plug into that and a single HDMI output goes to the TV (all with the right standard cables). Audio is then sent back via a second HDMI ARC cable into the amplifier. It's better and most of the time I get a 5.1 signal but it's not perfect. I have to adjust settings on the PS5 to decode then send the signal to the amplifier. I'd rather the amplifier did the decoding. With a new amplifier ([Yamaha RX-V4A](https://au.yamaha.com/en/products/audio_visual/av_receivers_amps/rx-v4a/index.html) is my <strike>current</strike> **achieved** dream) all I would need to do is plug in the cables and I'd be done. The amplifier would be the hub of my system as it should be.

This current solution is messy and there are cables everywhere but it works - as far as it can go without replacing the amplifier.
## Summing up
What does this all mean for you? If you are happy with the way things are, probably nothing. But if you'd like to get the most out of your expensive equipment, then you need to do some research and connect everything properly. For each new item you buy, you'll have to do similar research again. Buy from hi-fi specialists if you want the right information. Read the manual online before you buy (they are all there). Ask on the forums. And be specific — don't say, "I plugged my HDMI cable into the TV...", specify which version and which model. They are all different and specifications change rapidly.

What's that I hear? A tank rumbling in the distance.

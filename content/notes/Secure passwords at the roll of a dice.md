---
tags:
  - class/blog
datetime: 2011-09-13T12:13:00
---
> "I needed a password eight characters long so I picked Snow White and the Seven Dwarves."[^1]

This was the joke that gave comedian Nick Helm the award for best joke at the 2011 Edinburgh Fringe Festival. It may also be the best advice you hear all year. The last twelve months has seen an increase in public reporting of major security breaches and identity theft. To be effective a password has to be easy to remember **without being written down** yet complex enough that it can't be easily guessed or *cracked* by a hacker.
## Common password problems
A good password should be:

- Known only to you
- Long enough to be secure
- Hard to guess — even by someone who knows you well
- Easy for you to remember
- Easy for you to type accurately

I'm not even going to list all the common problems with the passwords most people use. How often have you broken the rules above? As far as I'm concerned, if a password is not 20 characters or more long, then it is too short. You can easily remember passwords this long, and longer, if you know how.
## Diceware to the rescue
Any password that I need to remember is created using [Diceware](https://diceware.dmuth.org/)[^2]. It uses regular six-sided dice to generate a five-digit number which is then looked up on the [Diceware wordlist](https://theworld.com/~reinhold/diceware.wordlist.asc)). I use MotionX Dice on my iPhone to roll the dice.

Here's a sample I've just generated for a six word password (or passphrase).

- Roll 1: 42513
- Roll 2: 64522
- Roll 3: 62135
- Roll 4: 42415
- Roll 5: 35636
- Roll 6: 62116

And by looking these numbers up in the Diceware wordlist gives:

- Roll 1: 42513 **moist**
- Roll 2: 64522 **wyeth**
- Roll 3: 62135 **tuff**
- Roll 4: 42415 **miss**
- Roll 5: 35636 **laity**
- Roll 6: 62116 **tt**

My new passphrase is **moistwyethtuffmisslaitytt** which I'm sure you will agree is complex yet memorable. There are only six words to remember and for most people that should be a piece of cake. It's 25 characters long and meets criteria 2–4 above. Keeping it secret is up to you. A good typist will get this out in less than 5 seconds.

The excellent [Diceware FAQ](https://theworld.com/~reinhold/diceware.html)) will provide all the detail you need for an in-depth understanding should you want to read further.
## A password for all seasons
I only use Diceware for the few passwords I have to remember and access quickly. They are:

- Laptop or PC login
- Password manager login (more on this below)

In all other cases I have no idea what my passwords are, conveniently avoiding the "1. Known only to you" criteria altogether. The trick is to use a password storage application such as [[1Password]]. I use 1Password now because it integrates across the Mac, Windows and iPhone platforms. Before owning a Mac I used eWallet.

These applications (and others like them) store my passwords in a 256-bit AES encrypted file. That's strong enough to defeat anyone at this point in time. The content of the file is accessed via a master password which is generated using diceware for length and memorability.

Then, the software is used to generate completely random passwords for all the websites I access. 1Password will even enter my username and password on login screens. I never see them.
## Back to Snow White
Nick Helm's password of Snow White and the Seven Dwarfs is plenty long enough for our purposes at
**snowwhitebashfuldocdopeygrumpyhappysleepysneezy**. Likewise Santa's reindeer with **prancerdancerdonnerblitzendashervixencommetcupidrudolph**. I would recommend against using them as passwords because they are common. Use them instead to help you understand why diceware passwords are a much better solution than anything you're using now. Then, get yourself a quality password manager to help.
## One more thing
This year, when we move into daylight savings I'll be implementing a new idea for the first time. In addition to changing clocks and smoke alarm batteries I'll also be changing my main major passwords. You should too.

[^1]: [Top 10 jokes at the Edinburgh Fringe 2011 - British Comedy Guide](https://www.comedy.co.uk/fringe/2011/features/best_joke_of_2011/)
[^2]: Updated reference as the original is giving a 404 error so I found an alternative.

---
datetime: 2003-02-07T14:11:00
tags:
  - class/blog
---

Topic Maps help us navigate knowledge. In the [Topic Map (XTM) specification](http://www.topicmaps.org/xtm/index.html) you'll find that:

> 'The purpose of a topic map is to convey knowledge about resources through a superimposed layer, or map, of the resources. A topic map captures the subjects of which resources speak, and the relationships between subjects, in a way that is implementation-independent.'

That means a topic map is a map of how ideas and items are related. What I like about the Topic Map concept is you can make choice about where you go in your research. There is an association link between each Topic that gives the reason for the relationship and the role each end of the link plays.

If *[Quantum Gardener](http://quantumgardener.info/)* was run with a Topic Map backend the structure would be massively non-linear yet as a reader you would still be able to find your way around easily. Each link would include a reason why you might take it (compared to traditional HTML links which are blind - you don't know anything about the site at the end of the link and its relevance until you visit it).&nbsp;

Does **Shakespeare's Hamlet** refer to the play or character? A Topic Map would give you:

- Shakespeare (playwright type) [author role] <—> [was authored by role] (play type) Hamlet, or
- Shakespeare (playwright type) [author role] <—> [described by role] (character role) Hamlet

The link is now explict and you can choose differently depending on the nature of your research. Plays ore characters.

Topic Maps do this by associating different information with each topic. A topic itself is a representation of a real world subject. It also has one or more types and can participate in one or more associations (each of which can have its own type).

There are some great sites about Topics Maps listed at the end of this post. However there is very little software available at the price and end-user can afford.

## The PersonalBrain
[[PersonalBrain]] is software that helps and individual manage their knowledge. It shares a subset of the features available in a Topic Map but is not known if this was explicit. What PersonalBrain also does is provide a workable piece of software.

PersonalBrain's Plex is made up of Topics and the connections between them. From the release of PersonalBrain 3.0 beta 1 onwards, it is possible to type Topics and the links between them. This goes some of the way towards Topic Map functionality but is one-dimensional. That is, a topic or link can only have one type in PersonalBrain whereas multiple types are available in the full Topic Map specification.

As this is a new feature, the "PersonalBrain Community" is still coming to grips with how to use it. I suspect that the one-dimensionality may severely limit the uptake of this feature but one never knows.

## References about Topic Maps
- [topicmap.org](http://www.topicmap.org) - the "official site" of the Topic Map XTM specification\<br /\>
- [tm4j.org](http://www.tm4j.org) - a leading library of functions implementing the specification\<br /\>
- [ontopia.net](http://www.ontopia.net) - a vendor of topic map servers. Check out the [Omnigator](http://www.ontopia.net/download/freedownload.html) and the Opera topic map in order to better appreciate the power of this standard.


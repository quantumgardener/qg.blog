---
datetime: 2002-10-23T13:35:00
tags:
  - class/blog
---
In the past this site was created using [Radio Userland](http://radio.userland.com). During that time we found and developed some tricks-and-tips which others may find useful.
## How to modify the look and feel without breaking your public site while you do it
One of Radio's strengths is that it takes away much of the work involved in publishing a site from a local computer to a public web server. The problem with this from a development point of view is that you no longer have a test environment. A test environment is necessary when you want to make changes to your site (say the look and feel) but don't want to risk breaking what's already there.
If you were to change the homepage template and muck it up completely, your current readers will see garbage and that doesn't do you much good.
We can simulate a test area through smart use of the category function. Since each category can have it's own look and feel, it is a simple matter to harvest off a test area on your site for the testing of modifications.
- Turn upstreaming off 
- Create a category called test 
- Copy the templates from your root directory, to the category's directory 
- Modify (or create) upstream.xml to point to the right location (if different from
the default Radio weblog location)
- Create a test post for the category. Easily done from the home page. Deselect
the Home Page category and select the Test category.
- Turn upstreaming on. 
- Make the modifications to the templates and test them in the test category. 
- Once happy, copy the templates back to the root directory.

## Changing the size of the editing box 
When writing long posts, the size of the editing box on the home page can be limiting. To increase the size you need to
- Open Radio - Right click on the system tray icon and select Open Radio.
Obviously you must have Radio Userland running.
- Open the Radio.root tables - Once Radio Userland has opened, select
Radio.root from the Window menu
- Navigate to the required table entry. This is
`user.radio.prefs.browserBasedEditorSize`. Each **.** represents the next level
down as you expand the tree.
- Modify the value in the Value column. The default value for my installation
was `9`. I've set my entry to `20`.
- Click off the Value field to have Radio accept the change. 

That's all. Now visit your home page and begin posting. 

## Subscribing to an RSS feed of your comments
Radio's News Aggregator will scan RSS newsfeeds for new stories. [This site](http://dev.myelin.co.nz/commentmonitor/tracker.py) makes it possible to subscribe a feed of your comments as well. Comments are stored on a different server which normally makes it troublesome and very tedious to go through all stories looking for comments.

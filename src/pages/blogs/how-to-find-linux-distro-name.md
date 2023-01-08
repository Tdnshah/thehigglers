---
layout: '../../layouts/SingleBlog.astro'
title: How to find which linux distro is installed using terminal.
date: "2023-01-08 15:50:00"
type: Workshop
description: If you have been given a linux server withj a terminal access and you want to know which linux distro is installed over it you can use the below tutorial.
link: 
embed: 
video: 
slides: 
tags: []
---

# Find the linux distro name in an GNU systemd based distro the best option is:

```
$ hostnamectl
```

# Another option is using the lsb tool:

```
$ lab_release
```
note this will need you to install lsb and lsb release module in you linux system.

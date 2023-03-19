---
uuid: a2ec452e-3627-457e-a216-d1b0129f0b6d
layout: ../../layouts/SingleBlog.astro
title: Git commands cheatsheets
pubDate: 2022-12-13 02:42:32
type: blog
description: Looking to level up your Git skills? Our Git commands cheatsheets have you
  covered! With our comprehensive collection of Git commands, you'll have all
  the information you need to master this powerful version control system. From
  basic commands to more advanced workflows, our cheatsheets will help you
  become a Git expert in no time. Contact us today to learn more about how our
  Git commands cheatsheets can help you streamline your workflow and become a
  more efficient developer.
link: null
embed: null
video: null
slides: null
slug: git-commands-cheatsheets
tags:
  - git
  - development
author:
  - tdnshah
image_link: /assets/blog/images/a2ec452e-3627-457e-a216-d1b0129f0b6d-img-1.png
lastmod: 2023-03-19T09:19:42.484Z
---

### <a id="#git_reset">Git Reset</a>

Git reset is a command used to revert or undo your commit to a specific commit specified to the command.

###### Command
```
Option 1: git reset {commit hash}

(Note: This command is defaulted to --soft)

Option 2: git reset --hard {commit hash}

Option 3: git reset --soft {commit hash}

```

###  <a id="#git_revert">Git Revert</a>

Git revert basically created a new commit with the changes you want to undo, this helps in maintaining the git histroy.


###### Command 

```
Option 1: git revert {commit hash}

```


###  <a id="#git_squash">Git Squash</a>

Git Squash is a terminology and not a command, basically when we want to combined "N" number of continous commits into a single commit we can use squash commits using git rebase.

To know more on [git rebase](#git-rebase) 


###### Command 

```
Option 1: git revert {commit hash}

```


###  <a id="#git_rebase">Git Rebase</a>

###### Command 

```
Option 1: git rebase {commit hash}

Option 2: git rebase -i {commit hash}

```
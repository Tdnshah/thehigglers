---
layout: '../../layouts/SingleBlog.astro'
title: Git commands cheatsheets
pubDate: "2022-12-13 02:42:32"
slug:
type: "blog"
author: "tdnshah"
description: This posts is a collection of commonly used git command with the description hwlping speed up developers in there day to day task.
link: 
embed: 
video: 
slides: 
image_link: "https://loremflickr.com/400/200/git"
tags: ['git', 'development',]
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
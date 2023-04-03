---
uuid: dc24f02a-bf20-4919-9b43-c3584ea29346
layout: ../../layouts/SingleBlog.astro
title: How to create a custom token for Drupal
pubDate: 2023-03-20T20:53:47.523Z
type: blog
description: Personalize your Drupal website by creating custom tokens. Our step-by-step guide teaches you how to add personalised values to your site using custom tokens.
link: ""
embed: ""
video: ""
slides: ""
slug: {}
tags:
  - development
  - drupal
author: ""
image_link: /assets/blog/images/dc24f02a-bf20-4919-9b43-c3584ea29346-img-1.png
status: published
lastmod: 2023-04-03T21:20:02.245Z
---

## How to create a custom token for tokens module in Drupal 10

### Overview

A lot of times while building a Drupal 10 site you may come across a situation where in you need to derive a particular content or pattern from the value available in Drupals entity systems for example: you have a custom email that needs to be sent to the user upon a specific event and this email should contain the name drupal user, title of the blog and published date of the blog, so to create this message you needs information like username, blog title, and published date to be used in the email message template configuration form, and here comes the use of Drupal's Token system, token 

### How it works

### Procedure to define a custom token

#### Step 1

Define a ```hook_token_info()```

#### Step 2
Define a hook_token()

#### Step 3
    


### How to use it
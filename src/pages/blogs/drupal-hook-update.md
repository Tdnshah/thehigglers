---
uuid: b34b38d4-b044-4c24-881f-a76a892548f0
layout: ../../layouts/SingleBlog.astro
title: Introduction to Drupal hook update
tags:
  - drupal
  - drupal hooks
  - drupal-planet
pubDate: 2023-04-24T20:51:36.996Z
type: blog
description: Writing drupal hook_update_N() in Drupal 8, Drupal 9, Drupal 10. This also describes why hook update is needed, how it is formed.
link: ""
embed: ""
video: ""
slides: ""
slug: {}
author: tdnshah
image_link: /assets/blog/images/b34b38d4-b044-4c24-881f-a76a892548f0-img-1.png
status: published
lastmod: 2023-04-24T20:52:24.546Z
---

<Image src="/assets/blog/images/b34b38d4-b044-4c24-881f-a76a892548f0-img-1.png" aspectRatio="0.5" alt="DrupalCon-lille-2023-blog-header-image">


## Introduction to Drupal Hook Update

> ### Little Background

Drupal provides and update api to make changes to the stored data, whenever you make changes in your module or theme that is going to make your site's exsisting data incompatible with the latest change you have made in the module or theme, there comes a need for Drupal update api. 

This api provides you with a way to  make changes to the exsisting data stored so that you sites data is compatible with the latest version/change you made in you module/theme.

> ### Where to write this hook update 

The hook update is written in the module's or theme' `module_name.install` file.

> ### How to write this hook update & its parameters

In the `module_name.install` file we need to write the *hook_update_N()* function and all the update code needs to go in this function.

Wait thats not all, lets look at the naming convention and component of writing the *hook_update_N()*

So the hook_update_N() consist of three parts separated by underscore(_) symbol more on this is as described below:

- **hook** : This is part is to be update with the name of the module like *example-module*_update_N(); this is similar to every other hooks

- **update** : This is the keyword used to identify the hook. example-module_*update*_N()

- **N (Capital N)** : This part is specific to hook_update_*N*(). It is usually a 4 digit number like *8001* or *9001* This number is formed as below 
  - 1st digit denotes the drupal core version for eg 8, 9, 10 
  - 2nd digit denotes the modules majors version For instance, if you're developing for Drupal Core and its version 8.0.x, use 0, and if its version 8.1.x, use 1, etc. If you're in a contributed or custom module, and its version 8.x-1.x, use 1, etc.
  - last two digits for sequential incremental counting start with **01**  

> ### Parameters available in *hook_update_N()*

array $sandbox: Stores information for batch updates.

If your hook is going to use a batch update using drupal's batch api then &$sandbox parameter is available and passed to the hook. More on [sandbox](https://www.drupal.org/docs/7/api/batch-api/overview) variable.

So for example below is the exact code showing the implementation of the hook update for a sample module named `example_module` 

```
/**
 * Write a line or two here about what the updates are for.
 * This is shown to users on the update.php page.
 */
function mymodule_update_8001(&$sandbox) {

    *update code goes here 
*
}
```
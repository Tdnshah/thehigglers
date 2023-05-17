---
uuid: 3d29bde7-2418-4a97-b300-ad893c389019
layout: ../../layouts/SingleBlog.astro
title: Using Frontmatter CMS with Astrojs Static Site
pubDate: 2023-03-17T11:48:17.766Z
type: blog
description: Looking for an easy way to manage content on your AstroJS static site? Look no further than Frontmatter CMS! Our expert team can help you seamlessly integrate Frontmatter CMS with your AstroJS static site, allowing you to easily manage your content and keep your site up-to-date. With our knowledge and experience, we'll work with you to create a customized solution that perfectly fits your needs. Contact us today to learn more about how we can help you streamline your content management with Frontmatter CMS and AstroJS.
link: ""
embed: ""
video: ""
slides: ""
slug: frontmatter-cms-astrojs-static-site
tags:
  - development
  - astrojs
author: tdnshah
image_link: /assets/blog/images/3d29bde7-2418-4a97-b300-ad893c389019-img-1.png
status: published
lastmod: 2023-05-17T17:37:38.381Z
---

Recently I was looking for better was to manage the markdown files of for my static blog website and I didnt want to leave behind editor interface just to write a new blog article as I am too lazy to switch between multiple interfaces. Hence while I was searching on the google if any such simple products exsist which looks a CMS. 

The IDE i use for my development purpose is VS code hence I thought to search if there is any vscode based solution and as always we think  it and VSCode extension is available for the same and I got to know about Frontmatter CMS, which is a CMS right in your code editor as per there website and this looked to be interesting to me hence I thought of exploring the same with my Astrojs based static blog.

Below are my observation about using Frontmatter CMS with Astro js static in VScode is as below:

Here I will first ldown what I was actually looking for and see if frontmatter cms satisfies my needs...

1. What I was looking for is an dashboard kind of interfacew listing blog post?

Yes, Frontmatter CMS once configured provides a nice grid interface listing all the blogs post, it also provides and option to "Create" "Deleted" & "Update" the articles below image shpows how the interface looks like.

  ![Frontmatter CMS Dashboard](/assets/blog/images/3d29bde7-2418-4a97-b300-ad893c389019-img-2.png)

2. A nice markdown editor for creating, editing and updating articles ?

This is where I found Frontmatter CMS needs to improve as in the current interface it provides if we try to edit any article it just open a file in vs code which as a claimed CMS should have a proper wisysig editor like Quilljs or editorjs etc.

4. I wanted some frontmatter to be auto populated like published date, last modified date etc..?
  
Yes, FrontMatter CMS provide this as a feature, I havent yet tried but wanted this feauture for other frontmatters like UUID etc, but I am sure there might be an api to create either a custom field for such custom requirements.

5. Nice interface to select list of tags/categories alsready used in other posts so that duplicated with spelling changes can be avoided like blog & blogs?

Yes, Frontmatter CMS provides a nice interface with select list type of fields and also prepopulates  the tags used in all the posts this is done using a content type defination in frontmatter.json file

![Frontmatter CMS Tags select list.](/assets/blog/images/3d29bde7-2418-4a97-b300-ad893c389019-img-3.png)

I am still exploring new features and how it can be used as a CMS in IDE and will keep updateing thos post so that others can also leverage this awesome in IDE CMS for static sites.

You can find more about [Frontmatter CMS](https://frontmatter.codes/) on there official [Website](https://frontmatter.codes/)
   
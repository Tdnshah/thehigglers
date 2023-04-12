---
uuid: 427fe064-0299-4b07-88a1-b6a8aaedaa67
layout: ../../layouts/SingleBlog.astro
title: Drupal Hook system with information on hook_info()
pubDate: 2023-03-20T21:31:31.618Z
type: blog
description: ""
link: ""
embed: ""
video: ""
slides: ""
slug: {}
tags:
  - drupal hooks
  - drupal-planet
author: ""
image_link: /assets/branding/thehigglers-placeholder.png
status: draft
lastmod: 2023-04-09T10:24:34.412Z
---

# Introduction to Drupal Hook system with hook_info()


Drupal is a powerful and flexible content management system that allows developers to create custom functionality using various tools and techniques. One of the most important of these is the hook system. This allows developers to customize Drupal's behavior by writing their own code that is called by the core system at specific points during execution.
One of the most important hooks in Drupal is hook_info. This hook is used to provide information about custom modules, themes, and other extensions to the Drupal system. By implementing hook_info in your code, you can tell Drupal your module's name, purpose, and other modules it depends on. To implement hook_info in your module, you need to create a function in your module's .module file and append "_info" to the name of your module. For example, if your module is named "my_custom_module", the hook_info function will be named "my_custom_module_info".

Inside the hook_info function, we need to return an associative array with information about the module. The array should contain keys that describe the module's name, description, dependencies, version, and other important details. Here's an example of what the hook_info function might look like.
```
function my_custom_module_info() {
returns an array (
'name' => 'my custom module',
'description' => 'Provides custom functionality for Drupal. ',
'version' => '1.0',
'core' => array(
'7.x' => '',
),
'dependencies' => array(
'Module 1',
"Module 2",
),
);
}
```
In this example, the hook_info function returns an array containing the module name, description, version, and dependencies. The "Core" key indicates the version of Drupal with which the module is compatible.

If you implement hook_info in your module, Drupal can use this information to manage your module and its dependencies. For example, if you specify that a module depends on another module, Drupal will ensure that the dependent module is activated before loading the module.

In summary, hook_info is a powerful and essential tool for customizing her Drupal. By implementing this hook in your module, you can provide her Drupal with important information about your module, allowing her to manage your module and its dependencies more effectively. If you're new to Drupal development, I highly recommend familiarizing yourself with hook_info and other important Drupal hooks. These are essential to your success as a Drupal developer.

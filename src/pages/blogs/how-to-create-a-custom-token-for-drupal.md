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
lastmod: 2023-04-08T13:43:49.962Z
---

<Image src="/assets/blog/images/dc24f02a-bf20-4919-9b43-c3584ea29346-img-1.png" aspectRatio="0.5" alt="Drupal_custom_token">



## How to create a custom token for tokens module in Drupal 10

## Overview

It's possible that you'll frequently need to extract particular values or patterns from Drupal's entity systems when developing a Drupal 10 site. For instance, if you have a special email that has to be sent to a user for a certain occasion, you might want to include the user's name, the name of the blog, and the date it was published. You need details like the login, blog title, and published date to be utilised in the email message template setup form in order to do this. Tokens may be used to represent these data in the email template thanks to Drupal's Token system, which is where it comes into action.

## How it works

Tokens, how they work :
Every token consists of a text string in a particular pattern as [token-type:replacement-string] this string is composed of two parts one before the ":" (semicolon) called as **token type** and second part comes after the ":" (semicoloon) called **replacement string** described as below:

**Token Type:** Token type is basically used to group related tokens together for eg: [node:title], [node:created_date] etc here you can see are the token related to node are grouped together, other example would be a custom/contrib module declaring custom token would group there token in the name of the module like [module-name:title].

**Replacement String:** The second part which is called replacement string is a part with acts as a variable and gets replaced with the process value as processed in hook_token(). 

Below we will have a look at what is a procedure to create our custom tokens.

## Procedure to define a custom token
Here we will create a custom token for replacing the page title with an short and SEO optimised title if available else use the page title as it is. This will be used in Drupal Metatags module to dynamically update the post title in browser and SEO.

We have a title field in each content types we create in Drupal, this is the main title field used by the author for an article which usually is a very long string. It is recommended that the lenght of the meta title which is used for SEO should be not more than 60 character hence we add a new field named as *Short Title* which author can add for SEO purpose and our token will conditionally check if the short title is available then it will use the short title to add to meta tag else it will default back the main title field.

Below lets see how to create if custom token in practicle.

### Step 1

Create a custom module or if you already have one you can use the same, in the custom module create a file with the name as shown below

`moduleName.tokens.inc`


### Step 2 : Define hook_token_info() in the file create in step 1.
In this file define a php function/hook function named hook_token_info() this hook takes two parameters as  below 

Return Values: This hooks returns an associative array with two elements *types* and *tokens* 

In our example we define a hook as below

```
/**
* Implements hook_token_info().
*/
function module_name_token_info() {
    $info = [];
    $info['types']['module_name'] = [
      'name' => t('Condtional Short Title'),
      'description' => t('Tokens for using short title if available else default to normal title in seo meta tags.'),
    ];
    $info['tokens']['module_name']['seoShortTitle'] = [
      'name' => t("Seo short title."),
      'description' => t('Seo optimised short title.'),
    ];
    return $info;
}
```
The above code implements a type named "Conditional Short Title" and a token under this type(group) named "seoShortTitle".
### Step 3 : Define hook_tokens() in the file create in step 1.
This hook provides a replacement text for any token in the group that your module knows how to process.

This hook take the below parameters:

**Parameters**

**$type:** The machine-readable name of the type (group) of token being replaced, such as 'node', 'user', or another type defined by a hook_token_info() implementation.

**$tokens:** An array of tokens to be replaced. The keys are the machine-readable token names, and the values are the raw [type:token] strings that appeared in the original text.

**array $data:** An associative array of data objects to be used when generating replacement values, as supplied in the $data parameter to \Drupal\Core\Utility\Token::replace().

**array $options:** An associative array of options for token replacement; see \Drupal\Core\Utility\Token::replace() for possible values.

**bubbleable_metadata:** The bubbleable metadata. Prior to invoking this hook, \Drupal\Core\Utility\Token::generate() collects metadata for all of the data objects in $data. For any data sources not in $data, but that are used by the token replacement logic, such as global configuration (e.g., 'system.site') and related objects (e.g., $node->getOwner()), implementations of this hook must add the corresponding metadata. 


**Return value**
array An associative array of replacement values, keyed by the raw [type:token] strings from the original text. The returned values must be either plain text strings, or an object implementing MarkupInterface if they are HTML-formatted.

  ```
  /**
  * Implements hook_tokens().
  */
  function module_name_tokens($type, $tokens, array $data, array $options, $bubbleable_metadata) {
    $replacements = [];
    if ($type == 'module_name' && !empty($data['node'])) {
        foreach ($tokens as $name => $original) {
            switch ($name) {
                case 'seoShortTitle':
                  $node = $data['node'];
                  if ($node->hasField('field_short_title') && !$node->get('field_short_title')->isEmpty()) {
                      $text = $node->field_short_title->value;
                      $replacements[$original] = $text;
                    }
                    $replacements[$original] = $text ?? $node->getTitle();
                break;
            }
        }
    }
    return $replacements;
  }
  ```
The below image shows the implementation of our example used in the above post.

<Image src="/assets/blog/images/dc24f02a-bf20-4919-9b43-c3584ea29346-img-2.png" aspectRatio="0.5" alt="drupal_custom_token_implementation">

Hence the above two hooks are used to define a custom token in drupal.

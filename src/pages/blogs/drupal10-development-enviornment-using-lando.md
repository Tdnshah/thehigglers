---
uuid: 96310611-db01-4bb8-99f3-37078255f87d
layout: '../../layouts/SingleBlog.astro'
title: Drupal 10 development enviornment setup using lando..
pubDate: 2023-03-01 02:43:59
type: "blog"
description: Drupal 10 development environment setup using lando.
link: 
embed: 
video: 
slides: 
slug: []
tags: ["drupal", "development"]
author: [tdnshah]
image_link: "https://loremflickr.com/400/200/drupal"
---

Drupal 8 onwards it is preety much clear that Drupal has adopted the standard php development practises and this is followed by all the latest release of Drupal like Drupal 9 and Drupal 10.

Hence by now it should be understood that to use Drupal, drupal developers needs to know few tools and technologies to smoothly carry out their drupal development task/projects. This new addition of tools does add a little extra effort initially to learn, but I am sure later this is going to make your life so so easy when it comes to major version upgrades, module installation and upgrades etc...

Hence here in this article we are going to talk about this tools and how we can use them from installing Drupal to start customising drupal with custom module, theme developments.

So lets start with the list of tools needed.

1. Composer 2.0 and above
2. Drush 11 and above
3. Lando (Lando works on docker and hence docker needs to be installed in you computer, the instruction on how to install docker is out of the scope of this article.)

## Below is the steps you needs to follow to start with the setup. 

### Step 1: Installing lando 

Based on the operating system you are using this steps to install lando differs a little bit, in this article we are considering Linux debian based OS to show lando installations steps

```
Run below command to update and upgrade your local linux packages:

sudo apt update 

sudo apt upgrade

```

```
The download lando's debian installer package from the link given below
wget https://files.lando.dev/installer/lando-x64-stable.deb

Then install lando from the downloaded package in the last step

sudo dpkg -i lando-x64-stable.deb
```

Once the above step complete lando should be installed and you can verify this by the below command:

```
lando version
(The above command should give you the installed lando version as the output as shown below.)

Output:
v3.11.0
```

With this you have installed lando installed on your computer, lets move on to the next setup of installing composer.

### Step 2: Installation of php package manager Composer 2.0

Composer is a php package management tool,it helps in installing and managing php dependencies. Composer can be installed in two ways on linux, it can be installed globally or it can be installed for a specific project, both ways would work just that if its installed globally you can run composer in any directory with just "composer" key work in terminal, and if composer installed locally to any project you will have to you it by providing path the composer.phar file.

We can install composer using linux aptitude repository with the below command. Weare going to use global method of composer in this article.

```
sudo apt install composer 

Once this execution of the above command finishes you can verify if the composer is installed and running successfully by below command 

composer --version

If the above command output's the verison number then it confirms you have installed composer successfully.

outpur:
Composer version 2.4.4 2022-10-27 14:39:29

```
### Step 3: Installation of Drupal 10 using composer 

To install Drupal 10 using composer we can use create-composer script provided by Drupal at <a href="https://www.drupal.org/project/drupal/releases/10.0.4" target="_blank">Drupal 10 script link</a>

To Start a new Drupal Project with version 10.0.4:

```
composer create-project drupal/recommended-project:10.0.4 "install-dir"

Here install-dir should be replaced with the name or path where you want to add the codebase.
```

The above code will download the Drupal 10.0.4 version in the said path including all the dependencies, but drupal is not yet ready to use, we need to provide a database to the to drupal so that it can store your config's and data.

Ah, but we have downloaded or installed any database yet now we have it in the tools needed 🤔, dont worry thats were lando helps us ill explain how, as mentioned above lando is an docker based solution, so all the dependecies like php, php-extensions and the database will be taken care by lando and upon running lando commands we will instruct lando to pullv drupal optimised php docker image and mysql docker image from the docker repo, create a container of this images run some internal docker networking commands, mount the current code base directory to docker container volumen and setup a traefik dns server for us so that we can access our drupal application in the browser and start developing the same.

But how does all this work, it all happens with .lando.yml file which we will generate now in the next step.
#### Step 4: Initialize lando in 
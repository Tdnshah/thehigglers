---
uuid: 96310611-db01-4bb8-99f3-37078255f87d
layout: ../../layouts/SingleBlog.astro
title: Drupal 10 development enviornment setup using lando..
pubDate: 2023-03-01 02:43:59
type: blog
description: Get your Drupal 10 development environment up and running quickly and easily
  with Lando! Our expert team has the knowledge and experience to help you set
  up a customized development environment that's optimized for Drupal 10. With
  Lando, you can streamline your workflow and focus on what matters most –
  building great websites. Contact us today to learn more about how we can help
  you get started with Drupal 10 development using Lando.
link: null
embed: null
video: null
slides: null
slug: drupal-10-development-enviornment-setup-lando
tags:
  - drupal
  - development
author:
  - tdnshah
image_link: /assets/blog/images/96310611-db01-4bb8-99f3-37078255f87d-img-1.png
lastmod: 2023-03-19T09:17:09.608Z
---

<Image src="/assets/blog/images/96310611-db01-4bb8-99f3-37078255f87d-img-1.png" aspectRatio="0.5" alt="Drupal_Lando_Dev_Setup_Image">

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

So in this step we will use lando to create and manage our docker based development enviornment, follow below steps to intialise lando

1. cd into the project root directory 
   
```
cd {install directory}
```

2. Run below command

```
    lando init

```
Note: At this step lando will prompt you to select few options as below 

```
1st Prompt:
    ? From where should we get your app's codebase? (Use arrow keys)
        acquia 
        ❯ current working directory  [**Select this option and press enter**]
        github 
        lagoon 
        pantheon 
        platformsh 
        remote git repo or archive 

2nd Prompt:
    ? From where should we get your app's codebase? current working directory
    ? What recipe do you want to use? 
        wordpress 
        acquia 
        backdrop 
        ❯ drupal10 [**Select Drupal 10 option and press enter**]
        drupal6 
        drupal7 
        drupal8 
    (Move up and down to reveal more choices)
(Note: In this prompt navigate the option but clicking down arrow in you terminal)

3rd Prompt:
    Where is your webroot relative to the init destination? (.)  > ./web [** Type "./web" as when we create a drupal project using create-project script the docroot is inside web directory of our codebase.**]

4th Prompt:
    ? From where should we get your app's codebase? current working directory
    ? What recipe do you want to use? drupal10
    ? Where is your webroot relative to the init destination? ./web
    ? What do you want to call this app? (My Lando App) SomeNameToYourProject [** Here you can give any name to your project**]

Wallahhh you are all set.
```
After all the above promts getting answered you should be able to see a new file in your project directory name .lando.yml. This file stores all the configurations we just made by answering the lando prompts.

(Note: This is a one time process, here onwards you will not have to answer any prompts or follow such a long process.)

Now to start your lando/docker containers run the below command

```
 Run this command at project root where you can see the .lando.yml file

lando start

(Give some time for lando to download the images and start the containers)

 Output:


```

You can see that after some time and some scrappy letters in the terminal lando has outputed a set of urls and thats it you are all set open this url in the browser and you will see Drupal Installation page.

For database credentials you can use below credential as every lando Drupal 10 project has it same.

Database Name: Drupal10 

Database User Name: Drupal10

Database User Password: Drupal10

Database host : datatable



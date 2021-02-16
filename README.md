# Tailwindcss Theme for Shopware 6
:fire::fire::fire: This theme integrates [tailwindcss](https://tailwindcss.com/docs) and [alpine.js](https://github.com/alpinejs/alpine) into shopware 6. :fire::fire::fire:

## Attention
This is a **proof of concept**. This is still in progress. :warning: Do not use in production.

:blue_heart: If you want to have a complete Tailwindcss theme, participate here and submit your changes via pull request. :sparkles:

## Installation

### Install required node_modules
`yarn install` (use node version >= 15.8.0)

## Build process

### Build the app.css and app.js
`yarn build:dev`  (includes all tailwind styles)  
or  
`yarn build:prod` (includes only used tailwind styles, purgedCSS Version)

### Copy Tailwindcss Theme into Shopware 6 Development Folder
All files from Tailwindcss theme into `custom/plugins/Tailwind` folder in shopware 6 directory

### Build Shopware 6 Storefront
`./psh.phar storefront:build` (e.g. use this command in your docker container)

## Components List
- Navigation :construction:
- Button :construction:
- Link :construction:
- Card :construction:
- Image :construction:
- ...

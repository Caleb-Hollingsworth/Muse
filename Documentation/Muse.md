# Muse

## Project Description

- My app is called Muse. Muse is defined as force that is the source of inspiration for creativity, and that's exactly what this project aims to accomplish. Users will be able to insert their name into a form which will then render a welcome accompanied by a random image from an api as well as a random quote from an api.

## Wireframes

![Untitled presentation](https://user-images.githubusercontent.com/65240952/88694136-bca0a200-d0c5-11ea-972e-c100b57cd2a8.jpg)
![Untitled presentation (1)](https://user-images.githubusercontent.com/65240952/88694185-ccb88180-d0c5-11ea-9a78-0f18dd174f51.jpg)
![Untitled presentation (2)](https://user-images.githubusercontent.com/65240952/88694215-d5a95300-d0c5-11ea-9c44-e7546f06ce58.jpg)

## User Stories

### MVP

- As a user, I want to be able to type in my name for a more personalized experience.

- As a user, I want a picture to randomly generate, so I don't have to physically search for something to display.

- As a user, I want to have a random inspirational quote generate, so I can feel inspired.

- As a user, I want the option to search for a different picture by keyword, so I can specify a category of what image is being displayed.

### Stretch Goals

- As a user, I would like to be able to have a button that regenerates a random quote so I can read more inspirational quotes.

- As a user, I would like to have the quote set on a timer, so that a new quote is generated every so often.

- As a user, I would like to have my own account to save photos and quotes, so I can reference them later.

## API Example

### Quotes database example

```
{
text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
author: "Thomas Edison"
},
{
text: "You can observe a lot just by watching.",
author: "Yogi Berra"
},
{
text: "A house divided against itself cannot stand.",
author: "Abraham Lincoln"
},
{
text: "Difficulties increase the nearer we get to the goal.",
author: "Johann Wolfgang von Goethe"
},
{
text: "Fate is in your hands and no one elses",
author: "Byron Pulsifer"
},
```

### Photo database example

```
{
id: 3063284,
pageURL: "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
type: "photo",
tags: "rose, flower, petal",
previewURL: "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg",
previewWidth: 150,
previewHeight: 99,
webformatURL: "https://pixabay.com/get/55e0d340485aa814f1dc8460962930781d3fdde15b4c704c7c2a72d1974dcc5f_640.jpg",
webformatWidth: 640,
webformatHeight: 426,
largeImageURL: "https://pixabay.com/get/55e0d340485aa814f6da8c7dda7936791337dee657596c4870267edd924dc551bf_1280.jpg",
imageWidth: 6000,
imageHeight: 4000,
imageSize: 3574625,
views: 763768,
downloads: 481455,
favorites: 1013,
likes: 1169,
comments: 264,
user_id: 1564471,
user: "annca",
userImageURL: "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg"
},
```

## Component Hierarchy

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

[Here for source for the quotes api](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373){:target="\_blank"}

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

[Here is the doc for the photo api](https://www.pexels.com/api/documentation/#photos-search)

```
{
  "total_results": 10000,
  "page": 1,
  "per_page": 1,
  "photos": [
    {
      "id": 3573351,
      "width": 3066,
      "height": 3968,
      "url": "https://www.pexels.com/photo/trees-during-day-3573351/",
      "photographer": "Lukas Rodriguez",
      "photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
      "photographer_id": 1845331,
      "src": {
        "original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
        "large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      },
      "liked": false
    }
  ],
  "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
}

```

## Component Hierarchy

![Untitled presentation](https://user-images.githubusercontent.com/65240952/88708927-05625600-d0da-11ea-88c6-a45dc2635382.jpg)

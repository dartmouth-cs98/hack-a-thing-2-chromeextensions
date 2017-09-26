# hack-a-thing-2-chromeextensions

Created for CS98 by Adam Phillips and Robert Sayegh

## Short description of what we attempted to build
We built a google chrome extensions which takes the page the user is on and creates a short summary of it. We combined the functionality of Goole Chrome extensions with an API designed to pull out the most important and relevant pieces of text into a short blurb. We based our extension off the tutorial at https://developer.chrome.com/extensions/getstarted

Apple bundles very feature-rich notes and reminders apps into its iOS software. However, some of the key functionality in the notes app is absent from the reminders app and vice-versa. We thus built out our own notes app and took one of those features, the ability to nest notes as children of a parent, and implemented it using react-native. We based our notes app off of the react native tutorial app found here: https://hellokoding.com/todo-app-with-react-native/

## Who did what
We first individually explored options associated with extensions on chrome and add-ons on firefox. We started with very simple tutorials to start to learn and understand the functionality of chrome extensions. Then we each attempted to build more complex extensions but ran into limitations with some of the extensions we tried to build because Google limits some functionality due to security concerns.

## What you learned
How to build simple and lightweight chrome extensions to make some daily tasks easier.

## What didn't work
One tricky aspect of Chrome Extensions is that Google somewhat limits them from reaching outside of the origin domain. As such, the extension I worked on to take a users geolocation and pull up nearby restaurants from yelp did no work. Otherwise the building and deploying of local chrome extensions is fairly simple.

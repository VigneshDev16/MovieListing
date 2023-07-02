# MovieListing

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


## Usage

- `yarn` -- Installs project dependencies
- `cd ios && pod install` -- Installs ios depenedent pods using cocoapods
- `yarn ios` -- (`expo run:ios`) Build the iOS App (requires a MacOS computer).
- `yarn android` -- (`expo run:android`) Build the Android App.


## Folder structure

- `src`: This folder is the main container of all the code inside this application.
  - `assets`: Asset folder to store all images, icons, fonts.
  - `components`: Folder to store any common / sub component that you use through the app (such as a generic button / search bar)
  - `screens`: Folder that contains all the application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
      - `Screen.styles.js`
  - `utils`: Folder all the supporting functions and components
    - `font`: File contains references for all the fontfamilies used in this application
    - `apiHelper`: File contains all the API calls
    - `helper`: File contains constants, helper functions such as isIos, DeviceDimensions
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## App Features

- `Movie Listing`: Gets data from API and lists it
- `Lazy Loading`: Loads next set of data whenever scroll reaches end of current set of data
- `Search`: Implemented client side search and also implemented debouncer to reduce number of calls


## App Recording



https://github.com/vickyms008/MovieListing/assets/11178009/1a6819fb-7c71-4fdb-b693-17814a8344af


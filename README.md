# This project is for interview test

## Work on this project

I created this project on react native cli because it takes less memory and has better performance than with expo. <br />
I used Typescript for making programming safer with types. <br />
I used React Native Paper for some components but I tried to not use a lot of that just when was necessary.<br />
I doesn't use power of any library for style just because of performance I made it with integrated css.<br />
I used axios for fetching data even if it wasn't necessary on this project. <br />
I used a different checkbox library because I doesn't like react native paper checkbox. <br />
I used another library for dropdown of filter. <br />

## Answer questions

### 1. How might you make this app more secure? <br />

> Of course we need to make auth functional but I don't think we need any other thing here just because we fetch and filter data from an outsource api and we are not posting or deleting data here.

### 2. How would you make this solution scale to millions of records? <br />

> When we fetch data we need to make a limit of product to get and that we can do if we have an endpoint from API, for this API we have on "https://dummyjson.com/products?limit=10" and this endpoint gives us 10 first products so we display 10 products on first time and when we scroll we make another call but now skipping 10 first product with this endpoint "https://dummyjson.com/products?limit=10&skip=10", also if we don't need some kind of data we can select which data we need with this endpoint "https://dummyjson.com/products?select=title,price".

### 3.What else would you have liked to improve given more time?

> What I would love to do for improving this is to not make filters and search on frontend and to work with API calls because for filtering data backend is even more faster than frontend. And maybe I would use cache for 10 first products and make call before scroll for 10 second products and then delete from cache 10 first products and then save 10 second products on cache and continue like this, if we do this then user is not going to wait for fetching and see that ugly loading, of course you can say what if we delete a product and I will say save on cache for 2 hours for e.g.
> For improving even more maybe I can separate css on different files just for better code review and also I need to remove that library for checkbox and use react native paper checkbox and don't use a lot of libraries.


# How you can run this project
First you need to clone this repo and then you need to install all necessary packages with `npm install` this command will do all work for you.
When installing packages you can run with `npm run android` for android and `npm run ios` for ios but for ios you also need to install pods.

For better understanding how to run please read official documentation below.


# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

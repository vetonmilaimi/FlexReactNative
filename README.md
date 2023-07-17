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

> We need to implement authentication functionality. However, since we are only fetching and filtering data from an external API and not performing any data posting or deletion here, we don't require any additional features.

### 2. How would you make this solution scale to millions of records? <br />

> When fetching data, we need to set a limit for the number of products to retrieve. We can achieve this by utilizing an endpoint from the API. For example, the endpoint 'https://dummyjson.com/products?limit=10' provides the first 10 products, which we display initially. As the user scrolls, we make another API call to retrieve the next set of products, skipping the first 10, using the endpoint 'https://dummyjson.com/products?limit=10&skip=10'. Additionally (something like pagination), also the API allows us to select specific data fields using the endpoint 'https://dummyjson.com/products?select=title,price' if we don't require all the available data.

### 3.What else would you have liked to improve given more time?

> To enhance the performance, I plan to move filters and search functionalities to the backend and handle them through API calls. Backend filtering is significantly faster than frontend processing. Additionally, I would implement caching for the first 10 products, retrieving them through a single API call initially. As the user scrolls, I'll make another API call to fetch the next 10 products and efficiently manage the cache by removing the first 10 and storing the latest set. This approach ensures a smoother user experience, eliminating the need for them to wait for data fetching and avoiding an unattractive loading display.

To further improve performance, I'll set a cache expiration of, for example, 2 hours for each product, so if a product is deleted, it will be automatically removed from the cache after the specified time.

In terms of code organization, I'm considering separating CSS into different files to facilitate better code review and maintenance.

Moreover, I'll optimize the use of external libraries and aim to replace the checkbox library with 'react native paper checkbox' to reduce dependencies and keep the codebase lean and efficient.


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

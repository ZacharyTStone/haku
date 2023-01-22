</br>
<p align="center">
 <img src="https://img.shields.io/github/languages/count/zachinjapan/haku?style=plastic" alt="Languages" />
 <img src="https://img.shields.io/github/languages/top/zachinjapan/haku?style=plastic&labelColor=yellow" alt="Top Language" />
 <img src="https://img.shields.io/github/languages/code-size/zachinjapan/haku?style=plastic" alt="Code Size" />
 <img src="https://img.shields.io/github/repo-size/zachinjapan/haku?style=plastic" alt="Repo Size" /> 
 <img src="https://img.shields.io/github/last-commit/zachinjapan/haku?style=plastic" alt="Last Commit" /> 
 <img src="https://img.shields.io/github/issues/zachinjapan/haku?style=plastic" alt="Issues" /> 
 <img src="https://img.shields.io/github/followers/zachinjapan?style=social" alt="Followers" /> 
</p>

# Haku

## Description

Haku is a robust and free-to-use Job tracker. Users can create, update, and delete jobs.


To learn Authentication and database management, I took a project I made through a paid course and added custom features. 

For example, I added a new landing page, demo login, delete user functionality, dark theme, custom job and user fields, and a tools page.

Here is the original course project that I used as a starting point. https://www.jobify.live/landing

I hope you enjoy this project and if you have any questions or comments feel free to contact me.

</br>

## Table of Contents

- [Links](#links)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- (start of my own custom features)
- [Landing Page](#landing-page)
- [Demo Login](#demo-login)
- [Delete User](#delete-user)
- [Dark Theme](#dark-theme)
- [Notes](#notes)
- [Stared](#stared)
- [Tools Page](#tools-page)
- [Stats](#stats)
- [Donations](#donations)
- [Other](#other)
- [ENV] )(#env)

## Links

- Live Site: (https://www.hakujobs.com)
- Github Repository URL: (https://github.com/zachinjapan/haku)

## License

[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Contributions

Fork, request, or contact me.

## Questions

[![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/zachinjapan)
[![LinkedIn](https://img.shields.io/badge/My%20LinkedIn-Click%20Me!-grey?style=plastic&logo=LinkedIn&labelColor=blue)](https://www.linkedin.com/in/zach-stone-45b649211/)

このプロジェクトに関するご質問は、Zach.Stone.Developer@gmail.com までお気軽にご連絡ください。

Feel free to reach me at Zach.Stone.Developer@gmail.com with any questions regarding this project!

## Landing Page

I created a custom landing page with a focus on professional design.

I also redid the styling, color scheme, and made a custom logo.

I used many SVG images and also React Reveal to create a smooth transition as the user scrolls down the page.

<img src ="https://media.giphy.com/media/PTzDs14LT1UK3lG8aW/giphy.gif" alt ="Landing Page" width ="80%">

## Demo Login

The tutorial app user could not demo the app.

I created a demo login page to show the user how to log in to the app.

I used a custom Demo register component that creates a demo user.

The demo user uses random numbers to create an email and password (pre hash).

I also added an emailProvider state to the user schema.

This is important because when the demo user logs out the emailProvider is accessed to determine if the user is a demo user and if so it will delete the user.

<img src ="https://media.giphy.com/media/gXBUFtPIxuh0TY7eHi/giphy.gif" alt ="Demo Login" width ="80%">

## Delete User

The tutorial app could not delete a user and their jobs.

I implemented a ttl index on the db and used new mongo fields to determine if the user and jobs are made from a demo user

They expire right after the JWT expires


## Dark Theme

I created a dark theme for the app using css variables and data-theme attributes.

The theme is saved not only in the local storage but also in the user schema.

This allows the user to set the theme and have it persist through the app and on other devices automatically.

<img src = "https://media.giphy.com/media/zjMy6ny7DUQPAHC8Yk/giphy.gif" width = "80%">

## Notes

I wanted the user to be able to enter custom information about their job such as salary, benefits, etc.

So I added a notes field to the job schema.

I also created a custom notes component that allows the user to enter notes and will give feedback to the user if the notes are too long.

<img src = "https://media.giphy.com/media/Y0hfYaGnvn9wjNydRO/giphy.gif" width = "80%">

## Stared

While you could sort the jobs by date, alphabet, etc... I wanted to make it easier for the user to find saved jobs that they care about.

So I added a stared field to the job schema and in the job component, I added a star button that will add the job to the stared array in the user schema.

You can also sort by if the jobs are stared or not.

<img src = "https://media.giphy.com/media/L4G5mwNoD5DhPexYNI/giphy.gif" width = "80%">

## Tools Page

I created a page that gives some tools for the user to use during the job application process.

I even implemented an API that checks the current currency conversion rates for over 50 currencies.

I made a custom currency component that allows the user to enter a currency and it will return the conversion rate for whatever target currency they enter.

I also added a calculator, helpful links, and a list of all jobs.

<img src = "https://media.giphy.com/media/EU55vEVuq5KA34F6n7/giphy.gif" width = "80%">

## Stats

I added 3 more stats.
-Jobs added during the current month
-Stared Jobs
-Total number of Jobs

<img src = "https://media.giphy.com/media/g5q2BAEimCplq3tjEG/giphy.gif" width = "80%">

## Donations

I wanted to allow the user to donate to the app.

I used Coinbase commerce for the crypto donation and a buy me a coffee button for the regular cash donation

I don't expect any donations, but if you can, I would love to use it to help pay for the server costs, etc.

<img src = "https://media.giphy.com/media/uQryhlp6aUUZszRdJG/giphy.gif" width = "80%">
                                                                                
## Other
                                                                                
I also added many smaller features.
                                                                                
For example I added a rate limiter to prevent DDOS attacks
                                                                                
```

// rate limiter

const getLimiter = rateLimiter({
windowMs: 1 _ 60 _ 1000, // 1 minute
max: 50,
});

```

## ENV 

###. placed on the server level

```
INLINE_RUNTIME_CHUCK=false
JWT_LIFETIME=1d
JWT_SECRET=<random string>
MONGO_URL=<Mongo URI>
```

### Env place in client

```
REACT_APP_RATE_API=<https://openexchangerates.org api>
```



Thank you for reading this far! You are awesome!

You can find the source code for the app on my GitHub page.

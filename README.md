# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository contains a single-page Twitter clone, which dynamically posts messages on the website from randomly generated users. The website is also able to keep track of all posts with the database, allowing to save information when server is down.

!["Screen shot of starting page"](https://github.com/michaelt448/tweeter/blob/master/docs/StartingScreen.png?raw=true)
!["Screen shot of Text box when over limit of characters"](https://github.com/michaelt448/tweeter/blob/master/docs/ErrorMessage.png?raw=true)
!["Screen shot of View only Mode](https://github.com/michaelt448/tweeter/blob/master/docs/ViewOnlyMode.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-Parser
- MongoDB
- MD5
- Chance

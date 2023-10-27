# Modern React with Redux

## Udemy Tutorial: Modern React with Redux by Stephen Grider

- https://www.udemy.com/react-redux
- his initial repo for the course: https://github.com/StephenGrider/ReduxCasts
- no repo for new 2023 course

### Animals App:

- simple example of useState (comes from react library)

### Video Browser App:

- video sections "An Intro to React" and "AJAX Requests with React"
  - uses [Youtube API](https://developers.google.com/youtube/v3/)

### Book List App

### Weather App

- uses openweathermap.org's free API to get weather data
- also uses google maps

### Blog App

- uses API Stephen Grider wrote for this tutorial: http://reduxblog.herokuapp.com/
- uses [axios](https://www.npmjs.com/package/axios), which is a "Promise based HTTP client for the browser and node.js"
- video section "Exploring the Posts API"
  - uses Postman, a free application for API Development: https://www.getpostman.com/

---

- if you accidentally push node_modules to a repo by not putting them in the .gitignore
  file and need to remove them, run:
  - `git rm -r --cached node_modules`
  - `git commit -m "remove the ignored node_modules directory"`
  - `git push origin master`

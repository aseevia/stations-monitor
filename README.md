# Charging stations monitor prototype app

## Live Demo
See it in action [here](https://aseevia.github.io/stations-monitor).
## Features
- Precise implementation of the given design mock.
- Data fetching logic has been abstracted into a data service, so it's easy to switch data sources, by making changes to just StationsDataService. 
- Handles API server errors, alowing to retry API requests.
- Loading "spinner" modal screen to display while loading stations.
- Reusable universal modal message component to display "blocking" messages like fatal errors or progress spinners.
- Unit tests are included for all components of the app, including the data fetching service.

## Improvement ideas
- Use router (reach-router) to produce individual URLs for each station details page, so that user may refresh the browser page and stay on the same station.
- Pagination would be the obvious improvement for the Station list component.
- It'd be nice to implement some sort of cache management mechanism, to return a cached version of the data (if it exists) while loading new data from API.


## Running and testing locally
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

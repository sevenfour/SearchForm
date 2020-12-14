
# Search Form App

> Minimalistic and a11y search form

This repository contains the Search Form app connected to the provided
through env variables search API
(currently the data mapper configured for Google search API response).
It builds into a deployable bundle.

## Usage

### Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install
```

### Running

After installing dependencies, to run locally, type

```
$ npm start
```

The tests can be executed by running the following command:

```
> npm run test
```

### Running the build

To build and bundle the site, run the following

```
> npm run build
```

### Configure

Prior to building, a set of environment variables need to be defined.

```
# Search API
REACT_APP_BOSA_API_PORTAL_HOSTNAME=< Portal API hostname  eg. dev-portal.api.bosa.com >

REACT_APP_SEARCH_API_NAME=<name of the search engine>

REACT_APP_API_HOSTNAME=<name of the api hostname>
REACT_APP_API_SEARCH_ENDPOINT=<name of the api endpoint of any>
REACT_APP_SEARCH_ENGINE_ID=<name of the search engine ID>
REACT_APP_SEARCH_FORM_API_KEY=<name of the API key>

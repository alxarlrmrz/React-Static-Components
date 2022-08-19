# React-Static-Components

About this Build
You are half way through the course! You've been showing off your portfolio and projects to your friends, family and classmates and they all say "It's fine. I like it!" But you want more insight.

So you decide to look into some analytical tools...but wow! They are expensive! You decide to make your own.

You visualize a dashboard with components for reviews, average rating, sentiment analysis and website visitors.

Try to recreate this wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).

Get Started
Set up
cd to todays /homework folder
mkdir dashboard
cd dashboard
touch app.js index.html
index.html

add html boilerplate
add script tags
add a main tag inside the body
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel" src="app.js"></script>
app.js

render an h1 tag using react to test it:
ReactDOM.render(
  <h1>Commence Dashboard Creation!</h1>,
  document.querySelector('main')
);
Run a simple server:
 

Using npm

Install, if you haven't already, with npm install -g http-server (might need to run sudo npm install -g http-server)
run http-server -o
Important Note
To see updates you must refresh your browser, all three of the servers above do cache things, so you may have to do a hard refresh (hold shift key when doing a refresh) to see your changes. Remember command shift r as the hot keys
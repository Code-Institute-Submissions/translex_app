# TransLex
## [Demo Here](https://shanemuir.github.io/translex_app/)

A single page application for translating words or sentences between multiple languages. The aim of the project is to showcase the HTML5, CSS3, JavaScript and various other tools for creating dynamic
interactive frontend applications.

Throughout this project I will try make use of jQuery for easier manipulation of the DOM and faster production of my application. Where I can I will try to also use plain old JavaScript if jQuery isn’t needed!

The app was inspired by a YouTube video where a developer builds a app in Vue.Js 
I challenged myself after following along with the videos to make this app without Vue in plain JS. 

I felt this was a perfect opportunity to show case my skills that's been learnt so far throughout the course. The app makes use of XMLHttprequests to an API. Using a special key my app can call 
the API with params and receive back a response. This response is then out putted to the text area as translated text.

The sole functionality of the app was centred around translation, but where possible I have tried to implement features to show case skills learnt from #User-Centric Frontend and #Interactivity Frontend
modules. The sites makes use of jQuery, JavaScript CSS3 and HTML5. 

External libraries have been implemented to improve UI/UX and to keep development time short and not to reinvent the wheel. 

Taking what I learnt from the API section, the jQuery section and all other skills learnt throughout I have been able to put together a responsive modern looking single page 
translator app for use on the web. 

The app makes use of icons for bookmarking purposes, where users can bookmark the site on desktop/mobile or tablet and be able to quickly load the app for translation purposes. 
The design is so that ease of functionality can be maintained.
The navigation is design to hold information around TransLex without being intrusive to the initial landing page. 

## UX

An application created for mainly English people who would like to translate any word or sentence to a different language, this application gives the user the capability to translate English to a wide variety of languages.

The application is a SPA (single page application) scaled for devices for ease of acces and use.

The application has been designed in a way to suit all users as easy as possible, future development could be to get the app in other languages to be applicable world-wide. 

My application has been created so that the app is easy to use, the navigation is for further information where the landing page is the where all the magic happens. 

As many people day to day deal with non-English speakers I wanted to create a single page application that can improve the efficiency and effectively improve the breakdown between English and non-English speakers.


## User Stories

I’d like an app that I can open swiftly and get a word or sentence translated quickly.

I wish there was a website that could be straight forward to use, for translating languages.

Is there a site out there that isn't a bulky monster for just translating a word or sentence? 

There should be an app which I can bookmark to my phone or my books mark bar and instantly be able to load quickly up a app that can translate to many other languages. 

Easy to use translator app. 

Wish there was an app or website that didn’t have lots of ads or make you sign up or accept promo emails etc to be able to use their translator.

Is there a translator app that require no input of personal details, it seems every site nowadays wants sign up or social logins.

As a user from a non-English country my first language isn't English, is there an app to help my experience in translating words whilst staying in England. 

As a user I want to be able to land on a webpage and be able to translate my sentence as fast as possible.

As a busy business entrepreneur travelling to many different country I need an app to translate stuff for me as I don't speak any other language. 

As a user working in a airport a lot of people ask questions in different languages to what I know, I need an app to assist me when getting asked questions in different languages. 


### Wireframes 



#### Why build TransLex 

TransLex was built for simplicity, minimal design for performance. After the app is loading the user interface have been put together to create a easy and fast way to getting words or sentences translated.
I wanted to create A single page app, but also have a full-page navigation for company info and details, social icons and contact information.
The app is designed to be a landing page style, single page no scrolling to create a easy to use translator. Built for performance and speed. 


## Features

Particles JS used to create a modern background effect to interest the user, the background is interactive and live. Along with that, there is also interactive buttons dotted around the page
for interactivity with the user. I wanted to create a minimal effect but informative as well.

Overlay Nav was an alternative to getting lots of information on the page whilst keeping the translator looking minimal.

The design was solely designed for easy use of the translator, the nav is designed in a way to hold all information and contact details, social info whilst not be intrusive to the app.

Interactivity is used around the site to show case tech I’ve learnt throughout my course with Code Institute, I feel the site demonstrates good used of JavaScript I created my API script with just Axios aa promised based HTTP client
Axios was mainly used for its ability to be able to make XMLHttpreuqests from the browser, and also intercept request and responses in a promised based way. 

Axios has built in Client-side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) to prevent malicious exploit of a website where unauthorized command are transmitted from a user that the web applications trusts.

Yandex API client used for translation and to get all the languages. 

Why Use Axios? 

Axios is a promised based HTTP client for the browser and node.js. 
[Features](https://github.com/axios/axios) are here.


###### Installing Axios 
Using NPM: 
```
$ npm i axios
```

Using bower: 
```
$ bower install axios
```
Using CDN: ** This is the way I've decided to use axios on my app. **
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
###### Example of Axios 
Get Request using promised base (.then .catch etc)
```
// Make a request using axios.get 
if(searchText != '') {
        #Send out user input to the Yandex API  
        axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T205319Z.b0ffef87e97badd3.e78787ec8a392b9772f8b8f56933b1d86463d330&lang=' + selectedLang + '&text=' + searchText)
       
        # If successful then fill translation text area with data received back
        .then((response) => { 
            let translateInput = document.querySelector('#translation');
            translateInput.value = response.data.text[0];
        })
        # Any errors catch them and console log them
        .catch((err) => {
            console.log(err);
        });
        # This clause is to prevent any trailing letters left in the text area once user removed all input text area.
    } else {
    document.querySelector('#translation').value = '';
}
```
** Future improvement to my app's API script could be to add in text-to-speech so that once translation is complete there could be a button/option to speak out load the translated text. **


###### Why Particles.js

Particles.js by VincentGarreau is a minimal plugin used for creating interactive background styles. 

Again, within my site I’ve used the CDN Link for this plug in.

Usage:
Load particles.js and configure the particles:

index.html

```
<div id="particles-js"></div>

<script src="particles.js"></script>
```

app.js
```
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
```
Then there is just to have the particles.json file configured to how you want the background.

A full guide can be found [here](https://github.com/VincentGarreau/particles.js/).

[Favicon used is from a free icon site](https://icon-icons.com/download/62593/ICO/256/)


### Existing Features

Yandex API used for Users to be able to input text into the form to translate a word or sentence into different languages.

Custom JS used to create a bit of interactivity on the page for UX.


#### Features to implement

Update app to have capability to translate any language to any language. (Not just English to XXXX)
Implement more UI/UX. Types.JS, Animate.CSS, Wow.JS - Using external sources/libraries to speed up development and not reinvent the wheel.


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [jQuery](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation.

- [Particles JS] (https://github.com/VincentGarreau/particles.js/)
    - Particles JS used for background effect thanks to **VincentGarreau**

- [Pace Loading bar] (https://github.com/HubSpot/pace)
    - Fancy AJAX loading bar used thanks to **HubSpot**
** Pace now removed from app as wanted to keep plugins to a minimal and pace wasn't activated much so removed to improve site performance. **

- [Bootswatch] (https://bootswatch.com/united/)
    - Bootstrap Bootswatch United theme used for faster development thanks to **Thomas Park**

- [GitHub Fork Me Ribbon] (https://blog.github.com/2008-12-19-github-ribbons/)
    - GitHub ribbon used thank you **mojombo**

- [Typed JS](https://github.com/mattboldt/typed.js/)
    - Typed effect used to improve UI/UX on the design. ** Matt Boldt **


## Testing

All my app has been manually testing as well as making use of the [Jasmine JS test framework](https://jasmine.github.io/) for testing my DOM manipulation. 

#### Manual testing

My manual testing consists of me physically testing all functionality on my app.
Each feature has been built in stages. Testing each new piece of functionality along the way. 
First, I set up a single page 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


## Deployment

Site is going to be deployed to GitHub Pages via npm init and the package.json file including the GitHub pages script to the dist folder.
Deployed version is using minified CSS.
The site will be deployed on a separate branch named gh-pages.

To run this site locally download to full ZIP folder on GitHub and run index.html, this will get a version of my app running on your machine. 

To adapt or expand on this project uploads all ZIP folder to your local IDE developer environment. 

All decencies are links via CDN in the index.html so no decencies for this app except CDN links. If for any strange reason a CDN link is down or not working all resources used for this app
are documented within the readme and on their GitHub will be full guides on how to install directly into your developer environment. 

No server side decencies needed, front end website only.


### Content
All content used is dummy content and the paragraphs are created using emmet lorem text.


### Media
Fork me Ribbon used from - [GitHub Fork Me Ribbon] (https://blog.github.com/2008-12-19-github-ribbons/)
    - GitHub ribbon used thank you **mojombo** 
    
Favicon create by me using GIMP.
** UPDATE: Favicon changed due to being pixelated, used free favicon see section in features. ** 


### Credits 
Credit must be given to Stack overflow, YouTube, GitHub and Google as these are the main resources used to build this app. 


### Acknowledgements
- I received inspiration for this project from Traversy Media build a Vue translator App (https://www.youtube.com/watch?v=DBADrF0C2ls)



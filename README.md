# TransLex
## [Demo Here](https://shanemuir.github.io/translex_app/)

A single page application for translating English words or sentences between multiple languages. The aim of the project is to showcase the HTML5, CSS3, JavaScript and various other tools for creating dynamic
interactive frontend applications.

Throughout this project I will try make use of jQuery for easier manipulation of the DOM and faster production of my application. Where I can I will try to use Vanilla JS if jQuery isn’t needed!

The app was inspired by a YouTube video where a developer builds a app in Vue.Js 
I challenged myself after following along with the videos to make this app without Vue in plain JS. 

I felt this was a perfect opportunity to show case my skills that's been learnt so far throughout the course. The app makes use of XMLHttprequests to the Yandex API. Using a special key my app can call 
the API with params and receive back a response. This response is then output to the lower text area as translated text.

The sole functionality of the app was centred around translation, but where possible I have tried to implement features to show case skills learnt from #User-Centric Frontend and #Interactivity Frontend
modules. The sites makes use of jQuery, JavaScript CSS3 and HTML5. 

External libraries which can be found at the "Technologies Used" section of this document, technologies have been implemented to improve the user interface and to improve user experience. 

Taking what I learnt from the API section, the jQuery section and all other skills learnt throughout I have been able to put together a responsive modern looking single page 
translator app for use on the web. 

The app makes use of icons for bookmarking purposes, where users can bookmark the site on desktop/mobile or tablet and be able to quickly load the app for translation purposes. 
The design was created to maximise the ease of functionality.
The navigation is design to hold information around TransLex without being intrusive to the initial landing page. 

---

## UX

An application created for mainly English people who would like to translate any word or sentence to a different language, this application gives the user the capability to translate English to a wide variety of languages.

The application is a SPA (single page application) scaled for devices for ease of access and use.

The application has been designed in a way to suit all users as easy as possible, future development could be to get the app in other languages to be applicable world-wide. 

My application has been created so that the app is easy to use, the navigation is for further information where the landing page is the where all the magic happens. 

As many people day to day deal with non-English speakers I wanted to create a single page application that can improve the efficiency and effectively improve the breakdown between English and non-English speakers.

---

## User Stories

I’d like an app that I can open swiftly and get a word or sentence translated quickly.

I wish there was a website that could be straight forward to use, for translating languages.

As a user is there a site out there that isn't a bulky monster for just translating a word or sentence? 

There should be an app which I can bookmark to my phone or my books mark bar and instantly be able to load quickly up an app that can translate to many other languages. 

Easy to use translator app. 

Wish there was an app or website that didn’t have lots of ads or make you sign up or accept promo emails etc to be able to use their translator.

Is there a translator app that require no input of personal details, it seems every site nowadays wants sign up or social logins.

As a user from a non-English country my first language isn't English, is there an app to help my experience in translating words whilst staying in England. 

As a user I want to be able to land on a webpage and be able to translate my sentence as fast as possible.

As a busy business entrepreneur travelling to many different country, I need an app to translate stuff for me as I don't speak any other language. 

As a user working in a airport a lot of people ask questions in different languages to what I know, I need an app to assist me when getting asked questions in different languages. 

---

### Wireframes 

[Desktop Home View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Desktop-home.png?raw=true) 
[Desktop Menu View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Desktop-menu.png?raw=true)

[Tablet Home View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Tablet-home.png?raw=true)
[Tablet Menu View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Tablet-menu.png?raw=true)

[Mobile Home View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Mobile-home.png?raw=true)
[Mobile Menu View](https://github.com/ShaneMuir/translex_app/blob/master/wireframes/Mobile-menu.png?raw=true)

---

#### Why build TransLex 

TransLex was built for simplicity, minimal design for performance. After the app is loading the user interface have been put together to create an easy and fast way to getting words or sentences translated.
I wanted to create A single page app, but also have a full-page navigation for company info and details, social icons and contact information.
The app is designed to be a landing page style, single page no scrolling to create a easy to use translator. Built for performance and speed. 

---

## Features

Particles JS used to create a modern background effect to interest the user, the background is interactive and live. Along with that, there is also interactive buttons dotted around the page
for interactivity with the user. I wanted to create a minimal effect but informative as well.

Overlay Nav was an alternative to getting lots of information on the page whilst keeping the translator looking minimal.

The design was solely designed for easy use of the translator, the nav is designed in a way to hold all information and contact details, social info whilst not be intrusive to the app.

Interactivity is used around the site to show case tech I’ve learnt throughout my course with Code Institute, I feel the site demonstrates good used of JavaScript I created my API script with Axios a promised based HTTP client
Axios was mainly used for its ability to be able to make XMLHttprequests from the browser, and also intercept request and responses in a promised based way. 

Axios has built in Client-side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) to prevent malicious exploit of a website where unauthorized command is transmitted from a user that the web applications trusts.

Yandex API client used for translation and to get all the languages. 

Why Use Axios? 

Axios is a promised based HTTP client for the browser and node.js. 
[Features](https://github.com/axios/axios) are here.

---

#### Installing Axios 
Using NPM: 
```
$ npm i axios
```

Using bower: 
```
$ bower install axios
```
Using CDN: **This is the way I've decided to use axios on my app.**
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
#### Example of Axios 
Get Request using promised base (.then .catch etc)
```javascript
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
**Future improvement to my app's API script could be to add in text-to-speech so that once translation is complete there could be a button/option to speak out load the translated text.**


#### Why Particles.js

Particles.js by VincentGarreau is a minimal plugin used for creating interactive background styles. 

Again, within my site I’ve used the CDN Link for this plug in.

Usage:
Load particles.js and configure the particles:

index.html

```html
<div id="particles-js"></div>

<script src="particles.js"></script>
```

app.js
```javascript
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
```
Then there is just to have the particles.json file configured to how you want the background.

A full guide can be found [here](https://github.com/VincentGarreau/particles.js/).

[Favicon used is from a free icon site](https://icon-icons.com/download/62593/ICO/256/)

---

### Existing Features

Yandex API used for Users to be able to input text into the form to translate a word or sentence into different languages.

Custom JS used to create a bit of interactivity on the page for UX.

---

#### Features to implement

Update app to have capability to translate any language to any language. (Not just English to XXXX)
Implement more UI/UX. Types.JS, Animate.CSS, Wow.JS - Using external sources/libraries to speed up development and not reinvent the wheel.

---

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [jQuery](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation.

- [Particles JS](https://github.com/VincentGarreau/particles.js/)
    - Particles JS used for background effect thanks to **VincentGarreau**

- [Pace Loading bar](https://github.com/HubSpot/pace)
    - Fancy AJAX loading bar used thanks to **HubSpot**
**Pace now removed from app as wanted to keep plugins to a minimal and pace wasn't activated much so removed to improve site performance.**

- [Bootswatch](https://bootswatch.com/united/)
    - Bootstrap Bootswatch United theme used for faster development thanks to **Thomas Park**

- [GitHub Fork Me Ribbon](https://blog.github.com/2008-12-19-github-ribbons/)
    - GitHub ribbon used thank you **mojombo**

- [Typed JS](https://github.com/mattboldt/typed.js/)
    - Typed effect used to improve UI/UX on the design. **Matt Boldt**

- [CanIUse](https://caniuse.com/)
    - Check all supported browers for CSS **Lennart Schoors**


---

## Testing

I tried to test my function with the Jasmine-jQuery plugin but could get this to work. [Jamine-jQuery](https://github.com/velesin/jasmine-jquery) 

---

#### Manual testing

My manual testing consists of me physically testing all functionality on my app.
Each feature has been built in stages. Testing each new piece of functionality along the way. 
First, I set up a single page following my wireframing, from the start i decided the app would be one page no scrolling and easy to use. 

After setting up the boiler plate to my app I decided to set the background in place. The background effect is Particles JS see features part for more details on how this plugin is configured and used. After applying the background
I tested that the plugin was loading correctly via the CDN link, I my console was clear. I first created the mark up for the background in my HTML file, added the JSON config file to my directory.

Within my HTML file I CDN linked to [Particles.JS](https://vincentgarreau.com/particles.js/) and use the following code snippet to load the plugin core file and load my config file. After load I console log that the file is loaded.

```javascript
     <!-- My Particles Config (Particles call and src to config file) -->
    <script>
        /* particlesJS.load(@dom-id, @path-js */
        particlesJS.load('particles-js', 'dist/js/particles.js', function() {
            console.log('particles.js loaded...');
        });
    </script>
```

Once satisfied I tested the background on different browsers and screen sizes and also devices. 
**My app is not support on Internet Explorer due to modern tech used. Please consider using my app on Chrome, Firefox or Microsoft Edge.**

I have been through [CanIUse](https://caniuse.com/) and added all browser prefixes for older browser to get my app support on as many as possible browsers. I ideally wanted to leave this out so that it forced users to update their
browser but then consider this bad UX.

After my background was set, I started to design the navbar. From my wireframes I knew already I wanted my main page to hold the apps core functionality and the nav menu to hold most of the company/app information.
Also wanted to challenge myself on making a navbar from scratch and not from pre-built classes via Bootstrap. My navbar example was found on [W3School](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp) and adapted to suit my purpose.
I initially set up the mark up for my nav and styles. After I put the JS function into a external file and linked to them on my app. Tested the functionality was working by running my app and manually clicking the open or close element.
Once I was happy with the functionality of the navbar and responsiveness I started on the dummy content. Added couple more features to my app to make it a little more design friendly and interactive.

Added a Pace JS Loading bar, this is like the GitHub loading bar or YouTube loading bar on AJAX request/ re-directs when the DOM is loading. So I found pace to be a minimalistic byte size plugin for UI/UX page loads. It adds a fancy way of showing the user
the webpage is loading. [Pace can be found here](https://github.hubspot.com/pace/docs/welcome/) 

How to use and implement pace onto a project can be found [here](https://github.hubspot.com/pace/). 
**I have removed the Pace loading bar out of my app but left the test case in**
For testing the pace loading bar was working, I added the script to my apps directory linked to it via script tags and link tags to the plugin CSS and JS, upon loading my app there was a YouTube/GitHub style loading bar
I found this to only work on page load as my app is a single page application, I decided the loading bar was irrelevant and removed this from the design. 

A fork me Ribbon was added to add a little projectory touch to my app and to allow users to be able to find the source code to how the app was built. With the app's repo there is documentation to guide users on getting a copy of my app onto their
local developer machine to adapt or expand. 

I started to be able to see the design coming together from the wireframes bit by bit. After added a couple plugin I started on added my social links and added some effects to improve UI/UX and interactivity. 
Added social icons with interactivity onto the homepage and put all social connection onto the navbar.

At this stage I am nearly finished with the design from my wireframing just got to add the form that will process data to the API and output what response we get back and present this is a way the user can 
effectively see a translation.

After adding form mark-up I styles this for responsive and then start the API script for making calls to the Yandex API. 

More information on the [Yandex API](https://tech.yandex.com/translate/). 

To test my script, I manually made it bit by bit using the Yandex API tools. I created this app in VueJS after being more confident with Axios and XMLHttprequests I decided to re-create my app purely with JS.

A good tool for testing how to send the URL to the Yandex API was via this [page](https://translate.yandex.com/?lang=en-ru&text=asdasda).

I first made the script to call the API and handle the response sent back. To start with I use UK - ES (Spanish) pre-set until I was confidently able enough to handle the response and get it to output to the textarea correctly.
Once this function was working, I started building the call to pull all the available languages that the Yandex API offers. I create a function to append all the options to the dropdown box within my form. Then adapted the translate function
to include the selectedLang to which the user wants to translate. 

Axios is used with my script to create a promised base XMLHttprequest to the Yandex API. More on the Axios libraries can be found in the features section.

Upon testing my functionality to my translator, I noticed the outputted textarea was leaving a trailing letter after the user had removed all text from the input textarea. To fix this I added a else statement at the end of my script to check 
if the input text area is empty then to empty the outputted text area.


After my websites core functionality was in place, I wanted to a little more tech from what I've learnt from the course so far, I decided to add in some jQuery for manipulation of the DOM. from using what we learnt in the jQuery module
I added some mouse events on certain elements to my website. To test these I checked console for any script or linking errors and manually testing the mouse events on most browsers that are supported and on devices that I could get my hands on.
**My app does not work on Internet Explorer, but will work on all modern browser where new tech is supported.**

#### Responsiveness

I have tested the responsiveness on all browsers I can, these include Firefox, Opera, Chrome, Edge.
Devices I've tested functionality and responsiveness on are, Samsung S8/9 iPhone 6/7.
I have also tested the responsiveness using Chrome DevTools check all width and height breakpoints and also testing on chrome built in pre-defined pre-sets for devices.

Where I found any issue with my responsiveness I fixed by using the devtools to inspect what element or CSS was causing the issue and rectified within devtools before apply any final rectifications to my app. 

All fixed will be captured within separate version commits.

Some manually test I conducted were;

#### Mouse events
+ Manually inputted data to form and checking outputted text again a real translator
+ Click events with the mouse
+ Hover events with the mouse
+ TypedJs was testing manually by loading my webapp and visually checking the plugin worked correctly as expected
+ Language call to API manually tested dropdown box until all languages appended correctly
+ Different browser testing
+ Different device testing
+ Asked other student to use and feed any issues back via Slack
+ Had my mentor look over all the source and the live app and feedback any issues
+ Got friends and family to test and use the app and feedback any issues


#### HTML & CSS

All my HTML is valid, and CSS is valid.

[HTML Validator](https://validator.w3.org/)
[CSS Validator](https://jigsaw.w3.org/css-validator/)

#### Minifier used

I use minified version of my files to improve website performance. 

[CSS Minifier](https://cssminifier.com/)

---

## Deployment

Site is going to be deployed to GitHub Pages via npm init and the package.json file including the GitHub pages script to the dist folder.
Deployed version is using minified CSS.
The site will be deployed on a separate branch named gh-pages.

To run this site locally download to full ZIP folder on GitHub and run index.html, this will get a version of my app running on your machine. 

To adapt or expand on this project uploads all ZIP folder to your local IDE developer environment. 

All dependencies are links via CDN in the index.html so no dependencies for this app except CDN links. If for any strange reason a CDN link is down or not working all resources used for this app
are documented within the readme and on their GitHub will be full guides on how to install directly into your developer environment. 

No server-side dependencies needed, front end website only.

---

### Content
All content used is dummy content and the paragraphs are created using emmet lorem text.

**Update** Content used on the site is now fictional as I feel the purpose of the text used gives meaning and instructions to the user.

---

### Media
Fork me Ribbon used from - [GitHub Fork Me Ribbon] (https://blog.github.com/2008-12-19-github-ribbons/)
    - GitHub ribbon used thank you **mojombo**
    
Favicon create by me using GIMP.
**UPDATE: Favicon changed due to being pixelated, used free favicon see section in features.**

---

### Credits 
Credit must be given to Stack overflow, YouTube, GitHub and Google as these are the main resources used to build this app. 

---

### Acknowledgements
- I received inspiration for this project from Traversy Media build a Vue translator App (https://www.youtube.com/watch?v=DBADrF0C2ls)


# FreeCodeCamp - Youtube - Machine Learning Course - NO Black Box - JavaScript

## Dr. Radu - Introduction to the Course

* learn ML systems and inner workings without libraries
* improve software development skills
* create ML driven applications
* course is a lot about **software engineering** - moves into ML
* project goal: web app that learns to recognize drawings

  * similar to quickdraw from Google
  * ML needs data - build a data collection tool
  * a drawing app that works on desktop and mobile devices
  * reuse this sketchpad component to build the recognizer
* learn to process and visualize the data collected with the tool

  * feature extraction and visualization
  * build graph - customized teaching tool
* typical ML course - use existing data and features

  * famous datasets - Iris, Wine, Movies, MNIST
  * better to learn to collect data, clean it, visualize, and shape in a useful form
  * even sophisticated ML libraries fail if fed the wrong data
  * not uderstanding data is why people fail at ML

### Nearest Neighbor Classifier

* easiest learning method for ML to implement to get started
* works better when we use data scaling
* used by many ML programmers, but not well understood
* learn to impement it and integrate it with the sketch pad
  * so it recognizes what we draw
* works ok , but would work better if we apply data scaling
  * almost always performed when doing ML, but not well understood
  * we will understand why it works

### K-Nearest Neighbor Classifier

* we will implement this more advanced classifier
* and calculate its accuracy for different values of k

### Decision Boundaries

* we will compute decision boundaries to understand things better
* and display them on our chart

### Python Review Using Libraries

* course will be reviewed at the end, implement in Python using libraries

Phase 1 Homework

Phase 2: More Advanced Methods

* advanced features
* higher dimensions
* neural networks
* data cleaning
* clustering
* graphs

# Lesson 1: Data Collection

## Create Sketch Pad in HTML/CSS/JS

### Intro

* we will build a drawing app for data collection
  * it will ask for some information, then tell you what you need to draw
  * also has undo and save functionalities
  * works on desktop and mobile devices
* implement in visual studio code, test in chrome dev tools

### Procedure:

#### Make a webpage to create data for our dataset

creator.html - layout basic HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Data Creator</title>
    <link rel="stylesheet" href="styles.css"/>
  </head>
  <body>
    <div id="content">
      <h1>Data Creator</h1>
      <br>
      <div id="sketchPadContainer"></div>
    </div>
  </body>
</html>
```

* view in browser, error because no css file yet, so create styles.css and layout basics

```css
body {
	font-family:Arial;
	background-color:skyblue;
}
#content {
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-59%,-50%);
	text-align:center;
}
```

* set #content (the div w. id="content")
  * top 50% (halfway down from the top) and left 50% (half way over from the left)
  * this makes the **top left corner** of the content set in the **middle** of the page
  * `transform:translate(-50%,-50%);` moves over the top left corner of #content
    * from half way down and half way from left - to the top left corner of the page
* i think we need a specific size in pixels for the sketchpad
  * so not setting a CSS grid or flexbox, because not resizing
* refresh the page, we can see:
  * 'Data Creator' should be exactly in the middle of the page
  * font is Arial, background is blue

### Implement our Sketchpad

* we will implement the sketchpad in a separate JavaScript file
  * create a folder called 'js' or 'javascript'
  * load this file into the page at the end of the body
* **instantiate our sketchPad in a separate script tag on the page**
  * define it to be on our sketchpad container

```html
<script src="js/sketchPad.js"></script>
<script>
	const sketchPad = new SketchPad(sketchPadContainer);
</script>
```

* now lets create our js folder, define our file sketchPad.js (in JavaScript)
  * define SketchPad as a **class**
    * NO PARENTHESES AFTER `class` KEYWORD IN DECLARATION
    * throws an ERROR damn it
  * implement in a html canvas element
  * append the canvas to the div

```javascript
class SketchPad() {

};
```

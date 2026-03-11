
<h1 align="center">TODO List Web Page</h1>

## Online TODO list using _JavaScript_ to retrieve data from _JSON_ file containing the information of each task.
<div align="center">
  
  [![🎨 Figma Project](/images/figma.png "Click here to see Figma project page.")](https://www.figma.com/design/RTiieT4R4Q1GslmhI504mg/TodoList?node-id=0-1&p=f&t=N2ZU9tTZZi54ZkSm-0) 
  [![🌐 Web Page*](/images/webpage.png "Click here to see Web Page.")](https://vercel-todo-list-js.vercel.app)
  
</div>



> _*Everytime that you reload the page the data will be reset to default._

## Task Structure: 

Each task contains:
* Id
* Title
* Description
* Add date / Alt add date*
* Finish date / Alt finish date*
* Status (Pending or Finished)

> *Regular: "YYYY-MM-DD", Alt: "YYYY/MM/DD"


## Features: 
* Perform full _CRUD_ operations on each task.
* Sort tasks by _alphabetical_ order or _date_.
* Dynamic dark theme support*.

> *Uses <em>localStorage</em> to remember the last selected theme, page and others.

## How to Run:

> **Important**: You need ***Node.js*** installed at your machine.

* Clone the repository
```
git clone https://github.com/LuizGustavo1001/TODO-WebPage-JS.git
```

* Open the terminal inside of the **project directory** and install the **npm** dependences:
```
npm init -y 
npm install express
```

* Start the local server:
```
cd server 
node server.js
```

* Open your browser and access the link: 
```
http://localhost:300
```

* Now, everytime that you wish using the website again, just start the local server.


> After installing all necessary modules, the <em>node_modules</em> folder and the files <em>package.json</em> and <em>package-lock.json</em> must be located in the project root directory.

## Directory Scheme:
```
|
|- public
|   |- CSS              (Frontend styles)
|   |- favicon          (Page icon)
|   |- JS               (Web page JavaScript)
|   |- index.html       (Home page)
|
|- server
|   |- server.js        (Backend-Frontend connection)
|   |- tasks.json       (Tasks data)
|
```

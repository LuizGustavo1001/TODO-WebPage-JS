# TODO List Web Page

<h2>Online TODO list using <em>JavaScript</em> to retrieve data from <em>JSON</em> file containing the information of each task.</h2>

<p>🎨 <a href="https://www.figma.com/design/RTiieT4R4Q1GslmhI504mg/TodoList?node-id=0-1&p=f&t=N2ZU9tTZZi54ZkSm-0">Figma Project</a></p>

<h3>📑 Task Structure:</h3>
<p>Each task contains:</p>
<ul>
    <li>Id</li>
    <li>Title</li>
    <li>Description</li>
    <li>Creation date / Alt creation date*</li>
    <li>Conclusion date / Alt conclusion date*</li>
    <li>Status (pending or finished)</li>
</ul>
<p>* Regular: "YYYY-MM-DD", Alt: "YYYY/MM/DD"</p>

<hr>

<h3>💡 Features: </h3>
<ul>
    <li>Perform full <em>CRUD</em> operations on each task.</li>
    <li>Sort tasks by <em>alphabetical</em> order or <em>date</em>.</li>
    <li>Dynamic dark theme support*.</li>
</ul>
<p>*Uses <em>localStorage</em> to remember the last selected theme, page and others.</p>

<hr>

<h3>💻 How to Run:</h3>
<p>Important: You need <strong>Node.js</strong> installed at your machine.</p>

<ul>
    <li>Clone the repository 
        <pre>git clone https://github.com/LuizGustavo1001/TODO-WebPage-JS.git
cd TODO-WebPage-JS</pre>
</li>
    <li>
        Open the terminal inside of the project directory and install the <em>npm</em> dependences:
        <pre>npm init -y 
npm install express</pre>
    </li>
    <li>
        Start the local server:
        <pre>cd server 
node server.js</pre>
    </li>
    <li>Open your browser and access the link: <pre>http://localhost:3000</pre></li>
</ul>

<p>After installing all necessary modules, the <em>node_modules</em> folder and the files <em>package.json</em> and <em>package-lock.json</em> must be located in the project root directory.</p>

<hr>

<h3>🗃️ Directory Scheme: </h3>
<pre>
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
</pre>


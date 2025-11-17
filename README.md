# TODO Web Page List - JavaScript

<h2>Lista de tarefas online utilizando <em>JavaScript</em> para recuperar dados de um arquivo <em>JSON</em> contendo as informações de cada tarefa.</h2> 

<p>🖌️ Projeto no <a href="https://www.figma.com/design/RTiieT4R4Q1GslmhI504mg/TodoList?node-id=0-1&p=f&t=N2ZU9tTZZi54ZkSm-0">Figma</a></p>

<h3>📑 Estrutura de uma Tarefa: </h3>
<ul>
    <li>Identificador</li>
    <li>Título</li>
    <li>Descrição</li>
    <li>Data Adição</li>
    <li>Data Conclusão</li>
    <li>Situação (pendente, concluída)</li>
</ul>

<h3>💡 Features: </h3>
<ul>
    <li><em>CRUD</em> das Tarefas.</li>
    <li>Ordená-las por <strong>ordem alfabética</strong> ou <strong>data adicionada</strong>.</li>
    <li>Tema Escuro Dinâmico*.</li>
</ul>

<h3>💻 Rodar o Projeto: </h3>
<p>OBS: É necessário ter instalado <strong>nodeJS</strong> na sua máquina</p>
<ul>
    <li>Clonar Projeto</li>
    <li>Abrir o terminal dentro da pasta do projeto e digitar: 
        <pre>npm init -y 
npm install express</pre>
    </li>
    <li>Para iniciar o servidor local basta digitar no console: 
        <pre>cd server 
node server.js</pre>
    </li>
</ul>

<h3>🗃️ Esquema de Pastas: </h3>
<pre>
    |
    |-public
    |   |-CSS              (Estilos do FrontEnd)
    |   |-favicon          (Ícone da página)
    |   |-JS               (JavaScript da Página Web)
    |   |-index.html       (Página Web do Projeto)
    |
    |-server
    |   |-server.js        (JavaScript ponte entre o BackEnd e o FrontEnd)
    |   |-tasks.json       (Arquivo no qual as tarefas estão armazenadas)
    |
</pre>
<p>Após instalar os módulos necessários é necessário que a pasta <em>node_modules</em> e os arquivos <em>package.json</em> e <em>package-lock.json</em> estejam presentes na raiz do projeto.</p>

<p>* Uso de <em>localStorage</em> para lembrar o último tema selecionado pelo usuário.</p>

# File: ./www.opendental.com/site/replicationdaisychainnewserverrandomprimary.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Daisy Chain Replication: Add Server (random primary keys)</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('replicationdaisychainnewserverrandomprimary','replication','advancedtopics','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Daisy Chain Replication: Add Server (random primary keys)</p></div>
		<div class="GeneralPageContent">
<p>The setup steps below are for adding a new server to daisy chain <a href="replication.html">Replication</a> when using random primary keys.</p>
<p>Also see: <a href="replicationdaisychain.html">Daisy Chain Replication</a>.</p>
<h2>On the New Replication Server</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the new server (location) install the MySQL application if it is not already installed. <ol>
<li>Download the Trial version.</li>
<li>Right-click on the downloaded file and Run as administrator.</li>
<li>Click Update MySQL to check the appropriate boxes.</li>
<li>Make any changes if needed to data paths.</li>
<li>Click Install. The installer will begin to install the MySQL Server.</li>
<li>Follow the directions carefully. We recommend using the default selections.</li>
<li>When you reach the MySQL Server Setup window, uncheck the <i>Launch the MySQL Instance Configuration Wizard</i> box then click Finish.</li>
</ol>
</li>
<li>Enable Replication on the new server by setting up the <span class="codeblock">my.ini</span> file and saving it (<b>C:\Program Files (x86)\MySQL\MySQL Server 5.5</b>). <p>Add the following lines to the <span class="codeblock">[mysqld]</span> section of the <span class="codeblock">my.ini</span> file:</p>
<p class="codeblock">log-bin=mysql-bin</p><p class="codeblock">server-id=3</p><p class="codeblock">log-slave-updates</p><p class="codeblock">replicate-do-db=opendental</p><p class="codeblock">relay-log=server-relay-bin</p><p class="codeblock">skip-name-resolve</p><ul>
<li>Change the <span class="codeblock">server-id</span> as needed. The server ID must be unique for each replication server.</li>
<li>Change the <span class="codeblock">replicate-do-db</span> to the name of the database to replicate.</li>
<li>Change the <span class="codeblock">relay-log</span> value to include the name of the server you are on. ex) <span class="codeblock">relay-log=ComputerName-relay-bin</span>.</li>
</ul>
</li>
<li>Restart the MySQL service. On some operating systems this will require you go into the system services in Control Panel, Administrative Tools, Services and start the MySQL service manually.</li>
</ol>
<h2>Adding the New Server to the Daisy Chain</h2>
<p>Make sure to complete each numbered step before continuing on to the next step or replication will fail. For the steps that say <i>on all replication servers...</i> you must perform the step on all replication servers (Primary and Replicas) before continuing on to the next step.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Pick a database from one of the replication servers to act as the Primary. We will refer to the server where this database is located as the <i>Primary</i> and all other replication servers as <i>Replica</i> in the text below.</li>
<li>On the Primary server where the database is located, log in to Open Dental. In the main menu, click Setup, Advanced Setup, Replication. Click Add to add a server. When complete, this database is ready to be replicated to other servers. <ul>
<li>If using Random Primary Keys, enter its primary keys as well. Follow steps 3 and 4 on <a href="replicationprimarykeys.html">Random Primary Keys</a>.</li>
</ul>
</li>
<li>Install the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html">Open Dental Replication Service</a> on each Replica.</li>
<li>On all replication servers (except the new server): <ol>
<li>Go the command line and navigate to the appropriate bin folder of the MySQL service. Typically <b>C:\Program Files\MySQL\MySQL Server 5.5\bin</b> or <b>C:\Program Files\MariaDB 10.5\bin</b><br> Type the following: <span class="codeblock">mysql -u root opendental</span> where <span class="codeblock">opendental</span> is the name of the database. If you have a MySQL user password, add <span class="codeblock">-p</span> to the command. </li>
<li>Run the following SQL statement: <span class="codeblock">STOP SLAVE;</span> (this stops the replication thread within MySQL).</li>
<li>Stop the MySQL service.</li>
<li>Backup and remove all files in the mysql data directory which do not reside in a subfolder, except for any files beginning with <span class="codeblock">ib</span> (e.g. <span class="codeblock">iblog_file0</span>, <span class="codeblock">ib_logfile1</span>, <span class="codeblock">ibdata1</span>).</li>
</ol>
</li>
<li>On all Replica servers (not the Primary or new server): Backup and remove the current replicated database (typically named <i>opendental</i>) from the data directory. You must fully complete the above steps on all replication servers before proceeding or replication will fail.</li>
<li>Copy the database folder on the Primary to the data directory on all Replicas and the new server.</li>
<li>On all replication servers (Primary, Replicas, and new server): Repeat steps 6 - 10 from Daisy Chain Replication Setup. At this point the new server becomes a Replica.</li>
<li>Install the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html">Open Dental Replication Service</a> on the new server(s). The service will notify all users and IT staff if replication crashes via Alerts. </li>
</ol>
		</div>
	</div>
</body>
</html>```

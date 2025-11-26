# File: ./www.opendental.com/manual232/replicationdaisychainnewserver.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Daisy Chain Replication: Add Server</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('replicationdaisychainnewserver','replication','advancedtopics','technical','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/manual243/replicationdaisychainnewserver.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/replicationdaisychainnewserver.html" >v24.2</option><option value="https://www.opendental.com/manual241/replicationdaisychainnewserver.html" >v24.1</option><option value="https://www.opendental.com/manual233/replicationdaisychainnewserver.html" >v23.3</option><option value="https://www.opendental.com/manual232/replicationdaisychainnewserver.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/replicationdaisychainnewserver.html" >v23.1</option><option value="https://www.opendental.com/manual224/replicationdaisychainnewserver.html" >v22.4</option><option value="https://www.opendental.com/manual223/replicationdaisychainnewserver.html" >v22.3</option><option value="https://www.opendental.com/manual222/replicationdaisychainnewserver.html" >v22.2</option><option value="https://www.opendental.com/manual221/replicationdaisychainnewserver.html" >v22.1</option><option value="https://www.opendental.com/manual214/replicationdaisychainnewserver.html" >v21.4</option><option value="https://www.opendental.com/manual213/replicationdaisychainnewserver.html" >v21.3</option><option value="https://www.opendental.com/manual212/replicationdaisychainnewserver.html" >v21.2</option><option value="https://www.opendental.com/manual211/replicationdaisychainnewserver.html" >v21.1</option><option value="https://www.opendental.com/manual205/replicationdaisychainnewserver.html" >v20.5</option><option value="https://www.opendental.com/manual204/replicationdaisychainnewserver.html" >v20.4</option><option value="https://www.opendental.com/manual203/replicationdaisychainnewserver.html" >v20.3</option><option value="https://www.opendental.com/manual202/replicationdaisychainnewserver.html" >v20.2</option><option value="https://www.opendental.com/manual201/replicationdaisychainnewserver.html" >v20.1</option><option value="https://www.opendental.com/manual194/replicationdaisychainnewserver.html" >v19.4</option><option value="https://www.opendental.com/manual193/replicationdaisychainnewserver.html" >v19.3</option><option value="https://www.opendental.com/manual192/replicationdaisychainnewserver.html" >v19.2</option><option value="https://www.opendental.com/manual191/replicationdaisychainnewserver.html" >v19.1</option><option value="https://www.opendental.com/manual184/replicationdaisychainnewserver.html" >v18.4</option><option value="https://www.opendental.com/manual183/replicationdaisychainnewserver.html" >v18.3</option><option value="https://www.opendental.com/manual182/replicationdaisychainnewserver.html" >v18.2</option><option value="https://www.opendental.com/manual181/replicationdaisychainnewserver.html" >v18.1</option><option value="https://www.opendental.com/manual174/replicationdaisychainnewserver.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Daisy Chain Replication: Add Server</p></div>
<div class="GeneralPageContent">
<p>The steps below explain how to add a new server when using daisy chain <a href="replication.html">Replication</a>. </p>
<p>Also see: <a href="replicationdaisychain.html">Daisy Chain Replication</a>.</p>
<p><div class="Note">Note: <ul>
<li>The server should be added after business hours because you will need to stop the MySQL service and no one can be using a database.</li>
<li>Every time you add or remove a server, you must also change the <span class="codeblock">auto_increment_increment</span> variable in the <span class="codeblock">my.ini</span> file on all servers to reflect the new total number of servers.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Add the new server to <a href="replicationservers.html">Replication Setup</a>. This step can alternatively be completed at the end of setup.</li>
<li>Shutdown all workstations. <a href="shutdown.html">Shutdown Workstations</a></li>
<li>On the new server (location) install the MySQL application if it is not already installed. <ul>
<li>Download the <a href="../trial.html">Trial</a> version.</li>
<li>Right-click on the downloaded file and Run as administrator.</li>
<li>Click Update MySQL to check the appropriate boxes.</li>
<li>Make any changes if needed to data paths.</li>
<li>Click Install. The installer will begin to install the MySQL Server.</li>
<li>Follow the directions carefully. We recommend using the default selections.</li>
<li>When you reach the MySQL Server Setup window, uncheck the <i>Launch the MySQL Instance Configuration Wizard</i> box then click Finish.</li>
</ul>
</li>
<li>On all existing servers: <ul>
<li>Run the following SQL statement: <span class="codeblock">STOP SLAVE;</span>(This stops the replication thread within MySQL.)</li>
<li>Stop the MySQL service.</li>
<li>Open the <span class="codeblock">my.ini</span> file and update the <span class="codeblock">auto_increment_increment</span> value to reflect the new total number of servers.</li>
<li>Backup and remove all files in the mysql data directory which do not reside in a subfolder, except for any files beginning with <span class="codeblock">ib</span> (e.g., <span class="codeblock">iblog_file0</span>, <span class="codeblock">ib_logfile1</span>, <span class="codeblock">ibdata1</span>).</li>
<li>On all Replica servers (not the server with the most up-to-date data (Primary)): Backup and remove the current replicated database (typically named <span class="codeblock">opendental</span>) from the data directory. You must fully complete the above steps on all replication servers before proceeding to next step or replication will fail.</li>
<li>Copy the database folder on the Primary server to the data directory on all Replicas.</li>
</ul>
</li>
<li>On the new replication servers, set autoincrement / offset variables in the my.ini file. Do this before going to the next step. See <a href="replicationautoincrement.html">Replication Auto Increment</a>. </li>
<li>Repeat steps 6 - 10 from <a href="replicationdaisychain.html">Daisy Chain Replication</a>.</li>
<li>On all replication servers: Verify that replication is running successfully by executing the following SQL statement and checking for the <span class="codeblock">Slave_IO_Running and Slave_SQL_Running</span> columns to both say <span class="codeblock">Yes: SHOW SLAVE STATUS;</span></li>
<li>On all replication servers: If you blocked the MySQL service network port in step 1, unblock it, making sure to unblock incoming and outgoing.</li>
<li>Install the <a href="opendentalreplicationservice.html">Open Dental Replication Service</a> on the new server(s). The service will notify all users and IT staff if replication crashes via Alerts. Open Dental is not responsible for the damage done when databases continue to be used after an error crashes replication.</li>
</ol>
</div>
</div>
</body>
</html>```

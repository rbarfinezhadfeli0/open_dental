# File: ./www.opendental.com/manual232/replicationtroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Replication Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('replicationtroubleshooting','replication','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/replicationtroubleshooting.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/replicationtroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/replicationtroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/replicationtroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/replicationtroubleshooting.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/replicationtroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/replicationtroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/replicationtroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/replicationtroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/replicationtroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/replicationtroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/replicationtroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/replicationtroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/replicationtroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/replicationtroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/replicationtroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/replicationtroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/replicationtroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/replicationtroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/replicationtroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/replicationtroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/replicationtroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/replicationtroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/replicationtroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/replicationtroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/replicationtroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/replicationtroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/replicationtroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Replication Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>If you experience issues while using <a href="replication.html">Replication</a>, the steps below may be helpful. If you are unable to determine the issue, contact us. We will need the error log message to troubleshoot. There is an additional fee for replication support. See <a href="https://opendental.com/site/fees.html#replication">Replication Support</a> for the current rate.</p>
<p>Offices that are down can connect directly to a working server that has the most up-to-date data so they can continue working, but with a slower than normal connection.</p>
<p class="MarginBottomZero">Initial Troubleshooting </p>
<ol class="MarginBottomGap">
<li>Go to the command line and change the directory to the installed version of MySQL or MariaDB's bin folder. Default paths are: <ul>
<li>C:\Program Files\MariaDB 10.5\bin</li>
<li>C:\Program Files (x86)\MySQL\MySQL Server 5.5\bin</li>
</ul>
</li>
<li>Type the following: <span class="codeblock">mysql -u root opendental </span>where opendental is the name of the database. If you have a MySQL user password, add -p to the command.</li>
<li>Run the <span class="codeblock">SHOW SLAVE STATUS\G;</span> in the mysql command interface. <br/><img src="images/Replication_errorlog.gif" width="641" height="548" class="ImageInParagraph"/></li>
<li>Look through the error log for details about what caused replication to fail.</li>
<li>Refer to the problems and possible solutions below, or contact support for assistance. If support becomes involved they will need a copy of the database and all log files.</li>
</ol>
<h2>Errors/Issues</h2>
<p>Below are common errors. While a possible solutions is provided, we recommend contacting support for assistance. Only users who have an expert understanding of replication and how the office is setup should attempt a solution.</p>
<p><b>Problem: SHOW SLAVE STATUS is showing an error of "Got fatal error 1236 from master when reading data from binary log: Client requested master to start replication from impossible position."</b></p>
<p>Point all locations to one database, then <a href="replicationreinitialize.html">Reinitialize Replication</a>. We recommend that all locations connect to the database on the server with the most up-to-date data.</p>
<p><b>Problem: Receive a message "This database is temporarily unavailable. Please connect instead to your alternate database at the other location".</b></p>
<p>This means replication has failed on the server. Follow your response plan or contact your replication administrator. We recommend that all locations connect to the database on the server with the most up-to-date data.</p>
<p>If running a <span class="codeblock">SHOW SLAVE STATUS</span> command on the replication server which is giving the error message reveals that <span class="codeblock">SLAVE_IO_RUNNING and SLAVE_SQL_RUNNING</span> both says <span class="codeblock">Yes</span>, then log in to Open Dental on another replication server and access the Replication Setup Window (<a href="replicationservers.html">Replication Setup</a>) to use the Clear button for the Replication Failure at <span class="codeblock">Server_id</span> (this field is not shown in the screen shot, because it only shows when a replication failure has occurred). When this issue occurs, it is because the replication problem has been resolved, but Open Dental is not aware that a fix has been implemented. Using the Clear button informs Open Dental that the issue has been resolved and allows users to access the server that was having issues.</p>
<p><b>Problem: A replication failure is suspected, or an alert about the OpenDentalReplicationService has been generated.</b></p>
<p>Ensure the OpenDentalReplicationService is running. Check the Logger file for additional information.</p>
<p><b>Error: Unable to connect to host.</b></p>
<ol>
<li>Check that your Server Description exactly matches the computer name of the server for that location.</li>
<li>If you did a <span class="codeblock">SHOW SLAVE STATUS</span> and there are no errors then check your server's Event Viewer. If the Event Viewer has a lost connection error, the likely scenario is that the Replica's read timeout aborted before the command was completed. Increase the read/write timeout. You may then be faced with a max packets error, in which case increase the allowed max packets as needed.</li>
</ol>
<p>If none of these work, there is a chance your <span class="codeblock">ibdata</span> file was corrupted prior to performing these steps.</p>
<p><b>Problem: CREATE TABLE mytable.</b></p>
<p>This is the usual culprit. At a minimum, it must always be prefaced by <span class="codeblock">DROP TABLE IF EXISTS mytable</span>. This applies equally to temp tables that you may create. But even then, it's still dangerous because someone at another node might reference the same table at around the same time.</p>
<p><b>Problem: Duplicate entry '0001-01-01 00:00:00' for key IndexAckTime.</b></p>
<p>This is due to a corrupted index file. Dropping and recreating the index may solve the problem.</p>
<p><b>Problem: Duplicate primary key</b></p>
<p>Contact support and provide a copy of the database and all log files.</p>
<p><b>Error: replication server has tried to connect a number of times to repl@'servername':3306.</b></p>
<p>Make sure you open the port of the server. This occurs when the Slave Status on one replication server says <span class="codeblock">SLAVE_IO_RUNNING Yes, SLAVE_SQL_RUNNING</span> Yes but the other replication server has a status of <span class="codeblock">SLAVE_IO_RUNNING Connecting, SLAVE_SQL_RUNNING Yes</span>.</p>
<p><b>Data won't replicate even though the <span class="codeblock">SLAVE_IO_RUNNING</span> and <span class="codeblock">SLAVE_SQL_RUNNING</span> both says <span class="codeblock">Yes</span>.</b></p>
<p>Ping the server name. If you can't ping by server name but can ping the IP address, stop the Replica (Slave), then repeat steps 7 - 10 in setup. For step 7 use the IP address as the MASTER_HOST instead of the server name.<p class="codeblock">CHANGE MASTER TO</p><p class="codeblock">MASTER_HOST = 'IPofMASTER',</p><p class="codeblock">MASTER_USER = 'repl',</p><p class="codeblock">MASTER_PASSWORD = 'ENTER PASSWORD HERE';</p></p>
<p><b>Problem: Slave_IO_Running and Slave_SQL_Running show as Yes for both, but database is not syncing.</b></p>
<p>Review the name of the database if using upper casing for database name. Re-initialize replication using lower case lettering for your .ini files and your Grant commands. Contact support for more information.</p>
</div>
</div>
</body>
</html>```

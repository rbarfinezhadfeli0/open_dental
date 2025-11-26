# File: ./www.opendental.com/site/replicationdaisychain.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Daisy Chain Replication</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('replicationdaisychain','replication','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Daisy Chain Replication</p></div>
		<div class="GeneralPageContent">
<p>Daisy chain <a href="replication.html">Replication</a> configuration is very complex and should only be attempted by users who are experienced with replication. Incorrect setup can result in corrupt data, computer crashes, or other serious consequences. For a one-way replication configuration, see <a href="replicationoneway.html">One-Way Replication</a>.</p>
<p><div class="Note">Note: <ul>
<li>The recommended steps below include setting up auto increment variables to avoid data collision. If you already use random primary keys instead, see <a href="replicationdaisychainnewserverrandomprimary.html">Daisy Chain Replication: Add Server (random primary keys)</a>.</li>
<li>It is recommended to use a folder synchronization software for the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7atozfolder.html">A to Z Folder</a> when using replication. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7backupsonline.html">Online Backups</a>.</li>
<li>If replication is currently setup and you are trying to re-create the replication setup, you must first stop the existing Replica service by running the <span class="codeblock">SLAVE STOP;</span> while the MySQL service is started.</li>
<li>Versions of MySQL or MariaDB must match on all servers.</li>
<li>For instructions when updating, see <a href="replicationupdateod.html">Replication: Update Open Dental Version</a>.</li>
<li>To add a new server to the chain, or remove a server, see <a href="replicationdaisychainnewserver.html">Daisy Chain Replication: Add Server</a>.</li>
</ul>
</div>
</p>
<h2>Instructions</h2>
<p>MySQL comes with its own replication capabilities. </p>
<ol>
<li><b>Add servers and install the <i>OpenDentalReplicationService</i> to each Replica</b>. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7replicationservers.html">Replication Setup</a>.<br> You must have the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html">Open Dental Replication Service</a> when running Daisy Chain Replication. The service will notify all users and IT staff if replication crashes via <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7alerts.html">Alerts</a>. We are not responsible for the damage done when databases continue to be used after an error crashes replication.</li>
<li><b>Stop the MySQL service on all replication servers (<span class="codeblock">net stop mysql</span>)</b>. On some operating systems, this will require you go into the system services in Control Panel, Administrative Tools, Services and stop the MySQL service manually. If the MySQL service is started on any replication server before step 5, then replication will fail.</li>
<li><b>On all replication servers, wipe out all loose files in the mysql data directory which do not reside in a subfolder.</b> If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, then all of the "ib" files can be moved to a loose files folder. If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, the "ib" files should not be removed. </li>
<li><b>Copy the information that corresponds with your database management system. </b><ul>
<li>If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, make an identical database copy on all replication servers. </li>
<li>If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, make an identical data directory copy on all replication servers. </li>
</ul>
The replicated database or data directory must be exactly the same on all replication servers before replication begins the first time. </li>
<li><b>On all replications servers, set auto increment / offset variables in the <span class="codeblock">my.ini</span> file</b>. Do this before going to the next step. See <a href="replicationautoincrement.html">Replication Auto Increment</a>.</li>
<li><b>Make sure all the servers are synced to the same date and time</b>. If locations are in different time zones, data will be synced but may not show at all locations.</li>
<li><b>Start the MySQL service on all replication servers (<span class="codeblock">net start mysql</span>)</b>. On some operating systems, such as Windows Vista, this will require you go into the system services in Control Panel, Administrative Tools, Services and start the MySQL service manually.</li>
<li><b>Set each replication server's Primary (Master)</b>. Go to the command line and navigate to the appropriate bin folder of the MySQL service (typically <b>C:\Program Files\MySQL\MySQL Server 5.5\bin</b> or <b>C:\Program Files\MariaDB 10.5\bin</b>) and type the following: <span class="codeblock">mysql -u root opendental</span> where <span class="codeblock">opendental</span> is the name of the database. If you have a MySQL user password, add <span class="codeblock">-p</span><span class="codeblock"></span> to the command. <p><br> For users on MySQL 5.5 / 5.6 / MariaDB 10.5 or lower:</p>
<p><p class="codeblock">CHANGE MASTER TO</p><p class="codeblock">MASTER_HOST = 'MASTER_OF_THIS_SERVER',</p><p class="codeblock">MASTER_USER = 'repl',</p><p class="codeblock">MASTER_PASSWORD = 'ENTER PASSWORD HERE';</p></p>
<p>For users on MariaDB 10.11:</p>
<p><p class="codeblock">CHANGE MASTER TO</p><p class="codeblock">MASTER_HOST = 'MASTER_OF_THIS_SERVER',</p><p class="codeblock">MASTER_USER = 'repl',</p><p class="codeblock">MASTER_PASSWORD = 'ENTER PASSWORD HERE',</p><p class="codeblock">MASTER_USE_GTID = no;</p></p>
<ul>
<li>Set <span class="codeblock">MASTER_HOST</span> to either the IP address or computer name of the replication Primary (Master) of this server. We recommend IP address to reduce possible DNS issues.</li>
<li>Set <span class="codeblock">MASTER_PASSWORD</span> to a password of your choosing.</li>
</ul>
</li>
<li><b>For each replication server, run the following queries to grant permission for any replication Replica (Slave) to read data</b>. <p><p class="codeblock">GRANT CREATE TEMPORARY TABLES ON opendental.* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';</p><p class="codeblock">GRANT SUPER ON *.* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';</p><p class="codeblock">GRANT REPLICATION SLAVE ON *.* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';</p></p>
<ul>
<li>The <span class="codeblock">opendental.*</span> should be the name of your mysql database and must be lowercase. The <span class="codeblock">.*</span> means everything within the specified database.</li>
</ul>
</li>
<li><b>Run <span class="codeblock">START SLAVE;</span> in the mysql command interface for each replication server in the chain</b>.</li>
<li><b>Run <span class="codeblock">SHOW SLAVE STATUS\G</span> in the mysql command interface for each replication server in the chain</b>. Make sure that the Slave IO Running and Slave SQL Running columns both say, Yes. <br><img src="images/Replication_slavestatus.png" width="698" height="902" class="ImageInParagraph"/></li>
<li><b>How to test replication between two replication servers</b>. Only test two replication servers at a time. We recommend testing the first replication server in the chain with the last replication server in the chain. If the test fails, make several smaller tests between consecutive replication servers. <ul>
<li>Ensure replication is working across each of the servers by performing the following: <ol>
<li>Create an appointment on Server 1 and verify the appointment shows up on ALL other servers.</li>
<li>Make a change to the appointment on Server 2 and verify that the change reflects on ALL other servers.</li>
<li>Repeat Step 2 until you have made a change from each server and verified the changes reflected on all other servers.</li>
</ol>
</li>
<li>It is important to make a change from EVERY server and make sure those changes are reflected on each server.</li>
</ul>
</li>
</ol>
<p><table class="simpletable">
<tr>
<th style="width:33%"></th>
<th style="width:33%">Server_1 IP 192.168.0.1database=databasename</th>
<th style="width:33%">Server_2 IP 192.168.0.2database=databasename</th>
</tr>
<tr>
<td><p>Check the log files to make sure the files were created and time stamps are recent. <b>C:\mysql\data</b></p>
</td>
<td><p><b>C:\mysql\data&gt;dir</b></p>
<p>02/22/2008 01:25 PM 57 relay-log.info</p>
<p>02/22/2008 09:12 PM 235 server-relay-bin.000043</p>
<p>02/22/2008 09:12 PM 26 server-relay-bin.index</p>
<p>02/22/2008 01:22 PM 17,642 server.err</p>
<p>02/22/2008 01:22 PM 5 server.pid</p>
</td>
<td><p><b>C:\mysql\data&gt;dir</b>\</p>
<p>02/22/2008 01:25 PM 57 relay-log.info</p>
<p>02/22/2008 09:12 PM 235 server-relay-bin.000043</p>
<p>02/22/2008 09:12 PM 26 server-relay-bin.index</p>
<p>02/22/2008 01:22 PM 17,642 server.err</p>
<p>02/22/2008 01:22 PM 5 server.pid</p>
</td>
</tr>
</table>
</p>
		</div>
	</div>
</body>
</html>```

# File: ./www.opendental.com/site/mysqlmanage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - MySQL Data Directory Management</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('mysqlmanage','databasemanagementsystems','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>MySQL Data Directory Management</p></div>
		<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p class="MarginBottomZero">The <b>mysql/data</b> folder should be cleaned up by an IT Professional in the following scenarios:  </p>
<ul class="MarginBottomGap">
<li>To resolve issues with hard drive space. </li>
<li>As a prerequisite when migrating from MySQL to MariaDB. </li>
</ul>
<h2>Considerations</h2>
<p class="MarginBottomZero">Consider the following before beginning the cleanup process. These considerations are for MySQL versions 5.5 and 5.6, or MariaDB 10.5. </p>
<ul class="MarginBottomGap">
<li>Do not delete anything from this folder. Instead, move files or folders to a different location (typically the <b>mysql\backups </b>folder).</li>
<li>Check for InnoDB tables before moving a database (.ibd files present or only table .frm files with no matching .myd or .myi).</li>
<li>Do not delete or move anything out of the data directory that starts with 'ib', regardless of database engine.</li>
<li>Do not move or delete folders in the data folder called 'mysql','sys','performance_schema'.</li>
<li>Do not move or delete binary logs, relay logs, or anything related to replication.</li>
</ul>
<h2>Cleanup Suggestions</h2>
<p>Any database with "backup" in the name can be moved out of the data folder and into a different folder. If cleaning up the data folder for a MariaDB upgrade, files can be moved to the <b>mysql/backups</b> folder. The backups folder should also be routinely cleaned up.</p>
<p><div class="Note">Note: Sort the data folder by Date Modified to which databases have been used recently.</div>
</p>
<h2>Cleanup Process</h2>
<p>Before beginning the cleanup process, verify the database(s) are in MyISAM format and not in InnoDB before moving them.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Stop MySQL service.</li>
<li>Move databases from the data folder to a different directory. <ul>
<li>If .PID file exists, the MySQL service may still be running. Verify it has stopped then disable the service until cleanup is complete.</li>
</ul>
</li>
<li>Clean up *.err files. <ul>
<li>Move the entire file into the new directory.</li>
<li>There may be multiple files. The filename that contains the server name is the most current file.</li>
</ul>
</li>
<li>If replication/binary log files are present, continue to Replication Cleanup below.</li>
<li>Restart the MySQL service.</li>
</ol>
<h2>Replication Cleanup Process</h2>
<p>Begin the Cleanup Process above, then follow the steps before for Replication Cleanup.</p>
<p>Start MySQL service, then in the MySQL Command Line, run the following command: <span class="codeblock"> PURGE BINARY LOGS BEFORE NOW() - INTERVAL 10 DAY;</span></p>
<p><div class="Note">Note: If this does not work, stop the MySQL service and ensure Replication has caught up on all servers, then move the files into a backup folder. Do not delete the most recent binlog file. Instead, copy the files from this directory into <b>.\mysql\backups\YYYYMMDD</b> (use the current date). </div>
</p>
		</div>
	</div>
</body>
</html>```

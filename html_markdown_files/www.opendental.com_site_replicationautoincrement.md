# File: ./www.opendental.com/site/replicationautoincrement.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Replication Auto Increment</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('replicationautoincrement','replication','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Replication Auto Increment</p></div>
		<div class="GeneralPageContent">
<p class="MarginBottomZero">When using <a href="replication.html">Replication</a> it is important to avoid data collision. MySQL provides variables to avoid conflicts: <span class="codeblock">auto_increment_increment</span> and <span class="codeblock">auto_increment_offset</span>. By choosing non-conflicting values for these variables, servers will not have conflicts when inserting new rows into the same table. </p>
<ul class="MarginBottomGap">
<li><span class="codeblock">auto_increment_increment</span>: Controls the increment between successive <span class="codeblock">AUTO_INCREMENT</span> values.</li>
<li><span class="codeblock">auto_increment_offset</span>: Determines the starting point for <span class="codeblock">AUTO_INCREMENT</span> column values.</li>
</ul>
<p class="MarginBottomZero">For more details:  </p>
<ul class="MarginBottomGap">
<li>MySQL Users: <a href="https://dev.mysql.com/doc/refman/5.6/en/replication-options-source.html">https://dev.mysql.com/doc/refman/5.6/en/replication-options-source.html</a></li>
<li>MariaDB Users: <a href="https://mariadb.com/kb/en/replication-and-binary-log-system-variables">https://mariadb.com/kb/en/replication-and-binary-log-system-variables</a></li>
</ul>
<h2>Update the my.ini File</h2>
<p>To implement this strategy, add the following lines to the <span class="codeblock">[mysqld]</span> section of the <a href="myini.html">my.ini</a> file on each replication server during <a href="replicationoneway.html">One-Way Replication</a> or <a href="replicationdaisychain.html">Daisy Chain Replication</a> (step 5). </p>
<p><span class="codeblock">log-bin=mysql-bin</span><br><span class="codeblock">server-id=X</span><br><span class="codeblock">log-slave-updates</span><br><span class="codeblock">replicate-do-db=opendental</span><br><span class="codeblock">relay-log=server-relay-bin</span><br><span class="codeblock">skip-name-resolve</span><br><span class="codeblock">sync-binlog=1</span><br><span class="codeblock">auto_increment_increment=Y</span><br><span class="codeblock">auto_increment_offset=Z</span><br><span class="codeblock">#If using InnoDB, remove the hashtag for the line below </span><br><span class="codeblock">#innodb-flush-log-at-trx-commit=1</span><br><span class="codeblock">#If using MariaDB, remove the hashtag for the line below </span><br><span class="codeblock">#expire_logs_days=30</span></p>
<br><p class="MarginBottomZero">Change the following values: </p>
<ul class="MarginBottomGap">
<li>Change <span class="codeblock">server-id</span> as needed. It must be unique for each replication server.</li>
<li>Change <span class="codeblock">replicate-do-db</span> to the name of the database to replicate.</li>
<li>Change <span class="codeblock">relay-log</span> to include the name of the server (e.g., <span class="codeblock">relay-log=LocalComputerIPAddressorName-relay-bin</span>)</li>
<li>Change <span class="codeblock">auto_increment_increment</span> to equal the total number of servers (e.g., 3).</li>
<li>Change <span class="codeblock">auto_increment_offset</span> as needed, using a unique value on each server that doesn't exceed the <span class="codeblock">auto_increment_increment</span> value (e.g., 1, 2, or 3).</li>
<li>Change <span class="codeblock">innodb-flush-log-at-trx-commit=1</span> if all tables are all InnoDB by removing the # and the comment after the value.</li>
<li>Change<span class="codeblock"> expire_logs_days </span>to increase or decrease the number of days after which the binary log can be automatically removed. Removals take place when the server starts up, when the binary log is flushed, when the next binary log is created after the previous one reaches the maximum size, or when running PURGE BINARY LOGS.</li>
</ul>
<p class="MarginBottomZero">auto-increment example if you have 3 servers: </p>
<ul class="MarginBottomGap">
<li>server 1: <span class="codeblock">auto_increment_increment = 3, auto_increment_offset = 1</span></li>
<li>server 2: <span class="codeblock">auto_increment_increment = 3, auto_increment_offset = 2</span></li>
<li>server 3: <span class="codeblock">auto_increment_increment = 3, auto_increment_offset = 3</span></li>
</ul>
<p>Whenever you add or remove a server for daisy chain replication, you must also change the <span class="codeblock">auto_increment_increment</span> value on all servers. See <a href="replicationdaisychainnewserver.html">Daisy Chain Replication: Add Server</a>.</p>
		</div>
	</div>
</body>
</html>```

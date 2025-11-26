# File: ./www.opendental.com/manual/mysqlinnodb.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - InnoDB</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mysqlinnodb','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mysqlinnodb.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mysqlinnodb.html" >v24.2</option><option value="https://www.opendental.com/manual241/mysqlinnodb.html" >v24.1</option><option value="https://www.opendental.com/manual233/mysqlinnodb.html" >v23.3</option><option value="https://www.opendental.com/manual232/mysqlinnodb.html" >v23.2</option><option value="https://www.opendental.com/manual231/mysqlinnodb.html" >v23.1</option><option value="https://www.opendental.com/manual224/mysqlinnodb.html" >v22.4</option><option value="https://www.opendental.com/manual223/mysqlinnodb.html" >v22.3</option><option value="https://www.opendental.com/manual222/mysqlinnodb.html" >v22.2</option><option value="https://www.opendental.com/manual221/mysqlinnodb.html" >v22.1</option><option value="https://www.opendental.com/manual214/mysqlinnodb.html" >v21.4</option><option value="https://www.opendental.com/manual213/mysqlinnodb.html" >v21.3</option><option value="https://www.opendental.com/manual212/mysqlinnodb.html" >v21.2</option><option value="https://www.opendental.com/manual211/mysqlinnodb.html" >v21.1</option><option value="https://www.opendental.com/manual205/mysqlinnodb.html" >v20.5</option><option value="https://www.opendental.com/manual204/mysqlinnodb.html" >v20.4</option><option value="https://www.opendental.com/manual203/mysqlinnodb.html" >v20.3</option><option value="https://www.opendental.com/manual202/mysqlinnodb.html" >v20.2</option><option value="https://www.opendental.com/manual201/mysqlinnodb.html" >v20.1</option><option value="https://www.opendental.com/manual194/mysqlinnodb.html" >v19.4</option><option value="https://www.opendental.com/manual193/mysqlinnodb.html" >v19.3</option><option value="https://www.opendental.com/manual192/mysqlinnodb.html" >v19.2</option><option value="https://www.opendental.com/manual191/mysqlinnodb.html" >v19.1</option><option value="https://www.opendental.com/manual184/mysqlinnodb.html" >v18.4</option><option value="https://www.opendental.com/manual183/mysqlinnodb.html" >v18.3</option><option value="https://www.opendental.com/manual182/mysqlinnodb.html" >v18.2</option><option value="https://www.opendental.com/manual181/mysqlinnodb.html" >v18.1</option><option value="https://www.opendental.com/manual174/mysqlinnodb.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>InnoDB</p></div>
<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p>InnoDB is a storage engine that can be used as a last-resort alternative to my MyISAM for databases experiencing slowness.</p>
<p><a href="mysql.html">MySQL</a> and <a href="mariadb.html">MariaDB</a> can store data using a handful of different storage engines. Almost all installations of Open Dental use the MyISAM storage engine. For large offices, MyISAM tables lock up for short periods of time when complex queries are being run (e.g., running the Recall List).</p>
<h2>Before Converting to InnoDB</h2>
<p class="MarginBottomZero">If experiencing slowness: </p>
<ol class="MarginBottomGap">
<li>Update to the most recent version of Open Dental.</li>
<li>Follow the steps on <a href="troubleshootingslowness.html">Troubleshooting Slowness</a>.</li>
<li>Bring the slowness issue to the attention of Open Dental Support in case there is a bug that needs to be fixed.</li>
<li>As a last resort, consider switching the storage engine from MyISAM to InnoDB. The MyISAM storage engine locks at the table level and the InnoDB storage engine locks at the row level, so InnoDB does not run into locking slowness as often as MyISAM does.</li>
</ol>
<p>Before switching to InnoDB, the practice must have reliable IT. There are steps in the process that require the assistance of an IT professional that Open Dental Support does not assist with.</p>
<p>MySQL version 5.5 is the minimum version required to convert the storage engine to InnoDB, however we strongly recommend the database is upgraded to MariaDB 10.5 before converting.</p>
<p>InnoDB users are responsible for their own backups.</p>
<h2>Convert to InnoDB Storage Engine</h2>
<p><b>Replication Warning</b>: It is suggested that the practice call and speak with a Replication Coordinator at Open Dental before this process is started.</p>
<p>These steps are for advanced technical users and need to be performed on all active databases within the database server to be converted to InnoDB format.</p>
<p>Review the backup/restore strategy before converting the database to ensure that users know how to validate restored backups. It probably involves a dump to text file instead of copying files. Users cannot use Open Dental's built in backup/restore tool.</p>
<ol>
<li>Make certain that all users stay out of Open Dental during the conversion process. This could take a couple of hours depending on the size of the database.</li>
<li>Stop the MySQL Service.</li>
<li>Make a backup copy of the data folder for safety. Typically found in <b>C:\mysql\data</b>.</li>
<li>Change the <span class="codeblock">my.ini</span> file to update existing items and include InnoDB specific items (see below):<br/><p class="codeblock">default-storage-engine=InnoDB<br/> key_buffer_size=512MB<br/> innodb_buffer_pool_instances=1<br/> innodb_buffer_pool_size = 8192M<br/> innodb_log_file_size = 2048M<br/> innodb_file_per_table = 1<br/> innodb_fast_shutdown=0<br/> #If using a MySQL Version 5.6 or higher, or using MariaDB, remove the hash sign for the line below<br/> #eq_range_index_dive_limit=0<br/></p><ul>
<li>If using, MySQL Version 5.6 or higher, or using MariaDB, remove the <i>#</i> symbol from the final line as indicated above.</li>
<li>Buffer pool instances should be 1 in MariaDB. For MySQL 5.5 or 5.6 it should be equal to the logical cpu core quantity.</li>
<li>Buffer pool size can generally be half of the available ram when MySQL is not running. More information on how to determine this value see: <a href="https://mariadb.com/kb/en/innodb-buffer-pool/">https://mariadb.com/kb/en/innodb-buffer-pool/</a></li>
<li>The log file size can generally be 4096M in MariaDB. For MySQL 5.5 or 5.6 it should be 2048M. For more information on the log file, see <a href="https://mariadb.com/kb/en/innodb-redo-log/">https://mariadb.com/kb/en/innodb-redo-log/</a></li>
</ul>
</li>
<li>Start the MySQL service.</li>
<li>Launch the database through the Open Dental application.</li>
<li>Go to Tools, Database Maintenance. Select the Tools tab and click InnoDB. <br/><img src="images/InnoDBdatabasetools.png" width="837" height="722" class="ImageInParagraph"/></li>
<li>Use the interface to convert all Open Dental tables from MyISAM to InnoDB. This process takes a long time since it is rewriting all of the database tables. Ensure that it ends successfully. <br/><img src="images/innoDBdatabaseconvert.png" width="726" height="353" class="ImageInParagraph"/></li>
</ol>
<p>All of the tables in the database should have changed from three files per table (FRM, MYD, MYI) to two files per table (FRM, IBD). </p>
<p>If there are multiple databases on the server users need to follow steps 6 and 7 for each database.</p>
<h2>InnoDB Backup and Restore Methods</h2>
<p>This database type does not function with most online backups. It is important to have a backup plan in place prior to making changes. A combination of backup methods is recommended, with at least one method being automated and incremental.</p>
<p>Backup methods vary between <i>Hot</i> and <i>Cold</i>. Hot Backups allow users to continue working while Cold Backups do not. Restores are considered <i>Cold</i> as users should not be using the Open Dental database while a restore is in progress. </p>
<p><b>Open Dental Backup Tool (Hot Method)</b>: Use the built-in <a href="backuptool.html">Backup Tool</a> to routinely make backups of the entire database. The tool can be used for backups only, not restores.</p>
<p><b>Data Directory Backup (Cold Method)</b>: This solution involves routinely making a copy of the entire data directory. This can require a fair amount of disk space.</p>
 To back up using this method: <p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Stop the MySQL service. Ensure that it stops without errors.</li>
<li>Copy the MySQL Data directory (e.g., <b>C:\mysql\data</b>).</li>
<li>Start the MySQL Service.</li>
</ol>
<p><b>Mariabackup (Hot Method)</b>: MariaDB has a built-in utility to create hot, full and incremental backups. IT can research this on <a href="https://mariadb.com/kb/en/mariabackup-overview/">mariadb.com</a> and utilize Windows task scheduler to create automated backups. An incremental backup can still create lag and we do recommend doing a full, nightly backup with whatever other method is chosen. </p>
<p><b>Binary Logs (Hot Method)</b>: This method requires specialized IT. The practice can use this method in conjunction with Mariabackup or a dump backup method to get up-to-the-minute recovery. This method requires shadow-copying the binary logs so they don't get set read-only and requires more in-depth knowledge of applying them to the backup for the additional data recovery. </p>
<p><b>SQL Dump Backup (Hot Method)</b>: This method creates a smaller total file size, in a .sql file format, which can be further compressed as a .zip file. While this method can be done while Open Dental is in use, it may cause slowness while running.</p>
<p class="MarginBottomZero">To back up using this method </p>
<ol>
<li>Run Windows Command Prompt as Administrator, then navigate to the MySQL <i>bin</i> folder (e.g. <b>C:\Program Files\MySQL\MySQL Server 5.5\bin</b>).</li>
<li>Run the following command, replacing ### with the database name (e.g. opendental). Adjust the target directory as necessary. Enter the MySQL root password when prompted, if required.<br/><span class="codeblock">mysqldump -u root -p --max-allowed-packet=1024MB --default-character-set=utf8 --verbose ### &gt; C:\mysql\###.sql</span></li>
<li>The dump is located in the MySQL Folder directory (by default) when finished. </li>
</ol>
<p class="MarginBottomGap"><div class="Note">Note: If the dump process fails, it may be due to the <i>max-allowed-packet size</i> being too small. Increase the value for that variable and try again.</div>
</p>
<p><b>Network Path Supplemental Backups (Hot Method)</b>: The <a href="supplementalbackups.html">Supplemental Backups</a> utility in Open Dental can be used to create an automated, encrypted, zipped, database dump in a network or local location nightly. Network Path Supplemental Backups are a complete copy of a database but are not recommended to be relied upon as the primary backup method. The OpenDentalEConnector service performs this backup once every 7 days.</p>
<p><b>Data Directory Restore (Cold)</b>: To restore a database using this method, follow the steps below.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the computer being used to restore the database, ensure MySQL is installed and configured for InnoDB.</li>
<li>Stop the MySQL service.</li>
<li>Archive any existing MySQL Data directory.</li>
<li>Place the backup Data directory in the MySQL directory (e.g. <b>C:\mysql</b>).</li>
<li>Start the MySQL service.</li>
</ol>
<p><b>SQL Dump Restore (Cold)</b>: To restore a database using this method, follow the steps below.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the restore computer, ensure MySQL is installed and configured for InnoDB.</li>
<li>Run Windows Command Prompt, then navigate to the MySQL <i>bin</i> folder.</li>
<li>Run the following command. Enter the MySQL root password when prompted, if required.<br/><span class="codeblock">mysql -u root -p</span></li>
<li>Run the following command, replacing ### with a database name that currently does not exist in the MySQL data directory (e.g. opendental_[datetoday]).<br/><span class="codeblock">CREATE DATABASE ### CHARACTER SET=UTF8 COLLATE=utf8_general_ci;</span></li>
<li>Run the following command, replacing ### with the database name that was just created. <br/><span class="codeblock">use ###</span></li>
<li>Run the following command to verify an empty database is being used.<br/><span class="codeblock">SHOW TABLES\G</span><br/> If this command returns anything other than <i>Empty set</i>, return to step 5 and verify the database name used is unique.</li>
<li>Run the following command replacing ### with the name of the dump file (e.g. opendental) to import the dump into the newly created empty database.<br/><span class="codeblock">SOURCE C:/mysql/###.sql;</span></li>
</ol>
<p><b>Alternative InnoDB Backup and Restore Methods Using Third-Party Software (Varies)</b>: A backup and restore can also be achieved using 3rd-party software such as MySQL Workbench or SQLYog. Methods may be Hot or Cold and can vary by software. Please reference their documentation for more information. Also see: <a href="backupsonline.html">Online Backups</a>.</p>
</div>
</div>
</body>
</html>```

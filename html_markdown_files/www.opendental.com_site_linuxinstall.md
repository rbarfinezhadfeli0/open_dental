# File: ./www.opendental.com/site/linuxinstall.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Linux Server</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('linuxinstall','clinuxmac','programmingresources','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Linux Server</p></div>
		<div class="GeneralPageContent">
<p>See <a href="clinuxmac.html">Linux and Mac</a>.</p>
<p>Linux servers are the responsibility of the practice or IT to install. Open Dental Support cannot assist with Linux server installations or Linux server troubleshooting. </p>
<h2>MariaDB</h2>
<p></p>
<p class="MarginBottomZero"><div class="Note">Note: Also see <a href="https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/">MariaDB Package Repository Setup and Usage</a> on the Maria DB website for more information.</div>
</p>
<ol class="MarginBottomGap">
<li>Install the <a href="mariadb.html">MariaDB</a> package that best matches system from <a href="https://mariadb.org/download/">https://mariadb.org/download/</a>.<br><ul>
<li>It is recommended to use the MariaDB repository and their accompanying script for version targeting to get the correct version. Using the public repository for distribution may get a version of MariaDB that has not been tested for Open Dental.</li>
<li>For a new install, following the steps found on MariaDB Package Repository Setup and Usage and run the following commands (using sudo apt install curl or sudo yum install curl):<br><ul>
<li><p class="codeblock">wget https://downloads.mariadb.com/MariaDB/mariadb_repo_setup</p></li>
<li><p class="codeblock">sudo curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11.10"</p></li>
<li><p class="codeblock">chmod +x mariadb_repo_setup</p></li>
</ul>
</li>
<li>If upgrading an existing installation, run: <p class="codeblock">./mariadb_repo_setup --mariadb-server-version="mariadb-10.11.10" </p></li>
</ul>
</li>
<li>Run the following commands:  <ol>
<li><p class="codeblock">sudo apt install mariadb-server mariadb-backup</p> or <p class="codeblock">sudo yum install mariadb-server mariadb-backup</p></li>
<li><p class="codeblock">sudo systemctl status mysql</p><div class="Note">Note: The status should be active. If the status is not active, use the command: <p class="codeblock">sudo systemctl start mysq</p></div>
</li>
<li><p class="codeblock">sudo mysql_upgrade -u root -p -f</p></li>
</ol>
</li>
<br><li>Set up grant tables on Linux by running the following commands. It is recommended that a password is set for the root user which can be entered between the single quotes that follow 'IDENTIFIED BY'. This is documented at: <a href="https://mariadb.com/kb/en/grant/">https://mariadb.com/kb/en/grant/</a>.<p class="codeblock">GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '';<br> GRANT ALL ON *.* TO 'root'@'localhost' IDENTIFIED BY '';</p><br></li>
<li>Edit the MariaDB configuration file named <b>server.cnf</b> to disable the use of InnoDB tables by default. The <b>server.cnf</b> file is usually located at the path <b>/etc/my.cnf.d/server.cnf</b>. Add the following text under the [mysqld] section: <p class="codeblock">default-storage-engine=MyISAM<br> max_allowed_packet=40M<br> max_connections=3000<br> port=3306<br> sql_mode=''<br> explicit_defaults_for_timestamp=1</p><br></li>
<li>Copy a blank or current Open Dental database to the Linux server. <ul>
<li>Each Linux installation might have a different MariaDB data location or path. The database path is documented in either <b>my.cnf</b> or <b>server.cnf</b> and is defined on a line starting with <span class="codeblock">datadir=</span>. The default path can vary and is currently <b>/var/lib/mysql</b></li>
<li>Copy the database files to a folder that is created in the data directory. For example, if the path is <b>/var/lib/mysql</b> and opendental is the name of the new database, copy to <b>/var/lib/mysql/opendental/</b>.</li>
<li>Ensure the newly created database folder has permissions for MariaDB to access the files. Either set the owner to the MySQL user or set the folder permissions to allow access to all users. Open a terminal window and type one of the two commands (change the directory path to match the actual database path): <b>chown -R mysql:mysql /var/lib/mysql/opendental</b> or <b>chmod -R 777 /var/lib/mysql/opendental</b>.</li>
</ul>
</li>
</ol>
<h2>Set Up File Share (A to Z Folder / OpenDentImages)</h2>
<p>This is just like setting up any other fileshare on a Linux machine. This can be set up as desired, but all users need full permissions (read, write and delete).</p>
<p>A good option is to set up Samba, then set up the share. Directions can be found here: Here are some web sites with directions: <a href="http://www.samba.org/samba/docs/man/Samba-HOWTO-Collection/">http://www.samba.org/samba/docs/man/Samba-HOWTO-Collection/</a></p>
<p class="MarginBottomZero">Steps we followed: </p>
<ol class="MarginBottomGap">
<li>Install Webmin (<a href="http://www.webmin.com">www.webmin.com</a>). Log on as root or other user with adequate permissions. Click the Servers tab, choose Samba windows filesharing.</li>
<li>Create fileshare, then edit securities to set &lt;writeable&gt; and &lt;guest access&gt; to yes.</li>
<li>Open an SSH terminal to the Linux machine. Log on as root or other user with adequate permissions.</li>
<li>Navigate to immediate parent directory of shared directory.</li>
<li>Type <span class="codeblock">chmod -R 777 foldername</span>.</li>
<li>This process is done. ls - l will show the permissions for all of the child folders including the share.</li>
</ol>
<p>Once the share is set up, copy the contents of the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7atozfolder.html">A to Z Folder</a> (e.g., OpenDentImages) to this new share, then set <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paths.html">Data Paths</a> to this location.</p>
<h2>Convert an Existing Linux Open Dental MySQL/MariaDB database to use MyISAM tables instead of InnoDB Tables</h2>
<p>In <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a> run the InnoDB tool.</p>
<p class="MarginBottomZero">Another option is below. Only consider this option if the office has been using the Linux server already. </p>
<ol class="MarginBottomGap">
<li>If needed, check to see if any of the current database tables are not in MyISAM format. Run the following query and replace the database name of opendental with the actual database name:<p class="codeblock">SELECT TABLE_NAME,ENGINE<br> FROM INFORMATION_SCHEMA.TABLES<br> WHERE TABLE_SCHEMA = 'opendental'<br> AND ENGINE NOT LIKE 'MyISAM';</p><br> If the query does not return any results, steps 2 - 6 do not need to be completed. </li>
<br><li>Stop the MySQL/MariaDB service. </li>
<br><li>Backup the database. </li>
<br><li>Restart the MySQL/MariaDB service. </li>
<br><li>Generate the alter table script using the following script (make name adjustments as needed). Make sure that the output folder exists and that the mysql user has full permissions on that folder. Also make sure that the output script file (see below) DOES NOT exist before running the command or else the command will fail. For example, if running the command a second time, the script previously generated must be deleted.<p class="codeblock">SET @dbname='opendental';<br> SET @outengine='MYISAM';<br> SELECT CONCAT('ALTER TABLE ',TABLE_NAME,' ENGINE = ',@outengine,';')<br> FROM INFORMATION_SCHEMA.TABLES<br> WHERE TABLE_SCHEMA = @dbname<br> INTO OUTFILE '/tmp/mysql/myisam_convert_script.txt';</p><br></li>
<li>Run the output script <span class="codeblock">myisam_convert_script.txt</span> in MySQL/MariaDB as follows. From a terminal window type (make changes for actual temporary script file path as needed):<p class="codeblock">mysql -u root -p opendental &lt; /tmp/mysql/myisam_convert_script.txt</p><br></li>
<li>Edit the <b>server.cnf</b> file and make sure that the <span class="codeblock">skip-innodb</span> and <span class="codeblock">default-storage-engine=MyISAM</span> options are in the file on their own lines and that the lines are uncommented. Save any changes to the <b>server.cnf</b> file and if the file was modified then restart the MySQL/MariaDB service. This step prevents new tables from being generated as innodb tables in the future.</li>
</ol>
<h2>Troubleshooting</h2>
<p><b>During an update, receive this error: The database tables are in MyISAM format, but the default database engine format is InnoDB. You must change the default storage engine within the my.ini (or my.cnf) file on the database server must be changed and restart MySQL in order to fix this problem. Exiting.</b></p>
<p>To <b>server.cnf</b>, add <span class="codeblock">default-storage-engine=MyISAM</span> (Step 3 above under MariaDB)</p>
<p>Case Sensitivity: Linux MySQL/MariaDB is case sensitive by default. Open Dental tries to use only lowercase table names, however may have some mixed case variables. If ther are issues with case sensitivity, users may want to turn case sensitivity off. Simply add this line to the <b>server.cnf</b> file on the Linux server: <span class="codeblock">lower_case_table_names=1</span>.</p>
<p class="MarginBottomZero">Example of errors due to case sensitivity: </p>
<ul class="MarginBottomGap">
<li>MySql.Data.MySqlClient.MySqlException (0x80004005): Table 'opendental_bsm_lou_sh.ehrTrigger' doesn't exist. <p>(Notice the table name ehrTrigger is mixed case).</p>
</li>
<li>Unhandled exception trying to access the EHR Dashboard.</li>
</ul>
		</div>
	</div>
</body>
</html>```

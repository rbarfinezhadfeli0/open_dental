# File: ./www.opendental.com/site/mysql.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - MySQL</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('mysql','databasemanagementsystems','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>MySQL</p></div>
		<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p><span style="color:red">New installations of the Open Dental Trial Version use MariaDB. Existing Open Dental installations can continue to use MySQL or upgrade to
</span><a href="mariadb.html">MariaDB</a>. </p>
<p class="MarginBottomZero">The Open Dental database runs on MySQL which is a very robust and reliable database management system with extensive features and millions of installations worldwide. </p>
<ul class="MarginBottomGap">
<li><a href="http://www.mysql.com" target="_blank">www.mysql.com</a></li>
<li><a href="https://dev.mysql.com/doc/" target="_blank">MySQL Documentation</a></li>
</ul>
<p class="MarginBottomZero">MySQL versions: </p>
<ul class="MarginBottomGap">
<li>We recommend using MariaDB 10.5, however many offices are on MySQL 5.5.</li>
<li>We do support MySQL version 5.6 but be sure to have a dedicated IT team and understand the risks before updating.</li>
<li>We do not support MySQL version 5.7, but it may be used. We have some customers who have successfully used it.</li>
<li>MySQL 8.0 is not compatible with Open Dental. </li>
</ul>
<h2>General Overview</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>A database is simply a collection of tables (about 400 in this case). The database server runs on one computer and every copy of Open Dental that connects to it is referred to as a client. The MySQL connection from the client is created after clicking OK on the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7choosedatabase.html">Choose Database</a> window. The User and Password boxes must match a MySQL username and password (<a href="securitymysql.html">MySQL Security</a>).</li>
<li>Overall configuration of MySQL is controlled by the <span class="codeblock">my.ini</span> file on the database server. Inside of the <span class="codeblock">my.ini</span> file is a data path variable which is set when MySQL is installed or upgraded. The database files themselves (<b>mysql\data</b>) are always located on the same computer where MySQL is installed, not to another computer or NAS (too slow).</li>
<li>In MySQL, certain words are reserved and cannot be used as identifiers for the database, tables, columns, etc. Also, databases should not be named only numbers (e.g., 2023). Do not use databases named <i>mysql</i>.</li>
<li>MySQL Server Variables: There are some users who do not use the Open Dental Installer (Trial Version) to install MySQL. We only support MySQL 5.5 or MariaDB in our installer. Any other versions of MySQL or MariaDB are not supported by Open Dental and may cause problems with the database. In addition, MySQL must be installed using the MyISAM default engine, not InnoDB. If the installer provided by Open Dental is not used, extra server variables may appear as part of the installation.  <p>MySQL server variables are stored in the my.ini file that is part of the installation process. If our installer is not used, a variety of errors is common. Errors also tend to happen during an update process, corrupting the database. If unsure if MySQL server variables are the problem, look at this file: <b>C:\Program Files\MySQL\MySQL Server 5.5\my.ini</b>. It should look like the examples in <a href="myini.html">my.ini</a>.</p>
</li>
</ul>
<h2>How to Determine if MySQL is Installed</h2>
<p class="MarginBottomZero">MySQL should be installed on the server. There are two ways to ensure MySQL is installed: </p>
<ol class="MarginBottomGap">
<li>On the server, go to Services. See if the MySQL service is listed. </li>
<li>On the server, go to Add or Remove programs. See if an existing installation of MySQL is listed.</li>
</ol>
<h2>How to Determine if MySQL is Running</h2>
<p>The MySQL server runs as a service on one computer. To easily determine if MySQL is running, use the management console.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Right-click on Computer and click <b>Manage</b>.</li>
<li>Open Services and Applications.</li>
<li>Open Services. These are all the programs (services) that are running in the background without a user interface. MySQL would show as started.</li>
</ol>
<h2>How to Determine the current MySQL Version</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the server, from Windows, open Services.</li>
<li>Navigate to the MySQL service, then right-click to view properties.</li>
<li>In the Path to Executable, find the path to mysqld.exe. (Typically, <b>C:\Program Files (x86)\MySQL\MySQL Server 5.5\bin\mysqld.exe</b>)</li>
<li>Open that path, then right-click on <i>mysqld.exe</i> and select properties.</li>
<li>In the details tab, note the version. </li>
</ol>
<h2>How to Start/Stop the MySQL Service</h2>
<p class="MarginBottomZero">Option 1: </p>
<ol class="MarginBottomGap">
<li>From Windows, run CMD as an administrator. </li>
<li>To start the MySQL service, type <span class="codeblock">net start mysql</span>.</li>
<li>To stop the MySQL service, type <span class="codeblock">net stop mysql</span>.</li>
</ol>
<p class="MarginBottomZero">Option 2: </p>
<ol class="MarginBottomGap">
<li>From Windows, open Services.</li>
<li>Find MySQL in the list. </li>
<li>Click Start or Stop.</li>
</ol>
<p class="MarginBottomZero">Option 3:  </p>
<ol class="MarginBottomGap">
<li>Open the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7servicemanager.html">Service Manager</a>. </li>
<li>Double-click MySQL from the list. </li>
<li>Click Start or Stop.</li>
</ol>
<p>To access the data in the MySQL database, use the table viewer in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryoverview.html">User Query</a>.</p>
		</div>
	</div>
</body>
</html>```

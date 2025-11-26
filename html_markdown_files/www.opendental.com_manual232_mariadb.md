# File: ./www.opendental.com/manual232/mariadb.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MariaDB</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mariadb','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mariadb.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mariadb.html" >v24.2</option><option value="https://www.opendental.com/manual241/mariadb.html" >v24.1</option><option value="https://www.opendental.com/manual233/mariadb.html" >v23.3</option><option value="https://www.opendental.com/manual232/mariadb.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mariadb.html" >v23.1</option><option value="https://www.opendental.com/manual224/mariadb.html" >v22.4</option><option value="https://www.opendental.com/manual223/mariadb.html" >v22.3</option><option value="https://www.opendental.com/manual222/mariadb.html" >v22.2</option><option value="https://www.opendental.com/manual221/mariadb.html" >v22.1</option><option value="https://www.opendental.com/manual214/mariadb.html" >v21.4</option><option value="https://www.opendental.com/manual213/mariadb.html" >v21.3</option><option value="https://www.opendental.com/manual212/mariadb.html" >v21.2</option><option value="https://www.opendental.com/manual211/mariadb.html" >v21.1</option><option value="https://www.opendental.com/manual205/mariadb.html" >v20.5</option><option value="https://www.opendental.com/manual204/mariadb.html" >v20.4</option><option value="https://www.opendental.com/manual203/mariadb.html" >v20.3</option><option value="https://www.opendental.com/manual202/mariadb.html" >v20.2</option><option value="https://www.opendental.com/manual201/mariadb.html" >v20.1</option><option value="https://www.opendental.com/manual194/mariadb.html" >v19.4</option><option value="https://www.opendental.com/manual193/mariadb.html" >v19.3</option><option value="https://www.opendental.com/manual192/mariadb.html" >v19.2</option><option value="https://www.opendental.com/manual191/mariadb.html" >v19.1</option><option value="https://www.opendental.com/manual184/mariadb.html" >v18.4</option><option value="https://www.opendental.com/manual183/mariadb.html" >v18.3</option><option value="https://www.opendental.com/manual182/mariadb.html" >v18.2</option><option value="https://www.opendental.com/manual181/mariadb.html" >v18.1</option><option value="https://www.opendental.com/manual174/mariadb.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MariaDB</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<h2>Information from Open Dental HQ</h2>
<p><span style="color:red">On Wednesday, July 14th, 2021, Open Dental released a new trial installer package. The new trial installer package contains the MariaDB application in place of the MySQL application. We are slowly transitioning our users from using MySQL version 5.5 to having them use MariaDB version 10.5. All new Open Dental users use MariaDB. </span></p>
<p>Existing Open Dental users may upgrade from MySQL to MariaDB if they choose, but it is not a requirement. See <i>Database Management System Upgrade Wizard </i> below for details. </p>
<p>The Open Dental application works with either MySQL or MariaDB. Open Dental remains compatible with MySQL versions 5.5, 5.6, and 5.7, in addition to all versions of MariaDB up through version 10.5.</p>
<h2>About MariaDB</h2>
<p>MariaDB was created by the original developers of MySQL, so think of MariaDB as an extension of the MySQL application. When MySQL version 5.6 was under development, the company was bought out by Oracle, and Oracle took over the development of MySQL starting at version 5.6. The original MySQL developers had concerns at that time that Oracle might slowly try to kill MySQL since MySQL was in direct competition with Oracle. As a result, the original MySQL developers created a new company called MariaDB, and they took a copy of the MySQL source code for versions 5.5 and 5.6. The MariaDB company then continued developing the MySQL application (but under the new name MariaDB). The MariaDB company has a philosophy that is closely aligned with that of Open Dental, in that software should remain open source as much as possible, and it is unknown if Oracle will continue to allow MySQL to be completely open source into the future. MariaDB currently has the following versions: 5.5, 5.6, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5, and 10.6. Open Dental is using MariaDB version 10.5 for the time being. </p>
<h2>General Overview</h2>
<p>The Open Dental database runs on MariaDB 10.5 which is a very robust and reliable database. See <a href="https://mariadb.com/">www.mariadb.com</a></p>
<p>MariaDB and MySQL are closely related, some windows in Open Dental continue to use MySQL as the terminology.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>A database is simply a collection of tables (about 390 in this case). The database server runs on one computer and every copy of Open Dental that connects to it is referred to as a client. The MariaDB connection from the client is created after clicking OK on the <a href="choosedatabase.html">Choose Database</a> window. The User and Password boxes must match a MySQL username and password (<a href="securitymysql.html">MySQL Security</a>).</li>
<li>Overall configuration of MariaDB is controlled by the <span class="codeblock">my.ini</span> file on the database server. Inside of the <span class="codeblock">my.ini</span> file is a data path Variable which is set when MariaDB is installed or upgraded. The database files themselves are located on the same computer where MariaDB is installed, not to another computer or NAS (too slow).</li>
<li>In MariaDB, certain words are reserved and cannot be used as identifiers for the database, tables, columns, etc. See <a href="https://mariadb.com/kb/en/reserved-words/">MariaDB Reserved Words</a>. Also, databases should not be named only numbers (e.g., 2021). Do not use databases named <i>mysql</i>.</li>
<li>MariaDB Server Variables: There are some users who do not use the Open Dental Installer (Trial Version) to install MariaDB. We only support MariaDB 10.5 in our installer. Any other versions of MySQL or MariaDB installed outside the Trial Version are not supported by Open Dental and may cause problems with the database. In addition, MariaDB must be installed using the myISAM default engine, not InnoDb or other storage engines (e.g., Aria). If the installer provided by Open Dental is not used, extra server variables may appear as part of the installation. </li>
<li>MariaDB server variables are stored in the my.ini file that is part of the installation process. If our installer is not used, variety of errors can occur. Errors also tend to happen during an update process, corrupting the database. If unsure if server variables are the problem, look at this file: <b>C:\Program Files\MariaDB\my.ini.</b> It should look like the examples in <a href="myini.html">my.ini</a>.</li>
</ul>
<h2>Database Management System Upgrade Wizard</h2>
<p>Existing Open Dental Users can utilize the Database Management System Upgrade Wizard to upgrade from MySQL to MariaDB 10.5.19: </p>
<p>We recommend contacting Open Dental Support for assistance with the upgrade.</p>
<p><div class="Note">Note: Offices must be on support with an active registration key to run this tool on the selected database</div>
</p>
<p class="MarginBottomZero"><b>System Requirements:</b></p>
<ul class="MarginBottomGap">
<li>The Upgrade Wizard must be run on the Open Dental server (localhost).</li>
<li>If using Windows 10 (or newer) or Windows Server 2016 (or newer) the following Windows update must be installed: <a href="https://support.microsoft.com/en-us/topic/update-for-universal-c-runtime-in-windows-c0514201-7fe6-95a3-b0a5-287930f3560c">KB2999226</a></li>
<li>MySQL 5.5 or MySQL 5.6 must be installed and currently functional.</li>
<li>Adequate storage space to create two full backups of the \mysql\data\ folder, plus an additional 220MBs.</li>
</ul>
<p class="MarginBottomZero"><b>Upgrade Steps</b>: </p>
<ol class="MarginBottomGap">
<li>Clean up the <b>mysql/data</b> folder. See <a href="mysqlmanage.html">MySQL Data Directory Management</a> for details.</li>
<li>Ensure Open Dental is closed on all workstations. On the server, log into Open Dental and go to Tools, Misc Tools, <a href="shutdown.html">Shutdown All Workstations</a>, <b>Shutdown All</b>.</li>
<li>On the Server, open Services from Windows and stop any <i>OpenDentXXXX</i> services (e.g., OpenDentalService, OpenDentalEConnector), as well as any Third-Party services that access the Open Dental database.</li>
<li>Download the following upgrade tool: <a href="../resources/ODDbmsUpgradeTool.exe">ODDbmsUpgradeTool</a></li>
<li>Right-click the ODDbmsUpgradeTool.exe and <b>Run as Administrator</b>.</li>
<li>Ensure MariaDB is selected in the DBMS Type drop down menu and click <b>Next</b>.</li>
<img src="images/mariaDBDBMS1.png" width="730" height="514"/><li>Modify the Connection Settings, Backup Location, and Install Location as needed. If a MySQL password is set, enter it into the <i>DBMS Password</i> field. We recommend leaving <i>Install Location</i> at default. </li>
<img src="images/mariaDBDBMS2.png" width="730" height="514"/><li>Click <b>Upgrade</b>. </li>
<li>Once the process finishes successfully, close the wizard, and launch Open Dental on the server. </li>
<li>A prompt <i>Tables will now be backed up, optimized, and repaired. This will take a minute or two. Continue? </i> will appear, click <b>OK</b>.</li>
<li>Once the process is complete, the upgrade is finished. Start any services that were stopped in Step 2. </li>
</ol>
<h2>How to Determine if MariaDB is Installed</h2>
<p class="MarginBottomZero">MariaDB should be installed on the server. To ensure MariaDB is installed: </p>
<ol class="MarginBottomGap">
<li>On the server, go to Services. See if the MySQL service is listed. Right-click and select properties. The Path to Executable should include a MariaDB folder. </li>
<li>On the server, go to Add or Remove programs. See if an existing installation of MariaDB is listed.</li>
</ol>
<h2>How to Determine if MySQL is Running</h2>
<p>The MariaDB server runs as a service (named MySQL) on one computer. To easily determine if MySQL is running, open Services and look for MySQL.</p>
<h2>How to Determine the current MariaDB Version</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the server, open Services.</li>
<li>Navigate to the MySQL service, then right-click to view properties.</li>
<li>In the Path to Executable, find the path to mysqld.exe. (Typically, <b>C:\Program Files\MariaDB 10.5\bin\mysqld.exe</b>)</li>
<li>Open that path, then right-click on <i>mysqld.exe</i> and select properties.</li>
<li>In the details tab, note the version. </li>
</ol>
<h2>How to Start/Stop the MySQL Service</h2>
<p>Reminder: The MariaDB Service is named MySQL.</p>
<p class="MarginBottomZero">Option 1:  </p>
<ol class="MarginBottomGap">
<li>Run CMD as an administrator. </li>
<li>To start the MySQL service, type <span class="codeblock">net start mysql</span>.</li>
<li>To stop the MySQL service, type <span class="codeblock">net stop mysql</span>.</li>
</ol>
<p class="MarginBottomZero">Option 2:  </p>
<ol class="MarginBottomGap">
<li>Open Services. </li>
<li>Find MySQL in the list. </li>
<li>Click Start or Stop.</li>
</ol>
<p class="MarginBottomZero">Option 3:  </p>
<ol class="MarginBottomGap">
<li>Open the <a href="servicemanager.html">Service Manager</a>.</li>
<li>Double-click MySQL from the list. </li>
<li>Click Start or Stop.</li>
</ol>
<p>To access the data in the MySQL database, use the table viewer in <a href="queryoverview.html">User Query</a>.</p>
</div>
</div>
</body>
</html>```

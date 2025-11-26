# File: ./www.opendental.com/manual/mysql56update.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MySQL 5.6</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mysql56update','mysql','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mysql56update.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mysql56update.html" >v24.2</option><option value="https://www.opendental.com/manual241/mysql56update.html" >v24.1</option><option value="https://www.opendental.com/manual233/mysql56update.html" >v23.3</option><option value="https://www.opendental.com/manual232/mysql56update.html" >v23.2</option><option value="https://www.opendental.com/manual231/mysql56update.html" >v23.1</option><option value="https://www.opendental.com/manual224/mysql56update.html" >v22.4</option><option value="https://www.opendental.com/manual223/mysql56update.html" >v22.3</option><option value="https://www.opendental.com/manual222/mysql56update.html" >v22.2</option><option value="https://www.opendental.com/manual221/mysql56update.html" >v22.1</option><option value="https://www.opendental.com/manual214/mysql56update.html" >v21.4</option><option value="https://www.opendental.com/manual213/mysql56update.html" >v21.3</option><option value="https://www.opendental.com/manual212/mysql56update.html" >v21.2</option><option value="https://www.opendental.com/manual211/mysql56update.html" >v21.1</option><option value="https://www.opendental.com/manual205/mysql56update.html" >v20.5</option><option value="https://www.opendental.com/manual204/mysql56update.html" >v20.4</option><option value="https://www.opendental.com/manual203/mysql56update.html" >v20.3</option><option value="https://www.opendental.com/manual202/mysql56update.html" >v20.2</option><option value="https://www.opendental.com/manual201/mysql56update.html" >v20.1</option><option value="https://www.opendental.com/manual194/mysql56update.html" >v19.4</option><option value="https://www.opendental.com/manual193/mysql56update.html" >v19.3</option><option value="https://www.opendental.com/manual192/mysql56update.html" >v19.2</option><option value="https://www.opendental.com/manual191/mysql56update.html" >v19.1</option><option value="https://www.opendental.com/manual184/mysql56update.html" >v18.4</option><option value="https://www.opendental.com/manual183/mysql56update.html" >v18.3</option><option value="https://www.opendental.com/manual182/mysql56update.html" >v18.2</option><option value="https://www.opendental.com/manual181/mysql56update.html" >v18.1</option><option value="https://www.opendental.com/manual174/mysql56update.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MySQL 5.6</p></div>
<div class="GeneralPageContent">
<p>See <a href="mysql.html">MySQL</a>.</p>
<h2>MySQL 5.6</h2>
<p>New installations of the Open Dental Trial Version use <a href="mariadb.html">MariaDB</a>. Existing Open Dental installations may be using MySQL 5.5, however we recommend upgrading to MariaDB 10.5. If choosing to upgrade from MySQL 5.5. to MySQL 5.6, there is a process to follow to prevent issues. These instructions are intended for IT professionals with MySQL experience.</p>
<h2>Why Upgrade?</h2>
<p>We recommend updating to the 64-bit version of MariaDB 10.5, however some offices had already upgraded their databases to MySQL 5.6. There are several 'behind the scenes' changes with MySQL 5.6 that tend to make it more efficient than MySQL 5.5. The 64-bit version can also better utilize the processor and memory of the server, making the Open Dental experience more consistent for large offices.</p>
<h2>Upgrade to MySQL 5.6 64-bit:</h2>
<br/><div class="Note">Note: We recommend <a href="update.html">Updating</a> Open Dental to the latest stable version prior to upgrading to MySQL 5.6</div>
<br/><br/><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>All users need to be out of the Open Dental program. <a href="shutdown.html">Shutdown Workstations</a> all workstations from Open Dental.</li>
<li>Stop the MySQL service. </li>
<li>Make a backup of any live databases (this may need to be done prior to stopping the MySQL service depending on how backups are run).</li>
<li>Copy the <i>my.ini</i> file from the MySQL Server 5.5 program folder to the desktop for later use.</li>
<li>Uninstall MySQL Server 5.5. *If the MySQL service does not uninstall, open an elevated command prompt and run the command: <p class="codeblock">sc delete mysql</p> This deletes the MySQL service from Windows.</li>
<li>(<i>Optional</i>) Rename the MySQL Server 5.5 program folder to "MySQL Server 5.5_old".</li>
<li>Download and install <a href="../resources/MySQL%20Server%205.6.42%20(x64).msi">MySQL 5.6 64-bit version</a>.  <ul>
<li>If not already installed, a prompt appears to install Microsoft Visual C++ 2010 Redistributable Package (x64) and Microsoft Visual C++ 2013 Redistributable Package (x64). Download the <a href="https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0">Latest Supported Visual C++ downloads</a></li>
</ul>
</li>
<li>Edit the <i>my.ini</i> file on the desktop with the variables below. There may be other optimizations to make to the my.ini file if using <a href="mysqlinnodb.html">InnoDB</a>. <ul>
<li>Update the "<i>basedir</i>" variable with the MySQL Server 5.6 program folder path: <p class="codeblock">basedir="C:/Program Files/MySQL/MySQL Server 5.6/"</p></li>
</ul>
</li>
<li>Move the modified <i>my.ini</i> in to the MySQL Server 5.6 program folder.</li>
<li>Install the MySQL service by opening an ELEVATED Command Prompt. Use one of the options below. Option 1 is the recommend way to install the service. The other two options are there for information. Be sure to change the commands as needed, if using a non-standard installation. <ul>
<li><b>Option 1</b>: Run the command: <p class="codeblock">sc create MySQL binpath= "\"C:\Program Files\MySQL\MySQL Server 5.6\bin\mysqld.exe\" --defaults-file=\"C:\Program Files\MySQL\MySQL Server 5.6\my.ini\" MySQL" start= auto</p></li>
<li><b>Option 2</b>: From the MySQL bin folder, run the command: <p class="codeblock">mysqld.exe --install MySQL --defaults-file="C:\Program Files\MySQL\MySQL Server 5.6\my.ini"</p></li>
<li><b>Option 3</b>: From the MySQL bin folder, run the command: <p class="codeblock">mysqld --install</p></li>
</ul>
</li>
<li>Start the MySQL service.</li>
<li>From the ELEVATED Command Prompt, in the <i>bin</i> folder of the MySQL Server 5.6 program folder, run this command: <p class="codeblock">mysql_upgrade -u root -f</p> If using a MySQL user password, add <i>-p</i> to the command. This looks at all tables in all databases for incompatibilities with the current version of MySQL Server and also upgrades the system tables so that the practice can take advantage of new privileges, capabilities and changes that might have been introduced with the newer version.</li>
<li>Restart the MySQL service.</li>
<li>Launch Open Dental. It prompts to Optimize the database ("Tables will now be backed up, optimized, and repaired."), which should be done.  <ul>
<li>If this window is accidentally skipped, run the Optimize tool from the <a href="databasemaintenancetools.html">Database Maintenance Tools Tab</a>.</li>
</ul>
</li>
</ol>
</div>
</div>
</body>
</html>```

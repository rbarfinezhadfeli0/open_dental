# File: ./www.opendental.com/manual232/servermigration.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Server Migration</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('servermigration','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/servermigration.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/servermigration.html" >v24.2</option><option value="https://www.opendental.com/manual241/servermigration.html" >v24.1</option><option value="https://www.opendental.com/manual233/servermigration.html" >v23.3</option><option value="https://www.opendental.com/manual232/servermigration.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/servermigration.html" >v23.1</option><option value="https://www.opendental.com/manual224/servermigration.html" >v22.4</option><option value="https://www.opendental.com/manual223/servermigration.html" >v22.3</option><option value="https://www.opendental.com/manual222/servermigration.html" >v22.2</option><option value="https://www.opendental.com/manual221/servermigration.html" >v22.1</option><option value="https://www.opendental.com/manual214/servermigration.html" >v21.4</option><option value="https://www.opendental.com/manual213/servermigration.html" >v21.3</option><option value="https://www.opendental.com/manual212/servermigration.html" >v21.2</option><option value="https://www.opendental.com/manual211/servermigration.html" >v21.1</option><option value="https://www.opendental.com/manual205/servermigration.html" >v20.5</option><option value="https://www.opendental.com/manual204/servermigration.html" >v20.4</option><option value="https://www.opendental.com/manual203/servermigration.html" >v20.3</option><option value="https://www.opendental.com/manual202/servermigration.html" >v20.2</option><option value="https://www.opendental.com/manual201/servermigration.html" >v20.1</option><option value="https://www.opendental.com/manual194/servermigration.html" >v19.4</option><option value="https://www.opendental.com/manual193/servermigration.html" >v19.3</option><option value="https://www.opendental.com/manual192/servermigration.html" >v19.2</option><option value="https://www.opendental.com/manual191/servermigration.html" >v19.1</option><option value="https://www.opendental.com/manual184/servermigration.html" >v18.4</option><option value="https://www.opendental.com/manual183/servermigration.html" >v18.3</option><option value="https://www.opendental.com/manual182/servermigration.html" >v18.2</option><option value="https://www.opendental.com/manual181/servermigration.html" >v18.1</option><option value="https://www.opendental.com/manual174/servermigration.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Server Migration</p></div>
<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p>This information is for advanced IT users only. If you need assistance with any of these steps, something does not go as expected, or you have errors, please <a href="../contact.html">Contact Open Dental support</a>. Follow these steps to migrate Open Dental to a new server. </p>
<h2>Required Steps Before Beginning</h2>
<p></p>
<p class="MarginBottomZero"><b>MariaDB or MySQL</b></p>
<ol class="MarginBottomGap">
<li>Verify what version of MariaDB or MySQL is running. When migrating, the same MariaDB or MySQL version will need to be on the new server as the old server. Newer installations of Open Dental (installed after July 14th, 2021) will normally use MariaDB; older installs will use MySQL. </li>
<li>See the How to Determine your Current Version sections on the <a href="mariadb.html">MariaDB</a> and <a href="mysql.html">MySQL</a> pages to determine what version the database is using. </li>
<li>If the MySQL Version is 5.6, users will first install 5.5 using the Open Dental Trial installer, then continue with the <a href="mysql56update.html">MySQL Upgrade to 5.6</a>.</li>
</ol>
<p><b>HL7</b><br/> HL7 users should contact Open Dental support to schedule a server migration. </p>
<p><b>Backup</b><br/> Make a backup of the original <a href="atozfolder.html">OpenDentImages</a> folder (usually found at <b>c:\OpenDentImages</b>) and the database (usually found at <b>c:\mysql\data</b> and in a directory named <i>opendental</i>). See <a href="backuptool.html">Backup Tool </a> or <a href="backupsmanual.html">Manual Backups</a>. <div class="Note">Note: If the database structure is InnoDB, backup the entire data folder. Also have a backup copy of the my.ini file, usually located in <i>C:\Program Files (x86)\MySQL\MySQL Server 5.5.</i></div>
</p>
<h2>Migrate to a New Server</h2>
<p></p>
<p class="MarginBottomZero"><b>On the Old Server</b></p>
<ol class="MarginBottomGap">
<li>Stop the MySQL, <a href="opendentalservice.html">OpenDentalService</a>, and <a href="econnector.html">OpenDentalEConnector</a> services.</li>
<li>Disable the MySQL, OpenDentalService, and OpenDentalEConnector services to make sure workstations can no longer point to the older server.  <ul>
<li>Change the Startup Type from <i>Automatic</i> to <i>Disabled</i> then click <b>OK</b>.</li>
</ul>
</li>
<li>Rename the OpenDentImages folder (e.g., "OpenDentImages_old_date"). This stops the sharing of the folder, which will prevent any workstations from accidentally storing images to the old location.</li>
<li>Disable <a href="port3306.html"> Port 3306</a> in Windows Firewall.</li>
</ol>
<p class="MarginBottomZero"><b>On the New Server</b></p>
<ol class="MarginBottomGap">
<li>Download the <a href="https://opendental.com/trial.html">Trial Version</a>. <br/><span style="color:red">If using MySQL, install the MySQL Trial Installer found at the bottom of the Trial Version page, under Troubleshooting.</span><ul>
<li>Right-click on the Trial version and Run as administrator. Only check the boxes for: <ul>
<li>MySQL Server (if installing MySQL) or MariaDB Server (if installing MariaDB)</li>
<li>MySQL grant tables (if installing MySQL) or MariaDB grant tables (if installing MariaDB)</li>
<li>my.ini</li>
<li>OpenDentImages</li>
</ul>
<div class="Note">Note: Do not check the boxes for Open Dental Program or opendental Database. These will be copied from the old server.</div>
</li>
</ul>
</li>
<li>If the old server had MySQL 5.6, upgrade to <a href="mysql56update.html">MySQL 5.6</a> on the new server. Otherwise skip to the next step.</li>
<li>Stop the MySQL Service. </li>
<li>Put the copy of the database on the new server into the MySQL data folder.  <ul>
<li>The database is usually found at <b>c:\mysql\data</b>.</li>
</ul>
<div class="Note">Note:  If the database structure is InnoDB users can rename the data folder and copy the old one into the mysql folder.</div>
</li>
<li>Start the MySQL Service. </li>
<li>Share and set full access on the newly-created OpenDentImages folder. See <a href="atozshare.html">Share A to Z Folder</a> for full instructions. <ul>
<li>Usually at <b>c:\OpenDentImages</b>.</li>
</ul>
</li>
<li>Merge the OpenDentImages folders. Place the copy of the OpenDentImages folder, from the old server, into the same directory as the newly-created OpenDentImages folder. <ul>
<li>Users may continue to the next step while the merge is being performed.<br/><div class="Note">Note: If a warning occurs stating more than three duplicate files (typically the claim form images included in an Open Dental installation), cancel and ensure files are copying into the correct folder.</div>
</li>
</ul>
</li>
<li>From within the OpenDentImages folder, right-click on <i>setup.exe</i>, then Run as administrator to install Open Dental.</li>
<li>Once the installation is complete, open Open Dental (Run as administrator) and enter the new Server Name. Alternatively, it can be left as <i>localhost</i>. If needed, also enter MySQL user and password. See <a href="securitymysql.html">MySQL Security</a>.</li>
<li>Update the path to the OpenDentImages Folder. <ul>
<li>If the Data Paths window opens (Paths), make sure the paths point to the new server.</li>
<li>If it does not open, in Open Dental, click Setup, Data Paths to ensure the paths point to the new server.</li>
</ul>
</li>
<li>Update the Update Server name <ul>
<li>In Open Dental, click Setup, Miscellaneous to ensure the Update Server is the new servers name.</li>
</ul>
</li>
<li><a href="port3306.html">Open Port 3306</a> in Windows Firewall.</li>
<li>Install the <a href="opendentalservice.html">Open Dental Service</a>. Many features in Open Dental utilize this service.</li>
<li>Install the <a href="econnector.html">eConnector</a>. Some features in Open Dental utilize this service, eServices require this service to function.</li>
</ol>
<p class="MarginBottomZero"><b>On Each Workstation</b></p>
<ol class="MarginBottomGap">
<li>Start Open Dental (Run as administrator). </li>
<li>On the <a href="choosedatabase.html">Choose Database</a> window, enter the new server name. </li>
</ol>
</div>
</div>
</body>
</html>```

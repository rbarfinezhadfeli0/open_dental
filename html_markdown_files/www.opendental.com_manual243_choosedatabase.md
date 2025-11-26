# File: ./www.opendental.com/manual243/choosedatabase.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Choose Database</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('choosedatabase','+file','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/choosedatabase.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/choosedatabase.html" >v24.2</option><option value="https://www.opendental.com/manual241/choosedatabase.html" >v24.1</option><option value="https://www.opendental.com/manual233/choosedatabase.html" >v23.3</option><option value="https://www.opendental.com/manual232/choosedatabase.html" >v23.2</option><option value="https://www.opendental.com/manual231/choosedatabase.html" >v23.1</option><option value="https://www.opendental.com/manual224/choosedatabase.html" >v22.4</option><option value="https://www.opendental.com/manual223/choosedatabase.html" >v22.3</option><option value="https://www.opendental.com/manual222/choosedatabase.html" >v22.2</option><option value="https://www.opendental.com/manual221/choosedatabase.html" >v22.1</option><option value="https://www.opendental.com/manual214/choosedatabase.html" >v21.4</option><option value="https://www.opendental.com/manual213/choosedatabase.html" >v21.3</option><option value="https://www.opendental.com/manual212/choosedatabase.html" >v21.2</option><option value="https://www.opendental.com/manual211/choosedatabase.html" >v21.1</option><option value="https://www.opendental.com/manual205/choosedatabase.html" >v20.5</option><option value="https://www.opendental.com/manual204/choosedatabase.html" >v20.4</option><option value="https://www.opendental.com/manual203/choosedatabase.html" >v20.3</option><option value="https://www.opendental.com/manual202/choosedatabase.html" >v20.2</option><option value="https://www.opendental.com/manual201/choosedatabase.html" >v20.1</option><option value="https://www.opendental.com/manual194/choosedatabase.html" >v19.4</option><option value="https://www.opendental.com/manual193/choosedatabase.html" >v19.3</option><option value="https://www.opendental.com/manual192/choosedatabase.html" >v19.2</option><option value="https://www.opendental.com/manual191/choosedatabase.html" >v19.1</option><option value="https://www.opendental.com/manual184/choosedatabase.html" >v18.4</option><option value="https://www.opendental.com/manual183/choosedatabase.html" >v18.3</option><option value="https://www.opendental.com/manual182/choosedatabase.html" >v18.2</option><option value="https://www.opendental.com/manual181/choosedatabase.html" >v18.1</option><option value="https://www.opendental.com/manual174/choosedatabase.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Choose Database</p></div>
<div class="GeneralPageContent">
<p>Use the Choose Database window to enter settings used to launch a database.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click File, Choose Database.</p>
<img src="images/choosedatabase.png" width="725" height="669"/><p> Alternatively, this window may display when launching Open Dental. This window always displays when launching Open Dental for the first time after installation.</p>
<p>These settings allow the workstation to locate and connect to the <a href="databasemanagementsystems.html">Database</a>. </p>
<p><div class="Note">Note: For Open Dental Cloud users, all settings in this window are read-only. Open Dental Cloud users cannot change the database or view MySQL User information.</div>
</p>
<h2>Connection Settings</h2>
<img src="images/chooseDatabaseConnectionSettings.png" width="668" height="308"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Server</b>: The name of the computer where the MySQL server and database are located. If running on a single computer only, the computer name may be <i>localhost</i>.</li>
<li><b>Database</b>: The database to connect to. Usually, this is <i>opendental</i>.</li>
<li><b>MySQL User</b>: Default user is <i>root</i>. See <a href="securitymysql.html">MySQL Security</a> to set users and passwords.</li>
<li><b>MySQL Password</b>: The user password (if MySQL users and passwords are set).</li>
<li><b>Do not show this window on startup (this computer only)</b>: Check this box to hide this window on subsequent startups of Open Dental on this workstation.</li>
</ul>
<p><b>MariaDB SkySQL PEM path</b>: If connecting to a third-party hosted cloud server, enter the file path for the security certificate. The certificate must be accessible from all workstations. Open Dental only references the file created by the third-party host to initialize connection. For information relating to SkySQL's hosting see: <a href="https://skysql.com">https://skysql.com</a>.</p>
<p>To save changes to this window for the next time Open Dental is launched on this workstation, choose <i>Run as Administrator</i> when launching Open Dental.</p>
<h2>Connect to Middle Tier</h2>
<p>See <a href="middletier.html">Middle Tier</a>. </p>
<p>Instead of connecting directly to the database, there is the option to connect to a Middle Tier which handles all database interactions. Advantages include better security and speed for multiple offices and preventing injection attacks when writing queries.</p>
<img src="images/chooseDatabaseMiddleTier.png" width="344" height="251"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Connect to Middle Tier instead</b>: Check to connect to the database using Middle Tier settings.</li>
<li><b>URI</b>: Enter the URI to connect to the Middle Tier database. See <a href="middletiertroubleshooting.html">Middle Tier Troubleshooting</a>. </li>
<li><b>Open Dental User (not MySQL user)</b>: Enter the Open Dental user name for the user logging into the database.</li>
<li><b>Password</b>: Enter the password associated with the Open Dental user name entered above.</li>
<li><b>Using eClinicalWorks</b>: Check to log in using the <a href="ecwgeneral.html">eClinicalWorks</a> interface. </li>
<li><b>Log me in automatically</b>: Check to save the entered user information to log into the Middle Tier database automatically. </li>
</ul>
<h2>Advanced Settings</h2>
<img src="images/chooseDatabaseAdvanced.png" width="320" height="181"/><p><b>Advanced: Use connection string</b>: Allows customizing the MySQL connection parameters (advanced users only). See also <a href="../site/oracle.html">Oracle</a>.<br/> Example: <span class="codeblock">Server=servername;Port=portnumber;Database=name_of_database;User=username;Password=password;sslca="c:\location\of\sslca.pem"</span></p>
<p><b>Dynamic Mode: Automatically downgrades or upgrades to server version.</b>: Use when users need to connect to a database from a different version of Open Dental without updating or downgrading the local client. </p>
<p><p>When running Open Dental in Dynamic Mode, Open Dental must be run as an administrator. Dynamic Mode cannot be run on the update server.</p>
<p>When checked, if the selected server and database are running a <a href="../site/versions.html">Version</a> different than the currently installed version on the workstation, Open Dental automatically creates a temporary install of the server's version of the Open Dental client into a dynamic folder (typically <b>C:\Program Files (x86)\Open Dental\DynamicMode</b>) and launch the program from there.</p>
<div class="Note">Note: Dynamic Mode can be useful in a variety of situations. Including:  <ul>
<li>Multiple locations: Practices with multiple locations can remote into each other without having to make sure every site is on the same version.</li>
<li><a href="central.html">CEMT</a>: Typically, offices using CEMT must have all databases on the same version of Open Dental. With Dynamic Mode, this is no longer the case.</li>
<li>Verifying backups: Using Dynamic Mode, a backup of Open Dental can be launched to verify on a workstation, without needing to update.</li>
<li>Testing: If a new or beta version of Open Dental for testing purposes has been installed, use Dynamic Mode to connect to the production database on the same workstation without needing to update the whole office.</li>
</ul>
</div>
</p>
<h2>For Advanced Users</h2>
<p>The settings on this window are stored in the <a href="freedentalconfig.html">FreeDentalConfig.xml</a> file in the installation directory. This data is not stored in the database because a database connection has not yet been established.</p>
<p><b>Multiple Databases:</b> Most users have only one database. However, in Open Dental practices have the option of running many databases on the same computer. For example, <a href="backups.html">Backups</a> could be made of of a database within its original folder. To access a historical snapshot of the data, simply select a database backup to open. Users can also switch between the regular database and a backup on a home computer for read-only purposes. If a user runs a dental billing company, each doctor client can retain a separate database (each office must also have a separate Open Dental license).</p>
<p>To switch between databases, use the Database dropdown. This is only available when the Choose Database window appears upon startup.</p>
<h2>Troubleshooting</h2>
<p><b><b>Problem:</b> Connection to the MySQL server has been lost. </b></p>
<img src="images/connectionlost.png" width="400" height="227"/><p><b>Solution:</b> This message pops up when the workstation cannot connect to the MySQL server. Open Dental attempts to reconnect until connection is successful or the user aborts (Exit Program).</p>
<p><b><b>Problem:</b> Error regarding too many connections. </b></p>
<p><b>Solution:</b> In the my.ini file on the server, change the max_connections to 3,000.<br/><div class="Note">Note: <li>For users on MariaDB 10.5, see <a href="https://mariadb.com/kb/en/handling-too-many-connections/">MariaDB Too Many Connections</a>.</li>
<li>For users on MySQL 5.5, this uses RAM on the server computer as connections are made.</li>
<li>For users on MySQL 5.6, it immediately reserves RAM on the server computer. </li>
</div>
</p>
</div>
</div>
</body>
</html>```

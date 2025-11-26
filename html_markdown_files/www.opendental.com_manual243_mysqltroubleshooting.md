# File: ./www.opendental.com/manual243/mysqltroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MySQL Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mysqltroubleshooting','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mysqltroubleshooting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mysqltroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/mysqltroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/mysqltroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/mysqltroubleshooting.html" >v23.2</option><option value="https://www.opendental.com/manual231/mysqltroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/mysqltroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/mysqltroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/mysqltroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/mysqltroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/mysqltroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/mysqltroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/mysqltroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/mysqltroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/mysqltroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/mysqltroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/mysqltroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/mysqltroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/mysqltroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/mysqltroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/mysqltroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/mysqltroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/mysqltroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/mysqltroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/mysqltroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/mysqltroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/mysqltroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/mysqltroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MySQL Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p>Read below for MySQL errors and solutions.</p>
<p><b>Error: Unable to Connect to MySQL Host.</b></p>
<p>If Open Dental has been installed properly, the "Unable to connect to any of the specified MySQL hosts" may appear after clicking OK in the Choose Database window. It's best to contact Open Dental Support, but if unable try the following:</p>
<p class="MarginBottomZero">On the Server: If Open Dental is working on the server but not on a workstation, then it could be a firewall issue.  </p>
<ul class="MarginBottomGap">
<li>Check the Windows firewall to make sure incoming traffic on Port 3306 is allowed, as well as any possible firewall that is part of an antivirus program. <a href="firewalls.html">Firewall</a> may need to be turned off.</li>
<li>If still unable to connect from a workstation, then it might be a networking issue such as not being in the same workgroup.</li>
<li>If a non-standard installation was performed and MySQL was installed separately, then it might be a security issue such as improper use of MySQL user name and password. See <a href="securitymysql.html">MySQL Security</a>.</li>
</ul>
<p class="MarginBottomZero">Operating System: Make sure to use a supported operating system. </p>
<ul class="MarginBottomGap">
<li>Visit <a href="../site/computerrequirements.html">Computer Requirements</a> for a full list of supported operating systems.</li>
<li>If using Linux, the process is different. See <a href="clinuxmac.html">Linux and Mac</a>.</li>
</ul>
<p class="MarginBottomZero">MySQL Service: MySQL needs to be running to be able to connect. </p>
<ol class="MarginBottomGap">
<li>If the MySQL service is not running, go to Services and try to start it.</li>
<li>If the service won't start, an antivirus program or backup program may be interfering.  <ul>
<li>Temporarily disable the antivirus or backup program to see if this is the issue. After testing, always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.</li>
</ul>
</li>
<li>Try to reinstall the MySQL service. It may not be installed correctly. </li>
</ol>
<p class="MarginBottomZero">Database Files: Make sure the database files are in the right place with no improper nesting.  </p>
<ul class="MarginBottomGap">
<li>Open <b>C:\mysql\data\opendental\</b>. There should be about 1200 files.</li>
<li>If the opendental folder is missing, or the expected files are missing, then they have been moved. Move them back. Stop the MySQL service before moving files. Do not delete anything; instead, rename them. If renaming the opendental folder, it cannot have a special characters in the name.</li>
</ul>
<p class="MarginBottomZero">Read Only Database: The <a href="choosedatabase.html">Choose Database</a> window may state, <i>Database is present but not accepting commands</i> instead of <i>database not present</i>. An <i>Unhandled Exception: Read Only Table</i> or <i>Table [insert name here] is Read Only</i> may also appear. </p>
<ol class="MarginBottomGap">
<li>Go to <b>C:\mysql\data\</b>. Right-click on the opendental folder and select Properties.</li>
<li>Find the box that says Read-only and click on it until it is completely blank.</li>
<li>Click OK.</li>
<li>When given the choice, apply changes to this folder, subfolders, and files.</li>
<li>Run Open Dental.</li>
<li>If unsuccessful, restart the computer.</li>
<li>Retry the above steps as needed.</li>
<li>Contact Open Dental support if issues persist.</li>
</ol>
<p>As a last resort, try to install Open Dental and MySQL on a different computer.</p>
<p><b>When using RAID on initial installation or migration: get a MySQL error 1067 or error 87 </b></p>
<p>This problem can occur when the MySQL program files are on a GPT partitioned drive. Add 'innodb_flush_method=normal' to the my.ini file, then start the MySQL service</p>
</div>
</div>
</body>
</html>```

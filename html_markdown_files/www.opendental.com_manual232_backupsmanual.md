# File: ./www.opendental.com/manual232/backupsmanual.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Manual Backups</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('backupsmanual','backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/backupsmanual.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/backupsmanual.html" >v24.2</option><option value="https://www.opendental.com/manual241/backupsmanual.html" >v24.1</option><option value="https://www.opendental.com/manual233/backupsmanual.html" >v23.3</option><option value="https://www.opendental.com/manual232/backupsmanual.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/backupsmanual.html" >v23.1</option><option value="https://www.opendental.com/manual224/backupsmanual.html" >v22.4</option><option value="https://www.opendental.com/manual223/backupsmanual.html" >v22.3</option><option value="https://www.opendental.com/manual222/backupsmanual.html" >v22.2</option><option value="https://www.opendental.com/manual221/backupsmanual.html" >v22.1</option><option value="https://www.opendental.com/manual214/backupsmanual.html" >v21.4</option><option value="https://www.opendental.com/manual213/backupsmanual.html" >v21.3</option><option value="https://www.opendental.com/manual212/backupsmanual.html" >v21.2</option><option value="https://www.opendental.com/manual211/backupsmanual.html" >v21.1</option><option value="https://www.opendental.com/manual205/backupsmanual.html" >v20.5</option><option value="https://www.opendental.com/manual204/backupsmanual.html" >v20.4</option><option value="https://www.opendental.com/manual203/backupsmanual.html" >v20.3</option><option value="https://www.opendental.com/manual202/backupsmanual.html" >v20.2</option><option value="https://www.opendental.com/manual201/backupsmanual.html" >v20.1</option><option value="https://www.opendental.com/manual194/backupsmanual.html" >v19.4</option><option value="https://www.opendental.com/manual193/backupsmanual.html" >v19.3</option><option value="https://www.opendental.com/manual192/backupsmanual.html" >v19.2</option><option value="https://www.opendental.com/manual191/backupsmanual.html" >v19.1</option><option value="https://www.opendental.com/manual184/backupsmanual.html" >v18.4</option><option value="https://www.opendental.com/manual183/backupsmanual.html" >v18.3</option><option value="https://www.opendental.com/manual182/backupsmanual.html" >v18.2</option><option value="https://www.opendental.com/manual181/backupsmanual.html" >v18.1</option><option value="https://www.opendental.com/manual174/backupsmanual.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Manual Backups</p></div>
<div class="GeneralPageContent">
<p>If not using Open Dental's built in <a href="backuptool.html">Backup Tool</a> or an online <a href="backupsonline.html">Online Backups</a> service, you can do manual backups. </p>
<h2>Backup Data </h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Log on to the server hosting the Open Dental database.</li>
<li>Connect an external storage device (e.g., USB Flash drive). </li>
<li>Make a copy of the following:  <ul>
<li>The database. This is typically found within <b>C:\mysql\data\</b> and is typically named <b>opendental</b>.</li>
<li>The OpenDentImages folder. This is typically found on the C drive (e.g., <b>C:\OpenDentImages\</b>) </li>
</ul>
</li>
<li>Place the copies on the external storage device.</li>
</ol>
<p><div class="Note">Note: Manual backups should only be done on myISAM databases; not <a href="mysqlinnodb.html">InnoDb</a>.</div>
</p>
<h2>Restore Data</h2>
<p class="MarginBottomZero">To verify the backup is good, restore it to a workstation that is not connected to the network (e.g., Doctor's laptop).  </p>
<ol class="MarginBottomGap">
<li>Ensure Open Dental and MySQL are already installed and the versions match the version backed up. See One Time Setup below for details. </li>
<li>Stop the MySQL service.</li>
<li>Rename the old database folder. For example, from <b>C:\mysql\data\opendental\</b> to <b>C:\mysql\data\opendentalold02142006\</b>.</li>
<li>Copy the database folder from the backup source to the appropriate location on the main hard drive. For example, from <b>D:\opendental\ to C:\mysql\data\opendental\</b>. Make sure you don't end up with too many layers (e.g., <b>C:\mysql\data\opendental\opendental\</b>).</li>
<li>(optional) Copy the OpenDentImages folder (the A to Z folders) to the hard drive. If one already exists, rename the old one or move it to a backups folder.</li>
<li>Start the MySQL service.</li>
<li>Open the program.</li>
</ol>
<h2>One Time Setup</h2>
<p class="MarginBottomZero"> If Open Dental is not installed on the workstation you are restoring to, do the following:  </p>
<ol class="MarginBottomGap">
<li>Install the Trial version of Open Dental.  <ul>
<li>If your live database is using MySQL, install the trial version found at the bottom of the Trial Version page (under Troubleshooting). Install only the MySQL Server, the MySQL 5.5 grant tables, and the my.ini. </li>
<li>If your live database is using MariaDB, install the trial version found at the top of the Trial Version page. Install only the MariaDB Server, the MariaDB 10.5 grant tables, and the my.ini.</li>
</ul>
</li>
<li>Install the Open Dental program, navigate to the OpenDentImages folder, and run <i>setup.exe</i>.  <ul>
<li>A backup of the OpenDentImages folder must already be available on the restore workstation. </li>
</ul>
</li>
</ol>
<p>If you have trouble opening the program after restoring, you may need to run the setup.exe stored in your backup in the OpenDentImages folder. If the installed version is newer than the backup version, then you will need to uninstall Open Dental from the control panel before running setup.exe.</p>
<p>Also see <a href="../site/hipaa.html">HIPAA</a>.</p>
</div>
</div>
</body>
</html>```

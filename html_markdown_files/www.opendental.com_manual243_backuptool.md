# File: ./www.opendental.com/manual243/backuptool.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Backup Tool</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/backuptool.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/backuptool.html" >v24.2</option><option value="https://www.opendental.com/manual241/backuptool.html" >v24.1</option><option value="https://www.opendental.com/manual233/backuptool.html" >v23.3</option><option value="https://www.opendental.com/manual232/backuptool.html" >v23.2</option><option value="https://www.opendental.com/manual231/backuptool.html" >v23.1</option><option value="https://www.opendental.com/manual224/backuptool.html" >v22.4</option><option value="https://www.opendental.com/manual223/backuptool.html" >v22.3</option><option value="https://www.opendental.com/manual222/backuptool.html" >v22.2</option><option value="https://www.opendental.com/manual221/backuptool.html" >v22.1</option><option value="https://www.opendental.com/manual214/backuptool.html" >v21.4</option><option value="https://www.opendental.com/manual213/backuptool.html" >v21.3</option><option value="https://www.opendental.com/manual212/backuptool.html" >v21.2</option><option value="https://www.opendental.com/manual211/backuptool.html" >v21.1</option><option value="https://www.opendental.com/manual205/backuptool.html" >v20.5</option><option value="https://www.opendental.com/manual204/backuptool.html" >v20.4</option><option value="https://www.opendental.com/manual203/backuptool.html" >v20.3</option><option value="https://www.opendental.com/manual202/backuptool.html" >v20.2</option><option value="https://www.opendental.com/manual201/backuptool.html" >v20.1</option><option value="https://www.opendental.com/manual194/backuptool.html" >v19.4</option><option value="https://www.opendental.com/manual193/backuptool.html" >v19.3</option><option value="https://www.opendental.com/manual192/backuptool.html" >v19.2</option><option value="https://www.opendental.com/manual191/backuptool.html" >v19.1</option><option value="https://www.opendental.com/manual184/backuptool.html" >v18.4</option><option value="https://www.opendental.com/manual183/backuptool.html" >v18.3</option><option value="https://www.opendental.com/manual182/backuptool.html" >v18.2</option><option value="https://www.opendental.com/manual181/backuptool.html" >v18.1</option><option value="https://www.opendental.com/manual174/backuptool.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Backup Tool</p></div>
<div class="GeneralPageContent">
<p>Use Open Dental's built-in tool to back up or restore data.</p>
<p>In the <a href="manage.html">Manage Module</a>, click <b>Backup</b>.</p>
<img src="images/backupTool.png" width="779" height="609"/><p class="MarginBottomZero">The Backup Tool is split up into three tabs: </p>
<ul class="MarginBottomGap">
<li>Backup (see below)</li>
<li><a href="removeolddata.html">Remove Old Data</a></li>
<li><a href="supplementalbackups.html">Supplemental Backups</a></li>
</ul>
<p class="MarginBottomZero">Also see: </p>
<ul class="MarginBottomGap">
<li><a href="backups.html">Backups</a></li>
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Our webinar: <a href="https://youtu.be/DskvtDag_fE">Backup and Restore</a></li>
</ul>
<p class="MarginBottomZero">This tool can back up the following data: </p>
<ul class="MarginBottomGap">
<li>Open Dental Database: The <a href="mariadb.html">MariaDB</a> or <a href="mysql.html">MySQL</a> (in older installs) database where patient data is stored. By default, it is located at <b>C:\mysql\data\opendental\</b>.</li>
<li>A to Z Folders: Scanned or imported files are stored here. Typically <b>C:\OpenDentImages</b>. To determine the <a href="atozfolder.html">A to Z Folder</a> (i.e., OpenDentImages) path for the database, see <a href="paths.html">Paths</a>.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>The Backup tab is unavailable for Open Dental Cloud Users.</li>
<li>For <a href="mysqlinnodb.html">InnoDB databases</a>, this tool can only be used for backups. Backups are made in MyISAM format. Restores cannot be done using this tool.</li>
</ul>
</div>
</p>
<p>This tool does not encrypt data, so consider an encrypted device or encryption software to ensure data is protected while in storage. See <a href="encryption.html">Encryption of Data at Rest and in Transit</a>. To use the backup tool, users must have the security permission <i>Backup</i>.</p>
<h2>Options</h2>
<img src="images/backupToolOptExclude.png" width="232" height="21"/><p><b>Exclude image folder from backup or restore</b>: By default, the <a href="atozfolder.html">A to Z Folder</a> is included in the backup or restore. To omit the A to Z folders from the backup or restore, check this box.</p>
<img src="images/backupToolOptions.png" width="447" height="63"/><p><b>Save Defaults</b>: Click to save the entered paths as the defaults.</p>
<p><b>Managed Backups</b>: Unison BDR (Central Data Storage) is a preferred online backup service. Click the button to see more information. To remove this button, disable the <a href="bridgecds.html">Central Data Storage CDS Bridge</a>, then check <i>Hide Unused Button</i>.</p>
<h2>Backup</h2>
<p>Backups should be run from the server that hosts the MySQL database. Running the tool from a workstation will likely result in an error or incorrect data being copied.</p>
<p>To back up data, first connect to the server, then insert the backup device (e.g., USB encrypted flash drive).</p>
<p>If the tool fails, try again by running Open Dental as an Administrator.</p>
<img src="images/backupToolBackup.png" width="755" height="192"/><p><b>Backup database FROM this folder</b>: Verify the database path to back up. It should contain the currently connected database. Typically it is <b>C:\mysql\data\</b>. Click <b>Browse</b> to select a different path. Only the connected database is backed up. Other databases in the path are ignored.</p>
<p><b>Backup TO this folder</b>: Verify the drive or folder to back up the data to. For example, <b>D:\</b>. Do not back up to the same folder where the live database is located. We recommend utilizing a network path to another workstation or server in the office. Click <b>Browse </b>to select a different drive.</p>
<p>Click <b>Backup</b>. A progress bar is displayed while the backup completes. If any files being backed up have a file name exceeding 100 characters, there is a warning indicating these files will be skipped. The progress window is closed once the backup is complete. </p>
<p class="MarginBottomZero">If the image folder is also being backed up, this process begins automatically once the database backup is complete. A new progress bar is displayed for the image folder backup. A message is shown once all backups are complete. </p>
<ul class="MarginBottomGap">
<li>If the destination drive does not have enough space for a complete backup, a notification appears, and the backup stops. </li>
<li>If the <i>Backup TO</i> path does not include a copy of the image folder, a full backup of the image folder is made.</li>
<li>If the <i>Backup TO</i> path includes a copy of the image folder, the backup is incremental (i.e., files not currently in the backup folder are added). Any files previously saved to the backup folder that have since been deleted from the images folder or Imaging Module are not removed from the backup folder. </li>
<li>If <i>Exclude image folder in backup or restore</i> was checked, the backup process is complete after the first message.</li>
</ul>
<h2>Restore</h2>
<p>Backups should be tested regularly to ensure they restore correctly. It is recommended to test backups by restoring them to a workstation not connected to the office network. The name of the database being restored must match the name of the database being used to run the restore tool.</p>
<img src="images/backupToolRestore.png" width="755" height="221"/><p><b>Restore FROM this folder</b>: Enter the path the backup is currently stored. For example, if the backup is on an external drive, it might be <b>D:\</b>. Click <b>Browse</b> to select a different path. </p>
<p><b>Restore database TO this folder</b>: Enter the path to place the backup. Typically it is <b>C:\mysql\data\</b>. Click <b>Browse</b> to select a different path. </p>
<p><b>Restore A-Z images to this folder:</b> If the A to Z folder was backed up, enter the path where it should be restored. Click <b>Browse</b> to select a different path. </p>
<p><b>Restore</b>: Click to restore the database. See below for detailed instructions.</p>
<p class="MarginBottomZero">Before beginning a restore:  </p>
<ul class="MarginBottomGap">
<li>If the restored database version does not match the current version of Open Dental, Open Dental automatically closes and must be relaunched.</li>
<li>The database name on the restore computer must match the database name of the backup.</li>
<li>Do not restore a backup over a live production database. Data loss can occur and is irreversible.</li>
<li>Do not replace tables within a database with tables from another database. Foreign key issues occur.</li>
<li>Run Open Dental as an administrator.</li>
</ul>
<p class="MarginBottomZero">If Open Dental is not installed on the restore computer, first do the following: </p>
<ol class="MarginBottomGap">
<li>Install the Trial version of Open Dental.  <ul>
<li>If your live database is using MySQL, install the trial version found at the bottom of the <a href="../trial.html">Trial Version</a> page (under Troubleshooting). Install only MySQL Server, MySQL 5.5 grant tables, and my.ini. </li>
<li>If your live database is using MariaDB, install the trial version found at the top of the Trial Version page. Install only MariaDB Server, MariaDB 10.5 grant tables, and my.ini.</li>
</ul>
</li>
<li>Install the Open Dental program, navigate to the <a href="atozfolder.html">A to Z Folder</a>, and run <i>setup.exe</i>.  <ul>
<li>A backup of the A to Z Folder must already be available on the restore workstation. </li>
</ul>
</li>
</ol>
<p>If there is trouble opening the program after restoring, the <i>setup.exe</i> file stored in the A to Z Folder backup may need to be run. If the installed version is newer than the backup version, Open Dental must be uninstalled from the Control Panel before running <i>setup.exe</i>.</p>
<p>To restore a database:</p>
<p></p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>On the restore computer, ensure there is a working copy of Open Dental. If not, install the Trial version and ensure it is working properly.</li>
<li>Insert the external drive with the backup into the restore computer.</li>
<li>Enter the restore paths.  <ul>
<li><b>Restore FROM</b></li>
<li><b>Restore database TO</b></li>
<li><b>Restore A-Z images to this folder</b></li>
</ul>
</li>
<li>Click <b>Restore</b>. There is a prompt to confirm the date of the backup that will be used for the restore.</li>
<li>Click <b>OK</b> and the restore process begins. <ul>
<li>The existing database is renamed using the current date (e.g., opendentalbackup_04_10_2023).</li>
<li>The database on the <i>Restore FROM</i> path is copied to the <i>Restore database TO</i> path and becomes the active database.</li>
</ul>
</li>
<li>As soon as the restore is finished, close Open Dental.</li>
<li>Restart Open Dental.</li>
<li>The Edit Paths window is opened. The first line shows the A to Z folder path for the office server. Change it to the path for <i>restore</i> computer (e.g., <b>C:\OpenDentImages</b>). Leave the other options as is.</li>
<li>Click <b>Save</b> and Open Dental software should finish opening.</li>
</ol>
<p><div class="Note">Note: When restoring a backup made automatically by Open Dental, the process may take longer if <i>Disable indexes to speed up automatic backups</i> was checked in <a href="preferences.html">Preferences</a> when the backup was made. </div>
</p>
</div>
</div>
</body>
</html>```

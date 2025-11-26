# File: ./www.opendental.com/manual232/removeolddata.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Remove Old Data</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('removeolddata','backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/removeolddata.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/removeolddata.html" >v24.2</option><option value="https://www.opendental.com/manual241/removeolddata.html" >v24.1</option><option value="https://www.opendental.com/manual233/removeolddata.html" >v23.3</option><option value="https://www.opendental.com/manual232/removeolddata.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/removeolddata.html" >v23.1</option><option value="https://www.opendental.com/manual224/removeolddata.html" >v22.4</option><option value="https://www.opendental.com/manual223/removeolddata.html" >v22.3</option><option value="https://www.opendental.com/manual222/removeolddata.html" >v22.2</option><option value="https://www.opendental.com/manual221/removeolddata.html" >v22.1</option><option value="https://www.opendental.com/manual214/removeolddata.html" >v21.4</option><option value="https://www.opendental.com/manual213/removeolddata.html" >v21.3</option><option value="https://www.opendental.com/manual212/removeolddata.html" >v21.2</option><option value="https://www.opendental.com/manual211/removeolddata.html" >v21.1</option><option value="https://www.opendental.com/manual205/removeolddata.html" >v20.5</option><option value="https://www.opendental.com/manual204/removeolddata.html" >v20.4</option><option value="https://www.opendental.com/manual203/removeolddata.html" >v20.3</option><option value="https://www.opendental.com/manual202/removeolddata.html" >v20.2</option><option value="https://www.opendental.com/manual201/removeolddata.html" >v20.1</option><option value="https://www.opendental.com/manual194/removeolddata.html" >v19.4</option><option value="https://www.opendental.com/manual193/removeolddata.html" >v19.3</option><option value="https://www.opendental.com/manual192/removeolddata.html" >v19.2</option><option value="https://www.opendental.com/manual191/removeolddata.html" >v19.1</option><option value="https://www.opendental.com/manual184/removeolddata.html" >v18.4</option><option value="https://www.opendental.com/manual183/removeolddata.html" >v18.3</option><option value="https://www.opendental.com/manual182/removeolddata.html" >v18.2</option><option value="https://www.opendental.com/manual181/removeolddata.html" >v18.1</option><option value="https://www.opendental.com/manual174/removeolddata.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Remove Old Data</p></div>
<div class="GeneralPageContent">
<p>For large databases, it may be beneficial to run this tool and remove security log data that contains no financial or clinical information.</p>
<p>In the <a href="backuptool.html">Backup Tool</a>, click Remove Old Data.</p>
<img src="images/backupRemoveOldData.png" width="787" height="613"/><p>Also see: <a href="supplementalbackups.html">Supplemental Backups</a></p>
<p><div class="Note">Note: Backup Connections Settings do not display for Open Dental Cloud users.</div>
</p>
<p>Data removed will be limited to <i>SecurityLog</i>, <i>SecurityLogHash</i>, and <i>EmailMessage</i> tables from prior to the date set below.</p>
<p class="MarginBottomZero"><b>Select the table(s) to remove data from</b>:  </p>
<ul class="MarginBottomGap">
<li><b>SecurityLog/SecurityLogHash</b>: Check to remove data from the <i>SecurityLog</i> and <i>SecurityLogHash</i> tables. <ul>
<li><i>SecurityLog</i> table: Stores an ongoing record of database activity for security purposes.</li>
<li><i>SecurityLogHash</i> table: Stores hashes of audit logs for detecting alteration.</li>
</ul>
</li>
<li><b>EmailMessage</b>: Check to remove data from the <i>EmailMessage</i> table. This table stores sent and received emails, as well as saved email drafts.</li>
</ul>
<p><b>Remove old data entries on or before</b>: Select a date to remove the old data from. All securitylog data from the selected date and before will be removed.</p>
<p><b>Backup before removing data</b>: If checked a backup will be created before the process of removing the old data is performed. We recommend making a backup prior to running this tool. </p>
<p class="MarginBottomZero"><b>Backup Connections Settings</b>: </p>
<ul class="MarginBottomGap">
<li><i>Server Name</i>: Set computer name of the server where the <a href="mariadb.html">MariaDB</a> or <a href="mysql.html">MySQL</a> (in older installs) database is hosted. If running from the server your server name may be <b>localhost</b>.</li>
<li><i>User</i>: Enter the username for MariaDB or MySQL. In some instances this may have been set to the username <b>root</b>.</li>
<li><i>Password</i>: Enter the MariaDB or MySQL password. In some instances this may be blank.</li>
</ul>
<p><b>Save Defaults</b>: Save the above settings as the default to use for this tool in the future.</p>
<p><b>Remove Old Data</b>: Run tool. This process may take a long time. Do not turn off or restart this computer until the process has completed. When running this tool, the <i>securitylog</i>, <i>securityloghash</i>, and <i>EmailMessage</i> data will be removed from your production database. Refer to the backup made if you need to reference this data after it has been removed.</p>
<p>When the tool is finished, you will get a prompt showing the number of rows removed. Click OK to finish.</p>
<img src="images/removeOldData.png" width="280" height="133"/></div>
</div>
</body>
</html>```

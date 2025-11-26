# File: ./www.opendental.com/manual232/backups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Backups</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('backups','backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/backups.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/backups.html" >v24.2</option><option value="https://www.opendental.com/manual241/backups.html" >v24.1</option><option value="https://www.opendental.com/manual233/backups.html" >v23.3</option><option value="https://www.opendental.com/manual232/backups.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/backups.html" >v23.1</option><option value="https://www.opendental.com/manual224/backups.html" >v22.4</option><option value="https://www.opendental.com/manual223/backups.html" >v22.3</option><option value="https://www.opendental.com/manual222/backups.html" >v22.2</option><option value="https://www.opendental.com/manual221/backups.html" >v22.1</option><option value="https://www.opendental.com/manual214/backups.html" >v21.4</option><option value="https://www.opendental.com/manual213/backups.html" >v21.3</option><option value="https://www.opendental.com/manual212/backups.html" >v21.2</option><option value="https://www.opendental.com/manual211/backups.html" >v21.1</option><option value="https://www.opendental.com/manual205/backups.html" >v20.5</option><option value="https://www.opendental.com/manual204/backups.html" >v20.4</option><option value="https://www.opendental.com/manual203/backups.html" >v20.3</option><option value="https://www.opendental.com/manual202/backups.html" >v20.2</option><option value="https://www.opendental.com/manual201/backups.html" >v20.1</option><option value="https://www.opendental.com/manual194/backups.html" >v19.4</option><option value="https://www.opendental.com/manual193/backups.html" >v19.3</option><option value="https://www.opendental.com/manual192/backups.html" >v19.2</option><option value="https://www.opendental.com/manual191/backups.html" >v19.1</option><option value="https://www.opendental.com/manual184/backups.html" >v18.4</option><option value="https://www.opendental.com/manual183/backups.html" >v18.3</option><option value="https://www.opendental.com/manual182/backups.html" >v18.2</option><option value="https://www.opendental.com/manual181/backups.html" >v18.1</option><option value="https://www.opendental.com/manual174/backups.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Backups</p></div>
<div class="GeneralPageContent">
<p>Backing up patient data is critical, as well as a requirement for <a href="../site/hipaa.html">HIPAA</a> compliance. You should establish a regular backup and recovery plan. This will ensure that patient data is protected, even if there is accidental data loss, database corruption, hardware failures, theft, or other disasters (floods, fires, etc).</p>
<p>Backups should be frequent, stored securely, and tested regularly to ensure quality. We suggest backing up data to a high quality encrypted USB flash drive, using an online backup service, or both. Then verify the quality by restoring backups to a secure, off-site computer not connected to the office network (e.g., home computer or another location) to prevent overwriting the live database.</p>
<p><div class="Note">Note: <ul>
<li>It is recommended to run an Open Dental Backup only when other users are not working in Open Dental. Otherwise, users may experience a <span class="codeblock">UE: Table 'procedurelog' is read only</span> error that will disappear when the backup is complete.</li>
<li>If using a laptop to verify backups, turn off the MySQL service when closing out of Open Dental. If a laptop goes to sleep while MySQL is running, it may cause corruption in the database.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">There are several backup options to consider when making a backup plan.  </p>
<ul class="MarginBottomGap">
<li><a href="backuptool.html">Backup Tool</a></li>
<li><a href="backupsonline.html">Online Backups</a></li>
<li><a href="backupsmanual.html">Manual Backups</a></li>
</ul>
<p>Also see: <a href="supplementalbackups.html">Supplemental Backups</a></p>
<h2>What to Back Up</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>\\SERVER\mysql\data\</b>: The database that stores patient data.</li>
<li><b>\\SERVER\OpenDentImages\:</b> The <a href="atozfolder.html">A to Z Folders</a> that store files you scan or import. See <a href="paths.html">Paths</a>.</li>
<li>Other office documents unrelated to Open Dental.</li>
</ul>
<h2>Frequency</h2>
<p>At minimum, backups should be made daily. If you at least have good daily backups, then the worst-case scenario is having to re-enter one day of data. Incremental backups throughout the day would be a little bit better, if you have that ability. Backing up while the database is in use is possible, but only with certain software, and it can get complicated.</p>
<h2>Encryption</h2>
<p class="MarginBottomZero">Backed-up data should be encrypted so that patient data remains secure, for example in cases of theft or loss. See <a href="encryption.html">Encryption of Data at Rest and in Transit</a>. </p>
<ul class="MarginBottomGap">
<li>Encrypted USB drives: We recommend purchasing a few and rotating them. An example is <a href="http://www.ironkey.com">http://www.ironkey.com</a>.</li>
<li>Hardware Encrypted Drives (Recommended), such as those offered by <a href="https://www.apricorn.com/">Apricorn (https://www.apricorn.com/)</a>. Data is encrypted by a dedicated processor located on the encrypted drive instead of using the computer's processor. Hardware encryption devices run independently of the operating system and any additional software. Data is protected from unauthorized access by pin numbers.</li>
<li>Software Encryption, such as <a href="encryptionbitlocker.html">BitLocker Encryption</a>. This will entail encrypting the data first, then backing it up. Software encryption uses the computer's resources to encrypt data. Software must be updated, or reinstalled if you change operating systems.</li>
</ul>
<p>RAID is not a backup solution and should not be relied on for backups or disaster recovery plans.</p>
<h2>Archives</h2>
<p>You also need to keep old copies of some of your backups. You can make separate monthly backups to a different flash drive. When it fills up, put it in storage, and get another one. If you are using imaging, then manually backup the <b>C:\OpenDentImages</b> folder to CDs, DVDs, or removable hard drives.</p>
<p>A good use of archiving would be to use a file versioning system which allows you to go back to a specific date and time to restore files that might have been accidentally deleted or modified. These programs can typically backup to multiple locations safely and securely.</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual243/supplementalbackups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Supplemental Backups</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('supplementalbackups','backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/supplementalbackups.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/supplementalbackups.html" >v24.2</option><option value="https://www.opendental.com/manual241/supplementalbackups.html" >v24.1</option><option value="https://www.opendental.com/manual233/supplementalbackups.html" >v23.3</option><option value="https://www.opendental.com/manual232/supplementalbackups.html" >v23.2</option><option value="https://www.opendental.com/manual231/supplementalbackups.html" >v23.1</option><option value="https://www.opendental.com/manual224/supplementalbackups.html" >v22.4</option><option value="https://www.opendental.com/manual223/supplementalbackups.html" >v22.3</option><option value="https://www.opendental.com/manual222/supplementalbackups.html" >v22.2</option><option value="https://www.opendental.com/manual221/supplementalbackups.html" >v22.1</option><option value="https://www.opendental.com/manual214/supplementalbackups.html" >v21.4</option><option value="https://www.opendental.com/manual213/supplementalbackups.html" >v21.3</option><option value="https://www.opendental.com/manual212/supplementalbackups.html" >v21.2</option><option value="https://www.opendental.com/manual211/supplementalbackups.html" >v21.1</option><option value="https://www.opendental.com/manual205/supplementalbackups.html" >v20.5</option><option value="https://www.opendental.com/manual204/supplementalbackups.html" >v20.4</option><option value="https://www.opendental.com/manual203/supplementalbackups.html" >v20.3</option><option value="https://www.opendental.com/manual202/supplementalbackups.html" >v20.2</option><option value="https://www.opendental.com/manual201/supplementalbackups.html" >v20.1</option><option value="https://www.opendental.com/manual194/supplementalbackups.html" >v19.4</option><option value="https://www.opendental.com/manual193/supplementalbackups.html" >v19.3</option><option value="https://www.opendental.com/manual192/supplementalbackups.html" >v19.2</option><option value="https://www.opendental.com/manual191/supplementalbackups.html" >v19.1</option><option value="https://www.opendental.com/manual184/supplementalbackups.html" >v18.4</option><option value="https://www.opendental.com/manual183/supplementalbackups.html" >v18.3</option><option value="https://www.opendental.com/manual182/supplementalbackups.html" >v18.2</option><option value="https://www.opendental.com/manual181/supplementalbackups.html" >v18.1</option><option value="https://www.opendental.com/manual174/supplementalbackups.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Supplemental Backups</p></div>
<div class="GeneralPageContent">
<p>The supplemental backup tool automatically backs up critical data and stores an encrypted copy at Open Dental. </p>
<p>In the <a href="backuptool.html">Backup Tool</a>, click Supplemental Backups.</p>
<img src="images/supplementalBackups.png" width="779" height="397"/><p>Also see: <a href="removeolddata.html">Remove Old Data</a>.</p>
<p>The supplemental backup tool is not designed to replace an existing backup method. Supplemental backups are not verified and may not include all data. The OpenDentImages folders are not backed up. Supplemental Backups should not be relied upon and are only available as a last resort. </p>
<p><div class="Note">Note: <ul>
<li>Supplemental backups are only available for customers on support. </li>
<li>Supplemental backups are not created for Open Dental Cloud databases. See <a href="opendentalcloudbackups.html">Open Dental Cloud Backups</a> for more information on automatic backups created for these databases.</li>
<li>Only US customers on support can have supplemental backups stored at Open Dental HQ. Non-US customers can only store supplemental backups locally.</li>
<li>This tab is not available for Open Dental Cloud users.</li>
<li>Open Dental does not have access to PHI as files are encrypted. Files can only be decrypted by admins in the practice and is only done when requested by the office.</li>
</ul>
</div>
</p>
<h2>Setup</h2>
<p><b>Supplemental Backups Enabled</b>: Check to enable supplemental backups. This is unchecked by default if <i>Disable monthly backup reminder</i> is checked in <a href="securitysettings.html">Global Security Settings</a>.</p>
<p><b>Date/Time Last Local Supplemental</b>: Automatically inserts the date of the last supplemental backup made to the <i>Backup Copy Network Path</i>. If no <i>Backup Copy Network Path</i> is defined, this is blank. </p>
<p><b>Backup Copy Network Path</b>: (Optional) Enter the path to store a copy of the supplemental backup on the network. Copies stored on the local network are full backups.</p>
<p><b>Save Defaults</b>: Click to save settings.</p>
<p>The <a href="econnector.html">eConnector</a> is required to allow supplemental backups.</p>
<p>If an error occurs during the backup process, it is logged in <b>C:\Program Files (x86)\Open Dental\OpenDentalEConnector\Logger</b>. Backups occur nightly, typically between 10pm and 4am.</p>
<p>Admin users must have a password enabled. If no password is entered, there is an <a href="alerts.html">Alert</a>.</p>
<h2>Accessing Supplemental Backups</h2>
<p>In the event of catastrophic data loss, first contact IT. They can determine if there is a suitable backup that can be used to restore data. If primary backup methods have failed, contact Open Dental support for assistance. Open Dental support can deliver the latest copy of the supplemental backup. As the backup is not verified, it may or may not be possible restore.</p>
<p>To decrypt the database, Open Dental Support needs the password of the last admin user that logged in as of the date of the backup. Open Dental support can determine which user that is.</p>
<p></p>
<h2>Security of Your Data</h2>
<p>Over many years, Open Dental has urged users to backup their data. Unfortunately, users forget to make backups, their backup method fails, or their systems are attacked. When the unfortunate happens, data can be permanently lost or held hostage.</p>
<p>Losing this valuable data negatively impacts both the user (the dental office), and its patients. Open Dental has decided that, for users who have the eConnector installed and are on support, we will provide an encrypted backup as a last resort.</p>
<p>The encrypted backup cannot be accessed by support staff or anyone at Open Dental. As stated above, Open Dental does not have access to PHI. We cannot use or view any data in your database. Only the owner of the data (the last administrative user to log on) can decrypt the database. Supplemental backups can be easily turned on, off, or switched to a local copy, as desired.</p>
<p></p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/site/0_backup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Backup Tool</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('0_backup','0_manage','0_modules','quickmanual','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Backup Tool</p></div>
		<div class="GeneralPageContent">
<p>Open Dental has a built-in backup tool to help you create backups or restore data.</p>
<p>In the <a href="0_manage.html">Manage Module</a>, click <b>Backup</b>.</p>
<img src="images/backupTool.png" width="779" height="609"/><p class="MarginBottomZero">The Backup Tool is split up into three tabs: </p>
<ul class="MarginBottomGap">
<li><a href="#backup">Backup</a></li>
<li><a href="#removeolddata">Remove Old Data</a></li>
<li><a href="#supplemental">Supplemental Backups</a></li>
</ul>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Also see our webinar: <a href="https://youtu.be/DskvtDag_fE">Backup and Restore</a></p>
<a name='backup'></a><h2>Backup</h2><p>From this tab, easily create backups of your Open Dental database and image folder or restore an existing backup. </p>
<img src="images/backupToolBackup.png" width="755" height="192"/><p>Backups can be created while even while users are still active. Choose where the database is stored and where to create the backup. Create the backup with a single click. </p>
<img src="images/backupToolRestore.png" width="755" height="221"/><p>The tool can also be used to restore an existing backup to another computer in order test that backups are working or as needed in case of data loss. </p>
<a name='removeolddata'></a><h2>Remove Old Data</h2><p>For large databases, the Remove Old Data tool may be beneficial to remove security log or other historical data that contains no financial or clinical information.</p>
<img src="images/backupRemoveOldData.png" width="779" height="609"/><p class="MarginBottomZero">Specific tables can be selected to determine where data is removed from: </p>
<ul class="MarginBottomGap">
<li><b>SecurityLog/SecurityLogHash</b>: This includes the ongoing record of database activity and audit logs used for detecting alterations. </li>
<li><b>EmailMessage</b>:This includes sent and received emails, and saved email drafts.</li>
<li><b>WikiListHist</b>: This includes historical versions of Wiki Lists.</li>
<li><b>WikiPageHist</b>: This includes historical versions of Wiki pages.</li>
<li><b>TaskHist</b>: This inlcudes historical copies of Tasks. </li>
</ul>
<p>Data removal can also be date limited, so that newer data remains.</p>
<a name='supplemental'></a><h2>Supplemental Backups</h2><p>The supplemental backup tool automatically backs up critical data and stores an encrypted copy at Open Dental. </p>
<img src="images/supplementalBackups.png" width="779" height="397"/><p>You can choose the enable or disable this feature.</p>
<p>This tool is not designed to replace existing backup methods for full backups, but provides supplemental backups that are available as a last resort.</p>
<h3>Accessing Supplemental Backups</h3><p>In the event of catastrophic data loss, first contact IT. They can determine if there is a suitable backup that can be used to restore data. If primary backup methods have failed, contact Open Dental support for assistance. Open Dental support can deliver the latest copy of the supplemental backup. As the backup is not verified, it may or may not be possible restore.</p>
<p>To decrypt the database, Open Dental Support needs the password of the last admin user that logged in as of the date of the backup. Open Dental support can determine which user that is.</p>
<p></p>
<h3>Security of Your Data</h3><p>Over many years, Open Dental has urged users to backup their data. Unfortunately, users forget to make backups, their backup method fails, or their systems are attacked. When the unfortunate happens, data can be permanently lost or held hostage.</p>
<p>Losing this valuable data negatively impacts both the user (the dental office), and its patients. Open Dental has decided that, for users who have the eConnector installed and are on support, we will provide an encrypted backup as a last resort.</p>
<p>The encrypted backup cannot be accessed by support staff or anyone at Open Dental. As stated above, Open Dental does not have access to PHI. We cannot use or view any data in your database. Only the owner of the data (the last administrative user to log on) can decrypt the database. Supplemental backups can be easily turned on, off, or switched to a local copy, as desired.</p>
<h2>Alternate Backup Options</h2><p><b>Online Backups</b>: Third-party cloud services can be used as a tool in your regular backup and recovery plan. Use these services to back up the Open Dental data folders. Open Dental recommends <a href="https://www.centraldatastorage.com/">Central Data Storage (UnisonBDR)</a>.</p>
<p></p>
<p><b>Manual Backups:</b> If you choose not to use the built-in Open Dental Backup Tool, you can manually create backups of the Open Dental data folders.</p>
		</div>
	</div>
</body>
</html>```

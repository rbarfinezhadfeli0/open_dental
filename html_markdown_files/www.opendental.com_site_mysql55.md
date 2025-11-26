# File: ./www.opendental.com/site/mysql55.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - MySQL 5.5</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('mysql55','mysql','databasemanagementsystems','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>MySQL 5.5</p></div>
		<div class="GeneralPageContent">
<p>See <a href="mysql.html">MySQL</a>.</p>
<p><b>Warning:</b> These steps revert MySQL to the default settings and remove any custom users, passwords, ports, or other security settings. If MySQL installation has been customized, we recommend calling Open Dental for assistance updating MySQL.</p>
<h2>Why Upgrade?</h2>
<p>If the practice is running a newer version of Open Dental that has issues with older versions of MySQL, "Error 17" may appear a few times per day, requiring restarting the MySQL service each time. Since the errors are coming from MySQL rather than Open Dental, the only way to get the bug fix is to upgrade MySQL.</p>
<p>It is required to at least be using MySQL 5.0 before upgrading to 5.5. If on an earlier version of MySQL, such as 4.1, then follow the instructions at <a href="mysql50.html">MySQL 5.0</a> as an intermediate step.</p>
<h2>Upgrade to MySQL 5.5</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Always completely uninstall any older version of MySQL from Windows. Uninstalling MySQL does not damage any data.</li>
<li>If the old MySQL folder (e.g., <b>C:\program files(x86)\mysql\mysql 5.0</b>) was not deleted, delete it manually.</li>
<li>Rename the existing <b>C:\mysql</b> to <b>C:\mysql_old</b>.</li>
<li>Download the <a href="../TrialDownload-23-2-45.exe">Trial Version 23.2.45</a>. If prompted, select to save the file (not run). </li>
<li>Once the download is complete, right-click on the downloaded file and select <i>Run as Administrator</i>. <br><img src="images/mysqlUpgrade55.png" width="694" height="629" class="ImageInParagraph"/></li>
<li>Click <b>MySQL Only</b>. Verify that all paths are correct. The data path should be <b>C:\mysql\data\</b>. <ul>
<li>To install the MySQL program to <b>D:\</b> or to any location other than default, change the install path in the installer above.</li>
</ul>
</li>
<li>Click <b>Install</b>. Follow the directions. During the installation of MySQL 5.5, the <i>Typical</i> installation is probably the best choice.  <ul>
<li>If MySQL is not being installed to the default path, choose <i>Custom</i> in the MySQL installer, then change the path to the desired path and choose not to install the server data.</li>
</ul>
</li>
<li>Copy the the Open Dental database folder (e.g., opendental) from <b>C:\mysql_old\data</b> to <b>C:\mysql\data</b>.</li>
<li>We recommend now updating to <a href="mariadb.html">MariaDB</a> now by using the Upgrade Tool.</li>
</ol>
<h2>Performance Schema Errors</h2>
<p>After upgrading to MySQL 5.5, harmless errors may start to show up in the event logs that look like "performance_schema...has the wrong structure". Performance schema is not used by Open Dental so these errors can be ignored. The mysql_upgrade.exe tool can be run manually in a command prompt to stop the errors from showing up in the logs. That tool can be found in the bin folder of the MySQL install directory.</p>
		</div>
	</div>
</body>
</html>```

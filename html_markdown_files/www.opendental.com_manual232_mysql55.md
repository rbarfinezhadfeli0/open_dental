# File: ./www.opendental.com/manual232/mysql55.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MySQL 5.5</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mysql55','mysql','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mysql55.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mysql55.html" >v24.2</option><option value="https://www.opendental.com/manual241/mysql55.html" >v24.1</option><option value="https://www.opendental.com/manual233/mysql55.html" >v23.3</option><option value="https://www.opendental.com/manual232/mysql55.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mysql55.html" >v23.1</option><option value="https://www.opendental.com/manual224/mysql55.html" >v22.4</option><option value="https://www.opendental.com/manual223/mysql55.html" >v22.3</option><option value="https://www.opendental.com/manual222/mysql55.html" >v22.2</option><option value="https://www.opendental.com/manual221/mysql55.html" >v22.1</option><option value="https://www.opendental.com/manual214/mysql55.html" >v21.4</option><option value="https://www.opendental.com/manual213/mysql55.html" >v21.3</option><option value="https://www.opendental.com/manual212/mysql55.html" >v21.2</option><option value="https://www.opendental.com/manual211/mysql55.html" >v21.1</option><option value="https://www.opendental.com/manual205/mysql55.html" >v20.5</option><option value="https://www.opendental.com/manual204/mysql55.html" >v20.4</option><option value="https://www.opendental.com/manual203/mysql55.html" >v20.3</option><option value="https://www.opendental.com/manual202/mysql55.html" >v20.2</option><option value="https://www.opendental.com/manual201/mysql55.html" >v20.1</option><option value="https://www.opendental.com/manual194/mysql55.html" >v19.4</option><option value="https://www.opendental.com/manual193/mysql55.html" >v19.3</option><option value="https://www.opendental.com/manual192/mysql55.html" >v19.2</option><option value="https://www.opendental.com/manual191/mysql55.html" >v19.1</option><option value="https://www.opendental.com/manual184/mysql55.html" >v18.4</option><option value="https://www.opendental.com/manual183/mysql55.html" >v18.3</option><option value="https://www.opendental.com/manual182/mysql55.html" >v18.2</option><option value="https://www.opendental.com/manual181/mysql55.html" >v18.1</option><option value="https://www.opendental.com/manual174/mysql55.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MySQL 5.5</p></div>
<div class="GeneralPageContent">
<p>See <a href="mysql.html">MySQL</a>.</p>
<p><b>Warning:</b> These steps revert MySQL to the default settings and remove any custom users, passwords, ports, or other security settings. If MySQL installation has been customized, we recommend calling Open Dental for assistance updating MySQL.</p>
<h2>Why Upgrade?</h2>
<p>If the practice is running a newer version of Open Dental that has issues with older versions of MySQL, "Error 17" may appear few times per day, requiring restarting the MySQL service each time. Since the errors are coming from MySQL rather than Open Dental, the only way to get the bug fix is to upgrade MySQL.</p>
<p>It is required to at least be using MySQL 5.0 before upgrading to 5.5. If on an earlier version of MySQL, such as 4.1, then follow the instructions at <a href="mysql50.html">MySQL 5.0</a> as an intermediate step.</p>
<h2>Upgrade to MySQL 5.5</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Always completely uninstall any older version of MySQL from Windows. Uninstalling MySQL does not damage any data.</li>
<li>If the old MySQL folder (such as <b>C:\program files(x86)\mysql\mysql 5.0</b>) was not deleted, delete it manually.</li>
<li>Download the <a href="../TrialDownload-23-2-45.exe">Trial Version 23.2.45</a>. If prompted, select to save the file (not run). </li>
<li>Once the download is complete, right-click on the downloaded file and select Run as Administrator. <br/><img src="images/mysqlUpgrade55.png" width="694" height="629" class="ImageInParagraph"/></li>
<li>Click <b>Update MySQL</b>. Verify that all paths are correct. The data path should be <b>C:\mysql\data\</b>. <ul>
<li>To install the MySQL program to <b>D:\</b> or to any location other than default, change the install path in the installer above.</li>
</ul>
</li>
<li>Click <b>Install</b>. Follow the directions. During the installation of MySQL 5.5, the <i>Typical</i> installation is probably the best choice.  <ul>
<li>If MySQL is not being installed to the default path, choose <i>Custom</i> in the MySQL installer, then change the path to the desired path and choose not to install the server data.</li>
</ul>
</li>
</ol>
<h2>Performance Schema Errors</h2>
<p>After upgrading to MySQL 5.5, harmless errors may start to show up in the event logs that look like "performance_schema...has the wrong structure". Performance schema is not used by Open Dental so these errors can be ignored. The mysql_upgrade.exe tool can be run manually in a command prompt to stop the errors from showing up in the logs. That tool can be found in the bin folder of the MySQL install directory.</p>
</div>
</div>
</body>
</html>```

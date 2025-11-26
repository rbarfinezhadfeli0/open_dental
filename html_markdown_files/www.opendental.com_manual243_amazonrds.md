# File: ./www.opendental.com/manual243/amazonrds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Amazon RDS</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('amazonrds','databasemanagementsystems','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/amazonrds.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/amazonrds.html" >v24.2</option><option value="https://www.opendental.com/manual241/amazonrds.html" >v24.1</option><option value="https://www.opendental.com/manual233/amazonrds.html" >v23.3</option><option value="https://www.opendental.com/manual232/amazonrds.html" >v23.2</option><option value="https://www.opendental.com/manual231/amazonrds.html" >v23.1</option><option value="https://www.opendental.com/manual224/amazonrds.html" >v22.4</option><option value="https://www.opendental.com/manual223/amazonrds.html" >v22.3</option><option value="https://www.opendental.com/manual222/amazonrds.html" >v22.2</option><option value="https://www.opendental.com/manual221/amazonrds.html" >v22.1</option><option value="https://www.opendental.com/manual214/amazonrds.html" >v21.4</option><option value="https://www.opendental.com/manual213/amazonrds.html" >v21.3</option><option value="https://www.opendental.com/manual212/amazonrds.html" >v21.2</option><option value="https://www.opendental.com/manual211/amazonrds.html" >v21.1</option><option value="https://www.opendental.com/manual205/amazonrds.html" >v20.5</option><option value="https://www.opendental.com/manual204/amazonrds.html" >v20.4</option><option value="https://www.opendental.com/manual203/amazonrds.html" >v20.3</option><option value="https://www.opendental.com/manual202/amazonrds.html" >v20.2</option><option value="https://www.opendental.com/manual201/amazonrds.html" >v20.1</option><option value="https://www.opendental.com/manual194/amazonrds.html" >v19.4</option><option value="https://www.opendental.com/manual193/amazonrds.html" >v19.3</option><option value="https://www.opendental.com/manual192/amazonrds.html" >v19.2</option><option value="https://www.opendental.com/manual191/amazonrds.html" >v19.1</option><option value="https://www.opendental.com/manual184/amazonrds.html" >v18.4</option><option value="https://www.opendental.com/manual183/amazonrds.html" >v18.3</option><option value="https://www.opendental.com/manual182/amazonrds.html" >v18.2</option><option value="https://www.opendental.com/manual181/amazonrds.html" >v18.1</option><option value="https://www.opendental.com/manual174/amazonrds.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Amazon RDS</p></div>
<div class="GeneralPageContent">
<p>See <a href="databasemanagementsystems.html">Database Management Systems</a>.</p>
<p>The steps below are general guidelines for setting up a Open Dental database in the cloud using Amazon Relational Database Service (RDS).</p>
<div class="Note">Note: The database must use MySQL InnoDB tables and must be in an Amazon RDS compatible version of MySQL or MariaDB.</div>
<br/><br/><h2>Create an Amazon RDS MySQL Server Instance</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Log into your Amazon Web Services account and select the RDS option.</li>
<li>On the left, select Instances or click Get Started on the RDS home page.</li>
<li>Enter the Instance Specifications: <ul>
<li>Select <a href="mysql.html">MySQL</a>.</li>
<li>DB Engine Version: Select the latest stable version of MySQL 5.5 or MariaDB 10.5.</li>
<li>DB Instance Class: Select the instance class that will support the estimated usage.</li>
<li>Multi-AZ Deployment: Optional.</li>
<li>Storage Type: General Purpose SSD.</li>
<li>Allocated Storage: Enter the storage amount.</li>
<li>DB Instance Identifier: The identifying name of the DB Instance.</li>
<li>Master Username, Password:</li>
</ul>
</li>
<li>When settings are complete, click Next Step.</li>
<li>Follow the defaults for the VPC (Virtual Private Cloud).</li>
<li>Under Database Options, enter a name for the database.</li>
<li>Leave the other settings to the default.</li>
<li>Select the preferred backup options.</li>
<li>Select preferred monitoring or maintenance settings, then click Launch DB Instance.</li>
</ol>
<p>It may take a few minutes to create the RDS instance.</p>
<h2>Upload the Database</h2>
<p class="MarginBottomZero">We use SQLYog to connect to the database and upload the database. Any database management software should also work. </p>
<ol class="MarginBottomGap">
<li>In SQLYog, connect to the RDS.</li>
<li>Launch the RDS instance page.</li>
<li>Select Instance Actions, then See Details.</li>
<li>Copy the Endpoint information to the SQLYog MySQL host address. Remove any port numbers and enter it in the Port field.</li>
<li>Enter the username and password created when setting up the server instance in Amazon RDS.</li>
<li>Upload a copy of the database to the RDS server (connect from your local MySQL server and copy the database to Amazon RDS).</li>
</ol>
<h2>Connect to the Database from Open Dental</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Launch Open Dental.</li>
<li>On the Choose Database window, enter the Endpoint information as the server information (from the Amazon Web Service RDS page).</li>
<li>Enter the username and password created when setting up the server instance in Amazon RDS.</li>
<li>Select the database.</li>
<li>Click OK to connect.</li>
</ol>
<h2>Troubleshooting</h2>
<p><b>Error when uploading the database to the RDS instance.</b></p>
<p class="MarginBottomZero">This is most likely due to a <span class="codeblock">max_allowed_packet</span> error. To workaround it, follow these steps. </p>
<ol class="MarginBottomGap">
<li>In your Amazon Web Service account, go to the RDS platform page.</li>
<li>Click on the parameter group settings.</li>
<li>Click Create Parameter Group.</li>
<li>Select MySQL5.5 as the parameter group family and apply a meaningful Group Name and Description.</li>
<li>Go back to the parameter group page and select the newly created group.</li>
<li>Click Edit Parameters and enter a large value for <span class="codeblock">max_allowed_packets</span>. 40000000 is recommended.</li>
<li>Save the changes.</li>
<li>Go to the Instances page.</li>
<li>Select the MySQL instance, click Instance Actions, then Modify.</li>
<li>Scroll to the bottom. In the DB parameter group, select the new parameter group.</li>
<li>Click Continue. Once the instance applies the settings, you will be notified that a reboot is needed to apply the new settings.</li>
<li>Select the instance, then in the Instance Actions menu, click Reboot. <p>Once rebooted you should be able to upload a database.</p>
</li>
</ol>
<p><b>Error stating that the default engine is InnoDB but the tables are MYISAM.</b></p>
<p>In <a href="databasemaintenance.html">Database Maintenance</a>, Tools, use the InnoDB tool to change the database from MyISAM to InnoDB tables. Then upload the database to Amazon RDS.</p>
<p><b>Error message when opening Open Dental, Unable to set global sql mode. User probably does not have enough permission.</b></p>
<p class="MarginBottomZero">This is because the <span class="codeblock">sql_mode</span> variable is set to a value that is not compatible with Open Dental. </p>
<ol class="MarginBottomGap">
<li>Use the steps above to create a new parameter group or edit the existing parameter group.</li>
<li>Modify the <span class="codeblock">sql_mode</span> parameter to either a blank string or <span class="codeblock">NO_AUTO_CREATE_USER</span>.</li>
</ol>
</div>
</div>
</body>
</html>```

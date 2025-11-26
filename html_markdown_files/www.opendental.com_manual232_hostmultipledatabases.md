# File: ./www.opendental.com/manual232/hostmultipledatabases.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Host Multiple Databases from One Web Server</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hostmultipledatabases','middletier','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/hostmultipledatabases.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/hostmultipledatabases.html" >v24.2</option><option value="https://www.opendental.com/manual241/hostmultipledatabases.html" >v24.1</option><option value="https://www.opendental.com/manual233/hostmultipledatabases.html" >v23.3</option><option value="https://www.opendental.com/manual232/hostmultipledatabases.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/hostmultipledatabases.html" >v23.1</option><option value="https://www.opendental.com/manual224/hostmultipledatabases.html" >v22.4</option><option value="https://www.opendental.com/manual223/hostmultipledatabases.html" >v22.3</option><option value="https://www.opendental.com/manual222/hostmultipledatabases.html" >v22.2</option><option value="https://www.opendental.com/manual221/hostmultipledatabases.html" >v22.1</option><option value="https://www.opendental.com/manual214/hostmultipledatabases.html" >v21.4</option><option value="https://www.opendental.com/manual213/hostmultipledatabases.html" >v21.3</option><option value="https://www.opendental.com/manual212/hostmultipledatabases.html" >v21.2</option><option value="https://www.opendental.com/manual211/hostmultipledatabases.html" >v21.1</option><option value="https://www.opendental.com/manual205/hostmultipledatabases.html" >v20.5</option><option value="https://www.opendental.com/manual204/hostmultipledatabases.html" >v20.4</option><option value="https://www.opendental.com/manual203/hostmultipledatabases.html" >v20.3</option><option value="https://www.opendental.com/manual202/hostmultipledatabases.html" >v20.2</option><option value="https://www.opendental.com/manual201/hostmultipledatabases.html" >v20.1</option><option value="https://www.opendental.com/manual194/hostmultipledatabases.html" >v19.4</option><option value="https://www.opendental.com/manual193/hostmultipledatabases.html" >v19.3</option><option value="https://www.opendental.com/manual192/hostmultipledatabases.html" >v19.2</option><option value="https://www.opendental.com/manual191/hostmultipledatabases.html" >v19.1</option><option value="https://www.opendental.com/manual184/hostmultipledatabases.html" >v18.4</option><option value="https://www.opendental.com/manual183/hostmultipledatabases.html" >v18.3</option><option value="https://www.opendental.com/manual182/hostmultipledatabases.html" >v18.2</option><option value="https://www.opendental.com/manual181/hostmultipledatabases.html" >v18.1</option><option value="https://www.opendental.com/manual174/hostmultipledatabases.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Host Multiple Databases from One Web Server</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<p>One data center might want to host databases for multiple Open Dental customers. These databases may be on the same physical machine if care is taken to isolate the customers from having access to each other's data.</p>
<p>Also see: <a href="multiplelocations.html">Multiple Locations</a></p>
<h2>Web Server</h2>
<p>We do not recommend hosting multiple databases from one web server (e.g., third-party hosted server, such as Amazon RDS) unless a capable IT in involved and they fully understand what is required during updates.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In IIS, create a New Application on the desired web site.</li>
<li>Copy all files from the Open Dental installation directory into the root of the new application.</li>
<li>Edit the OpenDentalServerConfig.xml to point to a different location.</li>
</ol>
<h2>Virtual Machine</h2>
<p>The current recommendation is for each customer to have a separate virtual machine (VM) with its own instance of MySQL and its own A to Z folders. There can be some economies of scale compared to a traditional server because multiple customers can share the same hardware. There are also some advantages in disaster recovery because a VM can be easily moved to a different physical server.</p>
<h2>Connection Security</h2>
<p>When clients connect to the server over the internet, the data must be encrypted. The current recommendation is for the VM to be connected to the physical office by VPN.</p>
<h2>Workstation Connections</h2>
<p>The three workstation connection options are direct, RDP, or <a href="middletier.html">Middle Tier</a>. This still applies to multi-tenant scenarios, so the workstation connections must be considered as part of the complete solution.</p>
<h2>MySQL Security</h2>
<p>A different MySQL User will need to be set up for each customer (<a href="securitymysql.html">MySQL Security</a>). If, for example, a customer database is called od_springfield_4932, then, then set up the MySQL user for that customer to have full access to od_springfield_4932*. Notice the * wild card character. This allows Open Dental to make backups of the database during the update process. The MySQL user must also have full privileges, including create table and drop table.</p>
<p>If wanting to work from particular devices or IP address ranges. Information about setting up usernames for specific devices or network segments is available in the <a href="https://dev.mysql.com/doc/refman/5.6/en/account-names.html" target="_blank">MySQL Documentation</a> or <a href="https://mariadb.com/kb/en/create-user/" target="_blank">MariaDB Documentation</a> . Open Dental does not provide advice or direct support on setting up usernames for particular devices or network segments. Open Dental is functional as long as the specified MySQL user has the correct (full) permission set.</p>
<h2>HL7 Service</h2>
<p>If the customers are bridging to eCW using HL7 (<a href="hl7ecw.html">eClinicalWorks HL7</a>), multiple instances of the HL7 service will need to be set up, each with a different service name, exe folder, FreeDentalConfig.xml file, and database connection. Different customers may be on different versions of Open Dental. Each HL7 service can be shut down independently as needed.</p>
<h2>HL7 TCP/IP</h2>
<p>We recommend HL7 TCP/IP ports instead of HL7 folders. This will eliminate any HL7 folder sharing issues (<a href="hl7.html">Generic HL7</a>).</p>
<h2>Multiple Databases on One Server</h2>
<p>Each database will require it's own <a href="atozfolder.html">A to Z Folder</a>. See <a href="paths.html">Paths</a> for more information.</p>
<h2>Updating with Multiple Middle Tiers</h2>
<p>Different versions of the <a href="middletier.html">Middle Tier</a> can be hosted on one server.</p>
<h2>Updating with Multiple Middle Tiers: Option 1</h2>
<p class="MarginBottomZero"><b>Multiple Open Dental Directories</b></p>
<ol class="MarginBottomGap">
<li>Stop all <i>OpenDent</i> services. (OpenDentalServices and OpenDentalEConnectors; actual service names may vary).</li>
<li>Launch Open Dental as administrator from a directory that was not already updated. </li>
<li>Connect to whichever database is linked to that folder. (i.e., If the folder is for Dr. X, connect to Dr. X's database).</li>
<li>Select OK when UpdateFileCopier asks to update your version of Open Dental.</li>
<li>Repeat steps 1-3 for each additional Open Dental Directory.</li>
</ol>
<p>The UpdateFileCopier does not copy over the OpenDentalEConnector or OpenDentalService folders, so go through the steps for Multiple eConnector Folders below. </p>
<p class="MarginBottomZero"><b>Multiple eConnector Folders </b></p>
<ol class="MarginBottomGap">
<li>Stop all <i>OpenDent</i> services. OpenDentalServices and OpenDentalEConnectors; actual service names may vary.</li>
<li>Launch any Open Dental and follow the normal Update process. Make note of which Open Dental directory is being updated.</li>
<li>Copy the contents (Except the OpenDentWebConfig.xml and Logger folder) of the OpenDentalEConnector folder from the default Open Dental directory. <br/> (e.g., C:\Program Files (x86)\Open Dental\OpenDentalEConnector).</li>
<li>Browse to the OpenDentalEConnector folder in the new Open Dental Directory. <br/> (e.g., C:\Program Files (x86)\Open Dental\OpenDentalEConnector_DrX\ or \Open Dental DrX\OpenDentalEConnector\).</li>
<li>Make a copy of the config file (hold 'Ctrl' and drag it lower in the same folder) and rename it to prevent accidental loss of vital setup information. <br/> (e.g., OpenDentalWebConfig_bak.xml).</li>
<li>Paste the contents from the default eConnector folder into this one and allow it to replace the files when prompted. </li>
<li>Uninstall (if applicable) then reinstall each Open Dental Service and eConnector. Make sure to use the same naming convention you took note of when you uninstalled all the eConnectors and Open Dental Services. </li>
<li>Repeat these steps for the OpenDentalService(s) as well. </li>
<li>Start all <i>OpenDent</i> services and all of the services that were stopped in Update all databases, Step 1. </li>
</ol>
<h2>Updating with Multiple Middle Tiers: Option 2</h2>
<p>For advanced IT professionals only.</p>
<p class="MarginBottomZero"><b>Multiple Open Dental Directories </b></p>
<ol class="MarginBottomGap">
<li>Check to make sure all services are stopped. You may need to disable the services if you have a Task Scheduler to start the service if stopped.</li>
<li>Using 7zip, extract the opendental.msi from the Setup File or download the MSI directly from the Setup, Update, Download MSI.</li>
<li>Use msiexec.exe in an elevated command line to install the MSI to a separate folder: msiexec /a C:\TempOD\opendental.msi /quiet /qn TARGETDIR="C:\TempOD\OD"</li>
<li>Copy the entire contents from the C:\TempOD\OD\Program Files\Open Dental\ to each directory where Open Dental is currently installed.</li>
</ol>
<p class="MarginBottomZero"><b>Multiple eConnector Folders</b></p>
<ol class="MarginBottomGap">
<li>Check to make sure all Services are stopped. You may need to disable the services if you have a Task Scheduler to start the service if stopped.</li>
<li>Using 7zip, extract the opendental.msi from the Setup File or download the MSI directly from the Setup, Update, Download MSI.</li>
<li>Use msiexec.exe in an elevated command line to install the MSI to a separate folder: msiexec /a C:\TempOD\opendental.msi /quiet /qn TARGETDIR="C:\TempOD\OD"</li>
<li>Copy the entire contents from the C:\TempOD\OD\Program Files\Open Dental\eConnector to each directory where the service program is installed.</li>
</ol>
</div>
</div>
</body>
</html>```

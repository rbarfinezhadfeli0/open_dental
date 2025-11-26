# File: ./www.opendental.com/manual/troubleshootingslowness.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Troubleshooting Slowness</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('troubleshootingslowness','troubleshooting','installation','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/troubleshootingslowness.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/troubleshootingslowness.html" >v24.2</option><option value="https://www.opendental.com/manual241/troubleshootingslowness.html" >v24.1</option><option value="https://www.opendental.com/manual233/troubleshootingslowness.html" >v23.3</option><option value="https://www.opendental.com/manual232/troubleshootingslowness.html" >v23.2</option><option value="https://www.opendental.com/manual231/troubleshootingslowness.html" >v23.1</option><option value="https://www.opendental.com/manual224/troubleshootingslowness.html" >v22.4</option><option value="https://www.opendental.com/manual223/troubleshootingslowness.html" >v22.3</option><option value="https://www.opendental.com/manual222/troubleshootingslowness.html" >v22.2</option><option value="https://www.opendental.com/manual221/troubleshootingslowness.html" >v22.1</option><option value="https://www.opendental.com/manual214/troubleshootingslowness.html" >v21.4</option><option value="https://www.opendental.com/manual213/troubleshootingslowness.html" >v21.3</option><option value="https://www.opendental.com/manual212/troubleshootingslowness.html" >v21.2</option><option value="https://www.opendental.com/manual211/troubleshootingslowness.html" >v21.1</option><option value="https://www.opendental.com/manual205/troubleshootingslowness.html" >v20.5</option><option value="https://www.opendental.com/manual204/troubleshootingslowness.html" >v20.4</option><option value="https://www.opendental.com/manual203/troubleshootingslowness.html" >v20.3</option><option value="https://www.opendental.com/manual202/troubleshootingslowness.html" >v20.2</option><option value="https://www.opendental.com/manual201/troubleshootingslowness.html" >v20.1</option><option value="https://www.opendental.com/manual194/troubleshootingslowness.html" >v19.4</option><option value="https://www.opendental.com/manual193/troubleshootingslowness.html" >v19.3</option><option value="https://www.opendental.com/manual192/troubleshootingslowness.html" >v19.2</option><option value="https://www.opendental.com/manual191/troubleshootingslowness.html" >v19.1</option><option value="https://www.opendental.com/manual184/troubleshootingslowness.html" >v18.4</option><option value="https://www.opendental.com/manual183/troubleshootingslowness.html" >v18.3</option><option value="https://www.opendental.com/manual182/troubleshootingslowness.html" >v18.2</option><option value="https://www.opendental.com/manual181/troubleshootingslowness.html" >v18.1</option><option value="https://www.opendental.com/manual174/troubleshootingslowness.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Troubleshooting Slowness</p></div>
<div class="GeneralPageContent">
<p>See <a href="troubleshooting.html">Troubleshooting</a>.</p>
<p>If Open Dental is not as fast and responsive as you would like it to be, there are various steps that can be taken. Contact <a href="https://opendental.com/contact.html">Open Dental Support</a> for assistance with these steps.</p>
<h2>Update Version</h2>
<p>Update to the most recent build of the currently installed version or update to the newest stable version.</p>
<h2>Upgrade to MariaDB</h2>
<p>If using MySQL 5.5, upgrade to <a href="mariadb.html">MariaDB</a> 10.5.</p>
<p>MySQL 5.5 is 32 bit and may create a processing bottleneck. Upgrading MariaDB to 10.5 will allow for the service to use more server resources, allowing for more processing capabilities, especially if using any third parties or running large reports."</p>
<h2>Settings and Tools</h2>
<ul>
<li>Run the <a href="testlatency.html">Test Latency</a> tool. </li>
<li>Run the <a href="databasemaintenance.html">Database Maintenance</a> tool.</li>
<li>If switching days in the Appointments Module is slow, run the <a href="blockoutsduplicate.html">Clear Duplicate Blockouts</a> tool.</li>
<li>In <a href="preferences.html">Preferences</a><ul>
<li>Uncheck the box for <i>Show ! at upper right of appts for ins not sent</i>.</li>
<li>Check the box for <i>Appointment bubble popup disabled</i>.</li>
<li>Uncheck the box for <i>Filter the waiting room based on the selected appointment view</i>.</li>
</ul>
</li>
</ul>
<br/><h2>Report Server and Read-Only Server</h2>
<p>If experiencing slowness when running reports, the office can designate a dedicated <a href="reportserver.html">Report Server</a>. </p>
<p>If experiencing slowness when opening <a href="patientselect.html">Select Patient</a>, <a href="central.html">CEMT Select Patient</a>, and when opening claims from <a href="era.html">ERA</a> or <a href="reporterasautomaticallyprocess.html">ERAs Automatically Processed Report</a>, the office can enable the preference <i>Use Separate Read-Only Server</i>. Other back-end processes utilize the Read-Only Server, so offices experiencing slowness may benefit in setting up a Read-Only Server, even if slowness is not occurring with one of the specified events.</p>
<p>If utilizing a third-party hosted cloud server as the Read-Only Server, enter the file path for the security certificate in the <i>Sky SQL PEM</i> Read-Only server preferences. The certificate must be accessible from all workstations. </p>
<p>The Report Server and Read-Only Server can be the same server, but they should generally be different. Both the Report Server and Read-Only server should be different than the database server.</p>
<h2>Enterprise Preferences</h2>
<p>When Enterprise Setup is enabled in <a href="showfeatures.html">Show Features</a>, there are several Enterprise categories in <a href="preferences.html">Preferences</a>. These categories serve as a centralized location for setting a variety of options related to running Open Dental in an enterprise setting. Many are designed to improve performance by reducing server load for basic tasks.</p>
<h2>Refreshing Data</h2>
<p>The <i>Process signal interval</i> set in <a href="preferences.html">Preferences</a> determines how often Open Dental sends signals to the database to automatically refresh data. If you are experiencing slowness, especially very large clinics with many workstations, decreasing the number of signals sent may help. This can be accomplished by increasing the interval and/or disabling signals when workstations are inactive for a set period of time.</p>
<h2>Topaz Signature Pads</h2>
<p class="MarginBottomZero">A computer that currently or previously had a Topaz signature pad installed may experience significant slowness (10 or more seconds) in certain parts of the program, such as procedure edit and commlog edit. Follow these steps to fix:  </p>
<ol class="MarginBottomGap">
<li>Unplug the Topaz pad from the computer if present.</li>
<li>Uninstall the SigPlusBasic application if present.</li>
<li>Reinstall Topaz.</li>
</ol>
<p>For each computer you do not want to use the Topaz pad, repeat steps 1 and 2 to uninstall the Topaz pad.</p>
<h2>Data Path</h2>
<p>The connection to the <a href="atozfolder.html">A to Z Folder</a> might be slower than the connection to the database. This is especially true if using a VPN. This slowness will be noticeable when working with images in the Images module. If you use patient pictures, then the slowness will be most noticeable in the Family module and the Appointments module when hover bubbles come up. Open the Data Path window (<a href="paths.html">Paths</a>). If the path at the top is a location that is over a VPN rather than in the LAN, enter an override for the current workstation. The override should point to an A to Z folder in the LAN that stays synchronized with the other A to Z folders. Go around to each workstation and enter the override.</p>
<h2>Slow Printing</h2>
<p>Slow printing sometimes happens with network printers. One way to simplify your printing issues is to connect your printer directly to a computer with a USB cable.</p>
<h2>Email</h2>
<p>If using the inbound email message feature (<a href="emailinbox.html">Email Client</a>), slowness could be due to inbound email syncing. Try disabling the inbound email retrieval by going into each email address setup in <a href="emailsetup.html">Email Setup</a> and clearing the Incoming POP3 Server. Also clear the Computer Name to Receive Email From field. It's also a good idea to close all instances of Open Dental on the Computer named in the 'receive from' field, then reopen.</p>
<h2>Interference from Other Programs</h2>
<p class="MarginBottomZero">Antivirus, firewall, and malware programs can cause slowness in Open Dental. The following specific programs have been verified to cause slowness: </p>
<ul class="MarginBottomGap">
<li>McAfee (turning off is not sufficient; must be uninstalled)</li>
<li>ZoneAlarm (turning off is not sufficient; must be uninstalled)</li>
<li>Dell ControlPoint (also consumes CPU)</li>
<li>AVG (sometimes causes issues)</li>
</ul>
<p>The slowness issue associated with the above programs may have been solved by newer versions of those programs. But based on this known interference, a firewall should always be suspected (<a href="firewalls.html">Firewall</a>). The firewall could be software or hardware.</p>
<p>When testing if an antivirus is the problem, you can try using the antivirus 'disable' option, or if that doesn't work, uninstall the antivirus program. To prevent the server from being hacked during the test, unplug the server ethernet cable to disable internet access on the server before turning off the antivirus application. Unplugging the ethernet to the server means that you will test slowness before and after disabling/uninstalling the antivirus service on the server. Because the ethernet is unplugged, clients will not be able to connect during testing.</p>
<h2>Database optimization</h2>
<p>Run the Optimize tool in the <a href="databasemaintenancetools.html">Database Maintenance Tools Tab</a>. The process can take a few minutes. If you notice a significant speed improvement and you have a very large database, you might consider running this tool once per month.</p>
<p>If you are using an older version of Open Dental, you can use the <a href="../resources/mysql-administrator-1.1.9-win.msi">mysql-administrator-1.1.9-win.msi</a> tool to run optimization.</p>
<h2>Edit the my.ini File</h2>
<p>See <a href="myini.html">my.ini</a>.</p>
<h2>Log Slow Queries</h2>
<p>See <a href="slowquerylog.html">Slow Query Log Tool</a> for steps on enabling the log and reviewing the data.</p>
<h2>Replication</h2>
<p><b>Problem: Open Dental is running slowly or locking up for long periods of time.</b></p>
<p>Solution: If using <a href="replicationprimarykeys.html">Random Primary Keys</a> replication, try increasing the size of your key ranges. When new records are created, Open Dental searches for an available key value from the table it is inserting into. If no more keys are available, Open Dental will be stuck in an infinite loop.</p>
<p><b>Problem: In one of my offices, from any client machine, Open Dental freezes just after the Log On Screen.</b></p>
<p>Solution: Restart the MySQL service, then restart the MySQL replication thread by running these SQL commands: <b>SLAVE STOP; SLAVE START;</b></p>
<h2>Electronic Prescriptions</h2>
<p>If using NewCrop (Legacy) eRx, sluggishness when loading the Chart Module may be caused by the eRx vendor's servers being unavailable. Please check the <a href="../index.html">Open Dental Home Page</a> for any notices of known issues. If you do not see a notice, please contact us.</p>
<h2>eClinicalWorks</h2>
<p><b>Problem: Open Dental takes a long time opening certain patients, or gradually gets slower over time.</b></p>
<p>Solution: If patients were entered without setting a guarantor, this can cause slowness when opening a patient account. To see if this is the cause, run this query: <span class="codeblock">SELECT COUNT(*) FROM patient WHERE Guarantor=0;</span></p>
<p>If fewer than 10 results are returned, this is not the cause of slowness. If greater than 10 results are returned, contact us and we will fix it for you.</p>
</div>
</div>
</body>
</html>```

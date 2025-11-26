# File: ./www.opendental.com/manual/troubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Troubleshooting</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('troubleshooting','installation','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/troubleshooting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/troubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/troubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/troubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/troubleshooting.html" >v23.2</option><option value="https://www.opendental.com/manual231/troubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/troubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/troubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/troubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/troubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/troubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/troubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/troubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/troubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/troubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/troubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/troubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/troubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/troubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/troubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/troubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/troubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/troubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/troubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/troubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/troubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/troubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/troubleshooting.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>See <a href="installation.html">Installation</a>.</p>
<p>Below is troubleshooting information for common issues associated with the installation of Open Dental.</p>
<p>We support <a href="mysql55.html">MySQL 5.5</a> and <a href="mariadb.html">MariaDB 10.5</a> in our installer. Any other versions of <a href="mysql.html">MySQL</a> are not supported by Open Dental and may cause issues with your database. In addition, MySQL must be installed using myISAM default engine, not InnoDb. This can be configured in the <a href="myini.html">my.ini</a> file.</p>
<p class="MarginBottomZero">Related Links: </p>
<ul class="MarginBottomGap">
<li><a href="troubleshootingslowness.html">Troubleshooting Slowness</a></li>
<li><a href="scanners.html">Scanners</a></li>
<li><a href="replicationtroubleshooting.html">Replication Troubleshooting</a></li>
</ul>
<h2>Installation</h2>
<p>Install the <a href="../trial.html">Trial Version</a> first. Once you are ready to purchase the full version of Open Dental, call us for the registration key and to update to the full version.</p>
<p>When the update is complete, install Open Dental on your workstations. See <a href="installworkstation.html">Install on Workstation</a>.</p>
<h2>Crashes Immediately</h2>
<p>If Open Dental crashes immediately upon startup, first make sure that both required <a href="dotnet.html">dot Net ( .NET )</a> versions are installed.</p>
<p>If the problem is on a single workstation, and Open Dental crashes on startup, or as soon as you select a database, it is possible that DirectX or OpenGL is not installed or working properly. Go to another workstation, then in the <a href="mainmenu.html">Main Menu</a>, click Setup, Advanced Setup, <a href="computer.html">Computers</a>, then use simple graphics on the computer instead.</p>
<p>If Open Dental crashes immediately after the splash screen and without any useful error message, you may not have the Arial font completely installed. From the Control Panel, open Fonts, Arial. Look for Arial or Arial Regular. Not Black, Narrow, Italic, Bold or any other variation, just plain Arial. If it's not present, then install Download and run this file from Microsoft: <a href="../resources/EUupdate.exe">EUupdate.exe</a>.</p>
<h2>MySQL Issues</h2>
<p><b>Unable to Connect to MySQL Host.</b></p>
<p>You've installed Open Dental according to the directions and when you get to the Choose Database window and click OK, it says, "Unable to connect to any of the specified MySQL hosts". It's best to contact us at this point and let us troubleshoot the problem for you over a high-speed internet connection. If you'd rather try it yourself, here are some troubleshooting ideas.</p>
<p class="MarginBottomZero">On the Server: If Open Dental is working on the server but not on a workstation, then it could be a firewall issue.  </p>
<ul class="MarginBottomGap">
<li>Check the Windows firewall to make sure incoming traffic on Port 3306 is allowed, as well as any possible firewall that is part of an antivirus program. You may need to turn the firewall off. See <a href="firewalls.html">Firewall</a>.</li>
<li>If you still can't connect from a workstation, then it might be a networking issue such as not being in the same workgroup.</li>
<li>If you did a non-standard installation and installed MySQL yourself separately, then it might be a security issue such as improper use of MySQL user name and password. See <a href="securitymysql.html">MySQL Security</a>.</li>
</ul>
<p class="MarginBottomZero">Operating System: Make sure you are using a supported operating system. </p>
<ul class="MarginBottomGap">
<li>The program will not install on Windows 98, Windows Me, or Windows 2000.</li>
<li>Windows XP is no longer supported by Microsoft and has limited support from Open Dental.</li>
<li>If you're using Linux, the process is different. See <a href="clinuxmac.html">Linux and Mac</a>.</li>
<li>Visit <a href="../site/computerrequirements.html">Computer Requirements</a> for a full list of supported operating systems.</li>
</ul>
<p class="MarginBottomZero">MySQL Service: MySQL needs to be running to be able to connect. </p>
<ol class="MarginBottomGap">
<li>If the MySQL service is not running, go to Services and try to start it. <ul>
<li>Click Start and right-click Computer.</li>
<li>Select Manage.</li>
<li>Double-click Services and Applications, then double-click Services.</li>
<li>Find MySQL in the alphabetical list.</li>
</ul>
</li>
<li>If the service won't start, an antivirus program or backup program may be interfering.  <ul>
<li>Temporarily disable your antivirus or backup program to see if this is the issue. After testing, always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.</li>
</ul>
</li>
<li>Try to reinstall the MySQL service. It may not be installed correctly. See <a href="../trial.html">Trial Version</a> or contact support.</li>
</ol>
<p class="MarginBottomZero">Proper Installation: Correct installation is crucial to the success of MySQL.  </p>
<ul class="MarginBottomGap">
<li>When completing installation, follow the directions for MySQL installation (see <a href="../trial.html">Trial Version</a>).</li>
<li>In the installer program, all the boxes along the left side should be checked.</li>
<li>Paths and other settings do not usually need to be changed.</li>
<li>Read each box as it comes up for clarity.</li>
<li>You might try reinstalling (you don't have to uninstall anything first), and go through each point slowly to be sure you understand each step.</li>
<li>Feel free to contact Open Dental support if you run into any problems. <div class="Note">Note: In rare cases on HP computers, the installation path may be incorrect.</div>
</li>
</ul>
<p class="MarginBottomZero">Database Files: Make sure the database files are in the right place with no improper nesting.  </p>
<ul class="MarginBottomGap">
<li>Open <b>C:\mysql\data\opendental\</b>. You should see about 200 files.</li>
<li>If the opendental folder is missing, or if you do not see the expected files, then they have been moved. Move them back. You will have to stop the MySQL service to move files. Be very careful not to lose anything or make a mess. Never delete anything; instead, rename by tacking on "old" or some numbers representing the date. Remember that if you change the name of the opendental folder, it cannot have a special characters in the name.</li>
</ul>
<p class="MarginBottomZero">Read Only Database: Are your database files set to read only? The <a href="choosedatabase.html">Choose Database</a> window may tell you, <i>Database is present but not accepting commands</i> instead of <i>database not present</i>.  </p>
<ul class="MarginBottomGap">
<li>Go to<b>C:\mysql\data\</b>. Right-click on the opendental folder and select Properties.</li>
<li>Find the box that says Read-only and click on it until it is completely blank.</li>
<li>Click OK.</li>
<li>When given the choice, apply changes to this folder, subfolders, and files.</li>
<li>Run Open Dental.</li>
<li>If unsuccessful, restart your computer.</li>
<li>You may need to retry the above steps.</li>
<li>Contact Open Dental support if you still have issues.</li>
</ul>
<p>As a last resort, try to install Open Dental and MySQL on a different computer.</p>
<p><b>When using RAID on initial installation or migration, you get a MySQL error 1067 or error 87 </b></p>
<p>This problem can occur when the MySQL program files are on a GPT partitioned drive. Add 'innodb_flush_method=normal' to the my.ini file, then start the MySQL service</p>
<h2>Graphics Card</h2>
<p>This is a fairly rare error.</p>
<p>In the Choose Database window, clicking OK causes the window to disappear without any error message. Then while the program itself is starting up and before any of the modules show, the program crashes with an error message. The detail text of the error message might look similar to this:<p class="codeblock">************** Exception Text ************** System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt. at Tao.Platform.Windows.Wgl.wglMakeCurrent(IntPtr deviceContext, IntPtr renderingContext)etc...</p></p>
<p>The key words to look for are "Tao.Platform.Windows". This indicates a bug in the graphics card driver rather than our software.</p>
<p class="MarginBottomZero">The graphics card involved will always be an ATI card, usually integrated. The error is happening as our 3D tooth chart is attempting to load. The best solution is to try to update the graphics card driver.  </p>
<ul class="MarginBottomGap">
<li>If you are already using the most current driver, then the only option will be to make a change to the database which will tell Open Dental to use a 2D tooth chart for this workstation.</li>
<li>It is usually best to let us make the change to the database for you using a remote connection. But if you are a power user, it's OK to attempt it yourself.</li>
<li>To see the database and to make the change you will use any client program of your choice. You can even use the User Query tool that's in Open Dental itself, but you will have to do it from a workstation that is already running Open Dental successfully.</li>
<li>You will need to know the name of the computer where you are having the problem. Let's assume the name is "FRONTDESK".</li>
<li>Run this query: <p class="codeblock">SELECT * FROM computerpref</p></li>
<li>Look for a row in the resulting table that has FRONTDESK (for example) in the ComputerName column. If you don't see such a row, run a query similar to this (only try this if you know what you are doing):<p class="codeblock">--INSERT INTO computerpref (ComputerName,GraphicsSimple) VALUES ('FRONTDESK',1);</p></li>
<li>Or, if you do see a row with FRONTDESK already, then run a query similar to this (only try this if you know what you are doing):<p class="codeblock">--UPDATE computerpref SET GraphicsSimple=1 WHERE ComputerName='FRONTDESK';</p></li>
<li>One more time, run<p class="codeblock">SELECT * FROM computerpref</p> to verify that the row looks correct. Then, try again to restart Open Dental on the problem workstation.</li>
<li>See <a href="graphics.html">Graphics Preferences</a> for information on how to try a different format. But beware that if the graphics driver is buggy, that it may crash while you are trying different graphics formats, and you would then need to go through the process above again. It is probably better to try to update the graphics driver or to switch to a different graphics card.</li>
</ul>
<h2>Text is Cut Off or Windows Not Displaying Properly</h2>
<p class="MarginBottomZero">The Windows display font size setting is too big, so now the button text and other text in Open Dental does not fit inside the controls. It typically looks like the bottom of some windows are cut off so user cannot click OK or Cancel. Change your DPI setting to 100% (96 pixels per inch), then restart your computer if necessary. </p>
<ul class="MarginBottomGap">
<li>Windows 7: Control Panel, Personalization, Display. At the very left, there is a link to Set custom text size DPI.</li>
</ul>
<p>If your screen resolution is 1280 x 768, the bottom of Open Dental may be cut off due to the task bar. The easiest fix for this is to resize the Open Dental program to end just above the task bar.</p>
<p>See <a href="../site/screensize.html">Screen Size</a> for additional information on screen scaling, resolution and display size.</p>
<h2>Missing Buttons</h2>
<p>If, after updating, certain windows no longer appear to fit on the screen and buttons are missing and/or inaccessible, this is usually caused by running Open Dental in compatibility mode. </p>
<p>To correct this, right-click on the Open Dental shortcut. In the Compatibility tab, uncheck the "Run this program in compatibility mode for" option in the <i>Compatibility mode</i> section.</p>
<h2>Other Problems While Using Open Dental</h2>
<ol>
<li>Run <a href="databasemaintenance.html">Database Maintenance</a>.</li>
<li>Make sure you are using the most current version. See <a href="update.html">Update</a> to check. If a new build is available for your version, update.</li>
<li>Run Database Maintenance again, since improvements are constantly being made to it.</li>
<li>Did you use our installer to install MySQL? If not, see the MySQL Server Variables.</li>
<li>Read the manual carefully so that you completely understand how the program is supposed to function. If you are using the most current version, and you think you found a bug, let us know. We generally only accept bug reports from users who are on a support plan.</li>
</ol>
</div>
</div>
</body>
</html>```

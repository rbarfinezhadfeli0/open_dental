# File: ./www.opendental.com/manual243/freedentalconfig.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - FreeDentalConfig.xml</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('freedentalconfig','choosedatabase','+file','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/freedentalconfig.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/freedentalconfig.html" >v24.2</option><option value="https://www.opendental.com/manual241/freedentalconfig.html" >v24.1</option><option value="https://www.opendental.com/manual233/freedentalconfig.html" >v23.3</option><option value="https://www.opendental.com/manual232/freedentalconfig.html" >v23.2</option><option value="https://www.opendental.com/manual231/freedentalconfig.html" >v23.1</option><option value="https://www.opendental.com/manual224/freedentalconfig.html" >v22.4</option><option value="https://www.opendental.com/manual223/freedentalconfig.html" >v22.3</option><option value="https://www.opendental.com/manual222/freedentalconfig.html" >v22.2</option><option value="https://www.opendental.com/manual221/freedentalconfig.html" >v22.1</option><option value="https://www.opendental.com/manual214/freedentalconfig.html" >v21.4</option><option value="https://www.opendental.com/manual213/freedentalconfig.html" >v21.3</option><option value="https://www.opendental.com/manual212/freedentalconfig.html" >v21.2</option><option value="https://www.opendental.com/manual211/freedentalconfig.html" >v21.1</option><option value="https://www.opendental.com/manual205/freedentalconfig.html" >v20.5</option><option value="https://www.opendental.com/manual204/freedentalconfig.html" >v20.4</option><option value="https://www.opendental.com/manual203/freedentalconfig.html" >v20.3</option><option value="https://www.opendental.com/manual202/freedentalconfig.html" >v20.2</option><option value="https://www.opendental.com/manual201/freedentalconfig.html" >v20.1</option><option value="https://www.opendental.com/manual194/freedentalconfig.html" >v19.4</option><option value="https://www.opendental.com/manual193/freedentalconfig.html" >v19.3</option><option value="https://www.opendental.com/manual192/freedentalconfig.html" >v19.2</option><option value="https://www.opendental.com/manual191/freedentalconfig.html" >v19.1</option><option value="https://www.opendental.com/manual184/freedentalconfig.html" >v18.4</option><option value="https://www.opendental.com/manual183/freedentalconfig.html" >v18.3</option><option value="https://www.opendental.com/manual182/freedentalconfig.html" >v18.2</option><option value="https://www.opendental.com/manual181/freedentalconfig.html" >v18.1</option><option value="https://www.opendental.com/manual174/freedentalconfig.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>FreeDentalConfig.xml</p></div>
<div class="GeneralPageContent">
<p>See <a href="choosedatabase.html">Choose Database</a>.</p>
<p>The FreeDentalConfig.xml file stores database connection information. </p>
<img src="images/freedentconfig.gif" width="679" height="306"/><p>When selecting options on the Choose Database Window, information is stored in this file. If using advanced options such as <a href="middletier.html">Middle Tier</a> or connection strings, it can also change the tags in the file. The file is located in the Open Dental installation directory. If it is missing or deleted, Open Dental recreates the FreeDentalConfig.xml the next time the program is run.</p>
<div class="Note">Note: <a href="commandline.html">Command Line Arguments</a> options used to launch Open Dental are not saved to the FreeDentalConfig.xml file.</div>
<br/><br/><p>Below is a description of the .xml tags users may see in the file.</p>
<table class="simpletable">
<tr>
<th style="width:25%">xml tag</th>
<th style="width:25%">Field it corresponds to on Choose Database window</th>
<th style="width:25%">Valid Values</th>
<th style="width:25%">More Info</th>
</tr>
<tr>
<td><span class="codeblock">&lt;DatabaseConnection&gt;</span></td>
<td></td>
<td></td>
<td>Signals Open Dental to connect to directly to the database. Surrounds database connection information.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;ComputerName&gt;</span></td>
<td>Server Name</td>
<td>localhost or server name</td>
<td></td>
</tr>
<tr>
<td><span class="codeblock">&lt;Database&gt;</span></td>
<td>DataBase</td>
<td></td>
<td></td>
</tr>
<tr>
<td><span class="codeblock">&lt;User&gt;</span></td>
<td>User</td>
<td></td>
<td>Usually root (when MySQL first installed). Only changes if user changed in <a href="securitymysql.html">MySQL Security</a>.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;Password&gt;</span></td>
<td>Password</td>
<td></td>
<td>Blank.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;MySQLPassHash&gt;</span></td>
<td>n/a</td>
<td>n/a</td>
<td>If a password is entered on the Choose Database window, it is obfuscated and stored here.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;NoShowOnStartup&gt;</span></td>
<td>Do not show this window on startup</td>
<td>True or False</td>
<td>Determines whether the Choose Database window shows every time the Open Dental is started.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;DatabaseType&gt;</span></td>
<td>Database Type</td>
<td>MySQL</td>
<td></td>
</tr>
<tr>
<td><span class="codeblock">&lt;HL7verbose&gt;</span></td>
<td></td>
<td>True or False</td>
<td>Manually inserted when for simple troubleshooting of <a href="hl7.html">Generic HL7</a> or <a href="hl7ecw.html">eClinicalWorks HL7</a>.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;ServerConnection&gt;</span></td>
<td>Connect to Middle instead</td>
<td></td>
<td>Signals Open Dental to connect to the Middle Tier.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;URI&gt;</span></td>
<td>URl</td>
<td>A valid URI address</td>
<td>Only shows if using Middle Tier.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;UsingEcw&gt;</span></td>
<td>Using eClinicalWorks</td>
<td>True or False</td>
<td>Only shows if using Middle Tier. Indicates if using eCW with Middle Tier.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;ConnectionString&gt;</span></td>
<td>Advanced: Use connection string</td>
<td></td>
<td></td>
</tr>
<tr>
<td><span class="codeblock">&lt;AdminCompNames&gt;</span></td>
<td></td>
<td></td>
<td>Surrounds admin computer name information. Signals to Open Dental that the named computers can override an update. If using a remote connection, this should be the name of the computer being used to remote connect from, not the computer being remote connected to.</td>
</tr>
<tr>
<td><span class="codeblock">&lt;CompName&gt;</span></td>
<td></td>
<td></td>
<td>Example <span class="codeblock">&lt;CompName&gt;Admin1&lt;/CompName&gt;</span></td>
</tr>
<tr>
<td><span class="codeblock">&lt;AllowAutoLogin&gt;</span></td>
<td>Log me in automatically</td>
<td>True or False</td>
<td>Example <span class="codeblock">&lt;AllowAutoLogin&gt;True&lt;/AllowAutoLogin&gt;</span></td>
</tr>
</table>
</div>
</div>
</body>
</html>```

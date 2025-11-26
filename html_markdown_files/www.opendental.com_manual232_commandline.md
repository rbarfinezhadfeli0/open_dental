# File: ./www.opendental.com/manual232/commandline.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Command Line Arguments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('commandline','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/commandline.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/commandline.html" >v24.2</option><option value="https://www.opendental.com/manual241/commandline.html" >v24.1</option><option value="https://www.opendental.com/manual233/commandline.html" >v23.3</option><option value="https://www.opendental.com/manual232/commandline.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/commandline.html" >v23.1</option><option value="https://www.opendental.com/manual224/commandline.html" >v22.4</option><option value="https://www.opendental.com/manual223/commandline.html" >v22.3</option><option value="https://www.opendental.com/manual222/commandline.html" >v22.2</option><option value="https://www.opendental.com/manual221/commandline.html" >v22.1</option><option value="https://www.opendental.com/manual214/commandline.html" >v21.4</option><option value="https://www.opendental.com/manual213/commandline.html" >v21.3</option><option value="https://www.opendental.com/manual212/commandline.html" >v21.2</option><option value="https://www.opendental.com/manual211/commandline.html" >v21.1</option><option value="https://www.opendental.com/manual205/commandline.html" >v20.5</option><option value="https://www.opendental.com/manual204/commandline.html" >v20.4</option><option value="https://www.opendental.com/manual203/commandline.html" >v20.3</option><option value="https://www.opendental.com/manual202/commandline.html" >v20.2</option><option value="https://www.opendental.com/manual201/commandline.html" >v20.1</option><option value="https://www.opendental.com/manual194/commandline.html" >v19.4</option><option value="https://www.opendental.com/manual193/commandline.html" >v19.3</option><option value="https://www.opendental.com/manual192/commandline.html" >v19.2</option><option value="https://www.opendental.com/manual191/commandline.html" >v19.1</option><option value="https://www.opendental.com/manual184/commandline.html" >v18.4</option><option value="https://www.opendental.com/manual183/commandline.html" >v18.3</option><option value="https://www.opendental.com/manual182/commandline.html" >v18.2</option><option value="https://www.opendental.com/manual181/commandline.html" >v18.1</option><option value="https://www.opendental.com/manual174/commandline.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Command Line Arguments</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<p>The following command-line arguments are allowed. Quotes around the information are required if there are any spaces, otherwise optional. Order is unimportant. They are listed alphabetically.</p>
<div class="Note">Note: Options set using a command line argument are not saved to <a href="freedentalconfig.html">FreeDentalConfig.xml</a></div>
<br/><br/><p><b>AptNum:</b> Corresponds to the visit Id in eCW.</p>
<p><b>ChartNumber</b>: Causes the current patient to change. If a PatNum is passed in, then this is ignored.</p>
<p><b>DatabaseName</b>: For a direct db connection.</p>
<p><b>DynamicMode</b>: Indicates Open Dental should start with <a href="choosedatabase.html">Dynamic Mode</a> enabled. (Ex.: <span class="codeblock">DynamicMode=True</span>)</p>
<p><b>EcwConfigPath</b>: Path to the eCW Configuration.xml file.</p>
<p><b>JSESSIONID</b> and <b>JSESSIONIDSSO</b>: Only used by eCW.</p>
<p><b>IsSilentUpdate</b>: Allows you to forcefully update the database without any prompt. To use, specify True. You will also need to pass in ServerName, DatabaseName, MySqlUser, MySqlPassword, UserName, and PassHash or OdPassword. For a list of codes the program will use to relay any problems, see Exit Codes at the bottom of this page. MySqlPassword cannot be blank, the UserName and OdPassword/PassHash can be set to a non-existent user and password.</p>
<p>To prevent accidental updates of Open Dental when multiple locations potentially run different Open Dental versions, set an Update Server Name (also known as Middle Tier Server Name) in <a href="miscsetup.html">Miscellaneous Setup</a> this computer will be the one and only computer that has permission to execute updates.</p>
<p><b>Module</b>: This will open the module of your choosing (Appt, Family, Account, TxPlan, TreatPlan, Chart, Images, Manage), case insensitive (Ex.: <span class="codeblock">Module=Account </span>opens the account module.</p>
<p><b>MySqlUser</b>: For a direct db connection. Typically root.</p>
<p><b>MySqlPassHash</b>: For a direct db connection so user doesn't have to manually type the MySQL password on the Choose Database window in plain text. Uses the obfuscated MySql password from the FreeDentalConfig.xml file. The <a href="freedentalconfig.html">FreeDentalConfig.xml</a> file and the obfuscated password must already exist.</p>
<p><b>MySqlPassword</b>: For a direct db connection. Can be omitted if blank.</p>
<p><b>OdPassword</b>: The Open Dental password for the specified UserName. The Log On window will be skipped. Used in conjunction with the UserName argument.</p>
<p><b>PassHash</b>: This argument only works if the <a href="ecwbridgesetup.html">eCW Bridge</a> is turned on in tight integration mode; it is not functional for regular customers not using the eCW bridge. If both UserName and PassHash are passed in, then the current user in OD will change. It is the MD5 hash of the user password, base-16 encoded. The PassHash is the hash of the password as it is stored in the eCW database. eCW and OD use slightly different encodings for storing the password hash. eCW hashes the ASCII text and encodes it as base-16. OD hashes the Unicode text and encodes it as base 64 text. In order to allow simple bridging, if the eCW bridge is turned on, then OD will change its behavior to store passwords in a manner identical to eCW. That way, the hashed passwords will always exactly match in both databases. If the eCW bridge is turned off, none of the existing passwords will work. And if a user turns on the eCW bridge, the existing passwords will also stop working. So before turning on the bridge, you must make sure that the admin password in OD is blank. After the bridge is turned on, then you may set a password.</p>
<p><b>PatNum</b>: This is the primary key, the patient internal patient id. It is visible to users, but cannot be changed. Passing in this parameter causes that patient to be loaded. When this parameter is used for eCW, it is both the internal ID for eCW and the external ID for Open Dental.</p>
<p><b>PatNum:##</b> (related, but not command line) You can place "PatNum:##" on the windows clipboard, and then click the <a href="patientselect.html">Select Patient</a> button. This will cause Open Dental to switch to that patient instead of bringing up a list of patients.</p>
<p><b>ServerName</b>: For a direct db connection. Can be name or ip address.</p>
<p><b>Show</b>: Conditionally displays a patient's popups, patient select window or appointment list (the same list that opens when selecting View Pat Appts in the appointment module). The appointment list will only open if the starting module is the appointment module, and both forms will only open if the user also has a PatNum argument. Allows Popup, Popups, ApptsForPatient, and SearchPatient. SearchPatient will open the Patient Select window and doesn't require any other command line arguments.</p>
<p><b>SSN</b>: Causes the current patient to change. If a PatNum or ChartNumber is passed in, then this is ignored.</p>
<p><b>UserId</b>: Only used with eCW, it's the primary key for the user in eCW.</p>
<p><b>UserName</b>: The Open Dental user that is logging in. Capitalization must match. This is usually used in combination with OdPassword. If the username and password do not match, then the Log On window will be displayed as usual. If the user is in middle tier and the username or password is incorrect, they will be presented with the database selection window. When this argument is used for eCW with tight integration, the PassHash is used instead of the OdPassword. In that case, if the user does not exist, then a user with the specified UserName and PassHash will be created. The new user will have the permissions of the default user group set in the eCW setup window. If the username does exist, but the password does not match, then the user will be presented with the login screen in OD. After the user logs in with their old password, they will need to change their password in OD to their new one.</p>
<p><b>WebServiceUri</b>: The URI to the <a href="middletier.html">Middle Tier</a>.</p>
<p><b>WebServiceIsEcw</b>: If not using eCW, omit this argument. If using eCW, specify True.</p>
<h2>Reuse</h2>
<p>The current Open Dental window does not get reused when passing in command line arguments. It will instead result in a new instance of Open Dental being launched. Multiple instances of Open Dental can run simultaneously without any conflict. See PatNum above for a related technique to reuse the same window.</p>
<h2>Examples</h2>
<p><b>Example 1</b> (typical eCW parameters)<br/><span class="codeblock">"C:\Program Files\Open Dental\OpenDental.exe" PatNum=123 UserName=pam PassHash="5ebe2294ecd0e0f08eab7690d2a6ee69" AptNum=72919 EcwConfigPath="C:\Program Files\EclinicalWorks\Configuration.xml" UserId=32</span></p>
<p><b>Example 2</b> (a shortcut to open a webservice at a remote location, using eCW)<br/><span class="codeblock">"C:\Program Files\Open Dental\OpenDental.exe" WebServiceUri="http://server3/OpenDentalServer/ServiceMain.asmx" UserName="Admin" WebServiceIsEcw=True</span></p>
<p><b>Example 3</b> (a shortcut to a direct database connection on the current computer)<br/><span class="codeblock">"C:\Program Files\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root</span></p>
<p><b>Example 4</b> (a shortcut to a database connection, including Open Dental username and password)<br/><span class="codeblock">"C:\Program Files\Open Dental\OpenDental.exe" ServerName=server DatabaseName=opendental MySqlUser=root UserName="DrSmith" OdPassword=secret </span></p>
<h2>Shortcut Instructions</h2>
<p>To setup a Windows shortcut, right-click on the desktop, hover on New, then select Shortcut.</p>
<img src="images/shortcut.png" width="363" height="566"/><p>The name of the shortcut can be set in the General tab. For eCW installs, the Target has the following text:</p>
<p class="codeblock">"C:\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root</p><p>For other installs, the Start in path may include Program Files, giving the Target the following text:</p>
<p class="codeblock">"C:\Program Files\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root</p><img src="images/shortcut3.gif" width="333" height="82"/><h2>Exit Codes</h2>
<p>If any errors occur with the IsSilentUpdate argument, the program will use an exit code to relay the problem.</p>
<p>0 No Failures (Default)</p>
<p>1 IsSilentUpdate is set</p>
<p>100 Database could not be accessed for cache refresh</p>
<p>101 Database Backup failed</p>
<p>102 Failed to convert InnoDB tables to MyISAM format</p>
<p>103 Default database .ini setting is innoDB\</p>
<p>104 Required command line arguments have not been set for silent updating</p>
<p>105 File versions do not match</p>
<p>106 Connection to specified database has failed</p>
<p>107 Connection to the Middle Tier has failed</p>
<p>108 Crashed Table Exception</p>
<p>110 MySQL version lower than 5.0</p>
<p>111 Global SQL mode could not be set</p>
<p>112 Database must be upgraded using MySQL 4.1 or it will fail</p>
<p>120 Computer trying to access DB during update</p>
<p>130 Database must be upgraded to 2.8 to continue</p>
<p>131 Database must be upgraded to 11.1 to continue</p>
<p>138: Update must be done manually in order to get data loss notification(s)</p>
<p>139 Update must be done manually to fix Insurance Plan Schema</p>
<p>140 Web client cannot convert database</p>
<p>141 Updates are only allowed from a designated web server</p>
<p>142 Update is already in progress from another computer</p>
<p>143 Database has already been updated from another computer</p>
<p>150 Replication server is blocked from performing updates</p>
<p>160 File not found exception</p>
<p>161 ConversionFiles folder could not be found</p>
<p>190 Cannot convert this database version which was only for development purposes</p>
<p>191 Trial versions cannot connect to live databases</p>
<p>200 Convert Database has failed during execution (Unknown Error)</p>
<p>201 Database was corrupted due to an update failure</p>
<p>300 AtoZ folder not found (Warning)</p>
<p>301 UpdateFiles folder cannot be deleted (Warning)</p>
<p>302 Installation files could not be copied</p>
<p>303 Failed inserting update files into database</p>
<p>304 Error compressing UpdateFiles</p>
<p>305 Unable to start UpdateFileCopier process</p>
<p>309 The database version is higher than the client version</p>
<p>310 Client version is higher than Server Version and update is not allowed from Client.</p>
<p>311 Registration Key could not be validated</p>
<p>399 Classic View is not supported with Silent Update (Warning)</p>
<p>999 Unknown Problem</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/site/plugins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Plug-in Framework</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('plugins','programmingresources','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Plug-in Framework</p></div>
		<div class="GeneralPageContent">
<p>See <a href="programmingresources.html">Programming Resources</a></p>
<p></p>
<p>Plug-ins are a way for certain large organizations to add custom fuctionality for internal use. If you are a DSO, for example, and you want to develop your own plug-in for internal use, then you can call us to have a discussion about it and possibly get whitelisted if seems like an appropriate scenario. Plug-ins are difficult to write and there is a very high learning curve. Plug-ins are an extension of the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7programlinks.html">Program Links</a> framework.</p>
<p>Plug-ins are never allowed for new third-party services because of the inherent danger.</p>
<h2>Whitelisting</h2>
<p><span style="color:red">Old third party plug-ins that are not whitelisted have been phased out.</span> All third parties should use use the <a href="apispecification.html">API Specification</a>. Our <a href="integrity.html">Database Integrity</a> feature enforces the rule against altering the database.</p>
<h2>Hooks</h2>
<p>In addition to the obvious buttons from Program Links, other hooks are allowed. Hooks need to be requested directly from our team. We do not add hooks to the OpenDentBusiness project.</p>
<h2>Database</h2>
<p>A plug-in can connect to the database through the framework and does not need to manage database connection info. If the plug-in makes use of extra database tables, the plug-in dll needs to create and manage those tables. If a developer is releasing a plug-in for others to use, they will probably want to maintain multiple versions, one for each minor release. </p>
<h2>Limitations</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Plug-ins should not make changes to existing database tables. Plug-ins will have to use their own tables instead.<br></li>
<li>Plug-ins should not extend existing enumerations.<br></li>
<li>Plug-ins cannot add their own <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security </a><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">permission</a> types.<br></li>
</ul>
<h2>Security</h2>
<p>Only an administrator can enable a plug-in. This avoids the potential problem of malicious plug-ins being created to hack the database. Because plug-ins will not work with our Middle Tier, the security will not be acceptable for enterprise situations. The plug-in framework will have to be enhanced later for enterprises.</p>
<h2>Example Code</h2>
<ol>
<li>Download the desired version of Open Dental from GitHub (<a href="https://github.com/OpenDental/">https://github.com/OpenDental/</a>). This will include a PluginExample folder which contains the example code.<br><br> For versions older than 23.3, download the PluginExample solution (<a href="https://opendentalsoft.com:23793/svn/opendental/PluginExample/">https://opendentalsoft.com:23793/svn/opendental/PluginExample/</a>) using Tortoise. Put the PluginExample folder in a folder next to the head folder, just like it is in our Subversion folder organization. </li>
<br><div class="Note">Note: A username and password may be required to download from this link: <ul>
<li>Username: guest</li>
<li>Password: od123</li>
</ul>
</div>
<br><li>Open the solution (.sln file). </li>
<li>Change configuration to Debug x86.</li>
<li>You may get some errors. Errors regarding metadata files can be fixed by opening the OpenDental head solution and building it in Debug x86, then returning to this solution.</li>
<li>Errors regarding bad references can be fixed by removing those references, and readding the, pointing to the correct dll in the Required dlls folder.</li>
<li>In Solution explorer, right click on the project, Edit Properties. Go to the Build Events tab, and edit the post-build event command line. Carefully fix the absolute path to the batch file that is included with the example. You can also comment out the line with REM temporarily.</li>
<li> Find the batch file using Windows explorer. Right click, edit. Carefully fix the absolute paths contained within it.</li>
<li>Try to build. If no errors, PluginExample.dll will now be found in the debug folder of OpenDental head.</li>
<li>Set the Open Dental project to be the startup project (right click). </li>
<li>Enable the plug-in by adding a Program Link as described below.</li>
</ol>
<br><h2>Installation</h2>
<p>In the Main Menu, Setup, Program Links, add a new program link and fill it out as shown below.<br><img src="images/plugin.gif" width="813" height="576" class="ImageInParagraph"/></p>
<p>Restart Open Dental.</p>
<h2>Features in the Example</h2>
<p>If the example is installed as described above, the following features should be functional:<br></p>
<ol>
<li>Patient edit window replaced with an alternate. It's an obvious switch. The new one has only one field in it, but that field is fully editable.</li>
<li>In Account module, hover over the "Family Aging" label at the upper left to see a floating pane with an insurance breakdown in it. The info in that pane is entirely under the control of the plug-in.</li>
<li>In the Chart module patient info grid, all referrals show instead of just referred from. Unfortunately, the replaced Patient Edit window makes it hard to test this feature. You may need to turn off the plug-in, set up a few referrals for a patient, then turn the plug-in back on to see the effect.</li>
<li> A database table called jss_dev_myveryuniquetable will be created, and the plug-in version will be managed via an entry in the preference table called Plugin_JSS_DataBaseVersion.</li>
<li>Pushing the toolbar button for the plug-in launchs a form. </li>
</ol>
<br><h2>Hints for Programmers</h2>
<p>When using a plug-in, some things are done a little differently.<br></p>
<ol>
<li>To access the private controls on an existing form from outside the form, look through the public Controls property as shown in the posted example. </li>
<li>Your new classes will have static methods that get called from the plug in. One option for implementing the other necessary members of the class that don't get called directly from the plug-in is to use the singleton pattern. As in the example, a static instance of the class is stored within itself. All the non-static members in the class can then be accessed through that instance. Pay attention to static vs. non-static if you do this. It's a little trickier than in the main program.</li>
<li>More of your methods and variables will probably be public. </li>
<li>If managing your own database tables, remember that the plug-in may be turned off and then turned back on a few versions later. So you can't depend on the same pref that tracks database version. You will have to store your own database version pref. If you add rows to the preference table, be sure that they are very very unique. Make sure to prefix them with a string that would be impossible for us to accidentally duplicate, as we did in the example.</li>
<li>When compiling the plugin project, the project's Assembly Name and Default Namespace properties should match the name of your plugin, excluding the file extension.</li>
</ol>
<br><h2>Patterns</h2>
<p>Our programmers add all requested hooks. We have documented very specific <a href="patternplugins.html">Plug-in Patterns</a> that we will follow when adding hooks. Users requesting hooks must understand these patterns in order to intelligently make hook requests.</p>
<h2>DLL Naming</h2>
<p>If the dll includes a double underscore (__) in its name, then it will be excluded from the file copy routine during an update. This allows the developer of a plug-in to control their own file distribution. This is frequently used with the technique described below for loading version-specific dlls.</p>
<p>There is a trigger available that will load a recently distributed dll. To turn on the trigger, use [VersionMajMin] in the plug-in name. For example, the plug-in might be entered as MyPlugin[VersionMajMin].dll. The bracketed section will be removed when loading the dll. So it will look for MyPlugin.dll as the dll to load. However, before it loads, it will look for a similar dll with a version number. For example, if using version 14.3.23, it would look for MyPlugin14.3.dll. If that file is found, it would replace MyPlugin.dll with the contents of MyPlugin14.3.dll, and then it would load MyPlugin.dll as normal. In a typical setting, this copy sequence gets triggered every time Open Dental starts up, ensuring a fresh copy of the dll. If Open Dental is on a newer version, and the dll is still on an older version with no matching [VersionMajMin], then Open Dental will attempt to load the old MyPlugin.dll.</p>
<p>The [VersionMajMin] naming may also be used to centrally distribute your plug-in. First, manually create a Plugins folder in the AtoZ folder, then put your plug-in dll into that location. So the centralized dll may be available at a location similar to this: \\server\OpenDentImages\Plugins\MyPlugin14.3.dll. Open Dental will find this dll and copy it to the local application folder as MyPlugin.dll. It will not do this if it first finds MyPlugin14.3.dll in the local application folder. Using this technique allows you to put the dll into one place on the local network and have it automatically distributed to all computers. You can even program the dll itself to put the new dll into the Plugins folder after downloading it from some internet location. Once a new dll is placed into Plugins, Open Dental should be forcefully closed on all workstations to cause them each to update the dll. The dll updates will not be done at the same time as an Open Dental version update, but instead separately. Since the dll will be freshly copied to each workstation every time OpenDental starts up, using this distribution technique can cause a slight delay when starting up.</p>
<p>If you get an error about "Access to the path 'C:\Program Files (x86)\Open Dental\MyPlugin.dll' is denied", then it means you will need to launch Open Dental as Admin each time.</p>
<p>Finally, there is always the very simple strategy of manually placing the dll into the application directory on each workstation. In this case, there would be no special file naming and no exclusion from the updates using a double underscore.</p>
<h2>Update Sequence</h2>
<p> The normal behavior of Open Dental is as follows:<br></p>
<ol>
<li>Any workstation may initiate a version update.<br></li>
<li>The Workstation Shutdown window is displayed to the user. When user clicks Continue, a row is inserted into the Signal table telling the Open Dental programs running on the other workstations to shut themselves down.<br></li>
<li>preference.UpdateInProgressOnComputerName is set to the name of the computer that initiated the update. This locks other users out.<br></li>
<li>Setup.exe is downloaded and run automatically.<br></li>
<li>User manually starts up Open Dental again.<br></li>
<li>Sometimes, especially if jumping to a new major or minor version, a database update will automatically run. Not common for a build update.<br></li>
<li>Open Dental will recognize that a new version is installed by comparing with preference.ProgramVersion.</li>
<li> The entire AtoZ\UpdateFiles folder is deleted. If it can't delete the folder for some reason, the user will be informed, and Open Dental will exit.<br></li>
<li>A fresh UpdateFiles folder is created.<br></li>
<li>All files are copied from the current application folder to the UpdateFiles folder except: FreeDentalConfig.xml, OpenDentalServerConfig.xml, any file that starts with 'openlog', and any file containing a double underscore (__). Also, folders are not copied.<br></li>
<li>Manifest.txt file created in UpdateFiles folder. Contents are very simple. For example: 7.2.5<br></li>
<li>preference.ProgramVersion updated to new version.<br></li>
<li>preference.UpdateInProgressOnComputerName set to empty string. This allows other workstations to connect.<br></li>
<li>When another workstation connects, it recognizes that preference.ProgramVersion does not match.<br></li>
<li>It checks Manifest.txt to see if the files for the needed version are available.<br></li>
<li>If the version in Manifest.txt matches, then UpdateFileCopier.exe is launched and OD closes.<br></li>
<li>UpdateFileCopier copies all files from UpdateFiles folder into its own application directory, including OpenDental.exe and UpdateFileCopier.exe.<br></li>
<li>OpenDental is automatically launched, and UpdateFileCopier automatically shuts down.<br></li>
<li>Because preference.ProgramVersion now matches, OD starts up normally.</li>
</ol>
		</div>
	</div>
</body>
</html>```

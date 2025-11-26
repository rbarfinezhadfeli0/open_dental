# File: ./www.opendental.com/site/sourcecode.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Source Code</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('sourcecode','programmingresources','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Source Code</p></div>
		<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a></p>
<p>The source code is sometimes made available to certain large customers under a signed Non Disclosure Agreement.</p>
<p><b>REQUIREMENT</b>: You must first install the <a href="trial.html">Trial Version</a> so you can see the files involved in the installation process. This is the ONLY way to get the initial database tables installed. Then you can later attempt to compile the source code files. </p>
<ul>
<li>See <a href="programmingresources.html">Programming Resources</a> for database documentation. </li>
<li>See <a href="https://opendentalsoft.com:1943/ODBugTracker/PreviousVersions.aspx">Previous Versions</a> for changes have been made since the last version.</li>
</ul>
<br><h3>Getting Started</h3><p><a href="https://github.com/OpenDental">https://github.com/OpenDental</a><br>  There is a separate branch for each Major/Minor version. Check out the branch you are interested in. We no longer post the Main (head) because it's not stable and we don't want someone to use it in a patient setting.</p>
<h3>Build</h3><p>It will take a few hours to set up the proper environment and to understand the issues below. But it only needs to be done once.</p>
<p><b>IDE</b> - Use Visual Studio 2019 on MS Windows computers. </p>
<ul>
<li>(there are some versions around 17 and 18 that use VS 2017)</li>
<li>Open Dental versions 15.3 and greater, use Visual Studio 2012 or 2015. <br></li>
<li>Open Dental versions 12.4 to 15.2, use Visual Studio 2012.<br></li>
<li>Open Dental versions 7.4 to 12.3, use Visual Studio 2010.<br></li>
<li>Open Dental versions 7.3 and earlier, use Visual Studio 2008.</li>
</ul>
<p><b>ResGen.exe Error</b> - You do not need to understand this error. Just know that Open Dental will not compile unless you follow these steps:</p>
<ol>
<li>Go to Start Menu, All Programs, Accessories, and right click on Command Prompt. Run as Admin.<br></li>
<li>If C:\Program Files (x86) exists (if you are using a 64 bit OS), copy and paste:<br><span style="font-family:'Courier New'">Cd "C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin"</span><br>  then Enter. If, instead, you are using a 32 bit OS, copy and paste:<br><span style="font-family:'Courier New'">Cd "C:\Program Files\Microsoft SDKs\Windows\v7.0A\Bin"</span><br>  then Enter.<br></li>
<li>Copy and paste:<br><span style="font-family:'Courier New'">Corflags /32Bit+ /Force ResGen.exe</span><br>  then Enter. If successful, you will see about 5 lines of text, including "warning CF011: The specified file is strong name signed".<br></li>
<li>If you are using C# Express and can't get past step 3 due to a missing Corflags.exe, also look the the subfolder "NETFX 4.0 Tools". If you can't find Corflags.exe on your computer, here's a copy: <a href="../resources/CorFlags.txt">CorFlags.txt</a>. After downloading it to the folder location described in step 2, rename it to CorFlags.exe, then try step 3 again. Let us know on the forum if that works or not.<br></li>
<li>Try to build Open Dental. If it fails with ResGen.exe errors, then confirm in your configuration manager that your build platform is x86, not AnyCPU. If it still fails, you may need to delete your .suo file and then reset your configuration.<br>  For more details on the entire ResGen.exe error issue, see <a href="https://devblogs.microsoft.com/visualstudio/resgen-exe-error-an-attempt-was-made-to-load-a-program-with-an-incorrect-format/">https://devblogs.microsoft.com/visualstudio/resgen-exe-error-an-attempt-was-made-to-load-a-program-with-an-incorrect-format/</a>.</li>
</ol>
<p><b>DirectX </b>- Open Dental won't compile unless the DirectX SDK is installed. There is a link to the SDK on the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7graphics.html">Graphics</a> page. </p>
<p><b>Configuration Manager</b> - Right click on the solution, and pick Configuration Manager. Solution configuration can be either Debug or Release, but Debug should not be used in a live setting because instead of printing, it will show print jobs on the screen. Solution platform should be x86. If you accidentally try to use the Any CPU configuration platform, it will crash<span data-teams="true"><span dir="ltr"> when closing any window</span></span>. For whichever configuration you choose to run, make sure that all (or most) projects are set to build by checking all the boxes.</p>
<p><b>Loader Lock - </b>Visual Studio has a bug when working with DirectX. The symptoms are that the program will compile, but will then crash when loading the 3D chart with an error about a LoaderLock detected. The solution is to disable the MDA debugger like this: Main menu, Debug, Windows, Exception Settings, Managed Debugging Assistants, Loader Lock, uncheck. For older versions of VS, disable it like this: Main menu, Debug, Exceptions, Managed Debugging Assistants, Loader Lock, uncheck.</p>
<p><b>MySQL Connector </b>- Installing this on your development machine will prevent compile errors in the Web Forms project. Even if this is not installed, the solution will compile and the other projects will run fine, but the error messages during compile are annoying. <a href="../resources/mysql-connector-net-6.3.7.msi">mysql-connector-net-6.3.7.msi</a> Install using the Complete option. If you still get the annoying errors, restart your machine, and possibly uninstall and reinstall the MySQL Connector; it can be flakey. A typical WebForm compile error that this will fix has to do with a "provider store" problem with the <b>ODWebServiceModel.edmx</b> file.</p>
<p><b>MS Enterprise Library</b> - Not needed. Here for reference. The Web Forms project depends on this library, but you should not need to install this library because we've included the dll's in the project. For reference, the library came from<br><a href="https://marketplace.visualstudio.com/items?itemName=akMSFT.MicrosoftEnterpriseLibrary">https://marketplace.visualstudio.com/items?itemName=akMSFT.MicrosoftEnterpriseLibrary</a><br>  If you do install it for some reason, towards the end of the installation, you can uncheck the box for the Source Installer.</p>
<p><b>Error: Mixed mode assembly</b> etc. We have already altered the app.config file for the Open Dental project to handle one of these errors. If you look closely at the remaining error, the filename is SGEN, which is an MS exe that generates a serialization assembly. The quick fix for this error is to right click the OD project, properties, build tab, and at the bottom, change 'generate serialization assembly' to off. This will, however, result in Open Dental running a little slower. A better fix is to find the sgen.exe, for example at "C:\Program Files\Microsoft SDKs\Windows\v7.0A\bin\NETFX 4.0 Tools\sgen.exe. Once you find it, create (or possibly alter) an sgen.exe.config to look like this:<br></p>
<div style="font-family:monospace; font-size:1.2rem">
<pre>&lt;?xml version ="1.0"?&gt;
&lt;configuration&gt;
    &lt;startup useLegacyV2RuntimeActivationPolicy="true"&gt;
       &lt;supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.0"/&gt;
    &lt;/startup&gt;
&lt;/configuration&gt;</pre></div>
<br><p>Visual Studio Professional 2012: This error can occur when you compile in Release mode with the 'Generate serialization assembly' flag turned on. To fix this error, create an sgen.exe.config file and place it in every folder where there is an sgen.exe file.</p>
<p>Possible sgen.exe locations (note the x86 paths that contain x64 folders):<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools\x64<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\NETFX 4.0 Tools\x64<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\NETFX 4.0 Tools<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\x64<br>  C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin<br>  C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin\x64<br>  C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin<br>  C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\NETFX 4.0 Tools\x64<br>  C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\NETFX 4.0 Tools<br>  C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\x64<br>  C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin<br></p>
<p><b>Hunspell dll</b> - As of v13.1, Open Dental now has spell check functionality. Spell checking is handled by NHunspell. There are three dll files added to the Required dlls folder: NHunspell.dll, Hunspellx86.dll, Hunspellx64.dll. The Hunspellx86.dll and Hunspellx64.dll files must be manually copied into the "...head\OpenDental\bin\Debug" and "...head\OpenDental\bin\Release" folders.</p>
<p><b>Error: The name 'OpenDentalHelp' does not exist in the current context</b> - In the OpenDental project, remove the OpenDentalHelp reference. Then right-click on "References" -&amp;gt; "Add Reference". Select the Browse dropdown and the Browse button. Locate the OpenDentalHelp.dll within the "Required dlls" folder and click Add.</p>
<p><b>Error: The name 'OpenDental.Thinfinity' does not exist in the current context</b> - In the OpenDental project, remove the VirtualWeb reference. Then right-click on "References" -&amp;gt; "Add Reference". Select the Browse dropdown and the Browse button. Locate the VirtualWeb.dll within the "Required dlls" folder and click Add."</p>
<p><b>Button graphics missing. - </b>As of 20.4 we have a project called Direct2dWrapper. This has a C++ dependency that needs to be installed in order for some graphics in Open Dental to display properly. The user may also need to make sure that the project builds properly and that the DLL is in the appropriate bin location.<br></p>
<p>See the <a href="programmingresources.html">Programming Resources</a> page, Source Code section for information on installation, distribution, versions, dll's, etc.</p>
<h3>Programming</h3><p>Here are some useful links related to programming.</p>
<p><a href="plugins.html">Plug-in</a>. <br></p>
<p><b>Bug Tracker</b> - We have our own bug tracking software that we built. See <a href="https://opendentalsoft.com:1943/ODBugTracker/PreviousVersions.aspx">Previous Versions</a>. The bug tracker is for our own internal use, although everyone can view it. We heavily manage the bug database to keep it very current. </p>
<p>Consider using such features as <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7displayfields.html">Display Fields</a> and <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7custompatientfields.html">Custom Patient Fields</a> instead of doing customized programming. </p>
		</div>
	</div>
</body>
</html>```

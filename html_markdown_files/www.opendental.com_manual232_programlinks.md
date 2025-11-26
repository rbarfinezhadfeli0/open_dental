# File: ./www.opendental.com/manual232/programlinks.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Program Links</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/programlinks.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/programlinks.html" >v24.2</option><option value="https://www.opendental.com/manual241/programlinks.html" >v24.1</option><option value="https://www.opendental.com/manual233/programlinks.html" >v23.3</option><option value="https://www.opendental.com/manual232/programlinks.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/programlinks.html" >v23.1</option><option value="https://www.opendental.com/manual224/programlinks.html" >v22.4</option><option value="https://www.opendental.com/manual223/programlinks.html" >v22.3</option><option value="https://www.opendental.com/manual222/programlinks.html" >v22.2</option><option value="https://www.opendental.com/manual221/programlinks.html" >v22.1</option><option value="https://www.opendental.com/manual214/programlinks.html" >v21.4</option><option value="https://www.opendental.com/manual213/programlinks.html" >v21.3</option><option value="https://www.opendental.com/manual212/programlinks.html" >v21.2</option><option value="https://www.opendental.com/manual211/programlinks.html" >v21.1</option><option value="https://www.opendental.com/manual205/programlinks.html" >v20.5</option><option value="https://www.opendental.com/manual204/programlinks.html" >v20.4</option><option value="https://www.opendental.com/manual203/programlinks.html" >v20.3</option><option value="https://www.opendental.com/manual202/programlinks.html" >v20.2</option><option value="https://www.opendental.com/manual201/programlinks.html" >v20.1</option><option value="https://www.opendental.com/manual194/programlinks.html" >v19.4</option><option value="https://www.opendental.com/manual193/programlinks.html" >v19.3</option><option value="https://www.opendental.com/manual192/programlinks.html" >v19.2</option><option value="https://www.opendental.com/manual191/programlinks.html" >v19.1</option><option value="https://www.opendental.com/manual184/programlinks.html" >v18.4</option><option value="https://www.opendental.com/manual183/programlinks.html" >v18.3</option><option value="https://www.opendental.com/manual182/programlinks.html" >v18.2</option><option value="https://www.opendental.com/manual181/programlinks.html" >v18.1</option><option value="https://www.opendental.com/manual174/programlinks.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Program Links</p></div>
<div class="GeneralPageContent">
<p>The Program Links window lists all the program bridges that can be linked from Open Dental. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Program Links</b>.</p>
<img src="images/programLinks.png" width="474" height="700"/><p>From here users can enable or disable a bridge, set up clickable toolbar buttons to access the bridge, and enter other bridge-specific information. For specific setup steps for each bridge, refer to the individual bridge page.</p>
<p class="MarginBottomZero">All supported bridges will list.  </p>
<ul class="MarginBottomGap">
<li>Bridges marked X and highlighted green are currently enabled.</li>
<li>If a program is not listed, it may be able to be set up as a <a href="bridgecustom.html">Custom Bridge</a>.</li>
</ul>
<p>We recommend having a Business Associate Agreement (BAA) in place with a third-party before enabling a program link. </p>
<h2>Program Link Settings</h2>
<p>Double-click a bridge to enter bridge settings on the Program Link window.</p>
<img src="images/bridgeExample.png" width="778" height="598"/><p>Each bridge window will auto-populate with default settings.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Internal Name</b>: The internal name of the bridge. Cannot be edited.</li>
<li><b>Description</b>: The name of the bridge as it shows in the list of program links. Can be edited.</li>
<li><b>Enabled</b>: Check to enable the bridge. Uncheck to disable the bridge.</li>
<li><b>Hide unused button</b>: This option only shows for bridges that have preset clickable buttons in Open Dental, if the bridge is disabled. Check the box to hide the button in the software.</li>
<li><b>Path of file to open</b>: The path to the program's executable (exe) on the computer or network. It can be a local path or a server path. This path will be used by all computers connected to the database, unless a <i>Local path override</i> is entered on an individual machine.</li>
<li><b>Local Path Override</b>: On an individual machine, enter a path to a program's executable (exe) that will override the <i>Path of file to open</i>. This is usually left blank.</li>
<li><b>Optional command line arguments</b>: If a program bridge requires a command line argument, it will be specified in the <i>Notes</i> area. Otherwise this is usually left blank.</li>
<li><b>Text on Button</b>: The text that will appear on the toolbar button.</li>
<li><b>Plug-in dll name</b>: See <a href="http://www.opendental.com/manual/plugins.html">Plug-In Framework</a>.</li>
<li><b>Additional Properties</b>: Set additional property values. Property values can be edited only. To change a value, double-click on a row. Enter the Value, then click OK to close. <br/><img src="images/programLinkProperty.png" width="551" height="261" class="ImageInParagraph"/></li>
<li><b>Notes</b>: Bridge specific instructions.</li>
<li><b>Output File</b>: Build an output file to custom bridges.</li>
</ul>
<h2>Button Settings</h2>
<p class="MarginBottomZero"><b>Hide Button for Clinics</b>: If using clinics, select which clinics the bridge applies to.<br/><img src="images/programLinkClinic.png" width="461" height="331" class="ImageInParagraph"/><br/></p>
<ul class="MarginBottomGap">
<li>Use the left and right arrows to move unneeded clinics to the Hidden column.</li>
<li>Hidden clinics will not show the bridge button. Visible clinics will show the bridge button in the selected toolbars.</li>
<li>When a clinic is hidden, the message <i>Program Link button is not visible for some clinics.</i> will appear in the Program Link window.</li>
<li><b>Order Alphabetical</b>: Check to order clinics in alphabetical order.</li>
</ul>
<p class="MarginBottomZero"><b>Add a button to these toolbars</b>: Select one or more areas to display the bridge button. </p>
<ul class="MarginBottomGap">
<li>AccountModule: <a href="account.html">Account Module</a> toolbar (second row).</li>
<li>ApptModule: <a href="appointments.html">Appointments Module</a> toolbar (second row).</li>
<li>ChartModule: <a href="chart.html">Chart Module</a> toolbar (second row).</li>
<li>ImagesModule: <a href="images.html">Imaging Module</a> toolbar (second row).</li>
<li>FamilyModule: <a href="family.html">Family Module</a> toolbar (second row).</li>
<li>TreatmentPlanModule: <a href="treatmentplan.html">Treatment Plan Module</a> toolbar (second row).</li>
<li>ClaimsSend: Does nothing.</li>
<li>Main Toolbar: <a href="toolbar.html">Main Toolbar</a> in every module.</li>
<li>ReportsMenu: The Reports dropdown menu.</li>
</ul>
<p class="MarginBottomZero"><b>Button Image</b>: Import an image that will show on the button.  <img src="images/programLinkButton.gif" width="107" height="26" style="margin-bottom: 0px"/></p>
<ul class="MarginBottomGap">
<li>Click<b> Import</b> to select an image file from the computer. The image must be 22x22 pixels.</li>
<li>Click <b>Clear </b>to remove an image.</li>
</ul>
<h2>Remote Desktop Solutions</h2>
<p class="MarginBottomZero">If there is a server using terminal services that users remotely connect to, consider using the Remote Executer program by MQ Technologies (<a href="http://www.mqtechnologies.com/en/home" target="_blank">http://www.mqtechnologies.com/en/home</a>). Remote Executer passes the command to launch the software to the local computer, instead of launching the program on the server computer. </p>
<ul class="MarginBottomGap">
<li>The <i>Path of file to open</i> should contain the path to Remote Executer.</li>
<li>Enter the path of the program to launch in the <i>Optional command line arguments</i> field.</li>
</ul>
<p>Here is an example of using Remote Executer to launch Notepad.</p>
<img src="images/remoteExecuter.png" width="653" height="80"/><h2>Troubleshooting</h2>
<p>If a bridge to an imaging program is not behaving well, first start Open Dental by running as an admin. The administrator privileges will then be inherited by the bridge program. If this works, set Open Dental to always run as admin:</p>
</div>
</div>
</body>
</html>```

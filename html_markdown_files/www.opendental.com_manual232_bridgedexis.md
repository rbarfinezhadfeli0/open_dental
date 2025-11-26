# File: ./www.opendental.com/manual232/bridgedexis.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dexis Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedexis','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgedexis.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgedexis.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedexis.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedexis.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedexis.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgedexis.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedexis.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedexis.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedexis.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedexis.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedexis.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedexis.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedexis.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedexis.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedexis.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedexis.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedexis.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedexis.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedexis.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedexis.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedexis.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedexis.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedexis.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedexis.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedexis.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedexis.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedexis.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedexis.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dexis Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Dexis</b>.</p>
<img src="images/bridgeDexis.png" width="778" height="598"/><p>Dexis is imaging software. Website: <a href="http://www.dexis.com" target="_blank">http://www.dexis.com</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on <b>Additional Properties</b> to change settings.  <ol>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Verify that the <b>InfoFile path</b> is a full file path.</li>
</ol>
</li>
<li>Set up a clickable bridge button:  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<h2>Technical Data</h2>
<p>The bridge sends patient data from Open Dental to the specified text file. Example file:</p>
<p class="codeblock">Mouse, Mickey 02/24/08 (17)</p><p class="codeblock">PN=17</p><p class="codeblock">LN=Mouse</p><p class="codeblock">FN=Mickey</p><p class="codeblock">BD=02/24/08</p><p class="codeblock">SX=M</p><p>Open Dental then launches Dexis, passing the file name as a command line argument. Example:</p>
<b>C:\DEXIS\DEXIS.EXE @InfoFile.txt</b><p>The patient number is the only required field in the text file. This means that Dexis likely organizes everything by patient number, and that patient numbers must be identical with those in Open Dental. This is not a problem for new setups with no patients entered in Dexis yet. But it may present a problem if you already have a number of patients entered in Dexis before you begin using Open Dental. The solution is to change the patient IDs in Dexis to match those in Open Dental. If Open Dental creates a new patient ID# which is different from the old Dexis ID#, you can easily fix it even if you have images in both Dexis charts. In the Dexis Admin window, scroll to the old patient ID# and click Modify Patient. Change the ID# manually to the new Open Dental ID#. The two Dexis charts will be merged into one. It can be easily done on a case by case basis as needed. After a while all your active patients will only have one ID# that matches their OD ID#.</p>
<h2>Conversions</h2>
<p>If you were using Dexis in stand alone mode, and/or the patient IDs do not match between your Dexis database and your Open Dental database, then you can contact Dexis to have them renumber the Dexis patient IDs. Dexis will usually renumber patient IDs for their customers for free (or at a nominal price). In order for Dexis to renumber the patient IDs they will request a spreadsheet containing certain patient information (patient ID, last name, first name, middle initial, and date of birth). Open Dental can provide you with this spreadsheet.</p>
<h2>Troubleshooting</h2>
<p><b>Error: Could not access C:\DEXIS\DEXIS.EXE</b></p>
<p class="MarginBottomZero">Possible Solutions: </p>
<ul class="MarginBottomGap">
<li>Usually this means that Dexis is not installed in the location specified for Path of file to open.</li>
<li>If it is properly installed in the location and can run outside of Open Dental, usually the issue is that the current user has permission issues on the directory containing the file infofile.txt. The default location for this file is <b>C:\Program Files\Open Dental</b>. This can be resolved by setting the InfoFile path to blank.</li>
<li>You may need to always run Open Dental as administrator for Dexis bridge to work if the path to the Dexis.exe file is already correct. You can set the Open Dental shortcut to always run as administrator by right clicking the icon and selecting Properties. Alternatively you could try moving the data file (InfoFile.txt) to a directory that does not require administrator level permissions (something like <b>@C:\ProgramData\Dexis\InfoFile.txt</b>).</li>
</ul>
</div>
</div>
</body>
</html>```

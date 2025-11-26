# File: ./www.opendental.com/manual232/bridgesirona.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sirona Sidexis Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgesirona','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgesirona.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgesirona.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgesirona.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgesirona.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgesirona.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgesirona.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgesirona.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgesirona.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgesirona.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgesirona.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgesirona.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgesirona.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgesirona.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgesirona.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgesirona.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgesirona.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgesirona.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgesirona.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgesirona.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgesirona.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgesirona.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgesirona.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgesirona.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgesirona.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgesirona.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgesirona.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgesirona.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgesirona.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sirona Sidexis Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Sirona Sidexis from www.sirona.com</b>.</p>
<img src="images/bridgeSirona.png" width="778" height="598"/><p>Sirona SIDEXIS XG is an imaging software. Website: <a href="https://www.dentsplysirona.com/en-us" target="_blank">www.dentsplysirona.com</a>.</p>
<p><div class="Note">Note: Sidexis 4 is different than Sidexis XG. To use the latest update for Sidexis 4, change the path of file to open to the correct exe (e.g., <b>C:\Program Files\Sirona\SIDEXIS4\sidexis4.exe</b>).</div>
</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>. <ul>
<li>The file path may vary. The correct file path must contain the <i>sifiledb.ini</i>.</li>
<li>Examples of possible paths are:<b> C:\Program Files\Sirona\SIDEXIS4\XG\sidexis.exe</b> or <b>C:\Program Files\Sirona\SIDEXIS4\sidexis4.exe</b></li>
</ul>
</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<h2>Technical Details</h2>
<p>A valid birthdate is required for the patient for the bridge to launch properly.</p>
<p>Dates are always sent to Sirona in European format "dd.mm.yyyy", as required by Sirona. In Canada and in other countries, if there is a mixture of computers in the office with different Windows Region and Language Settings, this may cause duplicate patients to be created by Sirona when comparing birthdates. This seems to especially be a problem if patients were manually entered into Sirona.</p>
<p>Open Dental reads the ini file, FromStation0 | File to determine location of comm file (sendBox) (siomin.sdx). For example, this File location indicates only one sendBox on the entire network:</p>
<p class="codeblock">[FromStation0]</p><p class="codeblock">File=F:\PDATA\siomin.sdx</p><br/><p>Open Dental then sets OfficeManagement | OffManConnected = 1 to make Sidexis ready to accept a message. For example:</p>
<p class="codeblock">[OfficeManagement]</p><p class="codeblock">OffManConnected=1</p><br/><p>Open Dental then adds a "U" section to the comm file (siomin.sdx), signifying Update patient in Sidexis. The entire "U" section gets ignored by Sidexis if this is a new patient. Open Dental leaves the "initial patient id" blank, causing the patient id used in Sidexis to get updated to the PatNum or ChartNumber used in Open Dental.</p>
<p>Open Dental then adds a "N" section to the comm file. N signifies create New patient in Sidexis. If patient already exists, then it simply updates any old data.</p>
<p>Open Dental then adds an "A" section to the comm file. A signifies Autoselect patient.</p>
<p>In each of the three sections discussed above, the full name and birthdate are included, and Sidexis seems to use name and birthdate to identify patients.</p>
<p>Open Dental then launches Sidexis.exe.</p>
<p>A troubleshooting step would be to get a copy of the ini file before Sidexis is launched, possibly by changing the program link to launch a dummy file instead of Sidexis.exe. This would prevent consumption of the ini file.</p>
</div>
</div>
</body>
</html>```

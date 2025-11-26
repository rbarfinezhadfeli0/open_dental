# File: ./www.opendental.com/manual232/bridgescanora.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Scanora Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgescanora','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgescanora.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgescanora.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgescanora.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgescanora.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgescanora.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgescanora.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgescanora.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgescanora.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgescanora.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgescanora.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgescanora.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgescanora.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgescanora.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgescanora.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgescanora.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgescanora.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgescanora.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgescanora.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgescanora.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgescanora.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgescanora.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgescanora.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgescanora.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgescanora.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgescanora.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgescanora.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgescanora.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgescanora.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Scanora Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Scanora from www.soredex.com</b>.</p>
<img src="images/bridgeScanora.png" width="770" height="594"/><p>Scanora is a cone beam tomography and optional 2D panoramic imaging system in one. Website: <a href="https://www.kavo.com/en-us/?lang=en-us" target="_blank">https://www.kavo.com/en-us/?lang=en-us</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the<b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ol>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set <b>Import.ini path</b> for the <span class="codeblock">C:\ProgramData\Scanora\Scanora.ini</span> file.</li>
</ol>
</li>
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
<p>This is an example of what your ini should look like:</p>
<p class="codeblock">[PracticeManagementInterface]</p><p class="codeblock">CLEAR_PRACTICE_MANAGEMENT_AUTOMATICALLY = 1</p><p class="codeblock">USE_PRACTICE_MANAGEMENT = 1</p><p class="codeblock">PATID = 443672</p><p class="codeblock">PATLNAME = Test1</p><p class="codeblock">PATMNAME = </p><p class="codeblock">PATFNAME = Scanora</p><p class="codeblock">PATSOCSEC = 123456789</p><p class="codeblock">PATBD = 1980-10-20</p><p class="codeblock">PROVIDER1 = Jessica Castaneda, FNP</p><p class="codeblock">PROVIDER2 = doc Testnew</p><p class="codeblock">ADDRESS1 = 1234thst</p><p class="codeblock">ADDRESS2 = </p><p class="codeblock">CITY = Albany</p><p class="codeblock">STATE = OR</p><p class="codeblock">ZIP = 97321</p><p class="codeblock">HOMEPHONE = 5415222222</p><p class="codeblock">WORKPHONE = 5412222222</p><p class="codeblock">EMAIL1 = abc@gmail.com</p><br/><p>Your ini file should be in the ANSI encoding file format with a leading blank line.</p>
</div>
</div>
</body>
</html>```

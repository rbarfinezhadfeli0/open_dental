# File: ./www.opendental.com/manual232/bridgepracticebynumbers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Practice by Numbers Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgepracticebynumbers','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgepracticebynumbers.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgepracticebynumbers.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgepracticebynumbers.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgepracticebynumbers.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgepracticebynumbers.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgepracticebynumbers.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgepracticebynumbers.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgepracticebynumbers.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgepracticebynumbers.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgepracticebynumbers.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgepracticebynumbers.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgepracticebynumbers.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgepracticebynumbers.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgepracticebynumbers.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgepracticebynumbers.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgepracticebynumbers.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgepracticebynumbers.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgepracticebynumbers.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgepracticebynumbers.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgepracticebynumbers.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgepracticebynumbers.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgepracticebynumbers.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgepracticebynumbers.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgepracticebynumbers.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgepracticebynumbers.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgepracticebynumbers.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgepracticebynumbers.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgepracticebynumbers.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Practice by Numbers Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Practice by Numbers</b> .</p>
<img src="images/bridgePracticebyNumbers.png" width="778" height="598"/><p>Practice by Numbers integrates your practice management and accounting data and creates custom dashboards and reports.</p>
<p>To sign up for Practice by Numbers and begin using their services, visit their website: <a href="http://www.practicenumbers.com/opendental/?utm_source=opendental&amp;utm_medium=opendentalpms&amp;utm_campaign=opendentalpartnership" target="_blank">Practice by Numbers</a>. Users must be signed up for Practice by Numbers to use the bridge in Open Dental. Once set up and the bridge is enabled, click the Practice by Numbers button in <a href="reportsstandard.html">Standard Reports</a> to launch the account.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>Set up a clickable bridge button. <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button. <br/> Leave blank to show this button in the Reports window only.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<p>To remove the Practice by Numbers button from the Reports window, uncheck Enabled, then check <b>Hide Unused Button</b>.</p>
</div>
</div>
</body>
</html>```

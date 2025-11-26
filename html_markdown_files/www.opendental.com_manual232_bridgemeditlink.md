# File: ./www.opendental.com/manual232/bridgemeditlink.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medit Link Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgemeditlink','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgemeditlink.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgemeditlink.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgemeditlink.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgemeditlink.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgemeditlink.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgemeditlink.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgemeditlink.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgemeditlink.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgemeditlink.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgemeditlink.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgemeditlink.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgemeditlink.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgemeditlink.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgemeditlink.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgemeditlink.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgemeditlink.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgemeditlink.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgemeditlink.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgemeditlink.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgemeditlink.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgemeditlink.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgemeditlink.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgemeditlink.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgemeditlink.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgemeditlink.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgemeditlink.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgemeditlink.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgemeditlink.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medit Link Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. <b>Medit Link from www.meditlink.com</b>.</p>
<img src="images/bridgeMeditLink.png" width="778" height="598"/><p>Medit Link is a software from <a href="https://www.meditlink.com/home" target="_blank">meditlink.com</a>.</p>
<p>To enable this bridge:</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>. Typically file path is <b>C:\Program Files\Medit\Medit Link\Medit Link\Medit_Link.exe</b>.</li>
<li>Verify the Optional Command line arguments: <span class="codeblock">{\"NameFL\": \"[NameFL]\", \"PatNum\": \"[PatNum]\", \"PatientGenderMF\": \"[PatientGenderMF]\", \"Birthdate_yyyyMMdd\": \"[Birthdate_yyyyMMdd]\"}</span><ul>
<li> PatientID of Medit Link will be from Open Dental's PatNum.</li>
</ul>
</li>
<li>Set up a clickable bridge button. <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels). </li>
<li>Click <b>OK</b>.</li>
</ol>
</li>
<li>Users who have already downloaded Medit Link, log into Medit Link App and install <i>Open Dental Integration App</i> in the App Box.</li>
</ol>
</div>
</div>
</body>
</html>```

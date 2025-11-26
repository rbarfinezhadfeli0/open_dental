# File: ./www.opendental.com/manual232/bridgedigora.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Digora Soredex Optime Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedigora','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgedigora.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgedigora.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedigora.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedigora.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedigora.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgedigora.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedigora.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedigora.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedigora.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedigora.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedigora.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedigora.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedigora.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedigora.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedigora.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedigora.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedigora.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedigora.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedigora.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedigora.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedigora.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedigora.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedigora.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedigora.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedigora.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedigora.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedigora.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedigora.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Digora Soredex Optime Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Digora from www.soredex.com</b>. </p>
<img src="images/bridgeDigora.png" width="778" height="598"/><p>Soredex is an imaging system also known as Digora. The Digora bridge works for versions up to 2.1. Website: <a href="https://dexis.com/en-us/digora-optime" target="_blank">https://dexis.com/en-us/digora-optime</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
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
<ul>
<li>The Digora bridge uses the Windows clipboard to pass commands to Digora. We used the specifications for Digora 2.1 dated 6/26/2002, although it almost certainly works with later versions as well.</li>
<li>Digora must be running when the bridge button is clicked in Open Dental. If not, you may see an error or no action will occur.</li>
<li>Digora will not automatically be brought to the focus when the bridge button is clicked in Open Dental.</li>
</ul>
<p>Clicking the bridge button in Open Dental will put a string similar to this on the clipboard:</p>
<p class="codeblock">$$DFWIN$$ OPEN -n"Smith, John" -c"1234" -r -a</p><p>This should trigger Digora to open the patient card for the specified name and code pair. In the example above, the name is Smith, John and the patient code is 1234. If the patient doesn't exist in Digora, the -r flag that you see above tells Digora to create that new patient. The -a flag tells Digora to change focus to itself.</p>
<p><b>Troubleshooting</b>: Close Digora, click the Digora button in Open Dental, then open a text editing program and paste so you can see the command Digora adds to the clipboard.</p>
<p><b>Potential pitfalls</b>: We don't know how Digora monitors the clipboard so that it knows when a command is present. There might be a setting in Digora that needs to be turned on in order to enable the clipboard monitoring. This is not addressed in the bridge specifications we were provided.</p>
</div>
</div>
</body>
</html>```

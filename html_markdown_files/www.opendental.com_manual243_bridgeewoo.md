# File: ./www.opendental.com/manual243/bridgeewoo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EzDenti Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeewoo','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgeewoo.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgeewoo.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeewoo.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeewoo.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeewoo.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgeewoo.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeewoo.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeewoo.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeewoo.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeewoo.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeewoo.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeewoo.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeewoo.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeewoo.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeewoo.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeewoo.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeewoo.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeewoo.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeewoo.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeewoo.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeewoo.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeewoo.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeewoo.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeewoo.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeewoo.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeewoo.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeewoo.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeewoo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EzDenti Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>EzDenti</b>.</p>
<img src="images/bridgeEZDenti.png" width="770" height="594"/><p>EzDenti is an imaging product from Vatech. Website: <a href="https://vatechamerica.com/products/ezdent-i" target="_blank">https://vatechamerica.com/products/ezdent-i</a>.</p>
<p>If using Ez3Di for 3-D imaging, set up the <a href="bridgeez3di.html">Ez3Di Bridge</a>.</p>
<p>This bridge can also be used for GoodDrs (DrsViewer Pro). <a href="https://gooddrs.us/" target="_blank">https://gooddrs.us/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>. <ul>
<li>EZDent-i, 2.3.6 -or- Older version: replace the Path to open with:<b>C:\Program Files (x86)\VATECH\EzDent-i\Bin\VTEzDent-iLoader32.exe</b></li>
<li>EZDent-i, 3.0.0 -or- Newer version: replace the Path to open with:<b>C:\Program Files (x86)\VATECH\EzDent-i\Bin\VTE2Loader32.exe</b></li>
<li>Alternatively - VTEzBridge.exe can also be used for either version</li>
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
<li>Click Save</li>
</ol>
<h2>Technical Details</h2>
<p>The bridge sends patient data from Open Dental to an XML text file. Example file:</p>
<p><p class="codeblock">&lt;LinkageParameter&gt; </p><p class="codeblock"> &lt;Patient LastName="Smith" FirstName="John" ChartNumber="123"&gt;</p><p class="codeblock"> &lt;Birthday&gt;18/12/1972&lt;/Birthday&gt;</p><p class="codeblock"> &lt;Address&gt;123 Main St, Salem, OR&lt;/Address&gt;</p><p class="codeblock"> &lt;ZipCode&gt;97302&lt;/ZipCode&gt;</p><p class="codeblock"> &lt;Phone&gt;(503)363-5432&lt;/Phone&gt;</p><p class="codeblock"> &lt;Mobile&gt;(503)215-3215&lt;/Mobile&gt;</p><p class="codeblock"> &lt;SocialID&gt;123456789&lt;/SocialID&gt;</p><p class="codeblock"> &lt;Gender&gt;Male&lt;/Gender&gt; </p><p class="codeblock"> &lt;/Patient&gt;</p><p class="codeblock">&lt;/LinkageParameter&gt;</p></p>
<p>The text file is called linkage.xml, and is created in the same folder on the local computer as the EzDenti program is located.</p>
<p>Open Dental then launches EzDenti, which picks up the information in the linkage.xml file.</p>
<p>If no file is present, EzDenti opens with no patient selected.</p>
<p>If the patient is not recognized by EasyDent, a new patient is created in EzDenti.</p>
</div>
</div>
</body>
</html>```

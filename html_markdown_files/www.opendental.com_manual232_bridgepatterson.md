# File: ./www.opendental.com/manual232/bridgepatterson.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patterson Imaging Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgepatterson','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgepatterson.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgepatterson.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgepatterson.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgepatterson.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgepatterson.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgepatterson.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgepatterson.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgepatterson.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgepatterson.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgepatterson.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgepatterson.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgepatterson.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgepatterson.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgepatterson.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgepatterson.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgepatterson.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgepatterson.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgepatterson.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgepatterson.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgepatterson.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgepatterson.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgepatterson.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgepatterson.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgepatterson.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgepatterson.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgepatterson.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgepatterson.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgepatterson.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patterson Imaging Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Patterson Imaging from Patterson Dental Supply Inc</b>.</p>
<img src="images/bridgePatterson.png" width="778" height="598"/><p>Patterson is an imaging software. Website: <a href="https://www.pattersondental.com/" target="_blank">www.pattersondental.com</a>. This bridge only works with Patterson Imaging version 15 or newer.</p>
<p><div class="Note">Note: Patterson appears to have stopped selling their standalone imaging software (Patterson Imaging) as a product that can be used by dentists transitioning from Patterson Eaglesoft Digital Integration to other Practice Management software, like Open Dental.</div>
</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Enter the <b>System path to Patterson Imaging ini</b>.</li>
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
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>The bridge matches patients based on SSN. If SSN is not present, then it matches on FirstName, LastName, BirthDate.</li>
<li>If no patient is found matching those criteria, then it creates a new patient in Patterson Imaging.</li>
<li>The Path of file to open can vary depending on where the exe is stored on your computer. It may be <b>C:\Patterson Imaging\Shared Files\Imaging.exe</b></li>
</ul>
<p><b>Patterson Imaging</b></p>
<p>We have posted information about Patterson Imaging availability because there may be fewer options for dentists moving from Patterson Eaglesoft with integrated imaging. We want our customers to know this before leaving Patterson Eaglesoft, as they may need to switch to another imaging solution if they do so.</p>
<p>As of 01/22/2018, we have been told that Apteryx and XDR are capable of converting the Patterson Eaglesoft Digital Integration x-rays to their digital software for a fee.</p>
<p>On 3/8/2017, a Patterson representative from the Patterson Technology Center told Open Dental that new Patterson Imaging licenses are no longer available for sale from Patterson and that this had been true since 2/17/2017. We contacted Patterson because multiple customers (Open Dental customers in common with Patterson) called us and told us Patterson was telling them that switching from Patterson Eaglesoft Practice Management software to Open Dental would mean they would not be able to access the images through a new Patterson Imaging installation. We were further told by Patterson that dentists may purchase an existing Patterson Imaging license from another dentist, but even then, Patterson will no longer assist in pointing Patterson Imaging at a database created with Patterson Eaglesoft Digital Integration.</p>
</div>
</div>
</body>
</html>```

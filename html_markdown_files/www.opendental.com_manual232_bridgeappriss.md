# File: ./www.opendental.com/manual232/bridgeappriss.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appriss Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeappriss','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgeappriss.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgeappriss.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeappriss.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeappriss.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeappriss.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgeappriss.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeappriss.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeappriss.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeappriss.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeappriss.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeappriss.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeappriss.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeappriss.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeappriss.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeappriss.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeappriss.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeappriss.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeappriss.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeappriss.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeappriss.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeappriss.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeappriss.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeappriss.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeappriss.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeappriss.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeappriss.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeappriss.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeappriss.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appriss Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>, <b>Appriss</b>.</p>
<img src="images/appriss.png" width="778" height="598"/><p><div class="Note">Note: Appriss is also known as Bamboo.</div>
</p>
<p>The Appriss PDMP (Prescription Drug Monitoring Program) bridge is for users outside of California, Illinois, Kentucky, Maryland, Utah, and Washington. Users in those states use the <a href="bridgepdmpillinois.html">PDMP Bridge</a> instead. Users must be on support with Open Dental to use this feature.</p>
<p>If not yet registered for PDMP, register here: <a href="https://info.apprisshealth.com/ehrrequest" target="_blank">https://info.apprisshealth.com/ehrrequest </a></p>
<p class="MarginBottomZero">The following must be set before using the PDMP bridge:  </p>
<ul class="MarginBottomGap">
<li><a href="providerseditwindow.html">Providers</a> must have a First Name, Last Name, DEA Number, and National Provider ID entered. </li>
<li><a href="patientedit.html">Patients</a> must have a First Name, Last Name, Birthdate, and Zip Code entered.</li>
<li>The logged-on <a href="securityusers.html">User</a> must be associated with a provider.</li>
<li>The <a href="opendentalservice.html">Open Dental Service</a> must be installed and running.</li>
</ul>
<p class="MarginBottomZero">To enable the bridge, set the following information: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-Click into each of the <b>Additional Properties</b> to enter login credentials. These are issued by Bamboo and are required. <ul>
<li><b>PDMP Provider License Field</b>: Enter the state license or the state Rx ID. If this field is left blank, the state license is used.</li>
<li><b>Appriss Username</b>: Username as given by Bamboo.</li>
<li><b>Appriss Password</b>: Password as given by Bamboo.</li>
<li><b>Appriss FacilityID</b>: Practice name.</li>
</ul>
</li>
<li>Set up a clickable bridge button. <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Change the <b>Text on button</b> if desired.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels). </li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
</div>
</div>
</body>
</html>```

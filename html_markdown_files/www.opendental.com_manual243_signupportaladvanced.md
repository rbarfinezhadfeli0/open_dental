# File: ./www.opendental.com/manual243/signupportaladvanced.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eServices Signup Advanced</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('signupportaladvanced','eservicessignup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/signupportaladvanced.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/signupportaladvanced.html" >v24.2</option><option value="https://www.opendental.com/manual241/signupportaladvanced.html" >v24.1</option><option value="https://www.opendental.com/manual233/signupportaladvanced.html" >v23.3</option><option value="https://www.opendental.com/manual232/signupportaladvanced.html" >v23.2</option><option value="https://www.opendental.com/manual231/signupportaladvanced.html" >v23.1</option><option value="https://www.opendental.com/manual224/signupportaladvanced.html" >v22.4</option><option value="https://www.opendental.com/manual223/signupportaladvanced.html" >v22.3</option><option value="https://www.opendental.com/manual222/signupportaladvanced.html" >v22.2</option><option value="https://www.opendental.com/manual221/signupportaladvanced.html" >v22.1</option><option value="https://www.opendental.com/manual214/signupportaladvanced.html" >v21.4</option><option value="https://www.opendental.com/manual213/signupportaladvanced.html" >v21.3</option><option value="https://www.opendental.com/manual212/signupportaladvanced.html" >v21.2</option><option value="https://www.opendental.com/manual211/signupportaladvanced.html" >v21.1</option><option value="https://www.opendental.com/manual205/signupportaladvanced.html" >v20.5</option><option value="https://www.opendental.com/manual204/signupportaladvanced.html" >v20.4</option><option value="https://www.opendental.com/manual203/signupportaladvanced.html" >v20.3</option><option value="https://www.opendental.com/manual202/signupportaladvanced.html" >v20.2</option><option value="https://www.opendental.com/manual201/signupportaladvanced.html" >v20.1</option><option value="https://www.opendental.com/manual194/signupportaladvanced.html" >v19.4</option><option value="https://www.opendental.com/manual193/signupportaladvanced.html" >v19.3</option><option value="https://www.opendental.com/manual192/signupportaladvanced.html" >v19.2</option><option value="https://www.opendental.com/manual191/signupportaladvanced.html" >v19.1</option><option value="https://www.opendental.com/manual184/signupportaladvanced.html" >v18.4</option><option value="https://www.opendental.com/manual183/signupportaladvanced.html" >v18.3</option><option value="https://www.opendental.com/manual182/signupportaladvanced.html" >v18.2</option><option value="https://www.opendental.com/manual181/signupportaladvanced.html" >v18.1</option><option value="https://www.opendental.com/manual174/signupportaladvanced.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eServices Signup Advanced</p></div>
<div class="GeneralPageContent">
<p>Use the Advanced View to sign up for eServices for multiple clinics at once.</p>
<p>In <a href="eservicessignup.html">eServices Signup</a>, click <b>Advanced View</b>.</p>
<img src="images/eServicesAdvancedView.png" width="915" height="506"/><p>This view opens by default when the practice has multiple locations (i.e., the Clinics feature is enabled).</p>
<p><div class="Note">Note: <ul>
<li>Fees displayed on the screenshot above may not be current. Refer to <a href="fees.html">Fees for Support and Services</a> for the most up-to-date pricing.</li>
<li>For Open Dental Cloud users, this window opens in a new web browser session.</li>
</ul>
</div>
</p>
<p><b>Country Code</b>: Used for <a href="../site/textintegrated.html">Integrated Texting Feature</a> only and determines texting phone number and per message fees. Select the country the practice is in. If practice's country is not listed, contact Open Dental support to see if the service is available.</p>
<p><b>Permission Level</b>: The security permission level of the logged-on user. Users with the <i>Security Admin</i> permission have full permissions and can change eService settings. Users without this permission have read-only access.</p>
<p class="MarginBottomZero"><b>eServices</b>: </p>
<ul class="MarginBottomGap">
<li>If there are multiple clinics, there is a row for each location. Each clinic can sign up for different eServices.</li>
<li>Under each eService column header is the monthly price, per location.</li>
<li>Hover over an eService column header to view a description and service terms.</li>
<li>Each checkbox indicates whether the eService is currently active, pending stop, or inactive. Click in a box to change its status.  <ul>
<li>Checked: eService is currently active. Patient Portal and Web Forms are free for those on support thus they are always active.</li>
<li>Unchecked: The eService is not active.Click the Info button in the upper right to view the Next Bill Date.</li>
<li>Totals: As eServices are selected, the total $ amounts update to reflect new charges.</li>
</ul>
</li>
<li>Yellow highlight: eClipboard and Mobile highlight in yellow if <a href="mobilesettings.html">Mobile Settings</a> for the clinic are incomplete. </li>
</ul>
<p><b>Save</b>: Apply eService changes. Charges are reflected in the practice's next statement. A warning displays if Mobile Settings for a clinic are not set up and eClipboard or Mobile is selected.</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual232/newcroptroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - NewCrop eRx Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcroptroubleshooting','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/newcroptroubleshooting.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/newcroptroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcroptroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcroptroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcroptroubleshooting.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/newcroptroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcroptroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcroptroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcroptroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcroptroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcroptroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcroptroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcroptroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcroptroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcroptroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcroptroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcroptroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcroptroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcroptroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcroptroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcroptroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcroptroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcroptroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcroptroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcroptroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcroptroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcroptroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcroptroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>NewCrop eRx Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>Below is troubleshooting help for the <a href="newcrop.html">NewCrop eRx / Prescription</a> interface.</p>
<p><p><b>I can open NewCrop eRx, but I can't click anything once the window opens.</b></p>
</p>
<p>Open Dental needs to be updated to at least version 21.2. See <a href="update.html">Update</a>.</p>
<p><p><b>Problem: I keep getting a message that information is missing. What information is required for NewCrop eRx?</b></p>
</p>
<img src="images/eRxMissingInfo.png" width="491" height="138"/><p>Solution: See <a href="newcroprequiredinfo.html">Required NewCrop eRx Information</a></p>
<p><b>Problem: eRx Button turns red. </b></p>
<p>This can occur when eRx is clicked in the toolbar, or when switching to the Chart module, causing Open Dental to attempt a sync with NewCrop eRx to automatically copy completed prescriptions into the patient's Medication List and Progress Notes.</p>
<p class="MarginBottomZero">Solution: The button turns red when Open Dental has attempted to communicate with NewCrop eRx and failed. It may be that communication failed for a random reason. First try reloading the Chart module to see if the problem fixed itself. If the problem continues, you need to determine what is causing the failure to communicate, then address it. Some common causes are listed below. </p>
<ol class="MarginBottomGap">
<li>Intermittent internet connection issues or internet down. To determine if it is an internet issue, in an internet browser go to google.com and refresh the page. If the page will not load, there might be an internet issue.</li>
<li>Hardware Firewall issue: If all computers connected to the hardware are experiencing the same issue, it could be a hardware firewall issue. If two workstations use the same networking components and one works while another does not, it is not a hardware issue. Instead see #3 below.</li>
<li>Software desktop firewall issue: Open specific ports, or add an exception to the software firewall for the Open Dental application. Adding an exception for Open Dental would also allow other communication from Open Dental in the future (e.g. other web service communications as a result of new features).</li>
<li>Anti-virus software: Add an exception to the Open Dental application for the same reason stated in #3.</li>
<li>DNS: On the workstation with the error, open a web browser and type in "secure.newcropaccounts.com". If DNS is working, you will get an access forbidden message. Assuming your internet is working, if DNS is not working, you will see a "404 page not found" message.</li>
<li>If you do not use electronic prescriptions, consider disabling the electronic Rx program link in Setup, Program Links.</li>
</ol>
<p><b>Problem: Pharmacy claims they did not receive a transmitted prescription.</b></p>
<p>Solution: See <a href="newcropmissingrx.html">Report a Failed or Missing Prescription in NewCrop eRx</a></p>
<p>The information below includes technical information about NewCrop eRx.</p>
<h2>Technical Details</h2>
<p class="MarginBottomZero"><p><b>How are users with multiple locations or providers tracked?</b></p>
</p>
<ul class="MarginBottomGap">
<li>There are three identifiers that NewCrop eRx uses to divide information logically: AccountID, SiteID, and LocationID.</li>
<li>For each unique AccountID and SiteID pair, a unique database is created at NewCrop eRx. Open Dental always sends a SiteID equal to 1, therefore unique NewCrop eRx databases will only be created for each unique AccountID.</li>
<li>NewCrop eRx Provider IDs (Open Dental ProvNums) must be unique for each NewCrop eRX AccountID, and to meet this requirement, Open Dental automatically creates a unique AccountID for each logical database the first time an electronic prescription is sent from that database.</li>
<li>NewCrop eRx Provider IDs (Open Dental ProvNums) must be unique for each NewCrop eRx AccountID, and to meet this requirement, Open Dental automatically creates a unique AccountID for each logical database the first time an electronic prescription is sent from that database.</li>
<li>The AccountID format is the Open Dental customer account number followed by a dash followed by 5 random alpha-numeric characters. For example, 1234-T2d28. There is no way for the user to edit the AccountID.</li>
<li>Open Dental always sends a LocationID of "0" if clinics are not being used. Otherwise, the ClinicNum is sent for the LocationID. Within the NewCrop eRx interface, the user can view information for a single location or for all locations.</li>
</ul>
<p>All providers that share the same NPI number are treated as a single provider for eRx purposes.</p>
<p>GUID values: When electronic prescriptions are copied into the Chart module (when Chart module is refreshed), corresponding prescriptions and medications in Open Dental are identified by a GUID value supplied by NewCrop eRx. The GUID is how Open Dental determines if a record has already been created.</p>
</div>
</div>
</body>
</html>```

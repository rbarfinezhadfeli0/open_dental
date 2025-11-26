# File: ./www.opendental.com/manual232/portalsettings.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal Settings</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portalsettings','eservicessignup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/portalsettings.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/portalsettings.html" >v24.2</option><option value="https://www.opendental.com/manual241/portalsettings.html" >v24.1</option><option value="https://www.opendental.com/manual233/portalsettings.html" >v23.3</option><option value="https://www.opendental.com/manual232/portalsettings.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/portalsettings.html" >v23.1</option><option value="https://www.opendental.com/manual224/portalsettings.html" >v22.4</option><option value="https://www.opendental.com/manual223/portalsettings.html" >v22.3</option><option value="https://www.opendental.com/manual222/portalsettings.html" >v22.2</option><option value="https://www.opendental.com/manual221/portalsettings.html" >v22.1</option><option value="https://www.opendental.com/manual214/portalsettings.html" >v21.4</option><option value="https://www.opendental.com/manual213/portalsettings.html" >v21.3</option><option value="https://www.opendental.com/manual212/portalsettings.html" >v21.2</option><option value="https://www.opendental.com/manual211/portalsettings.html" >v21.1</option><option value="https://www.opendental.com/manual205/portalsettings.html" >v20.5</option><option value="https://www.opendental.com/manual204/portalsettings.html" >v20.4</option><option value="https://www.opendental.com/manual203/portalsettings.html" >v20.3</option><option value="https://www.opendental.com/manual202/portalsettings.html" >v20.2</option><option value="https://www.opendental.com/manual201/portalsettings.html" >v20.1</option><option value="https://www.opendental.com/manual194/portalsettings.html" >v19.4</option><option value="https://www.opendental.com/manual193/portalsettings.html" >v19.3</option><option value="https://www.opendental.com/manual192/portalsettings.html" >v19.2</option><option value="https://www.opendental.com/manual191/portalsettings.html" >v19.1</option><option value="https://www.opendental.com/manual184/portalsettings.html" >v18.4</option><option value="https://www.opendental.com/manual183/portalsettings.html" >v18.3</option><option value="https://www.opendental.com/manual182/portalsettings.html" >v18.2</option><option value="https://www.opendental.com/manual181/portalsettings.html" >v18.1</option><option value="https://www.opendental.com/manual174/portalsettings.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal Settings</p></div>
<div class="GeneralPageContent">
<p>Determine which tabs a patient has access to in the Patient Portal.</p>
<p>In <a href="eservicessignup.html">eServices Signup</a>, click <b>More Settings</b>.</p>
<img src="images/signupPortalMoreSettings.png" width="915" height="550"/><p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><a href="portalhostedbyod.html">Patient Portal</a> to navigate to the Patient Portal URL. </li>
<li><a href="portalaccess.html">Patient Portal Access</a> to grant patient access to Patient Portal.</li>
</ul>
<h2>Patient Portal Features</h2>
<p class="MarginBottomZero">Check each feature patients should have access to in the Patient Portal. </p>
<ul class="MarginBottomGap">
<li><b>MakePayments</b>: Patients can make online payments using the <a href="paymentportalsetup.html">Payment Portal</a>.</li>
<li><b>ModuleAccount</b>: Patients can view payments and statements.</li>
<li><b>ModuleWebMail</b>: Patients can use Secure <a href="securewebmailsend.html">WebMail</a> or Secure Email to view, compose, and send messages between themselves and the provider.</li>
<li><b>ModuleCareSummary</b>: Patients can view, download, and transmit care summaries. See <a href="ehrccd.html">EHR Continuity of Care Document ( CCD )</a>. </li>
<li><b>ModuleImages</b>: Patients can view and download PDFs or images stored in Images folders shared to the portal.</li>
<li><b>MakeAppointments</b>: Patients can view scheduled and completed appointments and other action needed items, such as eConfirmations that need confirmed and Web Sched Recall notifications that are still unscheduled.</li>
<li><b>ModuleTreatmentPlan</b>: Patients can view saved treatment plans.</li>
</ul>
<p>Click <b>Submit</b> to apply changes. It may take up to 15 minutes for changes to take effect.</p>
<p></p>
</div>
</div>
</body>
</html>```

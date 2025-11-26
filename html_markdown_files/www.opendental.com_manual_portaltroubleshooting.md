# File: ./www.opendental.com/manual/portaltroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal Troubleshooting</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portaltroubleshooting','portalhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/portaltroubleshooting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/portaltroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/portaltroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/portaltroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/portaltroubleshooting.html" >v23.2</option><option value="https://www.opendental.com/manual231/portaltroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/portaltroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/portaltroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/portaltroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/portaltroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/portaltroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/portaltroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/portaltroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/portaltroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/portaltroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/portaltroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/portaltroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/portaltroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/portaltroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/portaltroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/portaltroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/portaltroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/portaltroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/portaltroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/portaltroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/portaltroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/portaltroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/portaltroubleshooting.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>Below is some general guidance if you experience issues with the <a href="portalhostedbyod.html">Patient Portal</a>.</p>
<p><b>Internal server error. Please notify the dental office to call support or try again later.</b></p>
<p class="MarginBottomZero">Solution: This occurs when a patient logs in and the eConnector service has a problem connecting to the database. </p>
<ol class="MarginBottomGap">
<li>Check that the eConnector server is on. </li>
<li>Verify the eConnector service is running. </li>
<li>If the service is running and this message still occurs, it is likely an issue with the <a href="allowapplication.html">eConnector Firewall</a>. </li>
</ol>
<p><b>error code 104 </b></p>
<p class="MarginBottomZero">Solution: This occurs when, upon installation of the service, the first heartbeat hasn't registered with Open Dental servers. To troubleshoot: </p>
<ol class="MarginBottomGap">
<li>Verify that the <a href="econnector.html">eConnector</a> is running on the system where the service was installed. . </li>
<li>If the service is running, check the internet connectivity. </li>
<li>If you have anti-virus software running, try momentarily disabling it and try the link again. If this solves the issue you will need to make an exception in your anti-virus software for the port the eConnector Service is using (typically 25255). If this doesn't fix the problem contact us for further troubleshooting.</li>
</ol>
<p><b>Error Code 103</b></p>
<p>Solution: The practice is no longer on Open Dental support and thus the registration key is no longer active or valid. Contact us to sign back up for support.</p>
<p><b>Error: Your provider has not set up this patient to view the Continuity of Care Documents. Please contact your provider.</b></p>
<p>Solution: This occurs when the patient tries to access the Care Summary (CCD) in the portal. Generally this only happens when the guarantor is viewing a dependent's care summary. It means that information required for the care summary is missing from the patient's chart (birth date, phone number, and address). Check that the patient in the care summary has birth date, phone number, and address fields filled out (<a href="patientedit.html">Edit Patient Information</a>). </p>
<p>Another possible cause is that required code systems aren't imported. See <a href="codesystemimport.html">Importing Code Systems</a> to import all coding systems.</p>
<p><b>Login Failed</b></p>
<p>Solution: The patient likely entered the wrong user name or password. Verify the patient's user name and reset the password if needed (see <a href="portalaccess.html">Patient Portal Access</a>). The next time the patient logs in to the portal, they can change their password so it is unique and known only to them.</p>
<p><b>CCD generation failed to load, please contact your provider.</b></p>
<p>Solution: This happens when the patient tries to access the Care Summary but you have not imported code systems into your database using the Code System Importer. Import all code systems except CPT codes.</p>
<p><b>File not found</b></p>
<p class="MarginBottomZero">Solution: This can occur when patients attempt to access WebMail attachments or statements in the Patient Portal </p>
<ul class="MarginBottomGap">
<li>Make sure the eConnector is installed on the same computer as the OpenDentImages folder.</li>
<li>If you have a single location: Check each office computer to see if any workstations can access the file locally. If one or more workstations can, but the server cannot, verify the path to the OpenDentImages folder that is being accessed. It should be the same folder for all workstations and the server. If different folders are used, images may be stored in different locations, thus requiring the different folders to be merged into one OpenDentImages folder.</li>
<li>On the machine hosting the eConnector, go to the Services Console. Search for the OpenDentaleConnector, right-click and select properties. Select the Log On tab, then select This Account. Enter the username and password of the windows administrator. Restart the eConnector, then refresh the patient portal.</li>
<li>If you have multiple locations: If using CEMT and/or connecting to separate locations via Middle Tier, it is possible the document was saved in a directory not accessible to your office (e.g., a directory at a different location). See <a href="middletier.html">Middle Tier</a> for advice regarding the OpenDentImages folder and requirements for multiple location access.</li>
</ul>
<p><b>Error: CallMethod, unknown class: BlobFileSTs.DownloadDocument</b></p>
<p>Solution: This occurs if updating Open Dental from a computer that does not have the eConnector installed. Run the setup file in the OpenDentImages folder. Make sure to disable the eConnector service on the workstation that performed the initial update if it was installed.</p>
<p><b>Error: OnlinePassword in 'where clause'. </b></p>
<p>Solution: The eConnector is on the wrong version. Run the setup file again on the eConnector host PC then try starting the eConnector.</p>
<p><b>Error: Type Error: Cannot read property [property]'[property name]'. </b></p>
<p>Solution: The eConnector may not have been updated during the last update. Rerun the setup file on the eConnector host PC and restart the eConnector.</p>
<p><b>Error: The parameter 'address' cannot be an empty string. Parameter name: address.</b></p>
<p>Solution: Set up a reply address. Click Setup, Manage, Email. Double-click to edit an existing email address or add a new one. In Outgoing Email Settings, make sure there is an email address in the <i>Email address of sender</i> field.</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual243/clearinghouses.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Clearinghouses</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/clearinghouses.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/clearinghouses.html" >v24.2</option><option value="https://www.opendental.com/manual241/clearinghouses.html" >v24.1</option><option value="https://www.opendental.com/manual233/clearinghouses.html" >v23.3</option><option value="https://www.opendental.com/manual232/clearinghouses.html" >v23.2</option><option value="https://www.opendental.com/manual231/clearinghouses.html" >v23.1</option><option value="https://www.opendental.com/manual224/clearinghouses.html" >v22.4</option><option value="https://www.opendental.com/manual223/clearinghouses.html" >v22.3</option><option value="https://www.opendental.com/manual222/clearinghouses.html" >v22.2</option><option value="https://www.opendental.com/manual221/clearinghouses.html" >v22.1</option><option value="https://www.opendental.com/manual214/clearinghouses.html" >v21.4</option><option value="https://www.opendental.com/manual213/clearinghouses.html" >v21.3</option><option value="https://www.opendental.com/manual212/clearinghouses.html" >v21.2</option><option value="https://www.opendental.com/manual211/clearinghouses.html" >v21.1</option><option value="https://www.opendental.com/manual205/clearinghouses.html" >v20.5</option><option value="https://www.opendental.com/manual204/clearinghouses.html" >v20.4</option><option value="https://www.opendental.com/manual203/clearinghouses.html" >v20.3</option><option value="https://www.opendental.com/manual202/clearinghouses.html" >v20.2</option><option value="https://www.opendental.com/manual201/clearinghouses.html" >v20.1</option><option value="https://www.opendental.com/manual194/clearinghouses.html" >v19.4</option><option value="https://www.opendental.com/manual193/clearinghouses.html" >v19.3</option><option value="https://www.opendental.com/manual192/clearinghouses.html" >v19.2</option><option value="https://www.opendental.com/manual191/clearinghouses.html" >v19.1</option><option value="https://www.opendental.com/manual184/clearinghouses.html" >v18.4</option><option value="https://www.opendental.com/manual183/clearinghouses.html" >v18.3</option><option value="https://www.opendental.com/manual182/clearinghouses.html" >v18.2</option><option value="https://www.opendental.com/manual181/clearinghouses.html" >v18.1</option><option value="https://www.opendental.com/manual174/clearinghouses.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Clearinghouses</p></div>
<div class="GeneralPageContent">
<p>If sending e-claims to a clearinghouse, first set up the clearinghouse in Open Dental.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Clearinghouses.</p>
<img src="images/clearinghouses.png" width="893" height="530"/> <p>Clearinghouses are listed alphabetically. Click <b>Add</b> to create a clearinghouse that isn't listed. Double-click an existing clearinghouse to enter settings.</p>
<p><b>Clinic</b>: Change the clinic to view clinic overrides for the Export Path overrides for all clearinghouses. When clinics is enabled, some information can be overridden by clinic (e.g., login credentials, export path). See <a href="clearinghousesclinics.html">Clearinghouse Clinic Setup</a> for clinic specific information.</p>
<h2>Set Default</h2>
<p>Determine the default clearinghouse for Dental, Medical, and Eligibility. A default must be set for each option, even if the practice is not using each option (e.g., sending medical claims or processing eligibility). </p>
<img src="images/clearinghouseSetDefault.png" width="105" height="120"/><p class="MarginBottomZero"></p>
<ul>
<li><b>Dental</b>: Single click on a clearinghouse, then click to set a default dental clearinghouse.</li>
<li><b>Medical</b>: Single click on a clearinghouse, then click to set a default medical clearinghouse.</li>
<li><b>Eligibility</b>: Single click on a clearinghouse, then click to set a default clearinghouse for Eligibility requests.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: If no Eligibility default is set, the default for Eligibility is the chosen Dental default. If no Eligibility default is set and there is no Dental default, the Eligibility default is the chosen Medical default.</div>
</p>
<h2>Automatic Report Settings</h2>
<p>The settings below affect the automatic download of clearinghouse reports (e.g., <a href="claimsera835.html">ERAs</a>, acknowledgment reports, text reports). Once a report is downloaded and processed, the information becomes part of the database and is accessible from any computer.</p>
<img src="images/clearinghouseAutomaticReportSettings.png" width="579" height="123"/><p class="MarginBottomZero"><b>Receive Reports by Service:</b> Determines the method used to receive reports.  </p>
<ul class="MarginBottomGap">
<li>Unchecked: The computer specified receives the reports. This is the original method used by Open Dental.</li>
<li>Checked (recommended): Receive reports using the OpenDentalService. <ul>
<li>On the server (or the computer that <i>OpenDentalService</i> is installed), check <a href="servicemanager.html">Service Manager</a> to make sure the OpenDentalService is installed and running.</li>
<li>On the server (or the computer that <i>OpenDentalService</i> is installed), verify a valid Report Path is specified and <i>Download ERAs</i> is selected on the <a href="eclaimsclaimconnect.html">Edit Clearinghouse</a> window.</li>
</ul>
</li>
</ul>
<p><b>Computer to Receive Reports Automatically:</b> Specify one computer which downloads reports automatically from the clearinghouse server to the Report Path. Enter the IP address or computer/server name or click <b>This Computer</b> to use the current computer. If a server name is entered and Open Dental is left open on the server, the computer automatically checks the server for new reports according to the interval. If this field is blank, this feature is disabled. Only some clearinghouses currently support automatic download of reports.</p>
<p><b>Receive at an Interval:</b> Set a time interval, in minutes, to automatically check the clearinghouse server and download new reports. Only values between 5 and 60 are allowed. 30 is the default.</p>
<p><b>Receive at a set time</b>: Set a specific time to check the clearinghouse server and download new reports. Time auto corrects itself to valid format (e.g., 1:00 AM).</p>
<h2>Individual Clearinghouses</h2>
<p>There are a number of Clearinghouses integrated with Open Dental to send Claims electronically. Users should first sign up with their selected clearinghouse, then set up the clearinghouse in Open Dental.</p>
<p>Clearinghouses differ greatly in size, infrastructure, and business model. Some are small and tend to serve a local geographic area or focus on customer service. Some are actively pursuing more direct connections with payers. Some clearinghouses are more accurately described as aggregators, having a direct connection to only a few payers and sending the bulk of their claims to another clearinghouse.</p>
<p><div class="Note">Note: If you have a negative experience with a clearinghouse, please send a detailed email about your experience to <i>service@opendental.com</i> so that we may look into the issue. </div>
</p>
<p class="MarginBottomZero"><b>Recommended Dental Clearinghouses</b>: These clearinghouses are recommended and also offer electronic attachments, electronic eligibility, and electronic billing (statements). </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsclaimconnect.html">DentalXChange / ClaimConnect E-Claims</a></li>
<li><a href="eclaimseds.html">Electronic Dental Services</a></li>
</ul>
<p class="MarginBottomZero"><b>Additional Clearinghouses and Aggregators</b>: These companies are known to work well with Open Dental: </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsapex.html">Apex</a></li>
<li><a href="eclaimsetactics.html">Etactics</a></li>
<li><a href="eclaimsofficeally.html">Office Ally E-Claims</a></li>
<li><a href="eclaimspostntrack.html">Post-n-Track E-Claims</a></li>
<li><a href="eclaimsvyne.html">Vyne Dental E-Claims</a></li>
</ul>
<p class="MarginBottomZero"><b>Medical Clearinghouses</b>:  </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsedsmedical.html">Electronic Dental Services - Medical</a> - Must also be using Electronic Dental Services - Dental.</li>
</ul>
<p class="MarginBottomZero"><b>Canada</b>: </p>
<ul class="MarginBottomGap">
<li><a href="../site/itrans20.html">ITRANS 2.0</a> - Dentists only.</li>
<li><a href="../site/claimstream.html">Claimstream</a> (TELUS / CCDWS) - Hygienists only.</li>
<li><a href="eclaimsramq.html">RAMQ E-Claims </a> - Incomplete. Do not use.</li>
</ul>
<p class="MarginBottomZero"><b>Puerto Rico</b>: </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsinmediata.html">Inmediata E-Claims</a></li>
<li><a href="lantek.html">Lantek</a></li>
</ul>
<p class="MarginBottomZero"><b>No Longer Used / Not Recommended</b><br> These clearinghouses are preconfigured in Open Dental but are not recommended.  </p>
<ul class="MarginBottomGap">
<li>Change Healthcare (formerly Emdeon, WebMD, Envoy) <ul>
<li>It appears Change Healthcare has stopped providing clearinghouse services after a cyber attack that took place in early 2024. </li>
</ul>
</li>

</ul>
<h2>Direct Connections to Payers</h2>
<p class="MarginBottomZero">Most payers prefer to use clearinghouses so they do not have to maintain direct connections with thousands of dental offices. However, some do offer direct connections. To use Open Dental for direct submission, there is work involved including: contact the payor, get their implementation guide, set up a partnership agreement, test, and finally upload claims. We do not provide implementation details and leave it up to individual offices. But it can still be useful for very large volume offices. The X-12 files typically need to be manually uploaded to the carrier because there is no standard for transport. </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsbcbsga.html">BCBS Georgia E-Claims</a></li>
<li><a href="eclaimsbcbsnebraska.html">BCBS Nebraska E-Claims</a></li>
<li><a href="eclaimscoloradomedicaid.html">Colorado Medicaid E-Claims</a></li>
<li><a href="dentical.html">Denti-Cal</a></li>
<li><a href="eclaimswashmedicaid.html">Washington Medicaid E-Claims</a></li>
</ul>
<h2>Troubleshooting</h2>
<p>For troubleshooting, see <a href="eclaimserrors.html">E-Claims Errors</a>.</p>
<p>For more technical information about what is sent in e-claims, see <a href="eclaimscomplexities.html">E-Claims Complexities</a>.</p>
<p>Some clearinghouses not listed above are not recommended. See <a href="../site/thirdpartywarnings.html">Third-Party Warnings</a> for more information.</p>
		</div>
	</div>
</body>
</html>```

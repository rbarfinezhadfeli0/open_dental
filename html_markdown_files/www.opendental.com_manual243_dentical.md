# File: ./www.opendental.com/manual243/dentical.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Denti-Cal</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dentical','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dentical.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dentical.html" >v24.2</option><option value="https://www.opendental.com/manual241/dentical.html" >v24.1</option><option value="https://www.opendental.com/manual233/dentical.html" >v23.3</option><option value="https://www.opendental.com/manual232/dentical.html" >v23.2</option><option value="https://www.opendental.com/manual231/dentical.html" >v23.1</option><option value="https://www.opendental.com/manual224/dentical.html" >v22.4</option><option value="https://www.opendental.com/manual223/dentical.html" >v22.3</option><option value="https://www.opendental.com/manual222/dentical.html" >v22.2</option><option value="https://www.opendental.com/manual221/dentical.html" >v22.1</option><option value="https://www.opendental.com/manual214/dentical.html" >v21.4</option><option value="https://www.opendental.com/manual213/dentical.html" >v21.3</option><option value="https://www.opendental.com/manual212/dentical.html" >v21.2</option><option value="https://www.opendental.com/manual211/dentical.html" >v21.1</option><option value="https://www.opendental.com/manual205/dentical.html" >v20.5</option><option value="https://www.opendental.com/manual204/dentical.html" >v20.4</option><option value="https://www.opendental.com/manual203/dentical.html" >v20.3</option><option value="https://www.opendental.com/manual202/dentical.html" >v20.2</option><option value="https://www.opendental.com/manual201/dentical.html" >v20.1</option><option value="https://www.opendental.com/manual194/dentical.html" >v19.4</option><option value="https://www.opendental.com/manual193/dentical.html" >v19.3</option><option value="https://www.opendental.com/manual192/dentical.html" >v19.2</option><option value="https://www.opendental.com/manual191/dentical.html" >v19.1</option><option value="https://www.opendental.com/manual184/dentical.html" >v18.4</option><option value="https://www.opendental.com/manual183/dentical.html" >v18.3</option><option value="https://www.opendental.com/manual182/dentical.html" >v18.2</option><option value="https://www.opendental.com/manual181/dentical.html" >v18.1</option><option value="https://www.opendental.com/manual174/dentical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Denti-Cal</p></div>
<div class="GeneralPageContent">
<p>See <a href="clearinghouses.html">Clearinghouses</a>.</p>
<p>Offices may submit claims directly to Denti-Cal using the process outlined below.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Denti-Cal website: <a href="https://www.denti-cal.ca.gov/">www.denti-cal.ca.gov</a>.</li>
<li>EDI Support Phone: (916) 853-7373. Ask for Denti-Cal EDI Support when you've reached an operator.</li>
<li>EDI Support Email: denti-caledi@delta.org</li>
</ul>
<h2>Submitting Through a Clearinghouse</h2>
<p>Most Denti-Cal users submit claims to a clearinghouse, which then submits to Denti-Cal. When this is done, the steps below are not needed.</p>
<p>Contact your Clearinghouse for details. </p>
<h2>Submitting Directly to Denti-Cal</h2>
<p>To submit claims directly to Denti-Cal, you can print a paper Claim Form, or submit electronic claims.</p>
<p class="MarginBottomZero">If printing forms, here are the downloads for the 2008 Denti-Cal claimform:  </p>
<ul class="MarginBottomGap">
<li><a href="../resources/DC-217.gif">DC-217.gif</a> - background image for all versions.</li>
<li><a href="../resources/Dentical-DC-217.xml" download>Dentical-DC-217.xml</a> - use for versions 12.3.2 and earlier.</li>
<li><a href="../resources/Dentical-DC-217_v12_3_3.xml" download>Dentical-DC-217_v12_3_3.xml</a> - use for versions 12.3.3 and greater.</li>
<li><a href="../resources/Dentical-DC-217-v17.2.1.xml" download>Dentical-DC-217_v17.2.1.xml</a> - use for versions 17.2.1 and greater.</li>
</ul>
<p>For detailed steps on importing these files into Open Dental, see <a href="claimforms.html">Claim Forms</a>.</p>
<p><div class="Note">Note: <ul>
<li>Occasionally (like in June-October of 2019) Denti-Cal requires communication testing when they make changes to their system.</li>
<li>This generally does not involve Open Dental. You should contact Denti-Cal to schedule testing. </li>
<li> If any bugs are discovered when testing, then please contact Open Dental. </li>
</ul>
</div>
</p>
<h2>Submitting Claims</h2>
<p>Larger offices may want to submit directly to Denti-Cal, because there is a fee per claim when using a clearinghouse. The Open Dental X12 file format is certified by Denti-Cal, however each dental office that wishes to submit directly must also go through their own certification testing with Denti-Cal. During the testing phase, you can still use your existing clearinghouse (e.g. ClaimConnect) to submit claims.</p>
<p class="MarginBottomZero">The general test certification steps are as follows: </p>
<ol class="MarginBottomGap">
<li>Fill out the Provider Service Office Electronic Data Interchange (OSF) form, EDI Enrollment Application, and Electronic Remittance Advice (ERA) form and submit to Denti-Cal.</li>
<li>Conduct a preliminary test with Denti-Cal. Submit one 837D claim transaction to Denti-Cal. Once successful, Denti-Cal's EDI Support requests a formal project from the State. After obtaining approval from the State, Denti-Cal provides Tumbleweed instructions (a secure email). </li>
<li>Denti-Cal issues a Login ID (Remote ID) and password when a provider enters the full testing phase (step 4). Use this information to set up the Denti-Cal clearinghouse.</li>
<li>Complete the full testing phase by submitting test cases for certification.</li>
<li>Wait for test verification.</li>
</ol>
<h2>1: Fill out the Provider Service Office Electronic Data Interchange OSF</h2>
<p>Providers currently enrolled to submit electronically must update EDI enrollment to that of a direct submitter by completing the Provider Service Office Electronic Data Interchange Option Selection Form (OSF). There is also an additional ERA Enrollment Form to address the 835 transaction. These forms can be found on the Denti-Cal website.</p>
<p>On the OSF, there is a section named <i>EDI INPUT/OUTPUT OPTIONS</i>. It should be filled out as follows. <br/><img src="images/denti-calOSFoptions.gif" width="745" height="472" class="ImageInParagraph"/></p>
<p>Submit the form to Denti-Cal.</p>
<p><div class="Note">Note: If a Service Office Number must be sent in order to supplement an NPI, then enter that number at the bottom of the <a href="providerseditwindow.html">Provider</a>, with a type of SiteNumber. That number is sent in loop 2010BB with a qualifier of LU.</div>
</p>
<h2>2: Conduct a Preliminary Test with Denti-Cal</h2>
<p class="MarginBottomZero">Denti-Cal will request that one 837D claim transaction be submitted via Tumbleweed (a secure email). </p>
<ol class="MarginBottomGap">
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Clearinghouse, then double-click on <i>Denti-Cal</i>. Temporarily change the Comm Bridge setting to <i>none</i>. </li>
<li>Create the claim in Open Dental.</li>
<li>Click Send to send the claim file to the Claim Export Path set on the Edit Clearinghouse window (typically <b>C:\Denti-Cal\</b>).</li>
<li>Send the file to Denti-Cal as requested.</li>
</ol>
<p>Once this test is successful, Denti-Cal requests a formal project from the State.</p>
<div class="Note">Note: <ul>
<li>If Denti-Cal is your primary clearinghouse, set Denti-Cal as the default in the E-Claims window.</li>
<li>If Denti-Cal is not your primary clearinghouse, enter each Insurance Plan's Payor ID in the Edit Clearinghouse window.</li>
</ul>
</div>
<br/><br/><h2>3: Set up the Denti-Cal Clearinghouse</h2>
<p>Once a provider enters the full testing phase (step 4), Denti-Cal issues a Login ID (Remote ID) and password. Use this information to set up the Denti-Cal clearinghouse. The Remote ID starts with the letters <i>DC</i>. Any other letters in the Remote ID must be capitalized when entered into the clearinghouse setup window.</p>
<p>In the Main Menu, click Setup, Family/Insurance, Clearinghouse, then double-click on Denti-Cal. Enter the information below, using the Remote ID and password supplied by Denti-Cal. Make sure to change the Comm Bridge back to Denti-Cal.</p>
<img src="images/eClaimsDentiCal.png" width="915" height="687"/><div class="Note">Note: Anyone wishing to test Denti-Cal claims needs to set the ISA15 field in the clearinghouse setup to T to enable testing mode.</div>
<br/><br/><h2>4: Submit Test Cases for Certification</h2>
<p>For test cases, use data from real patients and real insurance plans to make testing easier. The claims used for testing should be fake claims, because they are not adjudicated.</p>
<p class="MarginBottomZero">Manually enter two test patients into a blank Open Dental database as follows: </p>
<ul class="MarginBottomGap">
<li>Patient 1: One Denti-Cal insurance plan with real subscriber name and subscriber ID. No other insurance plans.</li>
<li>Patient 2: Two insurance plans. The primary insurance plan must be a non Denti-Cal plan with fake subscriber name and fake subscriber ID of 123456789. The secondary plan must be a Denti-Cal plan with a real subscriber name and a real subscriber ID.</li>
</ul>
<p>Create the following fake procedures and claims for certification testing. Once all claims are created, all test cases can be sent in a single test batch.</p>
<p class="MarginBottomZero">The following test cases were updated on 09/08/2015: </p>
<ol class="MarginBottomGap">
<li>Representation of all document types as applicable: <ul>
<li>Select patient 1</li>
<li>Claim <ul>
<li>Create and complete one procedure: a D2161 with fee 230.</li>
<li>Create a claim for the D2161.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Claim test"</li>
</ul>
</li>
<li>TAR (Preauthorization) <ul>
<li>Create a treatment planned procedure: a D0150 with fee 20.</li>
<li>In the Treatment Plan module, select the D0150 and click the Preauthorization button to create a new Preauthorization claim.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "TAR test"</li>
</ul>
</li>
<li>NOA for Payment <ul>
<li>Create and complete one procedure: a D2950 with fee 210.</li>
<li>Create a claim for the D2950.</li>
<li>In the Edit Claim window, under the Misc tab, set the <i>Prior Authorization (rare)</i> to <i>ABCDEFGH</i>.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "NOA test"</li>
</ul>
</li>
<li>Claim Adjustment (Correction) <ul>
<li>Create and complete one procedure: a D1110 with fee 40.</li>
<li>Create a claim for the D1110.</li>
<li>In the Edit Claim window, under the Misc tab, set the Correction Type to Replacement and the Original Reference Num to "123456789".</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Claim Adjustment test".</li>
</ul>
</li>
</ul>
</li>
<li>Claim with x-rays and attachments. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D6750 with fee 500 (Prosthesis Replacement set to initial).</li>
<li>Create a claim for the D6750.</li>
<li>In the Edit Claim window, under the Attachments tab, type "1" in the Radiographs textbox.</li>
<li>In the Edit Claim window, under the Attachments tab, set the Attachment ID Number to "NEA#1234567".</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "x-ray and other attachment test"</li>
</ul>
</li>
<li>Claim with multiple dates of service. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D0120 with fee 60.</li>
<li>Create and complete one procedure: a D1351 with fee 130.</li>
<li>Set the date for the D0120 to today's date, and set the date for the D1351 to yesterday's date.</li>
<li>Create a single claim with both procedures attached.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Multiple dates of service test"</li>
</ul>
</li>
<li>Claim with multiple rendering providers. <ul>
<li>Click Setup, Preferences. Check <i>On e-claims, send treating provider info for each separate procedure</i>.</li>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D0140 with fee 57.</li>
<li>Create and complete one procedure: a D0272 with fee 130.</li>
<li>Change the treating provider on the D0140 so it is different than the treating provider for the D0272 (based on NPI).</li>
<li>Create a single claim with both procedures attached.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Multiple rendering providers test"</li>
</ul>
</li>
<li>At least one transaction that includes a service description. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D0330 with fee 88.</li>
<li>Edit the D0330. In the bottom left of the Procedure Info window, type "test note" into the E-claim Note.</li>
<li>Create a claim for the D0330.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Service description test"</li>
</ul>
</li>
<li>At least one transaction that includes a Share of Cost amount. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D0270 with fee 100.</li>
<li>Create a claim for the D0270.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Share of Cost test"</li>
</ul>
</li>
<li>At least one transaction that includes an Other Health Coverage amount. <ul>
<li>Select patient 2.</li>
<li>Create and complete one procedure: a D1120 with fee 58.</li>
<li>Create a primary claim for the D1120. <ul>
<li>Edit the claim and click the By Procedure button.</li>
<li>Enter an insurance payment amount of 18.</li>
</ul>
</li>
<li>Create a secondary claim for the D1120. This is the claim which Denti-Cal sees. The share of cost in this example is 18.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Other Health Coverage test"</li>
<li>Only send the secondary Denti-Cal claim for testing purposes. The primary claim should not be sent.</li>
</ul>
</li>
<li>At least one transaction reflecting a non-employment related accident. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D2140 with fee 135.</li>
<li>Create a claim for the D2140.</li>
<li>Edit the claim. In the General tab at the bottom, change the Accident Related dropdown to Other, set the Accident Date to today's date, set the Accident State to your state.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Non employment-related accident test"</li>
</ul>
</li>
<li>At least one transaction reflecting an employment-related accident. <ul>
<li>Select patient 1.</li>
<li>Create and complete one procedure: a D2150 with fee 165.</li>
<li>Create a claim for the D2150.</li>
<li>Edit the claim. In the General tab at the bottom, change the Accident Related dropdown to Employment, set the Accident Date to today's date, set the Accident State to your state.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Employment-related accident test"</li>
</ul>
</li>
<li>One or more transactions that include: <ul>
<li>Select patient 1.</li>
<li>Tooth code(s) <ul>
<li>Create and complete one procedure: a D2940 with fee 90.</li>
<li>Create a claim for the D2940.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Tooth code test"</li>
</ul>
</li>
<li>Arch code(s) <ul>
<li>Create and complete one procedure: a D5110 with fee 1130 (Prosthesis Replacement set to initial).</li>
<li>Create a claim for the D5110.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Arch code test"</li>
</ul>
</li>
<li>Quadrant code(s) <ul>
<li>Create and complete one procedure: a D4341 with fee 220...</li>
<li>Create a claim for the D4341.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Quadrant code test"</li>
</ul>
</li>
<li>Surface code(s) <ul>
<li>Create and complete one procedure: a D2160 with fee 210.</li>
<li>Create a claim for the D2160.</li>
<li>In the Edit Claim window, under the General tab, type the following Claim Note: "Surface code test"</li>
</ul>
</li>
</ul>
</li>
<li>According to Denti-Cal: "When a single NPI is registered with Denti-Cal for more than one service office, the NPI is considered non-subparted. If transactions for non-subparted NPIs will potentially be submitted, submit transactions for multiple service offices. Service office locations are identified using qualifier 'LU' in REF01 of Loop 2010BB." Open Dental does not currently handle sub-parted NPIs for Denti-Cal. If this feature is needed, please contact us.</li>
<li>According to Denti-Cal: "If services will potentially be rendered to recipients residing in SNF or ICF facilities, submit Service Facility information in Loop 2310C." To send the service facility information (site place of service, address and NPI), follow these steps. <ol>
<li>Create a provider that is 'not a person' and for NPI enter the service facility's NPI.</li>
<li>Create a site (<a href="sites.html">Site List</a>) for the service facility and enter the following:  <ul>
<li>Assign the provider as the default Provider.</li>
<li>Set the default place of service to something other than office.</li>
<li>Enter the site's address.</li>
</ul>
</li>
<li>For at least one procedure assign the site (<a href="proceduremisc.html">Procedure - Misc Tab</a>).</li>
<li>Create a claim for the procedure and send it.</li>
</ol>
<div class="Note">Note: For 5010 dental e-claims, the place of service on the claim cannot be 'office' and the site provider cannot be the same as the billing provider.</div>
</li>
</ol>
<p>Notify Denti-Cal's EDI Support (denti-caledi@delta.org) that you intend to submit a batch of test claims. To send the test batch, in the Manage module, click<i>Send Claims</i>. Click the Send E-Claims dropdown, then select Denti-Cal.</p>
<h2>5: Wait for Test Verification</h2>
<p>Following review, EDI Support will advise if there is anything wrong with the batch or if additional test claims are needed. EDI Support will notify users when the batch meets their test requirements and when cleared for live claims in the production environment. </p>
<h2>Preauthorization DCN</h2>
<p>Denti-Cal assigns a Document Control Number or "DCN" to the original preauthorization or "TAR" submitted. When the claim associated with a TAR is submitted, Denti-Cal requires that the DCN be in included on it (sent in 2300 loop, REF G1 segment). This is entered in the Edit Claim window, Misc tab, under "Prior Authorization (rare)." You can find the DCN on the approval notice or "NOA" that was sent by Denti-Cal.</p>
</div>
</div>
</body>
</html>```

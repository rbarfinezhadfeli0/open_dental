# File: ./www.opendental.com/manual232/eclaimsclaimconnect.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ClaimConnect E-Claims</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsclaimconnect','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclaimsclaimconnect.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclaimsclaimconnect.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsclaimconnect.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsclaimconnect.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsclaimconnect.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclaimsclaimconnect.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsclaimconnect.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsclaimconnect.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsclaimconnect.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsclaimconnect.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsclaimconnect.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsclaimconnect.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsclaimconnect.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsclaimconnect.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsclaimconnect.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsclaimconnect.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsclaimconnect.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsclaimconnect.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsclaimconnect.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsclaimconnect.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsclaimconnect.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsclaimconnect.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsclaimconnect.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsclaimconnect.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsclaimconnect.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsclaimconnect.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsclaimconnect.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsclaimconnect.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ClaimConnect E-Claims</p></div>
<div class="GeneralPageContent">
<p>In <a href="clearinghouses.html">Clearinghouses</a>, double-click ClaimConnect.</p>
<img src="images/eClaimsClaimConnect.png" width="915" height="689"/><img src="images/claimConnectHeader.png" width="151" height="64"/><p>DentalXChange offers a variety of services, such as claim processing, attachments, payments, ERAs, and more. Visit <a href="http://www.dentalxchange.com">www.dentalxchange.com</a> to learn more about their services.</p>
<h2>Open Dental Setup</h2>
<p>To enable DentalXChange / ClaimConnect as your default clearinghouse, set ClaimConnect as the Dental default in the Clearinghouses window. </p>
<p>In the Edit Clearinghouses window, set the following. Credentials entered in this window are for use with only claims, ERAs, and electronic eligibility.</p>
<img src="images/eClaimsClaimConnectSetting.png" width="852" height="188"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Login ID</b>: Enter the DentalXChange account Login ID. </li>
<li><b>Password</b>: Enter the DentalXChange account password.</li>
<li><b>Claim Export Path</b>: Typically <b>C:\ClaimConnect\Upload\</b> but can be edited as needed.</li>
<li><b>Use Claim Export Path</b>: Determine if 837 files should be saved. <ul>
<li>Checked: Save 837 files sent with e-claims to the Claim Export Path.</li>
<li>Unchecked: Block saving 837 files sent with e-claims to the Claim Export Path.</li>
</ul>
</li>
<li><b>Report Path</b>: Enter path where downloaded <a href="claimsera835.html">ERAs</a> should be saved. Typically <b>C:\ClaimConnect\Report\</b> but can be edited as needed.</li>
<li>ERA Options: Determine if ERAs should be downloaded. <ul>
<li><b>Do Not Download ERAs</b>: Do not automatically download ERAs.</li>
<li><b>Download ERAs</b>: Automatically download ERAs to the Report Path.</li>
</ul>
</li>
<li><b>Format</b>: x837D_5010_dental. Does not need changed.</li>
<li><b>Comm Bridge</b>: ClaimConnect. Does not need changed. </li>
<li><b>Allow sending attachments</b>: Determine if the practice is sending attachments through Open Dental. <ul>
<li>Checked: Allow sending attachments through Open Dental. Only used when also signed up for DentalXChange's attachment service.</li>
<li>Unchecked: Do not allow sending attachments via the DentalXChange attachment service through Open Dental. </li>
</ul>
</li>
<li><b>Save DXC Attachments to Imaging Module</b>: Only displays when <i>Allow sending attachments</i> is checked. Determine if attachments should be saved to the Imaging Module. <ul>
<li>Checked: Saved attachments to the Imaging Module. Set a default category in <a href="definitionsimagecat.html">Definitions: Image Categories</a>.</li>
<li>Unchecked: Do not save attachments to the Imaging Module.</li>
</ul>
</li>
<li><b>Save DXC Transmissions (Troubleshooting Only)</b>: View the XML file of outgoing attachment requests. Typically only checked when troubleshooting. The XML file will be saved to the Claim Export Path.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>If using Clinics, use the Clinic dropdown in the top right to switch between clinics and alter setup as required.</li>
<li> See <i>Other Services</i> below to set up credentials for Patient Billing or PayConnect integrated credit card services. </li>
</ul>
</div>
</p>
<h2>Advantages</h2>
<p>The DentalXChange ClaimConnect payments platform integrates with Open Dental to streamline connections and data sharing between providers and payers to keep claims moving. With ClaimConnect you can:</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Submit, edit, and manage claims directly within Open Dental</li>
<li>Connect to 950+ payers</li>
<li>Validate claims instantly</li>
<li>Reduce billing overhead</li>
<li>Improve clean claim rates</li>
<li>Gain complete visibility into claims workflow</li>
<li>Access unlimited training and support</li>
</ul>
<h2>Register with DentalXChange</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Go to <a href="http://www.dentalxchange.com">www.dentalxchange.com</a>.</li>
<li>Create a new account or edit your existing account.</li>
<li>Select Open Dental as your Practice Management Software.</li>
<li>Choose the services you are interested in.</li>
</ol>
<h2>Other Services</h2>
<p class="MarginBottomZero">To use DentalXChange for: </p>
<ul class="MarginBottomGap">
<li>Electronic Eligibility and Benefits, see <a href="ebenefits.html">Electronic Eligibility and Benefits</a>.</li>
<li>Patient Credit Checks, see <a href="dentalxchangecreditservice.html">DentalXChange Patient Credit Score Service</a>.</li>
<li>Patient Billing, see <a href="billingdefaults.html">Billing Defaults</a>.</li>
<li>Electronic Benefit Remittance (ERAs), see <a href="era835workflow.html">ERA Workflow</a>.</li>
<li>Attachments, see <a href="dentalxchangeattachmentservice.html">DentalXChange Attachment</a>.</li>
<li>Merchant Services, see <a href="payconnectsetup.html">PayConnect Setup</a>.</li>
</ul>
<h2>Payer IDs</h2>
<p>The <a href="payerids.html">Electronic Payer IDs</a> list is automatically updated when ClaimConnect is set as the default clearinghouse. The <a href="opendentalservice.html">Open Dental Service</a> is required.</p>
<h2>Troubleshooting &amp; Technical Details</h2>
<p>The best troubleshooting approach to nearly any problem is to monitor the DentalXChange website. It will show you which claims were successfully submitted, which ones have errors, and so on. Use it regularly to stay on top of your claims.</p>
<p><b>When sending claims, receive 'authentication failed.authBadPwd' error.</b></p>
<p class="MarginBottomZero">This error is due to a bad password. </p>
<ol>
<li>Go to the DentalXChange website and verify that the user can login.</li>
<li>Verify that the same password is entered for the clearinghouse in Open Dental.</li>
</ol>
<p class="MarginBottomGap"><div class="Note">Note: Passwords in DentalXChange are case sensitive. Be sure to use the correct capitalization when entering the DentalXChange password in Open Dental. Special characters (%, !, $, etc) are not allowed in Open Dental.</div>
</p>
<p><b>Uploads Fail, "A previous batch submission was found in an incomplete state."</b></p>
<p>After a failed upload, the next time that a user tries to send a claim, there is a warning. Resubmit the batch in question as well as the subsequent failed batch. Check the DentalXChange website to make sure all claims went through. </p>
<p><b>Can we use a terminal server / hosted app for DentalXChange? </b></p>
<p>Yes. The claim export path uses temporary subfolders when on a terminal server / hosted app. This allows multiple users to send claims simultaneously.</p>
</div>
</div>
</body>
</html>```

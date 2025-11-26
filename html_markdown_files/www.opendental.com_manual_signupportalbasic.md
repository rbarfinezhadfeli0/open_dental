# File: ./www.opendental.com/manual/signupportalbasic.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eServices Signup Basic</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('signupportalbasic','eservicessignup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/signupportalbasic.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/signupportalbasic.html" >v24.2</option><option value="https://www.opendental.com/manual241/signupportalbasic.html" >v24.1</option><option value="https://www.opendental.com/manual233/signupportalbasic.html" >v23.3</option><option value="https://www.opendental.com/manual232/signupportalbasic.html" >v23.2</option><option value="https://www.opendental.com/manual231/signupportalbasic.html" >v23.1</option><option value="https://www.opendental.com/manual224/signupportalbasic.html" >v22.4</option><option value="https://www.opendental.com/manual223/signupportalbasic.html" >v22.3</option><option value="https://www.opendental.com/manual222/signupportalbasic.html" >v22.2</option><option value="https://www.opendental.com/manual221/signupportalbasic.html" >v22.1</option><option value="https://www.opendental.com/manual214/signupportalbasic.html" >v21.4</option><option value="https://www.opendental.com/manual213/signupportalbasic.html" >v21.3</option><option value="https://www.opendental.com/manual212/signupportalbasic.html" >v21.2</option><option value="https://www.opendental.com/manual211/signupportalbasic.html" >v21.1</option><option value="https://www.opendental.com/manual205/signupportalbasic.html" >v20.5</option><option value="https://www.opendental.com/manual204/signupportalbasic.html" >v20.4</option><option value="https://www.opendental.com/manual203/signupportalbasic.html" >v20.3</option><option value="https://www.opendental.com/manual202/signupportalbasic.html" >v20.2</option><option value="https://www.opendental.com/manual201/signupportalbasic.html" >v20.1</option><option value="https://www.opendental.com/manual194/signupportalbasic.html" >v19.4</option><option value="https://www.opendental.com/manual193/signupportalbasic.html" >v19.3</option><option value="https://www.opendental.com/manual192/signupportalbasic.html" >v19.2</option><option value="https://www.opendental.com/manual191/signupportalbasic.html" >v19.1</option><option value="https://www.opendental.com/manual184/signupportalbasic.html" >v18.4</option><option value="https://www.opendental.com/manual183/signupportalbasic.html" >v18.3</option><option value="https://www.opendental.com/manual182/signupportalbasic.html" >v18.2</option><option value="https://www.opendental.com/manual181/signupportalbasic.html" >v18.1</option><option value="https://www.opendental.com/manual174/signupportalbasic.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eServices Signup Basic</p></div>
<div class="GeneralPageContent">
<p>The <i>Basic View</i> is a simple view of eService sign up options.</p>
<p>In <a href="eservicessignup.html">eServices Signup</a>, click <b>Basic View</b>.</p>
<img src="images/eservicesBasicView.png" width="915" height="506"/><p>This view opens by default when there is only one location for the practice (i.e., the Clinics feature is not enabled). <div class="Note">Note: <ul>
<li>Fees displayed on the screenshot above may not be current. Refer to <a href="fees.html">Fees for Support and Services</a> for the most up-to-date pricing.</li>
<li>For Open Dental Cloud users, this window opens in a new web browser session.</li>
</ul>
</div>
</p>
<h2>Navigation, Clinic, and Access</h2>
<img src="images/signupBasicTop.png" width="915" height="79"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Basic View</b>: The currently selected tab. </li>
<li><b>Advanced View</b>: See <a href="signupportaladvanced.html">eServices Signup Advanced</a>.</li>
<li><b>Clinic</b>: Only displays when Clinics is enabled. Select the clinic to view or edit currently signed up services. Each clinic can sign up for different services.</li>
<li><b>Permission Level</b>: The security permission level of the logged-on user. Users with the <i>Security Admin</i> permission can change eService settings. Users without this permission have read-only access.</li>
</ul>
<h2>Texting and Mobile Settings</h2>
<img src="images/signupBasicTextSettings.png" width="354" height="165"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Country Code</b>: Used for <a href="textintegratedusage.html">eServices Texting</a>. Determines texting phone number and per message fees. Select the country the practice is in. If the needed country is not listed, contact Open Dental Support to see if the service is available.</li>
<li><b>SMS Warning Amount</b>: Applies to Integrated Texting. Enter the amount to spend on outgoing text messages per month (in U.S. dollars, minimum $1.00). If the amount is reached, manual texts cannot be sent until the amount is increased or the new billing cycle begins. This amount is specific to the clinic selected. This amount does not apply to or stop automated messages.  <ul>
<li><b>Save SMS Limit</b>: This button only displays when the practice is no longer on support with Open Dental. Update the SMS Warning Amount, then click to save changes.<br/><img src="images/SMSSave.png" width="344" height="68" class="ImageInParagraph"/></li>
</ul>
</li>
<li><b>Mobile Settings:</b> Click to create login and registration details for use with the eClipboard, ODMobile, and ODTouch apps. Alternatively, create login credentials from <a href="mobilesettings.html">Mobile Settings</a>. If using Clinics, each clinic has their own set of login credentials.<br/><img src="images/eClipboardSignupSettings.png" width="302" height="463" class="ImageInParagraph"/><ul>
<li>User Name: Create a username for use with the mobile app.</li>
<li>Password: Create a password for use with the mobile app. Requires 6 characters, 1 uppercase, 1 number, and 1 special character.</li>
<li>Re-Enter Password: Confirm the password for use with the mobile app.</li>
<li>Email Address: Register an email address for use in verifying identity and account recovery.</li>
<li>Phone Number (Optional): Register a phone number for use in verifying identity.</li>
</ul>
</li>
<li><b>Register with Carriers</b>: Required for all texting users. See <a href="textregister.html">Register with Carriers</a>. <ul>
<li>Practices must complete registration before making any changes in the Signup Portal. For those using clinics, this includes signing up new clinics. Once registration is complete, changes can be made again.</li>
<li>If registration was completed, but the information entered could not be verified, the button turns red. Users must verify and submit registration again.<br/><img src="images/signupBasicFailed.png" width="545" height="63" class="ImageInParagraph"/></li>
<li>If registration was completed, and the information entered was successfully verified, a green checkmark displays and the button text updates. This confirms registration is complete.<br/><img src="images/signupBasicSuccess.png" width="542" height="65" class="ImageInParagraph"/></li>
</ul>
</li>
</ul>
<h2>eServices Signup Grid</h2>
<p>The signup grid displays each service and whether the practice/clinic is currently signed up.</p>
<img src="images/signupBasicGrid.png" width="566" height="218"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>The Price column lists the per location monthly fee for the eService.</li>
<li>Hover over a service to view information, eService terms, and in some cases the Hosted URL. </li>
<li>The Sign Up / Status column indicates whether the eService is currently active, pending stop, or inactive. Click in a box to change its status. <ul>
<li>Checked: eService is currently active. Patient Portal and Web Forms are free for those on support thus they are always active.</li>
<li>Unchecked: The eService is not active. Click the Info button in the upper right to view the Next Bill Date. </li>
</ul>
</li>
</ul>
<img src="images/signupBasicTotal.png" width="560" height="100"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Total</b>: As eServices are selected, the total $ amount updates to reflect new charges. Click + to expand the total to list fees for each clinic.</li>
<li><b>Save</b>: Apply eService changes. Charges are reflected in the practice's next statement.</li>
</ul>
<h2>Integrated Texting Options</h2>
<p>There are two options available when signing up for integrated texting service.</p>
<img src="images/signupBasicIntText.png" width="548" height="113"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Choose New #</b>: Select this option to have a new number automatically assigned to the office for use with Integrated Texting. <ul>
<li>Offices in the United States and Canada have the additional option of requesting a local number. Click into the phone number field and the window below appears. <br/><img src="images/eservicesAreaCodePrompt.png" width="308" height="137" class="ImageInParagraph"/></li>
<li>Enter the area code and click OK. This option is only available in the Basic View of the Signup Portal. Complete the signup process by making sure a monthly texting limit is entered above, and click the Save button at the bottom.</li>
</ul>
</li>
<li><b>Use my Landline #</b>: Select this option to sign up for the Integrated Texting service with the existing landline phone number. This is limited to Open Dental practices located in the United States and Canada. <ul>
<li>The increased price for using a landline number for Integrated Texting or eConfirmations display in green. The eService Bundle price remains the same.</li>
<li>Click into the phone number field to enter the number. The following window displays:<br/><img src="images/eservicesLandlineNumberPrompt.PNG" width="405" height="483" class="ImageInParagraph"/></li>
<li>Enter the required practice information: <ul>
<li><b>Landline Phone Number for Texting</b>: Enter the current landline phone number. </li>
<li><b>Company Name</b>: Enter the company name. This must match the name entered when registering for carriers above.</li>
<li><b>First Name / Last Name / Contact Phone / Contact Email</b>: Designate a contact person. Enter a phone number different from the landline and an email address.</li>
<li><b>Street Address / City / State / Zip</b>: Enter the office address.</li>
</ul>
</li>
<li>After entering Landline information, contact Open Dental Support to complete the process. A Landline number cannot be used until Open Dental completes the process.</li>
</ul>
</li>
</ul>
<p><div class="Note">Note: <p class="MarginBottomZero">Regarding the <b>Use my Landline # </b>selection: </p>
<ul class="MarginBottomGap">
<li>Customers using VOIP numbers may experience a delay in service and should work directly with Open Dental support. A Letter of Authorization is required to use landline texting.</li>
<li>Only United States and Canadian numbers work with this option. Mobile and some VOIP numbers are not supported.</li>
<li>In rare cases, a telecomm provider may not support landline texting. Additionally, the telecomm provider may change suppliers at some time after sign up has occurred. This may result in the number no longer being available for this service, as not all suppliers support landline texting. In cases like these we can provide the practice with an alternate number utilizing a local area code.</li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual243/referralsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Referral List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('referralsetup','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/referralsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/referralsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/referralsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/referralsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/referralsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/referralsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/referralsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/referralsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/referralsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/referralsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/referralsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/referralsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/referralsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/referralsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/referralsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/referralsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/referralsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/referralsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/referralsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/referralsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/referralsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/referralsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/referralsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/referralsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/referralsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/referralsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/referralsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/referralsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Referral List</p></div>
<div class="GeneralPageContent">
<p>Maintain a list of all patient referral sources in the Referrals list.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Referrals.</p>
<img src="images/referrals.png" width="915" height="269"/><p class="MarginBottomZero">Search for referral sources using a variety of criteria. Results are updated automatically as criteria is entered.  </p>
<ul class="MarginBottomGap">
<li><b>Search</b>: Enter a referral or business name to find a specific referral source. </li>
<li><b>Show</b>: Further narrow results by additional information. <ul>
<li><b>Patient</b>: Show referrals who are also existing patients (marked X in the Patient column).</li>
<li><b>Doctor</b>: Show referrals marked as <i>Is Doctor</i>.</li>
<li><b>Other</b>: Show referrals that are not marked as a patient or marked as <i>Is Doctor</i>.</li>
<li><b>Preferred Only</b>: Show referrals marked as <i>preferred</i>. Checked by default if the <i>Show preferred referrals only in the Select Referral window by default</i> preference is enabled.</li>
<li><b>Hidden</b>: Show referrals that are marked <i>Hidden.</i></li>
</ul>
</li>
<li><b>Clinic</b>: Filter referrals by Clinic. Select <i>All </i>to display referrals for all clinics. Select <i>Unassigned </i>for referral sources not assigned to a clinic.</li>
</ul>
<p class="MarginBottomZero">The Select Referral grid shows up to 500 results matching the search criteria. </p>
<ul class="MarginBottomGap">
<li><b>Last Name</b>: The last name of a referral source or referral source description.</li>
<li><b>First Name</b>: The first name of a referral source.</li>
<li><b>MI</b>: The middle initial of a referral source.</li>
<li><b>Title</b>: The provider title of the referral source (e.g., DDS or DMD).</li>
<li><b>Specialty</b>: The specialty of the referral source, if a provider (e.g., Ortho, Surgery, etc).</li>
<li><b>Patient</b>: X indicates the referral is also a patient.</li>
<li><b>Business Name</b>: The referral's business name.</li>
<li><b>Note</b>: Notes specific to the referral source.</li>
</ul>
<p><div class="Note">Note: See <a href="mergereferrals.html">Merge Referrals</a> for information on merging duplicate referral sources.</div>
</p>
<h2>Add / Edit Referral Source</h2>
<p>Click <b>Add</b> to create a new referral source, or double-click an existing referral to edit. </p>
<p class="MarginBottomZero">When adding a new referral source, a prompt asks if the referral is an existing patient. </p>
<ul class="MarginBottomGap">
<li> Click <b>Yes</b> to select the patient from the Select Patient window. The name and address fills automatically for the referral source. This information can only be edited from the <a href="patientedit.html">Edit Patient Information</a> window.</li>
<li>Click <b>No</b> to create a new referral source from blank.</li>
</ul>
<img src="images/referralEdit.png" width="915" height="572"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Hidden</b>: Check to hide this referral from the Referrals list.</li>
<li><b>Not Person</b>: Check if this referral is not a person (e.g., online ad).</li>
<li><b>Last Name/First Name/Middle Name</b>: Enter the first and last name of the referral source. If this referral is a business, enter the information in the Last Name field.</li>
<li><b>Title</b>: The provider's title.</li>
<li><b>Address/City/State/Zip</b>: The mailing address for the referral.</li>
<li><b>Phone/Other Phone</b>: The contact number for the referral.</li>
<li><b>Email</b>: The email address for the referral.</li>
<li><b>Business Name</b>: Business name of the referral.</li>
<li><b>Email Trust for Direct</b>: For <a href="direct.html">Direct Messaging</a> (EHR). Check to indicate when direct trust is established with this provider. Once saved, Open Dental attempts to locate the provider's email certificate public key (based on the email address). If the public key is found, it is stored in the local certificate store and Direct trust is established. Patients referred to this provider are then able to transmit a Summary of Care to the provider using the Patient Portal. If the public key is not found, a message indicates that it cannot be located. In this case, uncheck the box since Direct trust is not established. If unchecked, patients referred to this provider are not be able to transmit a Summary of Care using the Patient Portal.</li>
<li><b>SSN/TIN</b>: SSN or TIN of the referral if a provider.</li>
<li><b>National Provider ID</b>: NPI of the referral if a provider.</li>
<li><b>Preferred Referral</b>: Mark this referral as a preferred. When filtering the Referrals List, they appear when <i>Preferred Only</i> is checked.</li>
<li><b>Is Doctor</b>: Check if this referral is a provider. To send provider referrals electronically, <i>Is Doctor</i> must be checked and<i> Not Person</i> unchecked. See <a href="claimtabgeneral.html">Edit Claim - General Tab</a>.</li>
<li><b>Specialty</b>: Select the provider's specialty. If the referral is not a provider, select <i>None</i>.</li>
<li><b>Referral Slip</b>: Assign a custom <a href="sheetsreferralslips.html">Referral Slip Layout</a>. The custom slip is the default slip generated when this referral is selected. To generate a referral slip for a patient, see <a href="referralslips.html">Referral Slip</a>.</li>
<li><b>Clinics</b>: Assign referral source to a Clinic.</li>
<li><b>Used By Patients</b>: Shows a count of patients that have been referred to or referred from this referral source. As the referral is attached to patients, the information is automatically updated. Use the dropdown menus to see a list of patients this referral is attached to. For more referral tracking options, see <a href="referrals.html">Referrals</a>, Track Referrals.</li>
<li><b>Notes</b>: Notes about the referral source. Displays in Referrals List. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</li>
<li><b>Display Notes</b>: Displays in the Patient Information grid in the Family Module when referral is attached.</li>
</ul>
<p><b>Add Comm</b>: Create a new <a href="commlog.html">Commlog</a> item attached to this referral source. Opens the Communication Item for Referral window. </p>
<img src="images/referralCommlog.png" width="628" height="458"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>User</b>: Logged-on user when the commlog was created.</li>
<li><b>Hidden</b>: Hide this Commlog items from the Communications Log grid.</li>
<li><b>Anchored to top</b>: Move this Commlog item to the top of the grid and highlight.</li>
<li><b>Date/Time Created</b>: Auto-generated time stamp when the Commlog was created.</li>
<li><b>Mode</b>: Method of communication.</li>
<li><b>Sent or Received</b>: Direction of communication.</li>
<li><b>Note</b>: Commlog text. Right-click the text box for additional options.</li>
</ul>
<p><b>Communications Log</b>: The grid displays Commlogs created for this referral source. Anchored items are grouped at the top in chronological order and highlighted. Remaining items are listed in chronological order.</p>
<p><b>Delete</b>: Only referrals that are not attached to patients can be deleted. If no patients are listed in the <i>Used By Patients</i> section, the referral is deleted from the list. If the referral is attached to patients, hide the referral instead.</p>
</div>
</div>
</body>
</html>```

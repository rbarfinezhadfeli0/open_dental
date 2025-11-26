# File: ./www.opendental.com/manual/referrals.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Referrals</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('referrals','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/referrals.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/referrals.html" >v24.2</option><option value="https://www.opendental.com/manual241/referrals.html" >v24.1</option><option value="https://www.opendental.com/manual233/referrals.html" >v23.3</option><option value="https://www.opendental.com/manual232/referrals.html" >v23.2</option><option value="https://www.opendental.com/manual231/referrals.html" >v23.1</option><option value="https://www.opendental.com/manual224/referrals.html" >v22.4</option><option value="https://www.opendental.com/manual223/referrals.html" >v22.3</option><option value="https://www.opendental.com/manual222/referrals.html" >v22.2</option><option value="https://www.opendental.com/manual221/referrals.html" >v22.1</option><option value="https://www.opendental.com/manual214/referrals.html" >v21.4</option><option value="https://www.opendental.com/manual213/referrals.html" >v21.3</option><option value="https://www.opendental.com/manual212/referrals.html" >v21.2</option><option value="https://www.opendental.com/manual211/referrals.html" >v21.1</option><option value="https://www.opendental.com/manual205/referrals.html" >v20.5</option><option value="https://www.opendental.com/manual204/referrals.html" >v20.4</option><option value="https://www.opendental.com/manual203/referrals.html" >v20.3</option><option value="https://www.opendental.com/manual202/referrals.html" >v20.2</option><option value="https://www.opendental.com/manual201/referrals.html" >v20.1</option><option value="https://www.opendental.com/manual194/referrals.html" >v19.4</option><option value="https://www.opendental.com/manual193/referrals.html" >v19.3</option><option value="https://www.opendental.com/manual192/referrals.html" >v19.2</option><option value="https://www.opendental.com/manual191/referrals.html" >v19.1</option><option value="https://www.opendental.com/manual184/referrals.html" >v18.4</option><option value="https://www.opendental.com/manual183/referrals.html" >v18.3</option><option value="https://www.opendental.com/manual182/referrals.html" >v18.2</option><option value="https://www.opendental.com/manual181/referrals.html" >v18.1</option><option value="https://www.opendental.com/manual174/referrals.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Referrals</p></div>
<div class="GeneralPageContent">
<p>Use referrals to track income from different sources, create referral slips or letters, and track treatment referred to other providers.</p>
<p>In the <a href="family.html">Family Module</a>, in the Patient Information section, double-click the referrals area.</p>
<img src="images/referralsPatInfoNone.png" width="242" height="23"/><p>There are three types of referrals; <i>Referred From</i>, <i>Referred To</i>, and <i>Refer Custom</i>. By default, when a referral type is added to a patient, it is listed in the referral section (green area) of the Family Module, Patient Information area. </p>
<img src="images/referralPatientInfo.png" width="242" height="64"/><p>To hide the section, remove <i>Referrals</i> from the fields showing in the Patient Information, <a href="displayfields.html">Display Fields</a>. </p>
<p>The Referrals label can also be customized in Display Fields. The label acts as the section title until a referral is added, then is used as the custom referral label. Customize the referral section color in <a href="definitionsmisccolors.html">Definitions: Misc Colors</a>.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Also see our Webinar: <a href="https://youtu.be/zm_i8BkSWR4">Referral Setup</a>.</p>
<h2>Add / Edit Referrals</h2>
<p>Double-click the referrals section to add or edit a referral source. The Referrals for Patient window will open with the patient's existing referral sources.</p>
<img src="images/referralsForPatient.png" width="873" height="334"/><p>Add a referral by clicking one of the referral types, then single-click a referral from the <a href="referralsetup.html">Referrals</a> list to select a referral source.<br/><div class="Note">Note: If the referral is a patient, some fields can only be edited from the <a href="patientedit.html">Edit Patient Information</a> window.</div>
</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Referred From</b>: Select when a patient is referred from a source (e.g. internet, mailing, etc) or when referred from another provider or patient.</li>
<li><b>Refer To</b>: Select when a patient is referred to another provider. To track procedures, create this type of referral from the <a href="procedureedit.html">Procedure Info</a> window (see Track Referrals below). When referring to a provider the <a href="ehrsummaryofcaresend.html">EHR Summaries of Care</a> is automatically sent to the <a href="../site/patientportal.html">Patient Portal</a> and a <a href="securewebmailsend.html">WebMail</a> notification is sent to the patient. To turn off automatic summary of care WebMails, see <a href="ehrsettings.html">EHR Settings</a>.</li>
<li><b>Refer Custom</b>: Select to use the custom referral label. Custom referrals are useful for entering referrals you do not want to report on. Custom referrals are not tracked on referral reports but are an additional option in the Letters dropdown.</li>
</ul>
<p>Added referrals will list in the <b>Referrals Attached</b> grid. To send a <a href="referralslips.html">Referral Slip</a>, select the referral then click <b>Referral Slip</b> or to send a <a href="letterreferral.html">Referral Letter</a>, click Letter from the <a href="toolbar.html">Main Toolbar</a>. Double-click an attached referral to open the <a href="referraleditattachment.html">Edit Referral Attachment</a> window to edit or enter more details.</p>
<h2>Track Referrals</h2>
<p>When a patient is referred to another provider for treatment, the treatment can be tracked. First, set the procedure status to Referred Out. Either double-click a procedure and select Referred Out from the Procedure Status dropdown in the <a href="procedureedit.html">Procedure Info</a> window or in the <a href="chart.html">Chart Module</a>, check the Entry Status Referred, and <a href="entertreatment.html">Enter Treatment</a>.</p>
<p>Next, in the Procedure Info window, click [...] next to the Referral field to select the provider the procedure is being referred to. The Referrals window will open with a list of providers the patient has been referred to.</p>
<img src="images/referralsForProc.png" width="873" height="189"/><p>Click <b>Refer To</b>, then single-click a provider from the <a href="referralsetup.html">Referral List</a> and click OK to select the referred provider. Click <b>Referral Slip</b> to generate the referrals default <a href="referralslips.html">Referral Slip</a> then close the Referrals window to finish attaching the provider to the procedure.</p>
<p>The referred out procedure text and graphic color set in <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a> and <a href="definitionschartgraphiccolors.html">Definitions: Chart Graphic Colors</a> is used. The referral information is also added to the Family module, referrals section. To update the status of the referred out procedure, double-click the referral to access the Edit Referral Attachment window.</p>
<p>The procedure fee for a referred procedure will only be $0 if the procedure is originally charted with a <i>Referred Out</i> status. If the procedure is charted, then the status changes to <i>Referred Out</i>, the procedure fee must be changed to $0 manually.</p>
<p>As referrals are added to patients, various reports may be run to see referral counts, track production, and referred out procedures.<br/><a href="reportreferralproctrack.html">Referred Procedure Tracking Report</a>: Track treatment referred to another provider.<br/><a href="reportreferralanalysis.html">Referral Analysis Report</a>:Track production for referrals in a date range.<br/><a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a>: Choose from a variety of user requested reports. Use the <i>Return Queries About</i> dropdown and select Referral to narrow the list.<br/><a href="reportreferralraw.html">Referral - Raw Report</a>: Create a custom referral report.<br/><a href="referralsetup.html">Referral List</a>: Double-click a referral source from the list to quickly view a list and count of patients where the referral is used.</p>
</div>
</div>
</body>
</html>```

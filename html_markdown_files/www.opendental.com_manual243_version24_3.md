# File: ./www.opendental.com/manual243/version24_3.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Version 24.3</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('version24_3','versions','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/version24_3.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/version24_3.html" >v24.2</option><option value="https://www.opendental.com/manual241/version24_3.html" >v24.1</option><option value="https://www.opendental.com/manual233/version24_3.html" >v23.3</option><option value="https://www.opendental.com/manual232/version24_3.html" >v23.2</option><option value="https://www.opendental.com/manual231/version24_3.html" >v23.1</option><option value="https://www.opendental.com/manual224/version24_3.html" >v22.4</option><option value="https://www.opendental.com/manual223/version24_3.html" >v22.3</option><option value="https://www.opendental.com/manual222/version24_3.html" >v22.2</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
		<div class="TopBar2"><p>Version 24.3</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 24.3 was released as stable on 12/19/2024.</p>
<h2>Major Changes</h2><p class="MarginBottomZero">Added 2025 CDT Codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></p>
<ul class="MarginBottomGap">
<li>Also backported to 24.2.48.</li>
<li>New option to import treatment areas when updating procedure codes. </li>
</ul>
<p class="MarginBottomZero">Integration with Pearl AI. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7bridgepearlai.html">Pearl AI</a></p>
<ul class="MarginBottomGap">
<li>Send dental radiographs to Pearl to help detect potential conditions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7pearlaiprocess.html">Pearl Process</a></li>
</ul>
<h2>Changes by Category</h2><p class="MarginBottomZero"><b>Account Module</b></p>
<ul class="MarginBottomGap">
<li>New option to process self-service CareCredit payments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7carecreditselfservice.html">CareCredit Self-Service Payment</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7account.html">Account Module</a></li>
<li>New preference to block claim creation until missing data is fixed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7claimedit.html">Claim</a></li>
<li>New preference to determine Payment Plan production date. (also backported to 24.2.51) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7preferences.html">Preferences</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
<li>Changed verbiage for some payment plan fields. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
</ul>
<p class="MarginBottomZero"><b>Appointments Module</b></p>
<ul class="MarginBottomGap">
<li>New setting to prevent more than one appointment-type task from being attached to the same appointment. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7tasksetup.html">Tasks Preferences</a></li>
<li>New preference for Appointment provider change behavior. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7appointments.html">Appointments Module</a></li>
<li>New option to include all dates in the Planned Appointment Tracker. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7appttracker.html">Planned Appointment Tracker</a></li>
<li>Appointment View field to view patient's ward. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7appointmentvieweditwindow.html">Appointment View Edit</a></li>
</ul>
<p class="MarginBottomZero"><b>Chart Module</b></p>
<ul class="MarginBottomGap">
<li>New permission for <i>Perio Chart Copy</i>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7permissions.html">Permissions</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7perio.html">Perio Chart</a></li>
<li>Added Fax as a commlog mode option. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7commlog.html">Commlog</a></li>
<li>New permission to edit Chart Views. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7permissions.html">Permissions</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7showtabchart.html">Show Chart Views</a></li>
</ul>
<p class="MarginBottomZero"><b>eServices</b></p>
<ul class="MarginBottomGap">
<li>Allow users to change the date format on web forms. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7webformsupload.html">Web Form Setup</a></li>
<li>Deprecated Mobile Sync feature. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7eservicesmisctab.html">eServices Misc</a></li>
<li>Billing List supports Message-to-Pay. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7billingdefaults.html">Billing Defaults</a></li>
<li>Message-to-Pay option to send statement for family or individual. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7messagetopayedit.html">Message-to-Pay Edit</a></li>
<li>Integrate Payment Portal into eClipboard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7eclipboardpayment.html">eClipboard: Payment</a></li>
<li>Added audit trail entry for <i>MobileNotification</i>. (Also backported to 24.2.55) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
<li>Enhanced eClipboard Setup window to be more intuitive. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7eclipboardsetup.html">eClipboard Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7eclipboardimages.html">eClipboard Images</a></li>
</ul>
<p class="MarginBottomZero"><b>Family Module</b></p>
<ul class="MarginBottomGap">
<li>Code Groups can be used when creating Other Benefits. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7editbenefit.html">Edit Benefit</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7otherbenefits.html">Other Benefits</a></li>
<li>New permission for disbanding a Super Family. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7superfamily.html">Super Family</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7permissions.html">Permissions</a></li>
<li>Disbanding a Super Family is logged in the Audit Trail. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
</ul>
<p class="MarginBottomZero"><b>Imaging Module</b></p>
<ul class="MarginBottomGap">
<li>Right-click option to find the task an image is attached to. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7images.html">Imaging Module</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7tasksearch.html">Task Search</a></li>
<li>Print all images in a folder. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7images.html">Imaging Module</a></li>
</ul>
<p class="MarginBottomZero"><b>Reports</b></p>
<ul class="MarginBottomGap">
<li>New report setting to default User Query to Raw formatting. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7reportmiscsettings.html">Report Setup: Misc Settings</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7queryoverview.html">User Query</a></li>
<li>PayPlan Charges Due for Payment Plans added to Receivables Breakdown report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7reportreceivablesbreakdown.html">Receivables Breakdown Report</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
<li>Updated filter options in the Procedures Not Billed to Insurance report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Miscellaneous</b></p>
<ul class="MarginBottomGap">
<li>New preference to disable indexes when making an automatic update. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7backuptool.html">Backup Tool</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7updateinstall.html">Install Update</a></li>
<li>New preference to add paging buttons to the Patient Select window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7patientselect.html">Select Patient</a></li>
<li>Added Claim Form items for subscriber First and Last name. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7claimformedit.html">Claim Form Edit</a></li>
<li>New preference to treat blank entries as zero in Out of Network Fee Schedules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7plancatperc.html">Category Percentage Insurance Plan</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7feeschedules.html">Fee Schedules</a></li>
<li>Updated Batch Quickscreen send time. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7carecreditsetup.html">CareCredit Setup</a></li>
<li>New option to export Chart of Account as CSV file. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7accounting.html">Accounting</a></li>
<li>Program Link output parameter for [ClinicNumCur]. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7programlinkoutputfile.html">Program Link Output File</a></li>
<li>Added claim validation for one or more $0 procedures on a claim. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7claimsend.html">Send Claims</a></li>
<li>Added Open Dental API end user license. (Also backported to 24.2.45) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7licenses.html">Licenses</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help251%EA%A4%B7fhir.html">API Setup</a></li>
</ul>
<p class="MarginBottomZero"><b>API</b>: <a href="https://www.opendental.com/manual243/apispecification.html">API Specification</a><br></p>
<ul class="MarginBottomGap">
<li>EobAttaches POST UploadSftp.</li>
<li>Added ClaimPayments DELETE.</li>
<li>Added ProcessStatus to Payments PUT.</li>
<li>Added EmployerNum field to Patient resource.</li>
</ul>
		</div>
	</div>
</body>
</html>```

# File: ./www.opendental.com/manual232/rightclicktextboxes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Right Click Text Box</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('rightclicktextboxes','procedureedit','entertreatment','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/rightclicktextboxes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/rightclicktextboxes.html" >v24.2</option><option value="https://www.opendental.com/manual241/rightclicktextboxes.html" >v24.1</option><option value="https://www.opendental.com/manual233/rightclicktextboxes.html" >v23.3</option><option value="https://www.opendental.com/manual232/rightclicktextboxes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/rightclicktextboxes.html" >v23.1</option><option value="https://www.opendental.com/manual224/rightclicktextboxes.html" >v22.4</option><option value="https://www.opendental.com/manual223/rightclicktextboxes.html" >v22.3</option><option value="https://www.opendental.com/manual222/rightclicktextboxes.html" >v22.2</option><option value="https://www.opendental.com/manual221/rightclicktextboxes.html" >v22.1</option><option value="https://www.opendental.com/manual214/rightclicktextboxes.html" >v21.4</option><option value="https://www.opendental.com/manual213/rightclicktextboxes.html" >v21.3</option><option value="https://www.opendental.com/manual212/rightclicktextboxes.html" >v21.2</option><option value="https://www.opendental.com/manual211/rightclicktextboxes.html" >v21.1</option><option value="https://www.opendental.com/manual205/rightclicktextboxes.html" >v20.5</option><option value="https://www.opendental.com/manual204/rightclicktextboxes.html" >v20.4</option><option value="https://www.opendental.com/manual203/rightclicktextboxes.html" >v20.3</option><option value="https://www.opendental.com/manual202/rightclicktextboxes.html" >v20.2</option><option value="https://www.opendental.com/manual201/rightclicktextboxes.html" >v20.1</option><option value="https://www.opendental.com/manual194/rightclicktextboxes.html" >v19.4</option><option value="https://www.opendental.com/manual193/rightclicktextboxes.html" >v19.3</option><option value="https://www.opendental.com/manual192/rightclicktextboxes.html" >v19.2</option><option value="https://www.opendental.com/manual191/rightclicktextboxes.html" >v19.1</option><option value="https://www.opendental.com/manual184/rightclicktextboxes.html" >v18.4</option><option value="https://www.opendental.com/manual183/rightclicktextboxes.html" >v18.3</option><option value="https://www.opendental.com/manual182/rightclicktextboxes.html" >v18.2</option><option value="https://www.opendental.com/manual181/rightclicktextboxes.html" >v18.1</option><option value="https://www.opendental.com/manual174/rightclicktextboxes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Right Click Text Box</p></div>
<div class="GeneralPageContent">
<p>Right-click in certain text boxes throughout Open Dental to spell check, insert Quick Paste and Auto Notes, and more.</p>
<p>In <a href="procedureedit.html">Procedure Notes</a>, right-click.</p>
<img src="images/rightclick.png" width="529" height="365"/><p>Additionally, right-click is supported for <a href="quickpastenotessetup.html">Quick Paste Notes</a> and <a href="spellcheck.html">Spell Check</a> in the text boxes listed in the table below.</p>
<table class="simpletable">
<tr>
<th style="width:50%">Type</th>
<th style="width:50%">Window Name: Text Box Name</th>
</tr>
<tr>
<td>None</td>
<td><a href="account.html">Account Module</a>: Fam Urgent Fin Note</td>
</tr>
<tr>
<td>Procedure</td>
<td><p><a href="procedurecodeedit.html">Procedure Code</a>: Default Notes Edit</p>
<p><a href="procedurecodeedit.html">Procedure Code Note</a>: Note</p>
<p><a href="procedureedit.html">Procedure</a>: Notes, E-claim Note</p>
<p><a href="procgroupnote.html">Procedure Group Note</a>: Notes</p>
<p><a href="procedurelocking.html">Procedure Note Append</a>: Original Note, Appended Note</p>
</td>
</tr>
<tr>
<td>Appointment</td>
<td><a href="aptedit.html">Edit Appointment</a>: Appointment Notes</td>
</tr>
<tr>
<td>CommLog</td>
<td><a href="commlog.html">Commlog</a>: Note</td>
</tr>
<tr>
<td>Adjustment</td>
<td><a href="adjustments.html">Adjustment</a>: Note</td>
</tr>
<tr>
<td>Claim</td>
<td><a href="claimedit.html">Claim</a>: Claim Notes</td>
</tr>
<tr>
<td>Email</td>
<td><p><a href="emailmessage.html">Edit Email Message</a>- body of message</p>
<p><a href="emailmessage.html">Edit Email Template</a> - body of message</p>
</td>
</tr>
<tr>
<td>InsPlan</td>
<td><p><a href="insplan.html">Insurance Plan</a>: Plan Note, Subscriber Note</p>
<p><a href="benefitinfo.html">Benefits</a>: Notes</p>
</td>
</tr>
<tr>
<td>MedicalSummary</td>
<td><a href="medical.html">Medical</a>: Medical Summary</td>
</tr>
<tr>
<td>ServiceNotes</td>
<td>Chart Medical Area: Service Notes</td>
</tr>
<tr>
<td>MedicalHistory</td>
<td>Chart Medical Area: Medical History</td>
</tr>
<tr>
<td>MedicationEdit</td>
<td><a href="medicationmaster.html">Medications List</a>: Notes</td>
</tr>
<tr>
<td>MedicationPat</td>
<td><a href="medicationspatient.html">Medications</a>: Count, Instructions, Refills</td>
</tr>
<tr>
<td>PatAddressNote</td>
<td><p><a href="patientedit.html">Edit Patient Information</a>: Address and Phone</p>
Notes <p><a href="familyadd.html">Add Family</a>: Address and Phone Notes</p>
</td>
</tr>
<tr>
<td>Payment</td>
<td><a href="payment.html">Payment</a>: Note</td>
</tr>
<tr>
<td>PayPlan</td>
<td><p><a href="paymentplanpatient.html">Payment Plan</a>: Note</p>
<p>Edit Payment Plan Charge: Note</p>
</td>
</tr>
<tr>
<td>Query</td>
<td><a href="queryoverview.html">User Query</a></td>
</tr>
<tr>
<td>Referral</td>
<td><a href="referralsetup.html">Referral List</a>: Notes</td>
</tr>
<tr>
<td>Rx</td>
<td><a href="rx.html">Rx / Prescription</a>: Notes</td>
</tr>
<tr>
<td>FinancialNotes</td>
<td><p>Account module: Family Financial</p>
<p><a href="billing.html">Billing</a>: General Message</p>
</td>
</tr>
<tr>
<td>MedicalUrgent</td>
<td>Chart Medical Area: Med Urgent</td>
</tr>
<tr>
<td>ChartTreatment</td>
<td><a href="chart.html">Chart Module</a>: text box under graphical chart</td>
</tr>
<tr>
<td>Statement</td>
<td><p><a href="statementwindow.html">Statement Window</a>: Note, Bold Note</p>
<p><a href="billingdefaults.html">Billing Defaults</a>: General Message</p>
<p>Billing Options: General Message, Body</p>
</td>
</tr>
<tr>
<td>Recall</td>
<td><a href="recall.html">Edit Recall</a>: Administrative Note</td>
</tr>
<tr>
<td>Popup</td>
<td><a href="popups.html">Popups</a>: Popup Message</td>
</tr>
<tr>
<td>Task</td>
<td><a href="taskswindow.html">Task Window</a>: Description, Note. The quick paste note must have a Task type of the ? shortcut will not work.</td>
</tr>
<tr>
<td>TxtMsg</td>
<td><a href="textmessages.html">Text Message</a>: Text Message</td>
</tr>
<tr>
<td>Schedule</td>
<td><p><a href="scheduleeditdaywindow.html">Schedule Edit</a>: Note</p>
<p><a href="blockouts.html">Blockouts</a>: Note</p>
</td>
</tr>
<tr>
<td>TreatPlan</td>
<td><p><a href="treatmentplan.html">Treatment Plan Module</a>: Treatment Plan Note</p>
<p><a href="treatmentplanedit.html">Edit Treatment Plan</a>: Treatment Plan Note</p>
</td>
</tr>
<tr>
<td>ClaimCustomTrack</td>
<td><a href="claimtabstatus.html">Edit Claim - Status History Tab</a></td>
</tr>
<tr>
<td>CreditCardEdit</td>
<td>Credit Card Edit window. See <a href="recurringchargesauthorize.html">Authorize Recurring Charges</a></td>
</tr>
</table>
<br/><p>Right-click options may be available for other areas of Open Dental with additional options. See the corresponding manual page for that area for additional information and right-click options.</p>
<h2>Inserting Dates</h2>
<p class="MarginBottomZero">There are several ways to quickly insert today's date in a right click text box. </p>
<ul class="MarginBottomGap">
<li>In the text box, press CTRL + D.</li>
<li>Right click in the text box, then click Insert Date.</li>
<li>Click Date at the bottom of the quick paste notes window.</li>
</ul>
</div>
</div>
</body>
</html>```

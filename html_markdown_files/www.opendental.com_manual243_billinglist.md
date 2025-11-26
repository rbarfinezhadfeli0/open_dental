# File: ./www.opendental.com/manual243/billinglist.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Billing List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('billinglist','billing','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/billinglist.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/billinglist.html" >v24.2</option><option value="https://www.opendental.com/manual241/billinglist.html" >v24.1</option><option value="https://www.opendental.com/manual233/billinglist.html" >v23.3</option><option value="https://www.opendental.com/manual232/billinglist.html" >v23.2</option><option value="https://www.opendental.com/manual231/billinglist.html" >v23.1</option><option value="https://www.opendental.com/manual224/billinglist.html" >v22.4</option><option value="https://www.opendental.com/manual223/billinglist.html" >v22.3</option><option value="https://www.opendental.com/manual222/billinglist.html" >v22.2</option><option value="https://www.opendental.com/manual221/billinglist.html" >v22.1</option><option value="https://www.opendental.com/manual214/billinglist.html" >v21.4</option><option value="https://www.opendental.com/manual213/billinglist.html" >v21.3</option><option value="https://www.opendental.com/manual212/billinglist.html" >v21.2</option><option value="https://www.opendental.com/manual211/billinglist.html" >v21.1</option><option value="https://www.opendental.com/manual205/billinglist.html" >v20.5</option><option value="https://www.opendental.com/manual204/billinglist.html" >v20.4</option><option value="https://www.opendental.com/manual203/billinglist.html" >v20.3</option><option value="https://www.opendental.com/manual202/billinglist.html" >v20.2</option><option value="https://www.opendental.com/manual201/billinglist.html" >v20.1</option><option value="https://www.opendental.com/manual194/billinglist.html" >v19.4</option><option value="https://www.opendental.com/manual193/billinglist.html" >v19.3</option><option value="https://www.opendental.com/manual192/billinglist.html" >v19.2</option><option value="https://www.opendental.com/manual191/billinglist.html" >v19.1</option><option value="https://www.opendental.com/manual184/billinglist.html" >v18.4</option><option value="https://www.opendental.com/manual183/billinglist.html" >v18.3</option><option value="https://www.opendental.com/manual182/billinglist.html" >v18.2</option><option value="https://www.opendental.com/manual181/billinglist.html" >v18.1</option><option value="https://www.opendental.com/manual174/billinglist.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Billing List</p></div>
<div class="GeneralPageContent">
<p>Statements generated via the billing list can be printed, sent to an electronic billing processing service, or emailed directly from Open Dental.</p>
<p>In <a href="billing.html">Billing</a>, at the bottom, click <b>Create List</b>.</p>
<img src="images/billingList.png" width="890" height="510"/><p>In the Billing Options window, set the filters, then click <b>Create List</b>. All guarantors that meet the Billing Option criteria are listed.</p>
<p>This window also opens when clicking from the Manage Module, when clicking <b>Billing</b> if there are any unsent statements.</p>
<h2>Sort and Filter</h2>
<p>Sort and filter the Bills grid using the options at the top. </p>
<img src="images/billingListFilters.png" width="860" height="59"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Unsent / Sent</b>: Toggle the list to view sent or unsent statements.</li>
<li><b>Order by</b>: Sort statements by Billing Type or patient name.</li>
<li><b>Email From</b>: The email address statements are sent from. If using Clinics and <i>Practice/Clinic</i> is selected, the email address of the patient's clinic is used. If there is no clinic email, the practice default is used.</li>
<li><b>Clinic</b>: Only show guarantors assigned to the selected <a href="clinics.html">Clinic</a>.</li>
<li><b>Start / End Date</b>: Filter by date range. Click <b>Refresh</b> to update statements in the list. <ul>
<li> For unsent statements, filter the list by the date the statement was generated.</li>
<li>For sent statements, filter the list by the date the statement was sent.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Refresh</b>: Click to update bills. </p>
<ul class="MarginBottomGap">
<li>If Start / End Date were entered, the Bills grid is filtered.</li>
<li>Statements are updated to reflect any account changes (e.g., payments, adjustments, etc.) since Billing List was last refreshed </li>
<li>Billing List is automatically refreshed approximately every 10 seconds when the window is open to reflect account changes. For Enterprise users, Billing List is refreshed at the <i>Process signal interval in seconds</i> set in <a href="preferences.html">Preferences</a>. </li>
</ul>
<h2>Bills Grid</h2>
<p>The Bills grid displays the billing list.</p>
<img src="images/billingListGrid.png" width="780" height="393"/><p>Double-click a statement to view the <a href="statementwindow.html">Statement Window</a>.</p>
<p> Right-click on a row and click <b>Go To</b> to select the patient's account. Bills show as unsent statements in individual accounts. The Billing List remains open. </p>
<p class="MarginBottomZero">Columns:  </p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Guarantor's name.</li>
<li><b>Bill Type</b>: The Guarantor's Billing Type.</li>
<li><b>Mode</b>: The method the statement will be sent. Mode options include:  <ul>
<li><b>Email</b>: Send the statement via email.  <ul>
<li>Email is the default mode for a patient when their Billing Type (in <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>) has E entered for Email bill.</li>
<li>If <a href="../site/secureemail.html">Secure Email</a> is enabled and the Default Send Method is set to Secure in <a href="secureemailsetup.html">Secure Email Setup</a>, email is sent via a secure email message. If Secure Email is not enabled or the Default Send Method is Unsecure, email is sent via unsecure (regular) email. Regular email is not a secure method of sending statements (PHI). </li>
<li>The statement is attached to the email as a PDF and the default email message will be used. If a patient's email address is missing, that bill is skipped and a notification appears.</li>
</ul>
</li>
<li><b>Mail</b>: The default mode for all non-email Billing Types (when electronic billing is turned off). These statements will be generated as one PDF file and previewed on-screen, sorted by clinic in alphabetical order by patient last name. Printed statements are designed to be printed on standard perforated billing paper and to fit inside a standard window envelope. </li>
<li><b>Electronic</b>: The default mode for all non-email Billing Types when electronic billing is turned on. These statements will be sent to the electronic billing processing service. Limited statements, receipts, and invoices cannot be sent electronically.</li>
<li><b>InPerson</b>: The mode for unsent statements generated from the Account Module. These statements are generated as a PDF file then previewed on-screen.</li>
</ul>
</li>
<li><b>Last Statement</b>: Date of the last statement sent.</li>
<li><b>BalTot</b>: The total family balance.</li>
<li><b>-InsEst</b>: Displays an insurance amounts pending for the family. </li>
<li><b>=AmtDue</b>: Displays the amount due for the family, after insurance.</li>
<li><b>PayPlanDue</b>: Displays the amount due on a payment plan, if any.</li>
<li><b>SF</b>: When marked with an X, indicates the statement is a super statement. </li>
</ul>
<h2>Other Options</h2>
<img src="images/billingListOther.png" width="104" height="254"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Edit Selected</b>: Edit several bills at once. Highlight the bills then click the button. Opens the <a href="statementwindow.html">Statement Window</a>. Any changes affect all selected bills. <ul>
<li>Some options are disabled for unsent bills. </li>
<li>All options, except the Delete button and Sent checkbox, are disabled for sent bills. To make changes (e.g., if bills were not printed), uncheck Sent. Once saved, reselect the bills from the Unsent list and use Edit Selected to make changes. </li>
<li>To edit only a single statement, double-click the statement instead.</li>
</ul>
</li>
<li><b>Counts</b>: Shows the total number of bills currently displayed, amount currently selected, and number of bills most recently sent per <i>Mode</i>. Closing the Billing List resets the count per <i>Mode</i>.</li>
<li><b>Defaults</b>: Opens limited view of <a href="billingdefaults.html">Billing Defaults</a> window in order to modify Electronic Billing credentials (e.g., password/username) without clearing the list of statements.</li>
</ul>
<img src="images/billingListOtherMore.png" width="451" height="43"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>All</b>: Select all patients in the list.</li>
<li><b>None</b>: Deselect all patients in the list.</li>
<li><b>Print List</b>: Print the list of bills (not individual statements).</li>
</ul>
<h2>Send Statements</h2>
<p>Click <b>Send</b> statements to generate and/or send based on their Mode.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Once bills are successfully sent or generated, a confirmation message is displayed and a statement line item is added to the guarantor's patient account grid.</li>
<li>If sending electronic billing and the office has opted to generate PDF copies of the statements, statements are generated and saved in each patient's Imaging Module, Statement folder.</li>
<li>If a payment is posted to the account after the statement is generated, but before it is sent, aging is updated but the Dunning Messages are not. This is typically not an issue if statements are sent immediately.</li>
<li>To send an additional text message to patients when sending statements from the billing list, see Billing Defaults, <i>Send text messages for these modes</i>. The text message can optionally include a clickable URL that launches the Patient Portal Sign in window. See <a href="portalonlinepayments.html">Online Payments</a>.</li>
</ul>
<p class="MarginBottomZero">If exiting the Billing List without sending statements, users are prompted to delete bills:<br/><img src="images/billingListClose.png" width="410" height="146" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>Click <b>Yes</b> to delete the unsent statements. Statements can be re-generated for patients at a later time. When selected, a confirmation is displayed with the number of deleted statements. </li>
<li>Click <b>No</b> to save the list. Return to the Billing List at any time to continue.</li>
<li>Click <b>Cancel</b> to return to the Billing List window without closing.</li>
</ul>
<h2>Billing Progress</h2>
<p>If the preference, <i> Show progress when sending statements</i>, is enabled, a progress window is displayed. Offices can also set a <i>Max number of statements per batch</i>. This is useful for large offices that send many batches of statements at once.</p>
<p>Do not open other windows while sending statements. Doing so causes sending to pause.</p>
<img src="images/billingListStatement.png" width="490" height="341"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Overall</b>: Indicates percentage of progress towards all sending statements.</li>
<li><b>Batch</b>: Indicates percentage of progress towards printing the batches of statements. If using clinics, a separate batch per clinic is processed.</li>
<li><b>Statement</b>: Indicates the percentage of progress towards printing individual statements in the batch.</li>
<li><b>Progress Log</b>: Displays a real-time log while statements are sending.</li>
<li><b>Pause / Resume:</b> Click Pause to stop progress, finish the current statement to PDF, then send the current batch if applicable. Electronic billing statements will not be sent. Click Resume to keep sending statements.</li>
<li><b>Cancel</b>: Finish the current batch and close the Billing Statement Progress window. The Bills window locks until the batch is finished. Electronic billing statements will not be sent.</li>
</ul>
<h2>Unsending Bills</h2>
<p class="MarginBottomZero">If something went wrong during the printing process, bills can be unsent to be reprinted. </p>
<ol class="MarginBottomGap">
<li>Click the <b>Sent</b> radio button at the top of the Bills window to show all sent bills.</li>
<li>Highlight all printed bills to unsend, then click Edit Selected.</li>
<li>Uncheck the <b>Sent</b> box. This setting applies to all selected bills.</li>
<li>Click <b>OK</b> to return to the Billing List. Click the <b>Unsent</b> radio button to see all the bills. If the bills are not in the list, ensure the date range is inclusive enough.</li>
</ol>
</div>
</div>
</body>
</html>```

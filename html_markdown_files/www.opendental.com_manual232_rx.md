# File: ./www.opendental.com/manual232/rx.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Rx / Prescription</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('rx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/rx.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/rx.html" >v24.2</option><option value="https://www.opendental.com/manual241/rx.html" >v24.1</option><option value="https://www.opendental.com/manual233/rx.html" >v23.3</option><option value="https://www.opendental.com/manual232/rx.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/rx.html" >v23.1</option><option value="https://www.opendental.com/manual224/rx.html" >v22.4</option><option value="https://www.opendental.com/manual223/rx.html" >v22.3</option><option value="https://www.opendental.com/manual222/rx.html" >v22.2</option><option value="https://www.opendental.com/manual221/rx.html" >v22.1</option><option value="https://www.opendental.com/manual214/rx.html" >v21.4</option><option value="https://www.opendental.com/manual213/rx.html" >v21.3</option><option value="https://www.opendental.com/manual212/rx.html" >v21.2</option><option value="https://www.opendental.com/manual211/rx.html" >v21.1</option><option value="https://www.opendental.com/manual205/rx.html" >v20.5</option><option value="https://www.opendental.com/manual204/rx.html" >v20.4</option><option value="https://www.opendental.com/manual203/rx.html" >v20.3</option><option value="https://www.opendental.com/manual202/rx.html" >v20.2</option><option value="https://www.opendental.com/manual201/rx.html" >v20.1</option><option value="https://www.opendental.com/manual194/rx.html" >v19.4</option><option value="https://www.opendental.com/manual193/rx.html" >v19.3</option><option value="https://www.opendental.com/manual192/rx.html" >v19.2</option><option value="https://www.opendental.com/manual191/rx.html" >v19.1</option><option value="https://www.opendental.com/manual184/rx.html" >v18.4</option><option value="https://www.opendental.com/manual183/rx.html" >v18.3</option><option value="https://www.opendental.com/manual182/rx.html" >v18.2</option><option value="https://www.opendental.com/manual181/rx.html" >v18.1</option><option value="https://www.opendental.com/manual174/rx.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx / Prescription</p></div>
<div class="GeneralPageContent">
<p>Paper prescriptions can be written and printed in Open Dental.</p>
<p>In the <a href="chart.html">Chart Module</a> toolbar, click <b>New Rx</b>.</p>
<img src="images/rxSelect.gif" width="889" height="318"/><p>Alternatively, in the <a href="rxmanage.html">RX Manage</a> window, click <b>New Rx</b>.</p>
<p class="MarginBottomZero">Setup: </p>
<ul class="MarginBottomGap">
<li><a href="rxsetup.html">Rx / Prescriptions List</a>: Add new medications to the Prescriptions list. Create templates for common prescriptions and set up drug interaction alerts based on allergies, medications, and/or problems.</li>
<li><a href="sheetsrx.html">Rx Layout</a>: Customize the print layout when printing one prescription on a page.</li>
<li><a href="sheetsrxmulti.html">Rx Multiple Layout</a>: Customize the print layout when printing up to four prescriptions per page.</li>
<li><a href="rxmanage.html">Rx Manage</a>: Create and manage prescriptions and/or print multiple prescriptions per page.</li>
</ul>
<h2>Create a New Prescription</h2>
<p>In the Select Prescription window, double-click on a prescription template that is close to your requirements, or click <b>Blank</b> to start with an empty prescription. The Blank button is not available if EHR is turned on.</p>
<p class="MarginBottomZero">(Optional) If the prescription list is long, filter the list using the Search.  </p>
<ul>
<li>Drug: Drug name.</li>
<li>Disp: Dispensed amount.</li>
<li>Controlled Only: Check this box to only display prescriptions marked as a controlled substance.</li>
</ul>
<p class="MarginBottomGap">Click <b>Search</b> or press Enter to refresh the list.</p>
<p><div class="Note">Note: If <a href="rxinteractionchecks.html">Prescription Alerts</a> are triggered, a pop up will display the alert message. Click <b>Cancel</b> to select a different prescription template. Click <b>OK</b> to proceed.</div>
<br/><img src="images/rxEdit.png" width="621" height="595" class="ImageInParagraph"/></p>
<p class="MarginBottomZero">Enter or change prescription information as needed.  </p>
<ul class="MarginBottomGap">
<li><b>Date:</b> Defaults to today.</li>
<li><b>Controlled Substance:</b> Check this box to display the selected provider's DEA# on the printed prescription. </li>
<li><b>Is Proc Required:</b> Check this box to require an associated procedure when printing. Select a procedure from the dropdown. See Procedure Required on Prescription section below for setup.</li>
<li><b>Procedure</b>: Select the procedure requiring the prescription. Use the dropdown menu to select from completed or treatment planned procedures.</li>
<li><b>Days of Supply:</b> Required by some states. Enter the number of days this prescription will last. Can be a partial day if needed (e.g. 3.5). Also available as an output text field on Rx / Single Prescription Layout sheets.</li>
<li><b>Drug</b>: Drug name.</li>
<li><b>Sig</b>: Instructions for the patient on when and how to take the prescription. Only the first 255 characters of the Sig are saved.</li>
<li><b>Disp</b>: Dispense number.</li>
<li><b>Refills</b>: Number of refills allowed.</li>
<li><b>Provider</b>: Provider filling the prescription.<br/><ul>
<li>If the logged-in user is associated with a provider, that provider is automatically selected. </li>
<li>If the logged-in user is not associated with a provider, a provider will only be chosen if only one is in the list. If multiple providers are in the list, click the dropdown or <b>[...]</b> to select a different provider. </li>
<li>When <a href="clinics.html">Clinics</a> are enabled the provider list is limited to providers assigned to the to the current Clinic. If no providers are assigned, the Clinic default provider is selected, if set, otherwise the practice default provider is chosen.</li>
<li>If <i>Hide providers without DEA number from making (non electronic) prescriptions</i> is enabled in <a href="preferences.html">Preferences</a>, listed providers only include those with a DEA number entered in <a href="providerseditwindow.html">Edit Provider</a>.</li>
<li>If EHR is enabled, the automatically selected provider is locked when creating the prescription. Users with the <i>Rx Edit </i><a href="permissions.html">Permission</a> can edit the provider once the Rx is saved.</li>
<li>List of available providers does not include providers marked as <i>Not a Person</i> in the Edit Provider window.</li>
</ul>
</li>
<li><b>Dosage Code</b>: Only visible when EHR is turned on. </li>
<li><b>Notes:</b> This is only for your use and does not appear on printed prescriptions.</li>
<li><b>Patient Instructions</b>: Provide instructions to the patient on how the medication should be taken.</li>
<li><b>eRx Pharmacy Info</b>: Informational field that automatically populates with the pharmacy name when electronic prescriptions are received. This helps verify the correct clinic is selected.</li>
<li><b>Pharmacy:</b> Click Pick to select a pharmacy from the <a href="pharmacies.html">Pharmacies</a> if the prescription is called in.</li>
<li><b>Send Status:</b> Choose the status of the selected prescription. Options include Unsent, InElectQueue, SentElect, Printed, Faxed, CalledIn, GaveScript, Pending.</li>
<li><b>Clinic</b>: Select the clinic associated with the prescription. Displays clinic address information when printed.  <ul>
<li>If the preference <i>Rx use selected clinic from Clinic menu instead of selected patient's default clinic</i> is enabled, the clinic defaults to the currently selected clinic in the Main Menu. If Headquarters is selected, defaults to <i>Unassigned</i>. </li>
<li>If the preference <i>Rx use selected clinic from Clinic menu instead of selected patient's default clinic</i> is disabled, the clinic defaults to the patient's assigned clinic. </li>
</ul>
</li>
</ul>
<p>Click <b>OK</b> to save without printing. </p>
<p>Click <b>Print</b> to save and print it to the default printer for single prescriptions (<a href="printersetup.html">Printer Setup</a>). To print multiple prescriptions on one page, see <a href="rxmanage.html">Rx Manage</a>. <div class="Note">Note: If the Send Status is set to anything other than InElectQueue or SentElect, clicking the Print button automatically changes the status to Printed.</div>
</p>
<p>The Rx sheet set as the default for the Rx sheet type will be used to print single prescriptions. See <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p>Saved prescriptions will be added to the patient's Progress Notes in the Chart Module and to the patient's medication list. Prescriptions are not previewed before printing, thus they can not be digitally signed or changed before printing. To edit a prescription, double click it then reprint it.</p>
<p>Below is an example of the print layout for the internal Rx sheet (one prescription printed per page). Note that the Generic Substitution Permitted check box in the internal sheet is always checked. To remove the check mark, customize the sheet.</p>
<img src="images/rxPrint.gif" width="540" height="419"/><h2>Patient Instructions</h2>
<p>Some offices may want to provide the patient with instructions separate from the prescription.</p>
<p>In the Edit Rx window, enter the instructions in the Patient Instructions field, and Click <b>Pat Instr</b>. to print.</p>
<img src="images/rxPatInstructPrint.gif" width="482" height="353"/><h2>Procedure Required on Prescription</h2>
<p>Some states require an associated procedure show on their printed prescriptions. Each of the following steps must be completed to activate the preference.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Enable the preference behavior. This preference is disabled by default.  <ol>
<li>Click Lists, Prescriptions.</li>
<li>Check <i>Procedure code required on some prescriptions</i> to enable the subsequent preferences.</li>
</ol>
</li>
<li>Enable the preference for each Clinic.  <ol>
<li>In the main menu, click Lists, Clinics, then double click to open the <a href="cliniceditwindow.html">Clinic</a>.</li>
<li><i>Proc code required on Rx from this clinic</i> to enable the preference on the clinic level.</li>
</ol>
</li>
<li>Enable the preference for each Rx template. This will check the <i>Is Proc Required</i> preference automatically in the Edit Rx window each time the drug is prescribed. <ol>
<li>In the main menu, click Lists, Prescriptions.</li>
<li>Double-click the prescription to open the Edit Rx Template window.</li>
<li>Check <i>Is Proc Required</i> for this drug.</li>
</ol>
</li>
<li>Enable the preference for an individual Rx.  <ol>
<li>In the Chart module, click New Rx.</li>
<li>Check <i>Is Proc Required</i> if it is not already enabled at the template level.</li>
</ol>
</li>
</ol>
<p>To include an ICD-10 diagnosis code, attach it to the procedure. See <a href="proceduremedical.html">Procedure - Medical Tab</a> and <a href="icdcodes.html">ICD-10 Codes</a>.</p>
<p>See <a href="automation.html">Automation</a> for options available when creating a prescription.</p>
<h2>Audit Trail</h2>
<p>Any time a prescription is created, edited, deleted, or printed, a log is created in the audit trail. Users must have the <i>RxCreate</i> security permission to create new prescriptions and the <i>RxEdit</i> permission to change or delete prescriptions.</p>
<p>To view an audit trail of changes made to a selected prescription only, double click an existing prescription in the Progress Notes, then click Audit Trail on the Edit Rx window.</p>
<img src="images/rxAuditTrail.gif" width="915" height="248"/></div>
</div>
</body>
</html>```

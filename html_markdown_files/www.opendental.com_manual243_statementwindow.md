# File: ./www.opendental.com/manual243/statementwindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Statement Window</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('statementwindow','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/statementwindow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/statementwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/statementwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/statementwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/statementwindow.html" >v23.2</option><option value="https://www.opendental.com/manual231/statementwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/statementwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/statementwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/statementwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/statementwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/statementwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/statementwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/statementwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/statementwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/statementwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/statementwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/statementwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/statementwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/statementwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/statementwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/statementwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/statementwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/statementwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/statementwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/statementwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/statementwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/statementwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/statementwindow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Statement Window</p></div>
<div class="GeneralPageContent">
<p>Individual statements for patients or families can be created from the Account Module.</p>
<p>In the <a href="account.html">Account Module</a> toolbar, click the Statement dropdown.</p>
<img src="images/statementDropdown.png" width="192" height="185"/><p><b>Statement button</b>: Click to immediately print the default statement to the default printer. Statement shows all transactions within the number of days set in <a href="billingdefaults.html">Billing Defaults</a> or, the date range entered in the Account Module, Show tab. Set the default Statement sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Walkout</b>: Immediately print a Walkout Statement which does not include payment options. Displays information for the selected patient (procedures, payments, adjustments, etc.) from today's date only. </p>
<p class="MarginBottomZero"><b>Email<b></b></b>: Generate a PDF attached to an <a href="emailmessage.html">Email Message Edit</a>. The subject and body are automatically filled in based on <a href="billingdefaults.html">Billing Defaults</a>, but can be edited before sending.  </p>
<ul class="MarginBottomGap">
<li>Regular email is not a secure method of sending statements (PHI). If using Secure Email, the statement can be sent securely.</li>
<li>By default, emails are sent using the default address for the patient's assigned Clinic. If Clinics are not enabled (or the patient's assigned clinic does not have a default email), the Default email in Email setup used.</li>
<li>To change the From address, click the <b>Email </b>button to change the From address from the preview.</li>
</ul>
<p><b>Receipt</b>: Immediately print a <a href="receipt.html">Receipt</a> with today's payments. Set the default Receipt sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Invoice</b>: Select procedures, then click to generate an <a href="invoice.html">Invoice</a>. Set the default Invoice sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Limited</b>: Select procedures, patient payments, insurance payments, or adjustments, then click to generate a <a href="limited.html">Limited Statement</a>. Set the default Limited sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Limited (Custom)</b>: Displays the <a href="limited.html">Limited Statement</a> Select window. </p>
<p><b>More Options</b>: Displays the Statement window to allows users to customize a statement prior to printing or sending.</p>
<h2>Statement Window</h2>
<img src="images/statementOptions.png" width="722" height="588"/><p>Alternatively, this window also opens when a user double-clicks a bill or clicks <b>Edit Selected</b> from the <a href="billinglist.html">Billing List</a>. A read-only window also opens when a user double-clicks an existing statement, invoice, or receipt.</p>
<p class="MarginBottomZero">Below is a description of all options that might show on the window. Not all options show for all statement types, and not all options can be modified. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Defaults to today's date.</li>
<li><b>Sent</b>: Automatically checked once the statement, invoice, or receipt is printed or emailed. Check the box to change it manually.</li>
<li><b>Mode</b>: The method of delivery.</li>
<li><b>Hide payment options</b>: Remove payment information (amount due, date due, amount enclosed, and credit card payment section, aging).</li>
<li><b>Single patient only</b>: If checked, only the selected patient's procedures are included. If unchecked, procedures for all family members are included. The <i>StatementAging </i><a href="sheetsgrid.html">Sheet Grid</a> is reflective of the family balance whether or not this box is checked.</li>
<li><b>Intermingle family members</b>: If checked, all patients in the family are mixed in one grid. If unchecked, each family member has their own grid. Set the default in Preferences, <i>Account Module statements default to intermingled mode</i>.</li>
<li><b>Receipt</b>: Create a receipt instead of a statement. Receipts only include patient payment information.</li>
<li><b>Send Text Message</b>: Only shows when sending statements from the Billing List. Send a text message to the patient about this statement. Set the default text message in <a href="billingdefaults.html">Billing Defaults</a>, SMS Statements. When not opened from the Billing List, this box shows as <i>Sent text</i> and is read-only. </li>
<li><b>Date Range</b>: Transactions that fall between the start and end date show on the statement. Type the dates manually or click one of the buttons to insert a date. If both dates are blank, all transactions show.  <ul>
<li><b>Show all transactions since zero or negative balance</b>: If checked, all transactions from the last date the family account balance was zero, or had a credit balance, will print on the statement. The date range entered is ignored.</li>
</ul>
</li>
<li><b>Send to Super Family</b>: Only an option if the patient is a member of <a href="superfamily.html">Super Family</a> and the family guarantor has <i>Included in Super Family Billing</i> checked on the <a href="patientedit.html">Edit Patient Information</a>. If checked, a super statement that includes account activity for all super family members is generated. Super statements always group by super family guarantor.</li>
<li><b>Include Patient Last Name</b>: This always defaults to unchecked when opening the window, even if the box was previously checked. Check the box to include the patient last names in <i>Patient</i> column of the statement. The last name is shown on the statement preview and included when a copy is saved (i.e., marked sent) or printed.</li>
<li><b>Export as CSV</b>: Export the statement as a CSV once it is printed or emailed from the Statement window. Users must have the <i>Export CSV </i><a href="permissions.html">Permissions</a> to use this option. <ul>
<li>Files are saved to the <a href="definitionsimagecat.html">Definitions: Image Categories</a> marked for Statements once the user clicks <b>Save</b>. If no category is marked for statements, the file is saved to the OpenDentImages folder for the patient.</li>
<li>CSV does not include payment plan summaries or aging categories. </li>
<li>When creating a limited statement or invoice, the CSV will include procedure, insurance estimate, and account totals for the entire family (or super family).</li>
<li>If the statement is not also printed, emailed, or sent to Patient Portal it will remain noted as <i>Unsent</i>. Check the <i>Sent</i> checkbox to mark the statement as sent. </li>
</ul>
</li>
<li><b>Limited Statement</b>: Indicates the statement is a limited statement. Only shows for limited statements.</li>
<li><b>Invoice</b>: Indicates an invoice. Only shows for invoices. An invoice number also displays.</li>
<li><b>Note</b>: General notes. <a href="rightclicktextboxes.html">Right Click Text Box</a> the text box for additional options.</li>
<li><b>Bold Note</b>: Shows in bold red above and below the family grid. When generating individual statements, there is no way to set a default note or dunning messages. <a href="quickpastenoteedit.html">Quick Paste Note Edit</a> can be set up to be used in this area. Default notes and dunning messages can be set as part of the batch billing process. Right-click the text box for additional options.</li>
</ul>
<p><div class="Note">Note: By default, statements for a family only displays patients with a status of <i>Patient</i> unless <i>Single patient only</i> or <i>Intermingle family members</i> is checked (unless a balance is due). </div>
</p>
<h2>Buttons at Bottom</h2>
<p class="MarginBottomZero">These buttons display at the bottom of the Statement window.  </p>
<ul class="MarginBottomGap">
<li><b>Delete</b>: Deletes the statement. If current user does not have the <i>Image Delete</i> permission, any copies saved in Image Folder are not deleted.</li>
<li><b>Print</b>: Send the statement to the default printer. The statement is designed to be printed on standard perforated billing paper and to fit inside a standard window envelope. If the statement is marked as sent, this button opens the statement in PDF.</li>
<li><b>Email</b>: Open the Email window, with a PDF version of the statement, receipt, or invoice attached. The default email message is used.</li>
<li><b>Pat Portal</b>: Send the statement to the patient's portal. The criteria below must be met. If criteria is met, a message gives users an option to notify the patient via email that the statement is available. <ul>
<li>Click No to send the statement to the portal without sending a notification email.</li>
<li>Click Yes to open the Edit Email Message window with a default message notifying the patient about the statement availability and how to access it.</li>
</ul>
<ul>
<li>The <a href="portalhostedbyod.html">Patient Portal</a> must be set up. </li>
<li>The patient must have access to the patient portal. See <a href="portalaccess.html">Patient Portal Access</a>.</li>
<li>In <a href="definitionsimagecat.html">Definitions: Image Categories</a>, the Statements category must have <i>Show in Patient Portal</i> and <i>Statements</i> selected.</li>
</ul>
</li>
<li><b>View</b>: Preview the statement, receipt, or invoice. Clicking view opens the Fill Sheet window for additional options. Edit any custom <a href="sheetsaddelements.html">Sheet Field Types</a> then print or email the statement to save changes. <ul>
<li><b>Print</b>: Send the statement to the default printer. When printed, the Fill Sheet window closes and the <i>Sent</i> box is checked in the Statement window. </li>
<li><b>Email</b>: Opens the Email window, with a PDF version of the statement, receipt, or invoice attached. The statement sheet name is used as the email subject. Insert an email template or create a custom message.</li>
</ul>
</li>
</ul>
<p><div class="Note">Note: Printed and emailed statements are automatically saved as PDFs in the patient's <a href="account.html">Account Module</a>. PDFs are also saved in <a href="images.html">Imaging Module</a> to the <a href="definitionsimagecat.html">Definitions: Image Categories</a> assigned Statement Usage. If no Image Category is assigned, PDFs are saved to the first Image Category in the list. Generated statements can be reprinted or viewed at a later time.</div>
</p>
</div>
</div>
</body>
</html>```

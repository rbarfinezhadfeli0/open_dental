# File: ./www.opendental.com/manual232/statementwindow.html

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
						}"><option value="https://www.opendental.com/manual243/statementwindow.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/statementwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/statementwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/statementwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/statementwindow.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/statementwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/statementwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/statementwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/statementwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/statementwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/statementwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/statementwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/statementwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/statementwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/statementwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/statementwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/statementwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/statementwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/statementwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/statementwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/statementwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/statementwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/statementwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/statementwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/statementwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/statementwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/statementwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/statementwindow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Statement Window</p></div>
<div class="GeneralPageContent">
<p>Individual statements for patients or families can be created from the Account Module.</p>
<p>In the <a href="account.html">Account Module</a> toolbar, click the Statement dropdown.</p>
<img src="images/statementDropdown.png" width="187" height="189"/><p><b>Statement button</b>: Immediately prints to default printer. Prints all transactions within the number of days set in <a href="billingdefaults.html">Billing Defaults</a> or, the date range entered in the Account Module, Show tab. Set the default Statement sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.<br/></p>
<p><b>Walkout</b>: Immediately prints a Walkout Statement which does not include payment options. Displays information (procedures, payments, adjustments, etc) from today's date only, for the selected patient. </p>
<p><b>Email<b></b></b>: Generates PDF attached to an <a href="emailmessage.html">Email Message</a>. The subject and body are automatically filled in based on <a href="billingdefaults.html">Billing Defaults</a>, but can be edited before sending. Regular email is not a secure method of sending statements (PHI). By default, emails are sent using the default address for the patient's assigned Clinic. If Clinics are not enabled (or the patient's assigned clinic does not have a default email), the Default email in Email setup used. To change the From address, click the <b>Email </b>button to change the From address from the preview.</p>
<p><b>Receipt</b>: Immediately prints <a href="receipt.html">Receipt</a> with today's payments. Set the default Receipt sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Invoice</b>: Shows <a href="invoice.html">Invoice</a> with selected procedures, usually for foreign countries. Set the default Invoice sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Limited</b>: Shows transactions associated with selected procedures, pay plan debits, patient payments, insurance payments, and adjustments. See <a href="limited.html">Limited Statement</a> for details. Set the default Limited sheet in <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p><b>Limited (Custom)</b>: Displays the Limited Statement Select window. See <a href="limited.html">Limited Statement</a> for details.</p>
<p><b>More Options</b>: Shows the window below to let users customize a statement prior to printing or sending.<br/><img src="images/statementOptions.png" width="719" height="615" class="ImageInParagraph"/></p>
<p>Alternatively, this window also opens when a user double-clicks a bill or clicks <b>Edit Selected</b> from the Bills List (<a href="billinglist.html">Billing List</a>). A read-only window also opens when a user double-clicks an existing statement, invoice, or receipt.</p>
<p class="MarginBottomZero">Below is a description of all options that might show on the window. Not all options show for all statement types, and not all options can be modified. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Defaults to today's date.</li>
<li><b>Sent</b>: Automatically checked once the statement, invoice, or receipt is printed or emailed. It can also be changed manually.</li>
<li><b>Mode</b>: The method of delivery.</li>
<li><b>Hide payment options</b>: Remove payment information (amount due, date due, amount enclosed, and credit card payment section, aging).</li>
<li><b>Single patient only</b>: If checked, only the selected patient's procedures are included. If unchecked, procedures for all family members are included.</li>
<ul>
<li>The <i>StatementAging </i><a href="sheetsgrid.html">Sheet Grid</a> is reflective of the family balance whether or not this box is checked.</li>
</ul>
<li><b>Intermingle family members</b>: If checked, all patients in the family are mixed in one grid. If unchecked, each family member has their own grid. Set the default in Preferences, <i>Account Module statements default to intermingled mode</i>.</li>
<li><b>Receipt</b>: Create a Receipt instead of a statement. Receipts only include patient payment information.</li>
<li><b>Send Text Message</b>: Send a text message to the patient about this statement. Only works when sending statements from the <a href="billinglist.html">Billing List</a>. Set the default text message in <a href="billingdefaults.html">Billing Defaults</a>, SMS Statements. The message can include a clickable URL to access an online version of the statement. See <a href="portalpaymentsbypatient.html">Payment Portal</a>.</li>
<li><b>Send to Super Family</b>: Only an option if the patient is a member of <a href="superfamily.html">Super Family</a> and the family guarantor has <i>Included in Super Family Billing</i> checked on the <a href="patientedit.html">Edit Patient Information</a>. If checked, a super statement that includes account activity for all super family members will be generated. Super statements always group by super family guarantor.</li>
<li><b>Include Patient Last Name</b>: Include patient's last name in <i>Patient</i> column of the statement.</li>
<li><b>Export as CSV</b>: Export the statement as a CSV once it is printed or emailed from the Statement window. Users must have the <i>Export CSV </i><a href="permissions.html">Permission</a> to use this option. <ul>
<li>Files are saved to the <a href="definitionsimagecat.html">Image Category</a> marked for Statements once the user clicks <b>OK</b>. If no category is marked for statements, the file is saved to the OpenDentImages folder for the patient.</li>
<li>CSV does not include payment plan summaries or aging categories. </li>
<li>When creating a limited statement or invoice, the CSV will include procedure, insurance estimate, and account totals for the entire family (or super family).</li>
<li>If the statement is not also printed, emailed, or sent to Patient Portal it will remain noted as <i>Unsent</i>. Check the <i>Sent</i> checkbox to mark the statement as sent. </li>
</ul>
</li>
<li><b>Limited Statement</b>: Indicates the statement is a limited statement. Only shows for limited statements.</li>
<li><b>Invoice</b>: Indicates an invoice. Only shows for invoices. An invoice number will also show.</li>
<li><b>Date Range</b>: Transactions that fall between the start and end date will show on a statement. Type the dates, or click one of the buttons to insert a date. If either of the dates are blank, it's the same as not putting a limit on the date range. So if both dates are blank, then all account transactions will show. Date range is ignored if <b>Only show transactions since last zero balance</b> is checked.</li>
<li><b>Show all transactions since zero or negative balance</b>: If checked, all transactions from the last date the family account balance was zero, or had a credit balance, will print on the statement. The date range entered will be ignored.</li>
<li><b>Notes</b>: General notes.</li>
<li><b>Bold Note</b>: Shows in bold red above and below the family grid. When printing individual statements, there is no way to set a default note or dunning messages. But if Quick Paste Notes (<a href="quickpastenotessetup.html">Quick Paste Notes Setup</a>) are set up properly, users can fill in a variety of notes in this box using only 2 keystrokes each (? + single letter abbreviation). Default notes and dunning messages can be set as part of the batch billing process.</li>
</ul>
<p><div class="Note">Note: By default, statements for a family only displays patients with a status of <i>Patient</i> unless <i>Single patient only</i> or <i>Intermingle family members</i> is checked (unless a balance is due). </div>
</p>
<h2>Buttons at Bottom</h2>
<p><b>Delete</b>: Deletes Statement. If current user does not have the <i>Image Delete</i>Permission, any copy saved in Image Folder will not be deleted.</p>
<p><b>Print</b>: Sends to the default printer. The statement is designed to be printed on standard perforated billing paper and to fit inside a standard window envelope. <br/> If the statement is marked as sent, this button will open the statement in PDF. </p>
<p><b>Email</b>: Open the Email window, with a PDF version of the statement, receipt, or invoice attached. The default email message will be used.</p>
<p class="MarginBottomZero"><b>Pat Portal</b>: Send the statement to the patient's portal. In order to do so, the following criteria must be met: </p>
<ul class="MarginBottomGap">
<li>The patient portal must be set up. See <a href="portalhostedbyod.html">Patient Portal</a>.</li>
<li>The patient must have access to the patient portal. See <a href="portalaccess.html">Patient Portal Access</a>.</li>
<li>In <a href="definitionsimagecat.html">Definitions: Image Categories</a>, the Statements category must have <i>Show in Patient Portal</i> and <i>Statements</i> selected.</li>
</ul>
<p class="MarginBottomZero">If criteria is met, a message will give users an option to notify the patient via email that the statement is available: </p>
<ul class="MarginBottomGap">
<li>Click No to send the statement to the portal without sending a notification email.</li>
<li>Click Yes to open the Edit Email Message window with a default message notifying the patient about the statement availability and how to access it.</li>
</ul>
<p class="MarginBottomZero"><b>View</b>: Preview the statement, receipt, or invoice. Clicking view will open the Fill Sheet window for additional options. Edit any custom <a href="sheetsaddelements.html">Sheet Field Types</a> then Print or Email to save the changes. </p>
<ul class="MarginBottomGap">
<li>Print: Sends to the default printer. When printed, the Fill Sheet window will close and the Sent box will be checked in the Statement window. Click OK to save. Click Cancel to mark the statement as unsent.</li>
<li>Email: Opens the Email window, with a PDF version of the statement, receipt, or invoice attached. The statement sheet name will be used as the email subject. Insert an E-mail Template or create a custom message.</li>
<li>Close: Closes the Fill Sheet window without saving changes to the sheet elements.</li>
</ul>
<p><div class="Note">Note: Printed and emailed statements are automatically saved as PDFs in the patient's <a href="account.html">Account Module</a>. PDFs are also saved in <a href="images.html">Imaging Module</a> to the <a href="definitionsimagecat.html">Image Category</a> assigned Statement Usage. If no Image Category is assigned, PDFs are saved to the first Image Category in the list. Generated statements can be reprinted or viewed at a later time.</div>
</p>
</div>
</div>
</body>
</html>```

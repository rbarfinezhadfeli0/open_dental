# File: ./www.opendental.com/site/version3_0.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 3.0</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="resources/site.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/site.js" defer></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
</head>
<body>
	<div id="TitleAndNav">
		<div id="TitleAndSocial">
			<div id="Title">
				<a href="../index.html">
					<img src="resources/logo.png" alt="Open Dental Software">
				</a>
			</div>
			<div id="Phone">
				<a href="tel:1-503-363-5432" class="phoneLink">503-363-5432</a>
			</div>
		</div>
		<div id="NavWrapper">
			<nav>
				<div id="HamburgerMenu">&#9776;</div>
				<ul>
					<!--See notes in up in the head for explanation of relative path choices.-->
					<li><a href="../index.html">Home</a></li>
					<li><a href="trial.html">Trial Version</a></li>
					<li><a href="order.html">Order</a></li>
					<li><a href="documentation.html">Documentation</a></li>
					<li><a href="http://opendentalsoft.com/forum/">Forum</a></li>
					<li><a href="contact.html">Contact Us</a></li>
					<li><a href="searchSite.html"><img id="MenuIconSearch" src="resources/iconSearch.gif" alt=""/>Search</a> </li>
				</ul>
			</nav>
		</div>
	</div>
    <div id="PagePane"><!--The lighter foreground window that floats over the darker background-->
		<div id="PageTitle">
			<h1>Version 3.0</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<h2>Version 3.0 </h2>
<p>Released on 10/25/04. Here are some of the features:</p>
<p><b>E-mail:</b> Send <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailmessage.html">Email</a> to any patient and keep a copy of what was sent. </p>
<p><b>Images:</b> Separate buttons to scan <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Images</a> at high resolution for x-rays and photos. Rotate and flip tools. Drag and right click features enabled. View image thumbnails in the lower half of the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart</a> module. Separate image viewer for second monitor.</p>
<p><b>Appointments module:</b> Many more <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmentviews.html">Appointment View</a> options on exactly what data shows on an appointment in the main screen of the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments</a> module. Added fields include phone numbers, fees, medical notes, chart numbers, and many others. You can customize the order and color of each item. Instead of the previous 10 minute increments, you now also have the option of 15 minute increments. An additional option is to use multiple rows per increment which is helpful if you want to see more data on each appointment. If you have any views set up, the first view is now used upon startup. </p>
<p><b>Accounts: </b>This is the most significant change for this version. In the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Procedure Edit</a> window, the lower section is now a list of insurance estimates and payments for this procedure. The old estimate section in that window is gone. This gives you much more control over estimates, and allows the program to handle estimates even when very complex insurance situations exist. For instance, mixing capitation and fee for service, including triple or quadruple coverage, unusual deductible situations, or mixing dental with medical. It also takes us one step closer to line item accounting. </p>
<p><b>Quick Paste Notes:</b> See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7quickpastenotessetup.html">Quick Paste Notes Setup</a>. It is common to need to insert a frequently used note into a text field. That feature was present as quick paste notes on various screens. Now, the notes are all organized into a single interface with multiple categories. You can access the notes or insert a date by right clicking on any text box. Or, you can type a ? followed by an abbreviation, and your note will immediately be insterted in place of the abbreviation. This makes inserting notes very fast. Multiline notes are allowed. </p>
<p><b>Treatment Plan:</b> See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplan.html">Treatment Plan</a> module. Graphical tooth chart is now included on printout. You also have an option to not show any insurance on a treatment plan. </p>
<p><b>Claim Forms:</b> (for other programmers) Import and export feature for <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimforms.html">Claim Forms</a> to make it possible for anyone to make updates to claim forms for their customers. Any claim form can be exported as an XML file and sent to any user who can then import that claim form.</p>
<p><b>Technical Improvements that are only meaningful to programmers:</b><br> &amp;&amp; being replaced with AND in all queries for better generic SQL compliance. <br>  Structs being converted to classes. Global variables eliminated. Converted so far: Procedure,ClaimProc,ClaimForm,ClaimFormItem</p>
<p><b>Miscellaneous:</b><br><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7messaging.html">Message</a> buttons now 100% reliable.<br> Does not allow adding a new family unless a search has been done to see if that patient already exists.<br> Language translation features fixed.<br> Select Patient button includes dropdown feature for last five patients and for other family members.<br> Date fields now respond to +, -, up, and down keypresses to change date.<br> Default entry date can now be set in Chart module.<br> When entering existing conditions like missing teeth, the dates are set to 01/01/0001 so that they will go to the top of the Progress Notes.<br> Treatment plan now prints on size A5 paper for New Zealand. <br> Statements: walkout button to hide payment options. Attach notes. Show next appt. (thanks to Spectra Data Solutions in New Zealand)<br>  Prints appointment cards (thanks to Spectra Data Solutions in New Zealand)<br> Statements sent no longer show in the Comm log, but only in account, reducing clutter. <br> If (Next) Planned appointment is all hygiene procedures, then default appt prov to patient's hygiene prov.<br>  In Claim Edit window, warning now shows if you try to enter payments by double clicking on the claim procedures instead of buttons. <br> All payment splits forced to have same date as the payment they are attached to, which is the only way to get accurate production reports until line item accounting is done.<br> Medications section now works much more smoothly. Allowed to delete. Not allowed to change med name if attached.<br>  When making an appointment, the NP box is less likely to be checked automatically.<br>  Production and Income reports optimized for patient refund checks.<br>  Deposit slip shows types and shows a patient name next to insurance check.<br>  Twain support for scanners and cameras (thanks to <a href="http://www.practice-web.com/">Practice Web</a> )<br>  On tooth chart, primary teeth no longer show procedures if extracted.<br>  When charting a bridge, a pontic will now be triggered even if the tooth is just treatment planned for Extraction.<br>  When extracting a tooth, the old procedures no longer show on the graphical chart. But you can still set them to show. <br>  Adjustment note lengthened from 255 characters to unlimited.<br>  Appointments report. (Thanks to Dan Crawford)<br>  Recall edit window now shows family information. <br>  Daily and annual production and income reports. <br>  Procedure codes for Netherlands. <br>  Belgian claim form for Dutch region.<br><br><br><br></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

</div>	
	</div>
</body>
</html>```

# File: ./www.opendental.com/site/version2_1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 2.1</title>
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
			<h1>Version 2.1</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<h2>Version 2.1</h2>
<p>Version 2.1 was released on 2/6/04. Here are some of the new features.</p>
<p><b>A Fresh New Look:</b> Most of the buttons throughout the program as well as many other controls now have the new Windows XP look. In addition, the left button bar has been completely reworked. It not only looks better, but gives the user more feedback when hovering and it is easier to see what module is currently selected.</p>
<p><b>Support for Unlimited Operatories:</b> In the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments</a> module, the old version simply showed all operatories from left to right. In the screenshot below, you will notice a dropdown control labeled View on the right side below the calendar. You can select a view from that list or you can use one of the twelve Function keys at the top of your keyboard to switch faster. Each view can have any combination of operatories and providers, and will not display the others. So you can have one view for your hygiene rooms, one view for each doctor, or any number of other creative combinations.</p>
<p><img src="images/version2_1Buttons.gif" width="857" height="744"/></p>
<p><b>Medicaid:</b> And more support for DentiCal. The screenshot below shows the additional fields now available for insurance plans, including plan type, option to write off balance, alternate code, use UCR, Co-pay fees, and Claim Form. Using these options in various combinations, you can now set up more types of insurance, including Medicaid and PPO (Capitation support is incomplete). You can also see the reworked Subscriber section at the top which allows you to enter a subscriber from another family. You may want to see the section on <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplantypes.html">Types of Insurance Plans</a> for more information about how to set up the different plan types.</p>
<p><img src="images/version2_1EditInsPlan.gif" width="915" height="676"/></p>
<p><b>Insurance Payments:</b> Ability to split payments on a single claim including itemizing by procedure, splitting to different providers, and allowing multiple payments on a single procedure. This enables accurate production and income reporting for multiple providers. Also allows detaching procedures from a claim without having to delete the claim and recreate it, and submitting multiple claims on a single procedure. These features are important if insurance only pays on some procedures and requires a resubmission on other procedures. Remarks from the insurance Explanation Of Benefits can also be entered by procedure. Procedures with different dates are allowed on a single claim, and you can create a claim with a single click instead of having to highlight the procedures first. </p>
<p>There are two main advantages to these features. First they allow you to explain to the patient in more detail exactly where their balance came from, and secondly, because you can split insurance payments by provider, Open Dental will now be more useful in larger offices which require detailed collections reports.</p>
<p><b>Customized Claim Forms:</b> A new tool is included to allow any user to build a new claim form without doing any programming. This will make it easier to add a variety of claim forms either by us or by other users. This version will ship with the ADA2002 and the DentiCal claim forms. Very helpful in other countries where they will no longer be limited to the the claim forms that ship with the program.</p>
<p>Instructions on how to use the tool: Access through Setup | Claim Forms. You can move items by clicking and dragging or by using the arrow keys. If you press the shift key while pressing an arrow key, the movement will be larger. You can select groups of items as shown above and then move them as a unit. When you have groups selected, any change you make in the four text boxes at the bottom will apply to all items in the group. The dollar amount fields are right justified, so the x position will function differently (for now, click to the right of an amount field to highlight it). Also, be careful not to accidently drag when highlightling items, especially groups; it's still a little touchy. Set the width or height to zero to get rid of the surrounding rectangle and to not restrict the area of printing. Also, the screen will flicker a little as you drag, but it's certainly tolerable, and it's not worth the time required to reduce the flicker since it's used so rarely.</p>
<p><img src="images/version2_1ClaimForm.gif" width="915" height="764"/></p>
<p><b>Medication Lists:</b> For all your patients who are taking prescriptions from their physicians, you only have to look up a particular medication once. Then it goes into the database and you can link to it for any patient, increasing efficiency and quality of care. You can see below that this patient has Effexor attached, and that everything is organized by the generic name with room for drug notes and patient-specific notes. Once you get the commonly used drugs entered in, you will find your efficiency increasing dramatically.</p>
<p><img src="images/version2_1Medical.gif" width="915" height="674"/></p>
<p><b>Contacts:</b> A set of lists where you can store names and phone numbers by category. Useful for pharmacies, doctors, and other similar lists.</p>
<p><b>Language Improvements:</b> Anyone with internet access can immediately update their database to the most current translations for their language by clicking a single button from within Open Dental. Also, translators can easily export all the translations they have been working on to a file which gets e-mailed to us and posted for everyone else.</p>
<p><b>Miscellaneous:</b><br>  When selecting patients, inactive patients can be hidden. Also, billing types show.<br>  The Other Appointments button is now available immediately when switching to the Appointments module from another module.<br>  In the Chart module, if you type in ADA codes manually, you can rapidly move to the next by pressing the enter key.<br>  Delete and backspace keys will now work like the delete button in the Chart module.<br>  Address notes are now synchronized separately from the address, decreasing the chance of accidently overwriting a note.<br>  The Update Fees button in the Treatment Plan module now also updates the checkbox in each procedure for 'Patient has insurance".<br>  The number of steps required to add a new insurance plan and coverage has been reduced.<br>  A very basic autoincrement feature for chart numbers has been added for offices that use integer chart numbers.<br>  Production and Income report enhanced to include selection of different providers.<br>  When calculating aging, negative amounts no longer show. Aging report enhanced.<br>  The patient phone number, which shows at the right of the appointments module, will now automatically show wireless or work number if no home number is present.</p>
<p></p>
<p></p>
<p></p>
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

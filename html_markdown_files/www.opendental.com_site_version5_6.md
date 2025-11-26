# File: ./www.opendental.com/site/version5_6.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 5.6</title>
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
			<h1>Version 5.6</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Released on 3/30/2008. </p>
<p><b>Account module:</b> Complete overhaul of the columns. Moved to a simpler 3-column layout. Extra line detail is now visible as part of the description of the item rather than as a separate column. This will allow compatibility with electronic billing software later. It makes the math more obvious, more like a check register. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account module</a>. </p>
<p><b>Payment Plans:</b> Separated payment plans out from the regular account grid into their own grid. Made them more intuitive rather than the old confusing calculation method. Payment plan payments no longer show in the main grid. Payment plan report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Old Payment Plan</a>.</p>
<p><b>Tasks:</b> Can delete task from inside. Task list docking can be set on a per-computer basis. Tasks visible in Chart module. Added a "viewed" status to make it much faster to identify new tasks. Checkbox is now three-state. Added user field so we can see who created the task. Added DateFinished field. Finished tasks are hidden by default but can be viewed if desired. New tasks trigger a notification sound as well as an automatic refresh. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasklists.html">TaskList</a>. </p>
<p><b>Electronics Attachments:</b> Images and perio charts can now be exported directly from within the claim, making it easier to then upload them to NEA. <a href="../manual/claimtabattach.html">E-claims Attachments</a>. </p>
<p><b>Statements: </b>Created a table in the database to store statements. Statements permanently archived as PDFs so they can be viewed later. An old statement may be reprinted. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statement.html">Statements</a>.</p>
<p><b>Billing: </b>Overhauled billing windows. More defaults. Bold messages on dunning items. Bold messages show in larger red. Batches of bills are created in the first step, allowing preview and editing before finally printing or sending batch by email. Order batch by billing type or alphabetically. Jump to an account without closing the batch of pending bills. Edit multiple bills at the same time. Print list of bills. Automatically track billing types that are email instead of mail. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billing.html">Billing</a>. </p>
<p> The server address for the update service can be changed by end user. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Update</a>.<br>  Laser labels. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7laserlabels.html">Laser Labels</a>. <br>  Option to not change entry status back to TP after switching patient. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Misc Setup</a> (Chart module) <br>  Surface buttons added to procedure edit window.<br>  Ability to turn off commlog for family in Account module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Misc Setup</a>. <br>  Amalgam/composite substitution disable on certain insplans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">InsPlan</a>. <br>  Backup option to skip AtoZ folders for a faster daily backup. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7backups.html">Backups</a>.<br>  Option to default to PPO percentage instead of category percentage. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Misc Setup</a>.<br>  Lock out users from changing their own timecards. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a><br>  Email SSL option added so you can send mail through Gmail and others. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailsetup.html">Email Setup</a><br>  Email setup window now hides password for non-admin.<br>  Trojan Delete report (Trojan integration is now done and waiting approval). </p>

</div>	
	</div>
</body>
</html>```

# File: ./www.opendental.com/manual232/orthosetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Ortho Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthosetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/orthosetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/orthosetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthosetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthosetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthosetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/orthosetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthosetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthosetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthosetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthosetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthosetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthosetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthosetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthosetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthosetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthosetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthosetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthosetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthosetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthosetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthosetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthosetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthosetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthosetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthosetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthosetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthosetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthosetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Ortho Setup</p></div>
<div class="GeneralPageContent">
<p>For offices seeing ortho patients, set up and enable ortho features used throughout Open Dental. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Ortho</b>.</p>
<img src="images/orthoSetup.png" width="383" height="676"/><p>The preferences below affect options used for <a href="orthodontic.html">Orthodontics</a>. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCkTGQT-plH4ftvLX0lUpurW">Ortho Playlist</a></p>
<p class="MarginBottomZero"><b>Show Ortho button and tab in Chart Module</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Show the <a href="ortho.html">Ortho</a> tab and <a href="orthochart.html">Ortho Chart</a> button in the Chart Module.</li>
<li>Unchecked: Hide the Ortho tab and Ortho Chart button in the Chart Module.</li>
</ul>
<p class="MarginBottomZero"><b>Show Auto Ortho in Account Module</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Show the <a href="orthoauto.html">Auto Ortho</a> tab in the <a href="account.html">Account Module</a> and in the Ortho tab in <a href="insplan.html">Edit Insurance Plan</a>.</li>
<li>Unchecked: Don't show the Auto Ortho tab in the Account Module or Ortho tab in Edit Insurance Plan.</li>
</ul>
<p class="MarginBottomZero"><b>Show Auto Ortho information in the Ortho Chart</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Show patient ortho info from the Auto Ortho tab (PatOrthoInfo) in the upper right of the <a href="orthochart.html">Ortho Chart</a>.</li>
<li>Unchecked: Don't show auto ortho information in the Ortho Chart.</li>
</ul>
<p class="MarginBottomZero"><b>Mark claims as Ortho if they have Ortho procedures</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Automatically mark the <i>Is Ortho</i> box on the <a href="claimtabgeneral.html">Edit Claim - General Tab</a> when creating a claim or preauthorization that includes an orthodontic procedure (within the orthodontic insurance category span).</li>
<li>Unchecked: Don't automatically mark the box.</li>
</ul>
<p class="MarginBottomZero"><b>Use the first ortho procedure date as Date of Placement</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Automatically insert the date of the initial orthodontic procedure (<i>Date Start</i> on the Auto Ortho tab) as the <i>Date of Placement</i> on the Edit Claim - General tab when creating a claim that includes an orthodontic procedure (within the orthodontic insurance category span).</li>
<li>Unchecked: Don't automatically insert the date.</li>
</ul>
<p class="MarginBottomZero"><b>Completing Debond procedure overrides months treatment</b>:  </p>
<ul class="MarginBottomGap">
<li>Checked: Ortho months in treatment stops calculating when a debond procedure is set complete.</li>
<li>Unchecked: Ortho months in treatment continues to calculate indefinitely. </li>
</ul>
<p><b>Default months treatment</b>: Set a default total treatment amount, in months, that shows on the Auto Ortho tab (Tx Months Total). If a patient's insurance plan is set to an ortho claim type of Initial Plus Periodic (Edit Insurance Plan - Ortho tab), this amount is used to determine the end date for generating periodic orthodontic claims using <a href="orthoautoclaim.html">Ortho Auto Claims</a>.</p>
<p class="MarginBottomZero"><b>Show Ortho Chart in appointment options</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Show a Go To Ortho Chart option when user right clicks on an appointment box. This box is checked by default if data exists in the Ortho Chart. Customize the text in <a href="orthochartsetup.html">Ortho Chart Setup</a>.</li>
<li>Unchecked: Do not show a Go to Ortho Chart option.</li>
</ul>
<p class="MarginBottomZero"><b>Patient Clone</b>:  </p>
<ul class="MarginBottomGap">
<li>Checked: Turn on <a href="patientclone.html">Clone</a> options.</li>
<li>Unchecked: Turn off Patient Clones options.</li>
</ul>
<p><b>Default Ortho Auto Proc</b>: Required if using the Auto Ortho Tool to generate claims. Set the default procedure code that will be used on the claim and sent to insurance. The default is D8670.auto, but users can select any procedure code. Click <b>[...]</b> to change.</p>
<div class="Note">Note: <ul>
<li>Only the first 5 digits of procedure codes are sent to insurance. The .auto portion of the procedure code is not sent to insurance. So while D8670.auto will show on the Edit Claim window, only D8670 is sent to insurance. Using a procedure code with .auto is optional, but doing so is useful to track codes used on auto-generated claims.</li>
<li>The Default Ortho Auto Proc cannot be a banding procedure. This will prevent supplemental payments from being applied to the original claim.</li>
</ul>
</div>
<br/><br/><p class="MarginBottomZero"><b>Consolidate Ortho Insurance Payments</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: Block users from entering payments on claims created using the Auto Ortho Tool. If they attempt to do so, they will receive a message directing them to instead enter the payment as a supplemental payment on the initial procedure's claim (consolidating the payments).</li>
<li>Unchecked: Allow users to enter payments on claims created using the Auto Ortho Tool.</li>
</ul>
<p><b>Ortho Chart Display Fields</b>: Click <b>Edit</b> to define the tabs and columns that show in the Ortho Chart. See Ortho Chart Setup.</p>
<p><b>Ortho Hardware Specs</b>: Click <b>Setup</b> to add or edit <a href="orthohardwaresetup.html">Ortho Hardware Specs</a>. </p>
<p><b>Ortho Prescriptions</b>: Click <b>Setup</b> to add or edit <a href="orthoprescriptionssetup.html">Ortho Prescriptions</a>. </p>
<p class="MarginBottomZero"><b>Ortho Placement Procedures</b>: Define which procedures can be considered as the initial orthodontic procedure. Determines which procedure will affect the <i>Date Start</i> on the Auto Ortho tab. If <i>Use the first ortho procedure date as the Date of Placement</i> is enabled above, also affects <i>Date of Placement</i> on claims. If no procedures are defined, Open Dental will attempt to use the first procedure within the code span D8000-D8999 as the initial orthodontic procedure. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to select a procedure from the Procedure Codes list.</li>
<li><b>Delete</b>: Click to remove the highlighted procedure.</li>
</ul>
<p class="MarginBottomZero"><b>Ortho Case Procedures</b>: Enter the procedure codes for each category. If entering multiple codes, separate them with a comma. These procedures will be used in Ortho Cases. Enter a code in at least one category to enable the <a href="orthocase.html">Ortho Case</a> feature. </p>
<ul class="MarginBottomGap">
<li><b>Banding Codes</b>: Codes associated to procedures for placement date of orthodontic appliances.</li>
<li><b>Visit Codes</b>: Codes associated to procedures for periodic maintenance visits. </li>
<li><b>Debond Codes</b>: Codes associated to procedures for removal of orthodontic appliances.</li>
</ul>
</div>
</div>
</body>
</html>```

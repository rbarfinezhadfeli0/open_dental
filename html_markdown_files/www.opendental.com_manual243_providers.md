# File: ./www.opendental.com/manual243/providers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Providers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('providers','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/providers.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/providers.html" >v24.2</option><option value="https://www.opendental.com/manual241/providers.html" >v24.1</option><option value="https://www.opendental.com/manual233/providers.html" >v23.3</option><option value="https://www.opendental.com/manual232/providers.html" >v23.2</option><option value="https://www.opendental.com/manual231/providers.html" >v23.1</option><option value="https://www.opendental.com/manual224/providers.html" >v22.4</option><option value="https://www.opendental.com/manual223/providers.html" >v22.3</option><option value="https://www.opendental.com/manual222/providers.html" >v22.2</option><option value="https://www.opendental.com/manual221/providers.html" >v22.1</option><option value="https://www.opendental.com/manual214/providers.html" >v21.4</option><option value="https://www.opendental.com/manual213/providers.html" >v21.3</option><option value="https://www.opendental.com/manual212/providers.html" >v21.2</option><option value="https://www.opendental.com/manual211/providers.html" >v21.1</option><option value="https://www.opendental.com/manual205/providers.html" >v20.5</option><option value="https://www.opendental.com/manual204/providers.html" >v20.4</option><option value="https://www.opendental.com/manual203/providers.html" >v20.3</option><option value="https://www.opendental.com/manual202/providers.html" >v20.2</option><option value="https://www.opendental.com/manual201/providers.html" >v20.1</option><option value="https://www.opendental.com/manual194/providers.html" >v19.4</option><option value="https://www.opendental.com/manual193/providers.html" >v19.3</option><option value="https://www.opendental.com/manual192/providers.html" >v19.2</option><option value="https://www.opendental.com/manual191/providers.html" >v19.1</option><option value="https://www.opendental.com/manual184/providers.html" >v18.4</option><option value="https://www.opendental.com/manual183/providers.html" >v18.3</option><option value="https://www.opendental.com/manual182/providers.html" >v18.2</option><option value="https://www.opendental.com/manual181/providers.html" >v18.1</option><option value="https://www.opendental.com/manual174/providers.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Providers</p></div>
<div class="GeneralPageContent">
<p>The Provider List contains the profiles of doctors and hygienists in the practice. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, <b>Providers</b>.</p>
<img src="images/providers2.gif" width="915" height="577"/><p>Create providers and enter provider information (ID numbers, provider defaults, appointment colors, etc.) Also use this window to create security user profiles and move patients from one provider to another.</p>
<p>All providers set up are listed, as well as their user name and how many patients for whom they are the primary (PriPats) or secondary (SecPats) provider. The provider order shown here determines the order in which providers show in various lists throughout the program. Available providers in those lists may be filtered by <a href="clinics.html">Clinic</a>.</p>
<p><b>Search</b>: Enter search term to filter the provider list. Will search by first name, last name, and abbreviation.</p>
<p><b>Show Patient Count</b>: Check to view <i>PriPats</i> and <i>SecPats</i> columns. Counts the number of primary and secondary patients associated to a provider.</p>
<p><b>Show Hidden</b>: Check to view providers that have been marked Hidden from the <a href="providerseditwindow.html">Provider</a> window.</p>
<p><b>Show Deleted</b>: Check to view providers that were removed during a <a href="mergeproviders.html">Provider Merge</a>.</p>
<p><b>Add</b>: Click to create a new provider. The <i>Provider Add</i> permission is required.</p>
<p>Double-click an existing provider to open the <a href="providerseditwindow.html">Edit Provider</a> window.</p>
<p><div class="Note">Note: <ul>
<li>Providers cannot be deleted. Instead mark them hidden on the Edit Provider window. This will remove them as a selection option.</li>
<li>If using Dental Schools, additional dental school instructor, student, and provider information shows. See <a href="dsproviders.html">Dental School Providers</a>.</li>
</ul>
</div>
</p>
<h2>Create Users</h2>
<p>Quickly assign a provider to a security user group and create a user name and a temporary password. The <i>Security Admin</i> security permission is required. The user name and password will be the provider's last name plus first initial (e.g. SmithJ).</p>
<ol>
<li>Select the provider.</li>
<li>Under Create Users, select the <b>User Group</b>.</li>
<li>Click <b>Create</b>.</li>
</ol>
<br/><p>Providers should log in and change their password to something only they know. If using Clinics, see <a href="securityusers.html">User Edit</a> to set a default clinic or restrict a user to clinics.</p>
<h2>Move Patients</h2>
<p>Change or remove providers for a group of patients. The <i>Security Admin</i> security permission is required. Check <b>Show Patient Count</b> to view each provider's total number of patients..</p>
<ul>
<li>PriPats: The number of patients for which the provider is selected as the primary provider.</li>
<li>SecPats: The number of patients for which the provider is selected as the secondary provider.</li>
</ul>
<br/><p class="MarginBottomZero"><b>Change primary provider for a group of patients</b>: The <i>Patient Primary Provider Edit</i> permission is also required. </p>
<ol class="MarginBottomGap">
<li>Highlight the current primary provider.</li>
<li>Under Move Patients, click <b>[...]</b>. Select the new primary provider and click <b>OK</b>.</li>
<li>Click <b>Move Pri</b>.</li>
<li>Click <b>OK</b> to confirm the move. The patients will now have the new provider as their primary.</li>
</ol>
<p class="MarginBottomZero"><b>Change secondary provider for a group of patients</b>: </p>
<ol class="MarginBottomGap">
<li>Highlight the current secondary provider.</li>
<li>Under Move Patients, click<b> [...]</b>. Select the new secondary provider and click <b>OK</b>.</li>
<li>Click <b>Move Sec</b>.</li>
<li>Click <b>OK</b> to confirm the move. The patients will now have the new provider as their secondary.</li>
</ol>
<p class="MarginBottomZero"><b>Remove a secondary provider from a group of patients</b>: </p>
<ol class="MarginBottomGap">
<li>Highlight the provider.</li>
<li>Under Move Patients, click <b>[...]</b>.</li>
<li>Click <b>None</b>.</li>
<li>Click <b>Move Sec</b>. </li>
<li>Click <b>OK</b> on the confirmation message. This provider will no longer be assigned as the secondary provider to any patients.</li>
</ol>
<p class="MarginBottomZero"><b>Reassign by most-used provider</b>: Useful if a provider is no longer with the practice. Reassigns the primary provider of all patients from the selected provider to the provider who has completed the majority of their procedures. Requires the <i>Patient Primary Provider Edit</i> permission. The tool uses the following logic: </p>
<ul class="MarginBottomGap">
<li>Any patients with procedures completed by another provider are reassigned.</li>
<li>If the selected provider has completed the most procedures for the patient, the provider with the second most completed procedures is used.</li>
<li>Providers marked as <i>Hidden</i>, <i>Secondary Provider (Hyg)</i>, or <i>Not a Person</i> are not considered for reassignment.</li>
<li>If multiple providers are tied for the most-used provider (i.e., share an equal number of completed procedures), the provider the patient is reassigned to is selected at random.</li>
</ul>
<p class="MarginBottomZero">To use the tool: </p>
<ol class="MarginBottomGap">
<li>Highlight the provider whose patients will be reassigned.</li>
<li>Click <b>Reassign</b>.</li>
<li>There is a prompt to continue with the tool. Click <b>OK</b> to proceed and search for possible reassignments.</li>
<li>There is a prompt confirming the number of patients that will be reassigned.  <ul>
<li>Click <b>OK</b> to reassign all patients from the selected provider. </li>
<li>Click <b>Cancel</b> to exit the tool without reassigning patients.</li>
</ul>
</li>
</ol>
<h2>Reorder the Provider List</h2>
<p class="MarginBottomZero">Changing the order does not harm any patient data. To manually reorder providers: </p>
<ol class="MarginBottomGap">
<li>Highlight a provider.</li>
<li>Click the <b>Up</b> or <b>Down</b> arrow to move the provider one row higher or lower.</li>
</ol>
<p class="MarginBottomZero"><b>Alphabetize Providers</b>: Click to alphabetize providers by abbreviation in the following order. The <i>Provider Alphabetize</i> permission is required. </p>
<ul class="MarginBottomGap">
<li>Providers who are people</li>
<li>Providers who are marked <i>Not a Person</i> (e.g. a billing entity)</li>
<li>Hidden providers</li>
</ul>
<p><div class="Note">Note: If the Dental Schools feature is enabled, the Provider List is automatically alphabetized and the Up/Down arrows are unavailable.</div>
</p>
<p></p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual232/setupwizard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Setup Wizard</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('setupwizard','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/setupwizard.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/setupwizard.html" >v24.2</option><option value="https://www.opendental.com/manual241/setupwizard.html" >v24.1</option><option value="https://www.opendental.com/manual233/setupwizard.html" >v23.3</option><option value="https://www.opendental.com/manual232/setupwizard.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/setupwizard.html" >v23.1</option><option value="https://www.opendental.com/manual224/setupwizard.html" >v22.4</option><option value="https://www.opendental.com/manual223/setupwizard.html" >v22.3</option><option value="https://www.opendental.com/manual222/setupwizard.html" >v22.2</option><option value="https://www.opendental.com/manual221/setupwizard.html" >v22.1</option><option value="https://www.opendental.com/manual214/setupwizard.html" >v21.4</option><option value="https://www.opendental.com/manual213/setupwizard.html" >v21.3</option><option value="https://www.opendental.com/manual212/setupwizard.html" >v21.2</option><option value="https://www.opendental.com/manual211/setupwizard.html" >v21.1</option><option value="https://www.opendental.com/manual205/setupwizard.html" >v20.5</option><option value="https://www.opendental.com/manual204/setupwizard.html" >v20.4</option><option value="https://www.opendental.com/manual203/setupwizard.html" >v20.3</option><option value="https://www.opendental.com/manual202/setupwizard.html" >v20.2</option><option value="https://www.opendental.com/manual201/setupwizard.html" >v20.1</option><option value="https://www.opendental.com/manual194/setupwizard.html" >v19.4</option><option value="https://www.opendental.com/manual193/setupwizard.html" >v19.3</option><option value="https://www.opendental.com/manual192/setupwizard.html" >v19.2</option><option value="https://www.opendental.com/manual191/setupwizard.html" >v19.1</option><option value="https://www.opendental.com/manual184/setupwizard.html" >v18.4</option><option value="https://www.opendental.com/manual183/setupwizard.html" >v18.3</option><option value="https://www.opendental.com/manual182/setupwizard.html" >v18.2</option><option value="https://www.opendental.com/manual181/setupwizard.html" >v18.1</option><option value="https://www.opendental.com/manual174/setupwizard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Setup Wizard</p></div>
<div class="GeneralPageContent">
<p>Use the Setup Wizard tool to begin initial setup of the Open Dental database.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <b>Setup Wizard</b>.</p>
<img src="images/setupWizard.gif" width="421" height="431"/><p>Green rows indicate areas where information has been entered. Red rows indicate areas that still require input. To read a brief explanation of a setup area, click the information icon <b><i>(i)</i></b>.</p>
<p class="MarginBottomZero"><b>Set Up All</b>: Click to run through the entire setup wizard.  </p>
<ul class="MarginBottomGap">
<li>To begin the setup of a specific category, double-click the category (Pre-Setup, Basic Setup, etc.)</li>
<li>To set up a specific item, double-click the row.</li>
</ul>
<p class="MarginBottomZero">Follow the instructions on each window to enter information, then click a button to proceed. <br/><img src="images/setupWizardButtons.png" width="587" height="34" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Back</b>: Return to the previous window.</li>
<li><b>Next</b>: Proceed to the next window.</li>
<li><b>Skip</b>: Leave the current setup area without entering information.</li>
<li><b>Close</b>: Exit the setup wizard.</li>
</ul>
<p>A welcome window will preview each setup area. A completion window will indicate when the setup information has been entered.</p>
<h2>Registration Key Setup</h2>
<p>Enter the Open Dental registration key and run Procedure Code Tools.</p>
<img src="images/setupWizardRegKey.png" width="846" height="496"/><p><b>Registration Key</b>: Click <b>Change</b> to open the Registration Key window. Review and agree to licenses, then enter the registration key and click OK to save. </p>
<p><b>Procedure Code Tools</b>: This tool updates the procedure codes used in Open Dental. Click <b>Procedure Code Tools</b> to run the tool. See <a href="procedurecodetools.html">Procedure Code Tools</a> for details. </p>
<p><b>Advanced</b>: Click to access the <a href="updatesetup.html">Update Setup</a> window.</p>
<h2>Basic Feature Setup</h2>
<img src="images/setupWizardBasic.gif" width="853" height="574"/><p class="MarginBottomZero">Quickly turn on/off basic features the office may or may not use. Settings will affect all computers using the same database.  </p>
<ul class="MarginBottomGap">
<li>To read a brief explanation of a feature, click the information icon.</li>
<li>To turn a feature on, check the box. To turn a feature off, uncheck the box.</li>
</ul>
<p><b>Advanced</b>: Click to open <a href="showfeatures.html">Show Features</a>.</p>
<h2>Provider Setup</h2>
<img src="images/setupWizardProviders.gif" width="886" height="419"/><p class="MarginBottomZero">Enter information about providers. At a minimum enter abbreviation, first and last name, suffix, SSN or TIN (for dentists), and NPI.  </p>
<ul class="MarginBottomGap">
<li>All current providers will list. Red cells indicate missing information.</li>
<li>To add a provider, click <b>Add</b>. To edit provider information, double-click a row. See the <a href="providerseditwindow.html">Provider</a> edit window for field definitions.</li>
</ul>
<p><b>Advanced</b>: Click to open <a href="providers.html">Providers</a> Setup.</p>
<h2>Employee Setup</h2>
<img src="images/setupWizardEmployees.gif" width="898" height="481"/><p class="MarginBottomZero">Enter employee information. This information is used to create user security profiles, set up employee work schedules, and provide access to the time clock. </p>
<ul class="MarginBottomGap">
<li>All current employees will list. Red cells indicate missing information. First and last name are required.</li>
<li>Click <b>Add</b> to create a new employee. To edit an existing employee, double-click the row. </li>
</ul>
<p><b>Advanced</b>: Click to open <a href="employees.html">Employees</a> .</p>
<h2>Fee Schedules</h2>
<img src="images/setupWizardFeeSchedules.gif" width="832" height="440"/><p class="MarginBottomZero">Enter office and insurance fee schedules. These will be assigned to a patient's insurance plan to accurately reflect treatment estimates. </p>
<ul class="MarginBottomGap">
<li>All current fee schedules will list.</li>
<li>Click <b>Add</b> to create a new fee schedule.</li>
<li>Click <b>Edit Fees</b> to bring up Procedure Codes to edit the associated fees.</li>
<li>Click <b>Import </b>to import fees over the currently selected fee schedule. File must be in tab-delimited format (.xls, .txt, or .csv) with a column for procedure code and column for fees.</li>
</ul>
<h2>Clinics Setup</h2>
<img src="images/setupWizardClinics.gif" width="896" height="462"/><p class="MarginBottomZero">If Clinics is turned on in Basic Feature setup, enter basic information about each clinic. </p>
<ul class="MarginBottomGap">
<li>All current clinics will list. Red cells indicate missing information. Description, abbreviation, phone number, and address are required.</li>
<li>Click <b>Add</b> to create a new clinic. To edit an existing clinic, double-click the row.</li>
</ul>
<p><b>Advanced</b>: Click to open the <a href="clinicsetup.html">Clinic List</a>.</p>
<p><div class="Note">Note: Enter headquarters information in Practice Setup.</div>
</p>
<h2>Operatory Setup</h2>
<img src="images/setupWizardOperatories.gif" width="901" height="478"/><p class="MarginBottomZero">Name operatories that will show in the appointment schedule, assign default providers and clinics, and designate specific hygiene operatories. </p>
<ul class="MarginBottomGap">
<li>All operatories currently set up will list. Red cells indicate missing information. Name and abbreviation are required.</li>
<li>Click<b> Add </b>to create a new operatory. To edit an existing operatory, double-click the row. </li>
</ul>
<p><b>Advanced</b>: Click to open <a href="operatories.html">Operatories</a>.</p>
<h2>Practice Info Setup</h2>
<img src="images/setupWizardPractice.gif" width="722" height="472"/><p class="MarginBottomZero">Enter general contact information, billing and pay-to addresses, and default providers for the practice. If Clinics is turned on, practice refers to headquarters.  </p>
<ul class="MarginBottomGap">
<li><b>Practice Title</b>: The name of the practice. If there is only one provider, the practice title can be the name of the provider.</li>
<li><b>Phone / Fax</b></li>
<li><b>Physical Treating Address</b>: The physical location where treatment is performed. This address is always used on statements.</li>
</ul>
<p><b>Advanced</b>: Click to open <a href="practice.html">Practice Setup</a>.</p>
<h2>Printer / Scanner Setup</h2>
<img src="images/setupWizardPrinter.gif" width="889" height="577"/><p>Set up print and scan options for the current workstation.</p>
<p class="MarginBottomZero"><b>Printer Setup</b>: All categories that allow a default printer are listed. See <a href="printersetup.html">Printer Setup</a> for more details about each option. </p>
<ul class="MarginBottomGap">
<li>For each category, click the dropdown to select the default printer.</li>
<li><b>Prompt</b>: Check the box to show a prompt window every time an item is printed. This allows users to verify printer and select other options prior to printing. When unchecked, items are printed directly.</li>
<li><b>Show me the simple interface</b>: To only set one default printer for all categories, check 'Show me the simple interface', then select the printer.</li>
</ul>
<p class="MarginBottomZero"><b>Scanner Setup</b>: Set default options when scanning in the Images module. Click the information (i) icon for more details about an option. </p>
<ul class="MarginBottomGap">
<li><b>Show Select Scanner Window</b>: Prompt user to select a scanner each time they scan.</li>
<li><b>JPEG Compression - Quality After Scanning:</b> Set the image quality (0 - 100) for the scanned file. A lower number means more compression and smaller file size.</li>
<li><b>Show Scanner Options Window</b>: Prompt the user to select scanning options each time they scan.</li>
<li><b>Use the Options Below</b>: Use the default scanning options set below each time a user scans. <ul>
<li>Multipage Scans Duplex: Checked: Scan both sides of documents. Unchecked: Scan one side of documents.</li>
<li>Grayscale: Checked: Scan in grayscale. Unchecked: Scan in 24-bit color.</li>
<li>Resolution: Enter the document resolution in dots per inch (50 - 1000).</li>
</ul>
</li>
<li><b>Advanced</b>: Click to open <a href="imagingsetup.html">Imaging Quality</a>.</li>
</ul>
<h2>Definitions</h2>
<img src="images/setupWizardDefinitions.gif" width="761" height="578"/><p class="MarginBottomZero">Enter list options and customize categories, colors, and defaults for various windows. See: <a href="definitions.html">Definitions</a> for additional options. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Add a new item to a category.</li>
<li><b>Hide</b>: Hide an item. Select the item and click Hide. To unhide, double-click an item and uncheck Hidden in the Edit Definition window. Some items cannot be hidden or unhidden.</li>
<li><b>Up/Down</b>: Move an item up or down in the list. Select an item and click Up or Down. This will also affect the sort order of the item in pick lists.</li>
</ul>
</div>
</div>
</body>
</html>```

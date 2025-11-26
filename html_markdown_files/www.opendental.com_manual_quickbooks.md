# File: ./www.opendental.com/manual/quickbooks.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - QuickBooks</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('quickbooks','accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/quickbooks.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/quickbooks.html" >v24.2</option><option value="https://www.opendental.com/manual241/quickbooks.html" >v24.1</option><option value="https://www.opendental.com/manual233/quickbooks.html" >v23.3</option><option value="https://www.opendental.com/manual232/quickbooks.html" >v23.2</option><option value="https://www.opendental.com/manual231/quickbooks.html" >v23.1</option><option value="https://www.opendental.com/manual224/quickbooks.html" >v22.4</option><option value="https://www.opendental.com/manual223/quickbooks.html" >v22.3</option><option value="https://www.opendental.com/manual222/quickbooks.html" >v22.2</option><option value="https://www.opendental.com/manual221/quickbooks.html" >v22.1</option><option value="https://www.opendental.com/manual214/quickbooks.html" >v21.4</option><option value="https://www.opendental.com/manual213/quickbooks.html" >v21.3</option><option value="https://www.opendental.com/manual212/quickbooks.html" >v21.2</option><option value="https://www.opendental.com/manual211/quickbooks.html" >v21.1</option><option value="https://www.opendental.com/manual205/quickbooks.html" >v20.5</option><option value="https://www.opendental.com/manual204/quickbooks.html" >v20.4</option><option value="https://www.opendental.com/manual203/quickbooks.html" >v20.3</option><option value="https://www.opendental.com/manual202/quickbooks.html" >v20.2</option><option value="https://www.opendental.com/manual201/quickbooks.html" >v20.1</option><option value="https://www.opendental.com/manual194/quickbooks.html" >v19.4</option><option value="https://www.opendental.com/manual193/quickbooks.html" >v19.3</option><option value="https://www.opendental.com/manual192/quickbooks.html" >v19.2</option><option value="https://www.opendental.com/manual191/quickbooks.html" >v19.1</option><option value="https://www.opendental.com/manual184/quickbooks.html" >v18.4</option><option value="https://www.opendental.com/manual183/quickbooks.html" >v18.3</option><option value="https://www.opendental.com/manual182/quickbooks.html" >v18.2</option><option value="https://www.opendental.com/manual181/quickbooks.html" >v18.1</option><option value="https://www.opendental.com/manual174/quickbooks.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>QuickBooks</p></div>
<div class="GeneralPageContent">
<p>Open Dental has the ability to automatically create accounting transactions for deposits in the QuickBooks accounting software. </p>
<p>In <a href="accounting.html">Accounting</a>, click Setup, QuickBooks.</p>
<img src="images/quickbooksSetup.gif" width="521" height="555"/><p>The bridge was designed using QuickBooks 2012 and may not work with other versions. To use the Online version instead, see <a href="quickbooksonline.html">QuickBooks Online</a>.</p>
<h2>Enable and Use Quickbooks</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Install QuickBooks on the local computer. Provide access to the company file and log in as an administrator user. Let QuickBooks run in the background.</li>
<li>Install QuickBooks Foundation Class: Download <a href="../resources/QBFC10_0Installer.zip">QBFC10_0Installer.zip</a>, unzip, and run the installer.</li>
<li>In <a href="preferences.html">Preferences</a>, set the <i>Deposit Software</i> to <i>Quickbooks</i>.</li>
<li>Complete Quickbooks Setup below.</li>
<li>Generate a <a href="depositslip.html">Deposit Slip</a> to send to Quickbooks.</li>
</ol>
<h2>Setup Quickbooks</h2>
<p><b>Company File</b>: Enter the path to the QuickBooks company file. To Browse for the company file, close QuickBooks in the background first. Once added, run QuickBooks in the background again.</p>
<p><b>Connect</b>: Only needs done once. Click to connect with Quickbooks. Opens a security window from QuickBooks. From the security window, select <i>Yes, always</i>, then click Continue.</p>
<p><b>List of accounts to deposit to</b>: Click <b>Add</b> and select the deposit account to add it to the pick list. Accounts entered here will be options when sending a deposit to QuickBooks on the Edit Deposit Slip window. To remove an account, highlight it then click <b>Remove</b>.</p>
<p><b>List of income accounts</b>: Click <b>Add</b> to select the Income Account options available when the deposit transaction is created. To remove an account, highlight it then click <b>Remove</b>.</p>
<p><div class="Note">Note: <ul>
<li>At least one account in both <i>List of accounts to deposit to</i> and <i>List of income accounts</i> must be added.</li>
<li>If the account needed is not available when adding, make sure the user is logged into QuickBooks as a user who has access to all accounts.</li>
<li>Some QuickBooks account types may not allow deposits. Ensure the selected accounts allow deposits.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero"><b>Enable QuickBooks Class Refs</b>: This preference is useful for those who want to track deposits by clinic in QuickBooks (Class Refs).  </p>
<ul class="MarginBottomGap">
<li>Checked: Enable the ability to assign class refs to deposits. A Class List area will show listing the class options that will be available when sending a deposit to QuickBooks. <br/><img src="images/quickbooksClassRefs.gif" width="380" height="149" class="ImageInParagraph"/><ul>
<li><b>Add</b>: Click to add a class ref.</li>
<li><b>Remove</b>: Highlight a class ref, then click to remove it.</li>
</ul>
</li>
<li>Unchecked: (old behavior) There will be no Class selection option on the Edit Deposit window.</li>
</ul>
<p>Click <b>OK</b> to save the settings. The next time a deposit is created in Open Dental, a deposit transaction will automatically be created within the QuickBooks company file, using the accounts chosen at the time of creation.</p>
<h2>Technical Details</h2>
<p><b>Multiple Open Dental Databases</b>: One QuickBooks company file can have multiple Open Dental databases making deposits into it. Each Open Dental database will need to have the settings manually set up in order to start making deposits into the company file. Be sure to make a detailed memo if users need to know which database the deposit came from.</p>
<p><b>Running QuickBooks in Background</b>: Open Dental will run much faster if QuickBooks is open in the background. Make sure to use the exact same company file path to launch QuickBooks outside of Open Dental otherwise users will receive an error that says "Error: A QuickBooks company data file is already open and it is different from the one requested or there are multiple company files open". Having QuickBooks running in the background significantly cuts down on authentication and communication time for every command that Open Dental sends.</p>
<p class="MarginBottomZero"><b>Edit Application Permissions in QuickBooks</b>: </p>
<ol class="MarginBottomGap">
<li>Open the company file. Go to the Edit menu, choose Preferences, and click Integrated Applications.</li>
<li>Click the Company preferences tab.</li>
<li>Set the following preferences: <ul>
<li>Uncheck 'Don't allow any applications to access this company file'.</li>
<li>Uncheck 'Notify the user before running any applications whose certificate has expired'. <div class="Note">Note: If checked, automatic access will be suspended when the application's certificate expires.</div>
</li>
</ul>
</li>
<li>Select the appropriate application and click Properties.</li>
<li>Change any of the options.</li>
<li>If the company file has multiple users and 'Allow this application to login automatically' is checked, select a user for the application to log in as. Although you can permit the application to log in as any user you want, you may want to create a user specifically for the application. This lets you control the type of data the application can access.</li>
<li>If necessary, using whatever mechanism is available in the third-party application, set it to communicate with QuickBooks at your chosen time.</li>
</ol>
</div>
</div>
</body>
</html>```

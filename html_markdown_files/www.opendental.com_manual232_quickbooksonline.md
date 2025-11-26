# File: ./www.opendental.com/manual232/quickbooksonline.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - QuickBooks Online</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('quickbooksonline','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/quickbooksonline.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/quickbooksonline.html" >v24.2</option><option value="https://www.opendental.com/manual241/quickbooksonline.html" >v24.1</option><option value="https://www.opendental.com/manual233/quickbooksonline.html" >v23.3</option><option value="https://www.opendental.com/manual232/quickbooksonline.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/quickbooksonline.html" >v23.1</option><option value="https://www.opendental.com/manual224/quickbooksonline.html" >v22.4</option><option value="https://www.opendental.com/manual223/quickbooksonline.html" >v22.3</option><option value="https://www.opendental.com/manual222/quickbooksonline.html" >v22.2</option><option value="https://www.opendental.com/manual221/quickbooksonline.html" >v22.1</option><option value="https://www.opendental.com/manual214/quickbooksonline.html" >v21.4</option><option value="https://www.opendental.com/manual213/quickbooksonline.html" >v21.3</option><option value="https://www.opendental.com/manual212/quickbooksonline.html" >v21.2</option><option value="https://www.opendental.com/manual211/quickbooksonline.html" >v21.1</option><option value="https://www.opendental.com/manual205/quickbooksonline.html" >v20.5</option><option value="https://www.opendental.com/manual204/quickbooksonline.html" >v20.4</option><option value="https://www.opendental.com/manual203/quickbooksonline.html" >v20.3</option><option value="https://www.opendental.com/manual202/quickbooksonline.html" >v20.2</option><option value="https://www.opendental.com/manual201/quickbooksonline.html" >v20.1</option><option value="https://www.opendental.com/manual194/quickbooksonline.html" >v19.4</option><option value="https://www.opendental.com/manual193/quickbooksonline.html" >v19.3</option><option value="https://www.opendental.com/manual192/quickbooksonline.html" >v19.2</option><option value="https://www.opendental.com/manual191/quickbooksonline.html" >v19.1</option><option value="https://www.opendental.com/manual184/quickbooksonline.html" >v18.4</option><option value="https://www.opendental.com/manual183/quickbooksonline.html" >v18.3</option><option value="https://www.opendental.com/manual182/quickbooksonline.html" >v18.2</option><option value="https://www.opendental.com/manual181/quickbooksonline.html" >v18.1</option><option value="https://www.opendental.com/manual174/quickbooksonline.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>QuickBooks Online</p></div>
<div class="GeneralPageContent">
<p>Set up the QuickBooks Online integration to send deposit information from Open Dental and automatically create accounting transactions in QuickBooks Online.</p>
<p>In <a href="programlinks.html">Program Links</a>, double-click <b>QuickBooks Online</b>.</p>
<img src="images/quickbooksOnlineSetup.png" width="739" height="575"/><p>Alternatively, in <a href="accounting.html">Accounting</a> click Setup, QuickBooks Online.</p>
<p>This is a one-way integration.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/a1czPuwgoyY">QuickBooks Online Integration</a></p>
<h2>Setup</h2>
<p><b>Enabled</b>: Check to enable the QuickBooks online integration. </p>
<p><b>Authenticate</b>: Click to associate your QuickBooks Online account with Open Dental. When clicked, the QuickBooks Sign-In page will launch in a web browser. Log in, then when prompted, connect to Open Dental.</p>
<p>Once connected, an Open Dental QuickBooks Online Code will open. Copy the <b>Auth Code</b> and <b>Realm ID</b> and paste them into the QuickBooks Online Setup window.<br/><img src="images/quickBooksOnlineCode.png" width="911" height="348" class="ImageInParagraph"/><br/> The accounts associated with your QuickBooks account will populate.</p>
<h2>Accounts</h2>
<p>Accounts in this window automatically update when the QuickBooks bridge is enabled. Use the left and right arrows to determine which accounts you want access to within Open Dental. Accounts on the left list in Open Dental.</p>
<p><b>Deposit Accounts</b>: Displays QuickBook account types of <i>Bank</i> or <i>Other Current Asset</i>.</p>
<p><b>Income Accounts</b>: Displays QuickBook account types of <i>Income</i> or <i>Other Income</i></p>
<p><b>Classes</b>: Used to categorize transactions in QuickBooks. Class tracking must be enabled in QuickBook to use in Open Dental. </p>
<p>Once the QuickBooks Online has been authenticated and accounts have been set up, click OK to save. Once setup, this window will automatically update with account information each time the window is opened.</p>
<p>If QuickBooks Online is not already set as your Deposit Software in <a href="preferences.html">Preferences</a>, you will be prompted to set it now.</p>
<img src="images/quickBooksOnlineDepositPrompt.png" width="404" height="146"/></div>
</div>
</body>
</html>```

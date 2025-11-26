# File: ./www.opendental.com/manual232/trojancollectbridge.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Trojan Express Collect Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('trojancollectbridge','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/trojancollectbridge.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/trojancollectbridge.html" >v24.2</option><option value="https://www.opendental.com/manual241/trojancollectbridge.html" >v24.1</option><option value="https://www.opendental.com/manual233/trojancollectbridge.html" >v23.3</option><option value="https://www.opendental.com/manual232/trojancollectbridge.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/trojancollectbridge.html" >v23.1</option><option value="https://www.opendental.com/manual224/trojancollectbridge.html" >v22.4</option><option value="https://www.opendental.com/manual223/trojancollectbridge.html" >v22.3</option><option value="https://www.opendental.com/manual222/trojancollectbridge.html" >v22.2</option><option value="https://www.opendental.com/manual221/trojancollectbridge.html" >v22.1</option><option value="https://www.opendental.com/manual214/trojancollectbridge.html" >v21.4</option><option value="https://www.opendental.com/manual213/trojancollectbridge.html" >v21.3</option><option value="https://www.opendental.com/manual212/trojancollectbridge.html" >v21.2</option><option value="https://www.opendental.com/manual211/trojancollectbridge.html" >v21.1</option><option value="https://www.opendental.com/manual205/trojancollectbridge.html" >v20.5</option><option value="https://www.opendental.com/manual204/trojancollectbridge.html" >v20.4</option><option value="https://www.opendental.com/manual203/trojancollectbridge.html" >v20.3</option><option value="https://www.opendental.com/manual202/trojancollectbridge.html" >v20.2</option><option value="https://www.opendental.com/manual201/trojancollectbridge.html" >v20.1</option><option value="https://www.opendental.com/manual194/trojancollectbridge.html" >v19.4</option><option value="https://www.opendental.com/manual193/trojancollectbridge.html" >v19.3</option><option value="https://www.opendental.com/manual192/trojancollectbridge.html" >v19.2</option><option value="https://www.opendental.com/manual191/trojancollectbridge.html" >v19.1</option><option value="https://www.opendental.com/manual184/trojancollectbridge.html" >v18.4</option><option value="https://www.opendental.com/manual183/trojancollectbridge.html" >v18.3</option><option value="https://www.opendental.com/manual182/trojancollectbridge.html" >v18.2</option><option value="https://www.opendental.com/manual181/trojancollectbridge.html" >v18.1</option><option value="https://www.opendental.com/manual174/trojancollectbridge.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Trojan Express Collect Bridge</p></div>
<div class="GeneralPageContent">
<p>Trojan Express Collect is used to send collection transactions, even if the office does not use Trojan's benefit feature.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on Trojan Express Collect.</p>
<img src="images/trojanCollectSetup.gif" width="582" height="204"/><p>Also see: <a href="trojancollect.html">Trojan Express Collect</a></p>
<h2>Setup</h2>
<p class="MarginBottomZero">First, enable the Trojan Express Collect bridge. </p>
<ul class="MarginBottomGap">
<li><b>Enabled</b>: Check to enable the Trojan Express Collect program in Open Dental.</li>
<li><b>Export Folder</b>: Enter the path to the shared Trojan Folder.</li>
<li><b>Billing type for patients sent to collections</b>: Select the billing type for patients sent to Trojan.</li>
<li><b>Trojan Collection Services password</b>: Enter the password for your Trojan Collection account.</li>
</ul>
<h2>Additional Details</h2>
<p>Trojan supplies a small program titled The Trojan Communicator. This program runs in the system tray of one computer in the dental office. The program can send collection transactions, benefit requests, and download Trojan benefit updates. </p>
<p>Any computer in the office running Open Dental can create a Trojan Collections Transaction. The Trojan Communicator is installed on only one machine in the office, and sends all of those transactions. If you also wish to download Trojan benefit updates, install the Trojan Communicator on the station that will be doing those updates. </p>
<p>The Trojan Communicator will be configured to watch the shared folder for new transaction files created by Open Dental. The transactions will be automatically transmitted to Trojan and deleted from that folder. These transactions could happen at any time during the day, so a continuous connection to the internet is required. </p>
<p>The Trojan Communicator connects through a secure internet link. It logs in and verifies that the office is signed up for Collection Services before sending a transaction.</p>
<p>The Trojan Communicator (at least version 2.00) should be installed and running. It should be shown on the system tray of only one computer in the dental office.</p>
<img src="images/trojanTray.gif" width="194" height="71"/><p>Double-click on the icon and it will expand to show the Trojan Communicator Main Page.</p>
<img src="images/trojanCollectCommunicator.gif" width="385" height="391"/><p>Click <b>Set Folders for Benefit Files and Request Files</b>. You will see the next screen.</p>
<img src="images/trojanCollectFolders.gif" width="583" height="397"/><p>The second box is where Trojan Communicator will look for files coming from Open Dental. The folder should be shared.</p>
<p>Next, you will be taken to the communication settings page. You can usually just click [Test Communications]. Click Hide this Program on the Trojan Communicator main page. The program is now ready to send transactions. To see what transactions have been submitted, you can launch the Express Collect.</p>
</div>
</div>
</body>
</html>```

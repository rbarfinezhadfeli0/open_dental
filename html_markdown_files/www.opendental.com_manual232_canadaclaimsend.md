# File: ./www.opendental.com/manual232/canadaclaimsend.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Send Canadian Claims and Retrieve Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('canadaclaimsend','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/canadaclaimsend.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/canadaclaimsend.html" >v24.2</option><option value="https://www.opendental.com/manual241/canadaclaimsend.html" >v24.1</option><option value="https://www.opendental.com/manual233/canadaclaimsend.html" >v23.3</option><option value="https://www.opendental.com/manual232/canadaclaimsend.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/canadaclaimsend.html" >v23.1</option><option value="https://www.opendental.com/manual224/canadaclaimsend.html" >v22.4</option><option value="https://www.opendental.com/manual223/canadaclaimsend.html" >v22.3</option><option value="https://www.opendental.com/manual222/canadaclaimsend.html" >v22.2</option><option value="https://www.opendental.com/manual221/canadaclaimsend.html" >v22.1</option><option value="https://www.opendental.com/manual214/canadaclaimsend.html" >v21.4</option><option value="https://www.opendental.com/manual213/canadaclaimsend.html" >v21.3</option><option value="https://www.opendental.com/manual212/canadaclaimsend.html" >v21.2</option><option value="https://www.opendental.com/manual211/canadaclaimsend.html" >v21.1</option><option value="https://www.opendental.com/manual205/canadaclaimsend.html" >v20.5</option><option value="https://www.opendental.com/manual204/canadaclaimsend.html" >v20.4</option><option value="https://www.opendental.com/manual203/canadaclaimsend.html" >v20.3</option><option value="https://www.opendental.com/manual202/canadaclaimsend.html" >v20.2</option><option value="https://www.opendental.com/manual201/canadaclaimsend.html" >v20.1</option><option value="https://www.opendental.com/manual194/canadaclaimsend.html" >v19.4</option><option value="https://www.opendental.com/manual193/canadaclaimsend.html" >v19.3</option><option value="https://www.opendental.com/manual192/canadaclaimsend.html" >v19.2</option><option value="https://www.opendental.com/manual191/canadaclaimsend.html" >v19.1</option><option value="https://www.opendental.com/manual184/canadaclaimsend.html" >v18.4</option><option value="https://www.opendental.com/manual183/canadaclaimsend.html" >v18.3</option><option value="https://www.opendental.com/manual182/canadaclaimsend.html" >v18.2</option><option value="https://www.opendental.com/manual181/canadaclaimsend.html" >v18.1</option><option value="https://www.opendental.com/manual174/canadaclaimsend.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Send Canadian Claims and Retrieve Reports</p></div>
<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in the <a href="manage.html">Manage Module</a>, click Send Claims.</p>
<img src="images/canadaclaimSend.png" width="915" height="364"/><p>Canadian insurance claims can be managed on the Insurance Claims window. Claims cannot be sent as a batch in Canada. </p>
<p>For a full description of all buttons and columns, see <a href="claimsend.html">Send Claims</a>. Below is detail on features specific to Canada.</p>
<h2>Toolbar</h2>
<img src="images/sendClaimsToolbarCanada.png" width="811" height="26"/><p class="MarginBottomZero">Toolbar options: </p>
<ul class="MarginBottomGap">
<li><b>Outstanding</b>: Request outstanding transactions (ROT) from the default clearinghouse. See Retrieve Reports below.</li>
<li><b>Payment Rec</b>: Get payment reconciliation transactions for a specific carrier, billing and treating provider. This report is not used often.</li>
</ul>
<h2>Retrieve Reports (ROT - Outstanding Transaction Requests)</h2>
<p>Users are alerted of outstanding transactions (mailbox items) when sending claims. Retrieving them is optional and does not affect patient accounts. </p>
<img src="images/canadaNotification.png" width="399" height="166"/><p>Click <b>Outstanding</b> to retrieve reports. </p>
<p class="MarginBottomZero">If a user is notified of outstanding transactions upon sending a claim, and would like to retrieve them, they should use these options (in any order): </p>
<ul class="MarginBottomGap">
<li>Version 2: Select this option and the appropriate Office Number then click OK.</li>
<li>Version 4: Selected by default. Sends the ROT (04) request to recently used carriers. </li>
<li>Version 4 To Specific Carrier: Select this option, a Carrier from the list and the appropriate Office Number, then click OK. Useful when retrieving mailbox items immediately after receiving the notification (select the most recent carrier that a claim was sent to). </li>
</ul>
<img src="images/canadaclaimSendOut.png" width="368" height="383"/><p><div class="Note">Note: Mailbox items might be automatically retrieved for multiple carriers at a time (others on the same network as the selected carrier) and oftentimes only a single request is necessary to download all mailbox items.</div>
</p>
<p>Wait for responses to show. When each step is complete, a dialog with the word <i>Done.</i> will show.</p>
<h2>History</h2>
<b>Undo</b>: Changes a sent claim status to <i>Waiting to Send</i>.  <ul>
<li>Does not reverse sent claims. See Reversals section in <a href="canadaclaims.html">Canada Claims</a> for more information.</li>
<li>A record of sent or printed claims are available in the History grid. Double-click a row to view sent and received information. </li>
</ul>
</div>
</div>
</body>
</html>```

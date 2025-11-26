# File: ./www.opendental.com/manual232/claimstream.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Claimstream</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimstream','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/claimstream.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/claimstream.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimstream.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimstream.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimstream.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/claimstream.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimstream.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimstream.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimstream.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimstream.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimstream.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimstream.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimstream.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimstream.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimstream.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimstream.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimstream.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimstream.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimstream.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimstream.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimstream.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimstream.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimstream.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimstream.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimstream.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimstream.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimstream.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimstream.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Claimstream</p></div>
<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, claims can be submitted directly to the TELUS and Instream networks using Claimstream.</p>
<p><div class="Note">Note: <ul>
<li>Open Dental support is required to install the CCDWS service that Claimstream runs on.</li>
<li>Open Dental is CCDWS certified software.</li>
<li>Quebec users should not install Claimstream.</li>
</ul>
</div>
</p>
<h2>Install Claimstream / CCDWS</h2>
<p>Claimstream uses the CCDWS service to send claims. See <a href="ccdws.html">CCDWS Service</a> for installation instructions. </p>
<p></p>
<h2>Setup the Claimstream Clearinghouse</h2>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Family/Insurance, <a href="clearinghouses.html">Clearinghouses</a>. Double-click Claimstream to edit.</p>
<img src="images/clearinghouseClaimstream.png" width="915" height="689"/><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Set the Claim Export Path to <b>\\ServerName\ccd\</b>.</li>
<li>Set the Report Path to <b>\\ServerName\ccd\</b>.</li>
<li>Ensure <b>Use Claim Export Path</b> is checked.</li>
<li>Set the preferred Explanation of Benefits (EOB) option: <ul>
<li><b>Do Not Download EOBs:</b> EOBs display, but amounts from EOBs are not downloaded into claims/predeterminations.</li>
<li><b>Download EOBs, Do Not Auto Receive:</b> EOBs display and amounts from EOBs are automatically downloaded as insurance estimate overrides (claims and predeterminations) and preauth estimates (predeterminations only), but the claim/predetermination is not marked as received.</li>
<li><b>Download EOBs and Auto Receive:</b> EOBs display and amounts from EOBs are automatically downloaded as insurance estimate overrides (claims and predeterminations) and as preauth estimates (predeterminations only), and claim procedures are received using the same amounts. Claim payment need to be finalized after receiving payment from the carrier. </li>
</ul>
</li>
<li>Click OK to save.</li>
<br/></ol>
<p><div class="Note">Note: Some fields may automatically fill that are not needed. They can be removed. <ul>
<li>Launch Client Program</li>
<li>Payors (rarely used). </li>
</ul>
</div>
</p>
<h2>Technical Details of Upload</h2>
<p>Open Dental checks the claim export path (usually <b>C:\ccd</b> on the claim server) for the existence of <span class="codeblock">OPENDENTAL.pem</span> and automatically creates the <span class="codeblock">OPENDENTAL.pem</span> file if it does not already exist.</p>
<p>Files being sent from Open Dental to Claimstream are named <span class="codeblock">input.###</span> (i.e., input.000, input.001, etc...) and are placed in the <b>C:\ccd</b> folder on the server by default.</p>
<p>To prevent the CCDWS service from processing input before the input file is finished writing, a temp file is first written in format <span class="codeblock">tempinput.###</span>, then the file is renamed to <span class="codeblock">input.###</span>. File names are cycled through until they reach 999 and then start over at 000.</p>
<p>The purpose of the file name incrementing is to prevent transactions of different client machines from colliding while they are being adjudicated. The CCDWS service first renames the <span class="codeblock">input.###</span> file to <span class="codeblock">_nput.###</span> to prevent the file from being processed more than once. The CCDWS service then sends the _nput.### file data via a secure SSL connection to Claimstream. The reply comes back in under two minutes as <span class="codeblock">output.###</span> or <span class="codeblock">utput.###</span> in the same folder. The <span class="codeblock">output.###</span> file is immediately imported into Open Dental, then the <span class="codeblock">output.###</span> and <span class="codeblock">_nput.###</span> files are deleted by Open Dental.</p>
</div>
</div>
</body>
</html>```

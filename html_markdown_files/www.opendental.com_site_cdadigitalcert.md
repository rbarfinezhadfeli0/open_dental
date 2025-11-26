# File: ./www.opendental.com/site/cdadigitalcert.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - CDA Digital IDs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('cdadigitalcert','canada','countries','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>CDA Digital IDs</p></div>
		<div class="GeneralPageContent">
<p>Digital IDs are certificates installed to the server that allow claim submission.</p>
<p>For <a href="canada.html">Canada</a> users, both <a href="itrans.html">ITRANS</a> and <a href="itrans20.html">ITRANS 2.0</a> require digital IDs. </p>
<h2>Install Provider Certificates</h2>
<p class="MarginBottomZero">Each dentist sending claims must have a CDA Digital ID (certificate) installed. These certificates should be installed to the server hosting ITRANS 2.0 </p>
<ul class="MarginBottomGap">
<li>Certificates must be installed to the same Windows user that ITRANS 2.0 is linked to (i.e., the user listed in the ITRANS Claims Director service, Log On tab). When installing Certificates, ensure the Claims Server is logged into that user.</li>
<li>If the password for the Windows user hosting the CDA Digital IDs is forcefully reset, the certificates are invalidated and must be reinstalled. Some Windows updates have also caused certificate corruption in the past.</li>
</ul>
<h2>Dentists</h2>
<p class="MarginBottomZero">Office owners, dentists, or administrators should first obtain a login and password from the CDA. ITRANS 2.0 (version 4 or higher) is required. CDA Digital ID installation: </p>
<ol>
<li>Sign in to the CDA Practice Support Services website <a href="https://services.cda-adc.ca/Practice/Login?ReturnUrl=%2F">services.cda-adc.ca</a>. <ul>
<li> If logged in to the Practice Support Services website as the owner of the practice, you may click the Administration tab at the top to download Digital IDs for all providers.</li>
</ul>
</li>
<li>Click on MY CDA Digital ID.</li>
<li>If linked to multiple offices, find the row with the office in question. Click Download Digital ID.</li>
<li>Read the CDA Digital ID Subscriber Agreement and click the confirmation checkbox.</li>
<li>Click Install with CDA Digital ID Installer. The CDA Digital ID Installer application does not need to be downloaded or installed. The CDA Practice Support application is used instead.</li>
<li>Copy the Secure Code listed on the website or click <b>Copy</b></li>
<li>Find and open the CDA Practice Support application (look for the program icon in the Windows taskbar).</li>
<li>Click Install CDA Digital ID With Secure Code.</li>
<li>Click<b> Paste</b>, and then <b>Submit</b>.</li>
<li>If there is a notice that root certificates need to be installed, allow it.</li>
</ol>
<p class="MarginBottomGap"> The provider's certificate is now installed.</p>
<h2>Hygienists</h2>
<p>Digital IDs do not need to be installed for hygienists or denturists. CDHA member Independent Hygienists and DAC member Denturists can send claims for their work using the <a href="claimstream.html">Claimstream</a> clearinghouse. Open Dental does not require or use paid Instream memberships. </p>
<h2>Certificate Verification</h2>
<p class="MarginBottomZero">To verify a provider has certificates installed: </p>
<ol class="MarginBottomGap">
<li>On the Claims Server, log into the Windows account used for ITRANS.</li>
<li>In Windows, open Internet Options.</li>
<li>Click <b>Content</b>, and then <b>Certificates</b>.</li>
<li>Each dentist in the office should have one current certificate installed per clinic.</li>
</ol>
		</div>
	</div>
</body>
</html>```

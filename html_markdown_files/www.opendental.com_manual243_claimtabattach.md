# File: ./www.opendental.com/manual243/claimtabattach.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Claim - Attachments Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimtabattach','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimtabattach.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimtabattach.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimtabattach.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimtabattach.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimtabattach.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimtabattach.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimtabattach.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimtabattach.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimtabattach.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimtabattach.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimtabattach.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimtabattach.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimtabattach.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimtabattach.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimtabattach.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimtabattach.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimtabattach.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimtabattach.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimtabattach.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimtabattach.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimtabattach.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimtabattach.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimtabattach.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimtabattach.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimtabattach.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimtabattach.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimtabattach.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimtabattach.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Claim - Attachments Tab</p></div>
<div class="GeneralPageContent">
<p>Use the attachments tab to document which attachments are sent with the claim and how they are sent.</p>
<p>In the <a href="claimedit.html">Claim Edit</a> window, click the Attachments tab.</p>
<img src="images/claimEditAttachments.png" width="689" height="258"/><h2>NEA/Manual Tab</h2>
<p>The NEA/Manual Tab is used to document attachments sent to NEA <i>Fast</i>Attach or other third-party services.</p>
<p><div class="Note">Note: <ul>
<li>NEA <i>Fast</i>Attach was acquired by Vyne Dental and is an option for electronic attachments. For <i>Fast</i>Attach registration and download see: <a href="https://vynedental.com/fastattach/" target="_blank">https://vynedental.com/fastattach/</a>.</li>
<li>This box is grayed out if <i>Allow Attachments</i> is enabled in the default <a href="clearinghouses.html">Clearinghouse</a> setup.</li>
</ul>
</div>
</p>
<p><b>Radiographs, Oral Images and Models</b>: Enter how many pages will be sent for each item. This information shows on paper claims and e-claims.</p>
<p><b>EOB, Narrative, Perio chart, Misc Support Data</b>: Check the items that will be sent with the claim. This information shows on e-claims.</p>
<p><b>By Mail/Electronically</b>: Select how the attachments will be sent.</p>
<p><b>Attachment ID Number</b>: If there is an attachment ID that must be included before sending the claim, enter it here. The ID is prepended to the Notes field and goes out on the e-claim in a special field for attachments. If using NEA <i>Fast</i>Attach with ClaimConnect, the NEA# is inserted into the claim after the claim has been sent.</p>
<p class="MarginBottomZero"><b>Attached Images</b>: Select the images that will be sent as attachments, then export them to a temporary folder. Attachments added here are for reference only and are not sent by Open Dental. They must be sent separately using a third-party service. </p>
<ul class="MarginBottomGap">
<li>Click <b>Add</b> to select an image from the <a href="images.html">Imaging Module</a>.</li>
<li>Click <b>Perio</b> to attach the most recent <a href="perio.html">Perio Exam</a>.</li>
</ul>
<p class="MarginBottomZero">As images are added, they are listed in the box. </p>
<ul class="MarginBottomGap">
<li>Double-click on any attachment to view the image.</li>
<li>Right-click to open, rename, or remove.</li>
<li>Click <b>Export</b> to send all listed attachments to the folder defined in the preference, <i>Claim Attachment Export Path</i>.</li>
<li>Import the images from the temporary folder to the attachment service (e.g., to NEA <i>Fast</i>Attach).</li>
</ul>
<h2>DXC Tab</h2>
<p><a href="eclaimsclaimconnect.html">DentalXChange</a> (ClaimConnect) has their own attachment service directly integrated into Open Dental. See <a href="dentalxchangeattachmentservice.html">DentalXChange Attachment</a>.</p>
<h2>EDS Tab</h2>
<p><a href="eclaimseds.html">Electronic Dental Services</a> has their own attachment service directly integrated into Open Dental. See <a href="edsattachmentservice.html">EDS Attachment Service</a>.</p>
<h2>Canadian Tab</h2>
<p>Only displays for Canadian Users. See <a href="canadaattachments.html">Canada Attachments</a> for details.</p>
</div>
</div>
</body>
</html>```

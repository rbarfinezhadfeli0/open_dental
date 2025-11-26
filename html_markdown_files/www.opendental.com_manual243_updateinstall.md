# File: ./www.opendental.com/manual243/updateinstall.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Install Update</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('updateinstall','update','+help','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/updateinstall.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/updateinstall.html" >v24.2</option><option value="https://www.opendental.com/manual241/updateinstall.html" >v24.1</option><option value="https://www.opendental.com/manual233/updateinstall.html" >v23.3</option><option value="https://www.opendental.com/manual232/updateinstall.html" >v23.2</option><option value="https://www.opendental.com/manual231/updateinstall.html" >v23.1</option><option value="https://www.opendental.com/manual224/updateinstall.html" >v22.4</option><option value="https://www.opendental.com/manual223/updateinstall.html" >v22.3</option><option value="https://www.opendental.com/manual222/updateinstall.html" >v22.2</option><option value="https://www.opendental.com/manual221/updateinstall.html" >v22.1</option><option value="https://www.opendental.com/manual214/updateinstall.html" >v21.4</option><option value="https://www.opendental.com/manual213/updateinstall.html" >v21.3</option><option value="https://www.opendental.com/manual212/updateinstall.html" >v21.2</option><option value="https://www.opendental.com/manual211/updateinstall.html" >v21.1</option><option value="https://www.opendental.com/manual205/updateinstall.html" >v20.5</option><option value="https://www.opendental.com/manual204/updateinstall.html" >v20.4</option><option value="https://www.opendental.com/manual203/updateinstall.html" >v20.3</option><option value="https://www.opendental.com/manual202/updateinstall.html" >v20.2</option><option value="https://www.opendental.com/manual201/updateinstall.html" >v20.1</option><option value="https://www.opendental.com/manual194/updateinstall.html" >v19.4</option><option value="https://www.opendental.com/manual193/updateinstall.html" >v19.3</option><option value="https://www.opendental.com/manual192/updateinstall.html" >v19.2</option><option value="https://www.opendental.com/manual191/updateinstall.html" >v19.1</option><option value="https://www.opendental.com/manual184/updateinstall.html" >v18.4</option><option value="https://www.opendental.com/manual183/updateinstall.html" >v18.3</option><option value="https://www.opendental.com/manual182/updateinstall.html" >v18.2</option><option value="https://www.opendental.com/manual181/updateinstall.html" >v18.1</option><option value="https://www.opendental.com/manual174/updateinstall.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Install Update</p></div>
<div class="GeneralPageContent">
<p>See <a href="update.html">Update</a>.</p>
<h2>Update Requirements</h2>
<p>To update Open Dental versions, the practice must be on support and have a unique registration key. If your practice is no longer on support and would like to update, contact <a href="../contact.html">Open Dental Support </a>to sign back up for support.</p>
<p class="MarginBottomZero">Special Installations: </p>
<ul class="MarginBottomGap">
<li>Open Dental Cloud users, contact Open Dental Support to schedule an appointment to update.</li>
<li>Multiple location users, see <i>Updates for Enterprise Users</i> at the bottom of this page for additional details.</li>
<li>eService users, always update from the computer where the eConnector is installed.</li>
<li>HL7 users, always update from HL7 server.</li>
<li>Replication users, see <a href="replicationupdateod.html">Replication: Update Open Dental Version</a> for update instructions.</li>
</ul>
<p><div class="Note">Note: Set an <i>Update Server</i> name in <a href="preferences.html">Preferences</a> to run updates from a specific computer. This can prevent accidental updates and is especially important when using eServices or HL7, or when there are multiple locations. </div>
</p>
<p class="MarginBottomZero">Notes about updating:  </p>
<ul class="MarginBottomGap">
<li><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/watch?v=d8CVI3X2Qf8">How to Update Open Dental to a New Version</a></li>
<li>The update time varies on three factors: how far behind the current database version is, the size of the database, and the speed of the server. Generally, an update can be done in 15-30 minutes, however, if there is observable slowness on the server or if the version was released more than two years ago, staff may want to have an hour set aside to be safe. If anything goes wrong, it is possible that it will take longer, these times are not guaranteed.</li>
<li>We recommend running updates from the server to avoid possible network permission issues.</li>
</ul>
<h2>Update Instructions</h2>
<p>Use these steps to follow along when performing an Open Dental update.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Update window, Click <b>Check for Updates</b>. This displays the available updates.  <ul>
<li>For users with an active registration key, the most recent versions are always available for install. </li>
<li>If the database does not have an active registration key (no longer on support), only versions that were available as of the date the key became inactive can be installed.</li>
<li>Foreign releases of beta versions require additional time for bug testing, so users outside the U.S. may note a delay.</li>
</ul>
<img src="images/update1.png" width="657" height="617"/></li>
<li>Click <b>Install</b> next to the version preferred version to update to.</li>
<li>Depending on the current version, there may be additonal warnings or announcements. Take additional action as needed, then click <b>OK</b> to proceed. If the are no warnings or announcements, see Step 4.</li>
<li>Any open workstations are listed. Open Dental must be closed on all workstations when an update is performed. Click <b>Continue</b> to close Open Dental on the workstation and proceed with the installation. <br/><img src="images/update3.png" width="650" height="305" class="ImageInParagraph"/></li>
<li>The download begins. <br/><img src="images/update4.png" width="502" height="321" class="ImageInParagraph"/></li>
<li>Once the download is complete, click <b>OK</b>. <br/><img src="images/update5.png" width="397" height="146" class="ImageInParagraph"/></li>
<li>Open Dental closes. Wait until the Setup Wizard appears.</li>
<br/><li>Follow the prompts of the Setup Wizard. <br/><img src="images/update6.png" width="495" height="387" class="ImageInParagraph"/></li>
<li>On the final step of the Setup Wizard, click <b>Finish</b>. The Wizard closes.<br/><img src="images/update7.png" width="495" height="387" class="ImageInParagraph"/></li>
<li>Right-click the Open Dental icon and run as administrator to open.</li>
<br/><li>There is a prompt to update the database. <br/><img src="images/update8.png" width="409" height="198" class="ImageInParagraph"/></li>
<li>Once complete, log into Open Dental as usual. </li>
</ol>
<p><div class="Note">Note: <ul>
<li>Once the update is installed and run, all other computers are automatically updated when the program is next opened so the computers can easily be kept updated.</li>
<li>An update can be triggered from any workstation that is using a higher version of Open Dental, even if an update was not intentionally run. This can happen when a multi-location office connects to multiple databases from the same workstation. </li>
<li>Some updates automatically backup the database as a preventive measure. Large enterprise organizations that update often and have a comprehensive backup strategy can contact Open Dental technical support to disable this process.</li>
<li>Automatic backups during the update process are generated in the MyISAM format. If an automatic backup needs to be restored after a failed update, offices that use InnoDB must repeat the <a href="mysqlinnodb.html">DB conversion process</a>. The preference <i>Disable indexes to speed up automatic backups</i> determines if indexes are included in the backup and can affect the speed of the backup.</li>
</ul>
</div>
</p>
<h2>License Agreement</h2>
<p>Depending on certain factors, there may be a License Agreement prompt.</p>
<img src="images/licenseAgreement.png" width="765" height="426"/><p class="MarginBottomZero">This prompt appears when: </p>
<ul class="MarginBottomGap">
<li>Updating to Open Dental Version 21.3 or greater. </li>
<li>The user logging in is an Admin user with the <i>Admin Setup</i> permission. </li>
<li>A user has not agreed to the terms yet.</li>
</ul>
<p>Licenses can be viewed again anytime. See <a href="licenses.html">Licenses</a>.</p>
<h2>Updates for Enterprise Users</h2>
<p>Enterprise users who do not allow normal users to have administrative privileges and prefer to centrally manage all software updates can use the standard Windows solution for pushing updates. Use a Group Policy to enable per machine software assignment.</p>
</div>
</div>
</body>
</html>```

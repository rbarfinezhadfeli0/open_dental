# File: ./www.opendental.com/manual232/virus.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Antivirus</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('virus','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/virus.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/virus.html" >v24.2</option><option value="https://www.opendental.com/manual241/virus.html" >v24.1</option><option value="https://www.opendental.com/manual233/virus.html" >v23.3</option><option value="https://www.opendental.com/manual232/virus.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/virus.html" >v23.1</option><option value="https://www.opendental.com/manual224/virus.html" >v22.4</option><option value="https://www.opendental.com/manual223/virus.html" >v22.3</option><option value="https://www.opendental.com/manual222/virus.html" >v22.2</option><option value="https://www.opendental.com/manual221/virus.html" >v22.1</option><option value="https://www.opendental.com/manual214/virus.html" >v21.4</option><option value="https://www.opendental.com/manual213/virus.html" >v21.3</option><option value="https://www.opendental.com/manual212/virus.html" >v21.2</option><option value="https://www.opendental.com/manual211/virus.html" >v21.1</option><option value="https://www.opendental.com/manual205/virus.html" >v20.5</option><option value="https://www.opendental.com/manual204/virus.html" >v20.4</option><option value="https://www.opendental.com/manual203/virus.html" >v20.3</option><option value="https://www.opendental.com/manual202/virus.html" >v20.2</option><option value="https://www.opendental.com/manual201/virus.html" >v20.1</option><option value="https://www.opendental.com/manual194/virus.html" >v19.4</option><option value="https://www.opendental.com/manual193/virus.html" >v19.3</option><option value="https://www.opendental.com/manual192/virus.html" >v19.2</option><option value="https://www.opendental.com/manual191/virus.html" >v19.1</option><option value="https://www.opendental.com/manual184/virus.html" >v18.4</option><option value="https://www.opendental.com/manual183/virus.html" >v18.3</option><option value="https://www.opendental.com/manual182/virus.html" >v18.2</option><option value="https://www.opendental.com/manual181/virus.html" >v18.1</option><option value="https://www.opendental.com/manual174/virus.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Antivirus</p></div>
<div class="GeneralPageContent">
<p>See <a href="securitycomputers.html">Computer Security</a>.</p>
<p>Virus protection is essential for <a href="../site/hipaa.html">HIPAA</a> compliancy and data protection. Every computer in the office absolutely must run real-time antivirus protection. There are many good antivirus products available, and if your IT person is recommending one, we suggest following their recommendation.</p>
<p> No antivirus software is perfect however, so make quality <a href="backups.html">Backups</a>.</p>
<p>Also see <a href="virusbestpractices.html">Antivirus Best Practices</a>.</p>
<p><b>Antivirus Software and Firewalls</b>: Many antivirus programs have their own software <a href="firewalls.html">firewall</a>. We recommend you use the Windows firewall and turn off the antivirus software or internet security. If you still want to use your own firewall, then you MUST <a href="port3306.html">Open Port 3306</a> which is used to access the MySQL database. This only needs to be done on the server, not on each workstation.</p>
<p>Each firewall has a different way of setting up which ports get blocked, but you should always be able to add ports to an exceptions list. Since Open Dental uses ports, software firewall setting will need to be adjusted.</p>
<p><b>Secure vs Insecure Network</b>: It is not secure to expose the MySQL service to the internet. MySQL is only as vulnerable as your local network security allows. If you must run Open Dental MySQL on an unsecured network (e.g., you are part of a larger campus network) you may be vulnerable to attacks from your own network. This is similar to having a port open to the entire internet. You will need to isolate the MySQL server and connect using our <a href="middletier.html">Middle Tier</a> service instead of exposing MySQL. After setting up the Middle Tier for your client machine access, block port 3306 using your Windows Firewall and then only allow access to port 3306 from localhost (127.0.0.1).</p>
<h2>Ransomware</h2>
<p>Ransomware (e.g., a crypto virus) is a growing concern for many offices.</p>
<b>What is Ransomware?</b><p> Ransomware encrypts your database so that it cannot be accessed. The data is then held for ransom and can only be un-encrypted if the fee is paid. </p>
<b>How do I know if I have been the victim of ransomware?</b><p>Offices infected by ransomware will be unable to access their database. The server where the data is stored will have a "Read Me" file explaining the ransom and instructions. The tables of the database will have an odd naming convention because they have been encrypted, or they are missing completely.</p>
<b>What do I do if I have been infected?</b><p class="MarginBottomZero">If you are a victim of ransomware, immediately shut down your server until you can get in touch with IT. They will present you with a few options:  </p>
<ol class="MarginBottomGap">
<li>Restore your data from the most recent non-infected backup. Ideally this is a backup hosted offsite. Do not restore the data to a server or computer until you are certain the ransomware virus has been completely removed from the system.</li>
<li>If you do not have a non-infected backup, the most reasonable option may be to pay the ransom. </li>
<li>Start from a blank database.</li>
</ol>
<div class="Note">Note: It is up to each office to decide how to react if data is compromised.</div>
<br/><br/><b>How can I avoid ransomware?</b><p> We recommend reviewing your <a href="securitycomputers.html">Computer Security</a> and enabling a password on the MySQL service (see <a href="securitymysql.html">MySQL Security</a>). </p>
<p>Avoid using your workstation as a server, and avoid mapped drives when possible. </p>
<p>Work with your IT to ensure a secure network and make regular backups. It is recommended that at least one backup method is stored off the network.</p>
<p>For HIPAA guidance on ransomware, see <a href="http://www.natlawreview.com/article/guidance-ransomware-attacks-under-hipaa-and-state-data-breach-notification-laws">http://www.natlawreview.com/article/guidance-ransomware-attacks-under-hipaa-and-state-data-breach-notification-laws</a>. </p>
<h2>Recover Data after a Virus</h2>
<p>Virus protection is essential for <a href="../site/hipaa.html">HIPAA</a> compliance and data protection. No antivirus solution is perfect however. If a computer does become infected, and you have been regularly performing quality <a href="backups.html">backups</a> of your Open Dental data, recovery is possible, hopefully with minimal data loss.</p>
<p class="MarginBottomZero">Once a virus has been detected: </p>
<ol class="MarginBottomGap">
<li>Decide if data is corrupted. Open Dental can help identify corrupted data. If it is corrupted, you will need to rely on a backup of data (see step 3 below).</li>
<li>Remove the virus and clean the computer. This may include virus scanning and reformatting the computer. Consult your IT department.</li>
<li>Use a backup of your data and recover accordingly. Open Dental can assist with restoring a backup to the server.</li>
<li>Contact Open Dental to discuss last resort options. </li>
</ol>
<p>Open Dental cannot help you remove a virus, decrypt data, uncorrupt data, or backup data. However, we can assist you with restoring a backup to a uninfected machine.</p>
<p>Also see <a href="virusbestpractices.html">Antivirus Best Practices</a>.</p>
<h2>Antivirus Software</h2>
<p>We do not recommend or discourage any specific product. While using antivirus software is mandatory, there are downsides. Below are some comments about antivirus products, based on our experience as well as customers' issues. Many of the issues only existed in one specific version of the antivirus software and have been fixed.</p>
<p><b>Avast</b>: Some users may experience Open Dental slowness when using Avast pro version 10.4.2233. You may need to disable Avast or use another version.</p>
<p><b>AVG</b>: For a few customers, AVG has identified Open Dental as a virus and quarantined it. In this case, you can create an exception. AVG has also been known to stop Open Dental from opening even when AVG's resident shield is disabled. In this case, also create an exception.</p>
<p><b>McAfee</b>: Has blocked Open Dental from working in the past. In this case, it must be uninstalled from the server. Even if you turn it off, it will keep interfering.</p>
<p><b>Symantec</b> (Norton): If using Symantec's Firewall Manager, it has been known to block Open Dental and MySQL, or to identify Open Dental as a virus and quarantine it. In these cases, you can create an exception. These issues are uncommon.</p>
<p><b>Total Defense Security</b>: For some customers, certain versions have caused database corruptions.</p>
<p><b>Trend Micro PcCillin</b>: Sometimes crashed the computer.</p>
<p><b>Webroot</b>: For some customers, Webroot identified Open Dental as a threat and blocked users from accessing it. Upgrade Webroot to version 9.0.15.50 and remove Open Dental from quarantine.</p>
<h2>Troubleshooting</h2>
<p>If a computer is malfunctioning, one possibility is to temporarily uninstall the antivirus software, then test to see if the problem is resolved. Always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.</p>
</div>
</div>
</body>
</html>```

# File: ./www.opendental.com/manual243/backupsonline.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Online Backups</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('backupsonline','backuptool','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/backupsonline.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/backupsonline.html" >v24.2</option><option value="https://www.opendental.com/manual241/backupsonline.html" >v24.1</option><option value="https://www.opendental.com/manual233/backupsonline.html" >v23.3</option><option value="https://www.opendental.com/manual232/backupsonline.html" >v23.2</option><option value="https://www.opendental.com/manual231/backupsonline.html" >v23.1</option><option value="https://www.opendental.com/manual224/backupsonline.html" >v22.4</option><option value="https://www.opendental.com/manual223/backupsonline.html" >v22.3</option><option value="https://www.opendental.com/manual222/backupsonline.html" >v22.2</option><option value="https://www.opendental.com/manual221/backupsonline.html" >v22.1</option><option value="https://www.opendental.com/manual214/backupsonline.html" >v21.4</option><option value="https://www.opendental.com/manual213/backupsonline.html" >v21.3</option><option value="https://www.opendental.com/manual212/backupsonline.html" >v21.2</option><option value="https://www.opendental.com/manual211/backupsonline.html" >v21.1</option><option value="https://www.opendental.com/manual205/backupsonline.html" >v20.5</option><option value="https://www.opendental.com/manual204/backupsonline.html" >v20.4</option><option value="https://www.opendental.com/manual203/backupsonline.html" >v20.3</option><option value="https://www.opendental.com/manual202/backupsonline.html" >v20.2</option><option value="https://www.opendental.com/manual201/backupsonline.html" >v20.1</option><option value="https://www.opendental.com/manual194/backupsonline.html" >v19.4</option><option value="https://www.opendental.com/manual193/backupsonline.html" >v19.3</option><option value="https://www.opendental.com/manual192/backupsonline.html" >v19.2</option><option value="https://www.opendental.com/manual191/backupsonline.html" >v19.1</option><option value="https://www.opendental.com/manual184/backupsonline.html" >v18.4</option><option value="https://www.opendental.com/manual183/backupsonline.html" >v18.3</option><option value="https://www.opendental.com/manual182/backupsonline.html" >v18.2</option><option value="https://www.opendental.com/manual181/backupsonline.html" >v18.1</option><option value="https://www.opendental.com/manual174/backupsonline.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Online Backups</p></div>
<div class="GeneralPageContent">
<p>See <a href="backuptool.html">Backup Tool</a>.</p>
<p>Cloud <a href="backups.html">Backups</a> can be a tool in a regular backup and recovery plan. If using a cloud service, these folders should be backed up:</p>
<ul>
<li><b>mysql\data\</b> - The database that stores patient data.</li>
<li><b>OpenDentImages\</b> - The <a href="atozfolder.html">A to Z Folder</a> that store files you scan or import. See <a href="paths.html">Data Paths Setup</a>.</li>
</ul>
<p>As always, backups should be encrypted, and regularly restored to another machine to verify quality.</p>
<p>Be aware that cloud backups are not a perfect solution.</p>
<p>Also see <a href="../site/vendorssupplementalservices.html#cloud">Cloud Hosted Automated Backups</a>.</p>
<p><b>Advantages</b>: Automated, with no action required by user after setup. Off-site, so protected in case of fire, flood, burglary, etc. </p>
<p><b>Disadvantages</b>: Initial setup and the first backup can be time consuming because the initial backup can be very slow. While the initial backup could take less than an hour if you are only backing up your database, it can literally take as long as a week if you are including many images. Subsequent backups are incremental, only sending the changed data.</p>
<p class="MarginBottomZero"><b>MySQL Service</b>: Automated stopping and starting of the MySQL service is not important because backups can safely be done without stopping the MySQL service. You would never restore directly to the live database location, so the backup service is not involved with the actual final move of the restored data to the live location. All of the backup services are good at copying locked files. In the rare case that a locked file causes a failure, it should only affect that one file and should not be a major problem. When restoring a database using the data provided by your backup service, follow these general steps. </p>
<ol class="MarginBottomGap">
<li>Restore to a new location (like <b>C:\restored files\</b> or to another machine), not to your live database on your server.</li>
<li>Stop the MySQL Service.</li>
<li>Make a manual local backup of your current database (if there is one still there).</li>
<li>Delete the current database.</li>
<li>Place the restored database in the location where your live data was.</li>
<li>Turn back on the MySQL service</li>
</ol>
<h2>Specialized Backup Services</h2>
<p>The company below may provide more specialized solutions or managed backup services that require less technical involvement on the part of the user.</p>
<p class="MarginBottomZero"><b>Central Data Storage (UnisonBDR)</b> (recommended)  </p>
<ul class="MarginBottomGap">
<li><a href="https://www.centraldatastorage.com/">Central Data Storage with Open Dental</a></li>
<li>Automated backups</li>
<li>Meet mandatory requirements for a data backup plan, disaster recovery plan, and emergency mode operation plan'</li>
<li>Managed STaaS (storage as a service)</li>
<li>Email encryption (CDSmail)</li>
<li>Confidentiality Agreement (CA)</li>
<li>Business Associate Agreement (BAA)</li>
<li>Unlimited storage, archiving, and versions</li>
<li>Data compression</li>
<li>File retrieval</li>
<li>Satisfy 88 of the 168 HIPAA audit controls</li>
<li>No contracts</li>
</ul>
<h2>Backup Service Reviews</h2>
<p>Specific backup services are listed here to help customers make informed decisions. Most of the products below have quirks and there are learning curves with each one. Some have been reviewed.</p>
<p><b>Carbonite</b>: In June 2016, Carbonite informed us they are capable of supporting backups of live databases for Server Backup versions. Live database backups are currently untested. While some customers have successfully used Carbonite to restore backups, others have reported corrupt files and even appeared to have databases corrupted by the backup process without even doing a restore.</p>
<p>Available for trial or purchase: <a href="https://www.carbonite.com/">https://www.carbonite.com/</a></p>
<p><b>iDrive</b>: There are multiple interface options, including classic, web, and explorer (virtual drive). It keeps the last 30 versions of every file, only counting the current version when computing your storage usage. Timeline restore allows restoring to a specific historical point. There's also a free backup program (which we have found to be buggy) available on their website that's optimized for backing up to a removable hard drive. While some customers have successfully used iDrive to manage their backups, others have reported instances where iDrive caused database to lock up and this has occurred even when backup is set to after hours and live backup is turned off.</p>
<p>Available for trial or purchase: <a href="http://www.idrive.com/p=open_dental">http://www.idrive.com/p=open_dental</a>.</p>
<p><b>SugarSync:</b> Not reviewed, no known complaints from our customers to us. Feature set looks interesting. Has version management built in, keeping the last 5 versions of every file. Charges by storage size and does not charge extra for multiple computers. Automatic multi-computer sync. Remote access using browser. Share folders with others. The shared folders are password protected, but require the other person to sign up for a free trial. Available for trial or purchase: <a href="http://www2.sugarsync.com/">www.sugarsync.com/</a></p>
<p class="MarginBottomZero"><b>Backup4all: </b><a href="https://www.backup4all.com/">https://www.backup4all.com/</a> Get the Pro version. Our favorite features are: </p>
<ul>
<li>backup from network share</li>
<li>backup to network share</li>
<li>incremental and block-level (partial file) backup</li>
<li>encryption in zip file</li>
<li>multiple destinations</li>
<li>email notification</li>
</ul>
<p class="MarginBottomGap"> It also offers cloud backups through the same interface.<br/> Recommend "mirror" uncompressed backups with "fast mirror" option turned on. Otherwise, backups can only be restored through the Backup4all interface. Read their manual to understand the nuances of this setting. Additional incremental backups can also be done separately from the mirrors.</p>
<p><b>Paragon:</b> Seems very powerful, but they have so many products to pick from that it's very confusing. If you have a large organization, it looks like they could scale up easily to provide centralized backups across many computers. Their free version seems to be intentionally hidden from their menu: <a href="https://www.paragon-software.com/free/br-free/">https://www.paragon-software.com/free/br-free/</a> Not reviewed, but it looks decent and it gets positive reviews from other reviewers. One problem is that the free version only supports workstations, not servers. The next step up from the free version would be Backup and Recovery Business, which does not have a price listed.</p>
<h2>Folder Synchronization (for Replication)</h2>
<p><b>Distributed File System (DFS):</b> A good folder synchronization technology if each replication server has a Windows Server operating system. <a href="http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx">http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx</a></p>
</div>
</div>
</body>
</html>```

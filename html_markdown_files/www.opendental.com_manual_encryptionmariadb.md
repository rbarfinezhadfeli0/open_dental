# File: ./www.opendental.com/manual/encryptionmariadb.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MariaDB Data-at-Rest Encryption</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('encryptionmariadb','encryption','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/encryptionmariadb.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/encryptionmariadb.html" >v24.2</option><option value="https://www.opendental.com/manual241/encryptionmariadb.html" >v24.1</option><option value="https://www.opendental.com/manual233/encryptionmariadb.html" >v23.3</option><option value="https://www.opendental.com/manual232/encryptionmariadb.html" >v23.2</option><option value="https://www.opendental.com/manual231/encryptionmariadb.html" >v23.1</option><option value="https://www.opendental.com/manual224/encryptionmariadb.html" >v22.4</option><option value="https://www.opendental.com/manual223/encryptionmariadb.html" >v22.3</option><option value="https://www.opendental.com/manual222/encryptionmariadb.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MariaDB Data-at-Rest Encryption</p></div>
<div class="GeneralPageContent">
<p>See <a href="encryption.html">Encryption of Data at Rest and in Transit</a></p>
<p>Open Dental does not provide technical support for Encryption. For assistance, consult an IT professional. The information below is provided as a resource for an IT professional to help make encryption decisions. It is not intended for regular users.</p>
<p><div class="Note">Note: Databases must be converted to <a href="mysqlinnodb.html">InnoDB</a> prior to encryption.</div>
</p>
<h2>Change Log On User for MySQL Service</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In Windows, open Services. </li>
<li>Double-click the MySQL Service. </li>
<li>Select the Log On tab. </li>
<li>Change the option to <i>This Account</i>. </li>
<li>Enter the user credentials for the user that the MariaDB key file folder is being encrypted for.</li>
</ol>
<h2>Implementing EFS for the key file</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>(<i>Optional, but highly recommended</i>) Back up the database to external encrypted media.</li>
<li>Log in as the Windows user that runs the MySQL service.</li>
<li>Navigate to the directory containing the MySQL data (default is <b>C:\mysql\</b>).</li>
<li>Create a new folder named <i>keys</i>.</li>
<li>Right-click the folder named <i>keys</i>.</li>
<li>Select Properties, then General tab, and click Advanced.</li>
<li>Check the <b>Encrypt contents to secure data</b> box.</li>
<li>Document that this once done in case it needs to be shown it was completed in the future.</li>
</ol>
<h2>Creating an encryption key file</h2>
<p>Instructions on creating the key file contents can be found at <a href="https://mariadb.com/kb/en/file-key-management-encryption-plugin/#creating-the-key-file">https://mariadb.com/kb/en/file-key-management-encryption-plugin/#creating-the-key-file</a>. Once the key file has been created, place it in the <i>keys</i> folder and name it <i>keyfile</i> while logged in as the same user that runs the MySQL service.</p>
<h2>Implementing MariaDB Data-at-Rest Encryption</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>From the File Explorer, navigate to the directory containing the my.ini (default for MariaDB 10.5 is <b>C:\Program Files\MariaDB 10.5\my.ini</b>).</li>
<li>Right-click the my.ini file and open with Notepad.</li>
<li>Add the following lines to the bottom of the [mysqld] option group: <p class="codeblock">plugin_load_add = file_key_management<br/> file_key_management_filename = "C:/mysql/keys/keyfile"<br/> file_key_management_encryption_algorithm = AES_CBC<br/> innodb_encrypt_tables=FORCE<br/> innodb_encryption_threads=20<br/> innodb_default_encryption_key_id=1<br/> aria_encrypt_tables=ON<br/> encrypt_tmp_disk_tables=ON<br/> innodb_encrypt_log=ON<br/> encrypt_binlog=ON</p></li>
<li>Click File, Save as.</li>
<li>Select Desktop as the save destination.</li>
<li>In File Explorer cut the my.ini from the Desktop and paste it into the MariaDB folder (default for MariaDB 10.5 is <b>C:\Program Files\MariaDB 10.5\my.ini</b>)</li>
<li>Click <b>Replace the file in the destination</b>. If prompted by UAC click <b>Continue</b>.</li>
<li>Restart the MySQL service.</li>
</ol>
<h2>How does MariaDB Data-at-Rest Encryption Work</h2>
<p>For more information in how MariaDB Data-at-Rest Encryption works, visit the MariaDB website: <a href="https://mariadb.com/kb/en/data-at-rest-encryption-overview/">https://mariadb.com/kb/en/data-at-rest-encryption-overview/</a></p>
</div>
</div>
</body>
</html>```

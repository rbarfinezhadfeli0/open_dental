# File: ./www.opendental.com/manual232/securitymysql.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - MySQL Security</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securitymysql','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/securitymysql.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/securitymysql.html" >v24.2</option><option value="https://www.opendental.com/manual241/securitymysql.html" >v24.1</option><option value="https://www.opendental.com/manual233/securitymysql.html" >v23.3</option><option value="https://www.opendental.com/manual232/securitymysql.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/securitymysql.html" >v23.1</option><option value="https://www.opendental.com/manual224/securitymysql.html" >v22.4</option><option value="https://www.opendental.com/manual223/securitymysql.html" >v22.3</option><option value="https://www.opendental.com/manual222/securitymysql.html" >v22.2</option><option value="https://www.opendental.com/manual221/securitymysql.html" >v22.1</option><option value="https://www.opendental.com/manual214/securitymysql.html" >v21.4</option><option value="https://www.opendental.com/manual213/securitymysql.html" >v21.3</option><option value="https://www.opendental.com/manual212/securitymysql.html" >v21.2</option><option value="https://www.opendental.com/manual211/securitymysql.html" >v21.1</option><option value="https://www.opendental.com/manual205/securitymysql.html" >v20.5</option><option value="https://www.opendental.com/manual204/securitymysql.html" >v20.4</option><option value="https://www.opendental.com/manual203/securitymysql.html" >v20.3</option><option value="https://www.opendental.com/manual202/securitymysql.html" >v20.2</option><option value="https://www.opendental.com/manual201/securitymysql.html" >v20.1</option><option value="https://www.opendental.com/manual194/securitymysql.html" >v19.4</option><option value="https://www.opendental.com/manual193/securitymysql.html" >v19.3</option><option value="https://www.opendental.com/manual192/securitymysql.html" >v19.2</option><option value="https://www.opendental.com/manual191/securitymysql.html" >v19.1</option><option value="https://www.opendental.com/manual184/securitymysql.html" >v18.4</option><option value="https://www.opendental.com/manual183/securitymysql.html" >v18.3</option><option value="https://www.opendental.com/manual182/securitymysql.html" >v18.2</option><option value="https://www.opendental.com/manual181/securitymysql.html" >v18.1</option><option value="https://www.opendental.com/manual174/securitymysql.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>MySQL Security</p></div>
<div class="GeneralPageContent">
<p>This information about <a href="securitycomputers.html">Computer Security</a> is for advanced IT users. MySQL security setup is the responsibility of a practice or its IT, although we recommend contacting <a href="../contact.html">Open Dental Support</a> for assistance implementing any changes.</p>
<p><a href="mysql.html">MySQL</a> / <a href="mariadb.html">MariaDB</a> is the database server where all the data tables are stored.</p>
<p>MySQL is only as vulnerable as the local network security allows. It is not secure to expose the MySQL service to the internet (World Wide Web). Do not open the MySQL port (default is port 3306) on routers and do not allow incoming traffic for that port. The port can be opened as <a href="firewalls.html">Firewall</a> exception rule on servers but NOT on routers. In simple terms, this means do not open the database to the entire internet, even if it thought that the source IP address is verified: it is not sufficient as IP addresses can be spoofed.</p>
<p>MySQL user names and passwords are a secondary level of security. To access an Open Dental database, a MySQL user can require a password be used.</p>
<div class="Note">Note: <ul>
<li>Putting passwords on MySQL does not solve all security issues. Always ensure the network and server are protected. See <a href="../manual/computernetworksetup.html">Computer and Network Setup</a>.</li>
<li>MySQL passwords are also not the same as password features built into Open Dental.</li>
</ul>
</div>
<br/><br/><p>Small offices (users on small closed networks): It is up to the practice to decide whether or not to set MySQL passwords. We recommend that this is done. If someone has access to the data on the server then MySQL passwords do not provide additional protection. Therefore some users may choose to not set MySQL passwords.</p>
<p>Large enterprises should use MySQL users and passwords and create institutional safeguards against losing the password.</p>
<h2>Set Up the User and Password in MySQL During Installation</h2>
<p>For new installations, the <a href="../trial.html">Trial Installer</a> prompts for the creation of a MySQL username and password.</p>
<img src="images/trialInstallerMysqlPassword.png" width="328" height="229"/><p>Enter the information as desired. If the password is left blank, users receive a warning and must confirm their choice to proceed without a password.</p>
<h2>Adding MySQL Password Later</h2>
<p>If using an older installation, or if a user clicked <b>Do this later</b> and would like to start using a MySQL password, see <a href="mysqlusermanager.html">MySQL User Manager</a>. For versions 19.3 and below, follow the steps below:<br/><div class="Note">Note: We highly recommend contacting our <a href="../contact.html">Support Team</a> for assistance with this process as we have internal tools that make it easier.</div>
</p>
<ol>
<li> In the MySQL command line client, or in User Query in Open Dental from any workstation, run this query to get a list of current users, hosts, and passwords. <p class="codeblock">SELECT USER, HOST, PASSWORD FROM mysql.user;</p><br/> A default installation has 5 users already set up. <ul>
<li><p class="codeblock">'root'@localhost</p></li>
<li><p class="codeblock">'root'@localhostIP</p></li>
<li><p class="codeblock">'root'@'::1'</p></li>
<li><p class="codeblock">'root'@'%'</p></li>
<li><p class="codeblock">''@'localhost'</p></li>
</ul>
</li>
<li>For each user/host combination, run a query to change the password (replace 'new_password' with the desired password). Run each query one at a time.<br/><br/> Examples:<br/><p class="codeblock">SET PASSWORD FOR 'root'@'127.0.0.1' = PASSWORD('new_password');</p><p class="codeblock">SET PASSWORD FOR 'root'@'::1' = PASSWORD('new_password');</p><p class="codeblock">SET PASSWORD FOR 'root'@'%' = PASSWORD('new_password');</p><p class="codeblock">SET PASSWORD FOR ''@'localhost' = PASSWORD('new_password'); </p><p class="codeblock">SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new_password');</p><br/> IMPORTANT: root@% is a completely different than root@localhost. The password must be changed for both to secure the database from root on all computers.<br/><br/> Consult the <a href="https://www.mysql.com">MySQL website</a> for details about each user.<br/><br/> By default, root@localhost has global access for MySQL and all privileges are enabled.</li>
<li>Run the query in Step 1 again to confirm the passwords. Each user/host combination should show a hashed version of the password.</li>
<li>Restart the server, or run the query FLUSH PRIVILEGES; for the changes to take effect.</li>
</ol>
<br/><div class="Note">Note:  If workstations are logged into Open Dental when the password is set, they may receive an error. Close out of Open Dental and reopen the program. Follow the steps below to Change the User and Password from <a href="choosedatabase.html">Choose Database</a>.</div>
<br/><br/><h2>Change the User and Password on the Choose Database Window</h2>
<p>After making password changes in MySQL, the Open Dental workstations no longer have access to the database.</p>
<ol>
<li>Close Open Dental on each workstation.</li>
<li>Run Open Dental as an admin. The Choose Database window prompts for a MySQL User name and Password.</li>
<li>Verify the server and database.</li>
<li>Verify the user (e.g., root).</li>
<li>Enter the password just created (for default installations typically the root@localhost password).</li>
</ol>
<img src="images/mysqlChooseDatabase.gif" width="730" height="290"/><h2>More Details</h2>
<p>The password entered into the MySQL Configuration window on each computer is stored as obfuscated text in the <a href="freedentalconfig.html">FreeDentalConfig.xml</a>.</p>
<p>If the practice plans on hosting multiple customers on the same database server, see <a href="hostmultipledatabases.html">Host Multiple Databases from One Web Server</a> for isolation information.</p>
<p>Practices may need to work from particular devices or IP address ranges for multi-tenant installations or if there are complex networks where some segments should not have access. Open Dental does not provide advice or direct support on setting up usernames for particular devices or network segments. For multi-tenant installations, consult an IT professional. For complex networks, consult an IT professional, or for even more security use the Middle Tier. Information about setting up usernames for specific devices or network segments is available at <a href="http://dev.mysql.com/doc/refman/5.5/en/account-names.html">http://dev.mysql.com/doc/refman/5.5/en/account-names.html</a>. Open Dental works fine as long as the specified MySQL user has the correct (full) permission set.</p>
<h2>Middle Tier Users</h2>
<p class="MarginBottomZero">There are two MySQL users that may be specified: a regular user and a user with lower privileges. </p>
<ul class="MarginBottomGap">
<li>Regular user: Must have all permissions for all tables starting with "opendental" (if that is the name of the database). Must be able to do everything from adding tables to making a backup of the database. It is during the backup process that the user must also have access to a database that might be called "opendentalbackup_07_14_2006", and the user must also have permission to create tables, etc in this other database. Either give this user privileges for all databases or use a wildcard character to give privileges for similar databases.</li>
<li>UserLow: A user with much lower privileges. No SQL statements are allowed to be passed to the middle tier service except report queries. UserLow is always used for these report queries. This allows prevention of injection attacks at the database level. UserLow should have very limited privileges, just SELECT and CREATE TEMPORARY TABLES, and only for the current database. They are still be able to use queries to select any data, but not to alter it.</li>
</ul>
<p>When users connect from the client computers, they will never see or have access to the users that set up in this file. They will be connecting using an Open Dental username and password. See <a href="choosedatabase.html">Choose Database</a> for an example.</p>
<h2>Troubleshooting</h2>
<p>If workstations have trouble connecting, it may be a Firewall issue. If you can't get past the Choose Database window, then it's a firewall issue. You may need to create an exception to allow Port 3306. See <a href="port3306.html">Open Port 3306</a>. If you've turned off all firewalls on the server and are still stuck at the Choose Database window, see <a href="troubleshooting.html">Troubleshooting</a>.</p>
<p>Users and password: If you change passwords and it no longer works, carefully retrace your steps to make sure the new user has all privileges and access to the Open Dental database. Be aware of the difference between user@% and user@localhost. Double check the privileges and try again.</p>
</div>
</div>
</body>
</html>```

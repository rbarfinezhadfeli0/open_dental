# File: ./www.opendental.com/site/trial.html

```html
<!DOCTYPE html>
<html lang="en"><!-- InstanceBegin template="/Templates/templateSite.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
	<!-- InstanceBeginEditable name="title" -->
		<title>Open Dental: Trial Version</title>
	<!-- InstanceEndEditable -->
	<!--All paths are relative for these MP generated or DW templated pages in the site folder.-->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="resources/site.css" rel="stylesheet" type="text/css">
    <link href="../css/common.css" rel="stylesheet" type="text/css">
    <script src = "resources/site.js" defer></script>
    <link rel="icon" type="image/png" href="resources/favicon.png">
	<!--The head-misc section below is used for style and script that are specific to this page-->
	<!-- InstanceBeginEditable name="head-misc" -->
	<style type="text/css"><!--
		.container {
			display: flex;
			gap: 10px; /* Space between columns */
		}
		.left-column {
			flex: 1; /*Take up the remaining space.*/
			border-right: 1px solid rgb(158,158,158);
			padding-right: 13px;
		}
		.left-column ul, ol{
			margin-left: 30px;
		}
		.right-column {
			flex: 0 0 180px; /* Fixed width. image is 180 wide*/
			display: flex;
			flex-direction: column;
			gap: 10px; /* Space between image and order box */
		}
		@media (max-width: 700px) {
			.right-column {
				display: none;
			}
			.left-column {
				flex: 1; /* Full width */
			}
		}
		.image-container img {
			max-width: 100%;
			height: auto;
			margin-top: 5px;
			margin-bottom: 5px;
		}
		.order-box {
			border: 1px solid rgba(153,153,153,1.00);
			padding: 0px;
		}
		.order-header {
			background-color: rgba(151,151,151,1.00);
			color: white;
			padding: 3px 0px 2px 5px;/*T R B L*/
			font-weight: bold;
			font-size: .85rem;
		}
		.order-content {
			padding:5px 5px;/*TB LR*/
			font-size: .82rem;
			line-height: 1.1rem;
		}
		h3{
			color: rgb(41,89,90);
		}
		-->
	</style>
	<!-- InstanceEndEditable -->
	<!--Todo: This script section is a placeholder for google analytics, but they just switched to GA4. Someone would need to implement.-->
	<script>
	 
	</script>
</head>
<body>
	<div id="TitleAndNav">
		<div id="TitleAndSocial">
			<div id="Title">
				<a href="../index.html">
					<img src="resources/logo.png" alt="Open Dental Software">
				</a>
			</div>
			<div id="Phone">
				<a href="tel:1-503-363-5432" class="phoneLink">503-363-5432</a>
			</div>
		</div>
		<div id="NavWrapper">
			<nav>
				<div id="HamburgerMenu">&#9776;</div>
				<ul>
					<!--See notes in up in the head for explanation of relative path choices.-->
					<li><a href="../index.html">Home</a></li>
					<li><a href="trial.html">Trial Version</a></li>
					<li><a href="order.html">Order</a></li>
					<li><a href="documentation.html">Documentation</a></li>
					<li><a href="http://opendentalsoft.com/forum/">Forum</a></li>
					<li><a href="contact.html">Contact Us</a></li>
					<li><a href="searchSite.html"><img id="MenuIconSearch" src="resources/iconSearch.gif" alt=""/>Search</a> </li>
				</ul>
			</nav>
		</div>
	</div>
    <div id="PagePane"><!--The lighter foreground window that floats over the darker background-->
		<div id="PageTitle">
			<h1>
			<!-- InstanceBeginEditable name="pageTitle" -->Trial Version
			<!-- InstanceEndEditable -->
			</h1>
		</div>
        <div id="Content">
			<!-- InstanceBeginEditable name="content" -->
			<div class="container">
				<div class="left-column">
					<p>The free trial version of  Open Dental can be used to evaluate the software, or be used as the first step  when installing the full version. </p>
					<p>View <a href="testimonials.html" class="Links">User Testimonials</a> for existing customer feedback.</p>
					<h3>General Information</h3><br>
					<ul>
					<li>For operating system requirements, see <a href="../manual/computerrequirements.html" class="Links">Computer Requirements</a>.&nbsp;</li>
					<li>Ensure <a href="../manual/mysql.html" class="Links">MySQL</a> or <a href="../manual/mariadb.html" class="Links">MariaDB</a> is not already installed on the server. </li>
					<li> If you are installing in <a href="../manual/canada.html" class="Links">Canada</a>,  set the <a href="../manual/regionlanguagesettings.html" class="Links">Region and Language Settings</a> on your computer  to Canada before installing.&nbsp;</li>
					<li>The trial version will not expire so it can be used as long as needed to evaluate the software.</li>
					<li>The trial download includes a       blank opendental database and a demo database with fictional patients.</li>
					<li>The trial does not include copyrighted       CDT content (e.g., CDT codes and ADA claim forms).</li>
					<li>The trial uses temporary codes.       CDT codes will be available once a registration key is issued.</li>
					<li>The trial version is limited to       30 patients.</li>
					<li>The trial version does not work with API.</li>
					<li>The trial version does not work with eServices.</li>
					</ul><br>
					<h3>Download and Installation</h3>
					<p>There are two types of installation: to a server or to a workstation. </p>
					<ul>
					<li>  Server:  Installs the  Open Dental program,   MySQL or MariaDB, the database, and the OpenDentImages folder. </li>
					<li>    Workstations: If you have multiple computers, workstations only need  the Open Dental program installed. Each workstation will connect to the server to access MySQL or MariaDB, the database and the OpenDentImages folder.&nbsp;</li>
					</ul>
					<p><strong>Installation to a Server</strong><br>
					<img src="images/youtubeLogo.png" width="16" height="16" alt="" style="vertical-align: baseline; margin-bottom: -1px;"/> See our  Webinar: <a href="https://youtu.be/gk-ZpBsm1Yw" target="_blank" class="Links">Installing the Trial Version</a>.</p>
					<ol>
					<li>Download the executable by clicking on this link:&nbsp;<a href="../TrialDownload-25-2-57.exe" class="Links">TrialDownload-25-2-57.exe.</a>&nbsp;<br>
					</li>
					<ul>
					<li>A warning may display  stating that Windows protected your PC. Click <em>More Info</em>, then <em>Run Anyway</em>. </li>
					</ul>
					<li>When the download is complete, view the executable in the downloads  folder.  </li>
					<ul>
					<li> Hint: Select <em>Show in Folder</em> to open Downloads directly.</li>
					</ul>
					<li>Right-click  the <em>TrialDownload</em> executable and run as administrator.&nbsp;    </li>
					<ul>
					<li>If the installer does not open, you may need to right-click the installer, click <em>Properties</em>, check <em>Unblock</em>, and press <em>OK</em>. <br>
					</li>
					</ul>
					<li>Ensure all boxes are checked.&nbsp;    </li>
					<ul>
					<li>The opendental Database  path must be a local path (e.g., C:\mysql\data, D:\mysql\data, etc).</li>
					<li>The OpenDentImages folder can be installed to any shareable location. </li>
					</ul>
					</ol>
					<p><img src="images/TrialInstallerMaria.png" width="693" height="629" alt=""/></p>
					<ol start="5">
					<li>In the lower right,  click <em>Install</em>.&nbsp;</li>
					<li>The OpenDental Setup Wizard will launch. Follow the prompts through the wizard to install. </li>
					<li>Next, the MariaDB will install on its own. Wait for the install to complete. </li>
					<li>Once complete, you will be prompted to create a MySQL password.<br>
					<img src="images/TrialInstallerMySQL.png" width="328" height="229" alt=""/><br>
					This step is optional, but highly recommended. When leaving the password blank a warning will appear and a confirmation is required. If you choose to create a MySQL user name and password, do not lose them. They will need to be entered on every workstation from the Choose Database screen. See <a href="../manual/securitymysql.html" class="Links">MySQL Security</a> for a more detailed explanation.</li>
					<li>The installation will complete. Click OK then close out the installer. <br>
					<img src="images/TrialInstallerComplete.png" width="409" height="146" alt=""/>              <br>
					<br>
					</li>
					<li><a href="../manual/atozshare.html" class="Links">Share the Open DentImages Folder</a>.</li>
					<li>On the desktop, right-click on the Open Dental icon and select<em> Run as administrator</em> to open the program. </li>
					<li>On the <a href="../manual/choosedatabase.html" class="Links">Choose Database</a> window, enter the server name (localhost or computer name) and select the database to connect to. <br>
					- opendental (a blank database that allows up to 30 patients).<br>
					-  demo (contains fictional patients and providers).</li>
					<li>Set the OpenDentImages path to a UNC path (i.e., network path).&nbsp;<br>
					a. 
					Click Setup, <a href="../manual/paths.html" class="Links">Data Paths</a>.<br>
					b. 
					Enter the UNC path to the OpenDentImages folder on  the server so other workstations can access it.              </li>
					</ol>
					<p><strong>Note: </strong>When installing a new trial database, if an 'opendental' database  already exists, the new database will be renamed to prevent accidental deletion  of the existing database. The new name will have the current date appended,  followed by a counter for each new copy made on the same day (e.g.,  opendental_20190131_2).</p>
					<p><strong>Installation to a Workstation</strong><br>
					Follow these instructions to install the trial version to workstations connected to the server. <br>
					<img src="images/youtubeLogo.png" width="16" height="16" alt="" style="vertical-align: baseline; margin-bottom: -1px;"/> See our  Webinar: <a href="https://youtu.be/vsDJiQ4mUVw" target="_blank" class="Links">Installing the Trial to a Workstation</a></p>
					<ol>
					<li>Download the executable by clicking on this link: <a href="../TrialDownload-25-2-57.exe" class="Links">TrialDownload-25-2-57.exe.</a>&nbsp;</li>
					<li>When the download is  complete, view the executable in the Downloads folder. <br>
					Hint: Select <em>Show in Folder</em> to open Downloads directly.</li>
					<li>Right-click on the  TrialDownload executable and select <em>Run as administrator</em>. <br>
					Note: A warning may display stating that Windows protected your PC. Click <em>More  Info</em>, then <em>Run Anyway</em>.</li>
					<li>Click <em>Workstation</em>, then click <em>Install</em>.</li>
					<li> When installation is complete, close the installer.</li>
					<li>Right-click on the Open  Dental icon and select<em> Run as administrator.</em></li>
					<li>On the Choose Database  window, enter the name of the server and select the database. If you created a  MySQL user name and password on the server, enter those details as well.</li>
					</ol>
					<p>When you are ready to purchase Open Dental and <a href="../manual/updatefullversion.html" class="Links">Update to  the Full Version</a>, contact <span class="Links"><a href="contact.html" class="Links">Open Dental support</a>.</span></p>
					<h3>Questions &amp; Answers</h3>
					<p>Last updated 04/08/2022 </p>
					<p><strong>Do I need to upgrade my MySQL version to MariaDB?</strong><br>
					No, it is not currently a requirement to upgrade your MySQL version, but you should consider contacting Open Dental for assistance if you are using a MySQL version older than 5.5.            </p>
					<h3>Troubleshooting</h3>
					<p><strong>Problem</strong>: I need to install Maria 10.5. <br>
                    <strong>Solution</strong>: Use this trial installer instead of the one above: <a href="../TrialDownload-24-1-66.exe">TrialDownload-24-1-66</a>.</p>
					<p><strong>Problem</strong>: I need to install MySQL 5.5. <br>
					<strong>Solution</strong>: Use this trial installer instead of the one above: <a href="../TrialDownload-20-5-63.exe" class="Links">TrialDownload-20-5-63</a>.</p>
					<p><strong>Problem</strong>:&nbsp; The installer or the program won't start up at all.<strong><br>
					Solution: </strong> You  likely need to install <a href="../manual/dotnet.html" class="Links">dot Net</a>.</p>
					<p><strong>Problem</strong>: How do I install the trial version if I already have MySQL or MariaDB installed?<br>
					<strong>Solution</strong>: Some third party software will also use MySQL or MariaDB. If installing Open Dental to demo the software, install it to a different computer. If installing Open Dental for live use in your office, 
					contact Support for assistance.</p>
					<p><strong>Problem</strong>: <span data-teams="true">I am using an older MySQL or MariaDB and would like to use MariaDB 10.11.10</span><br>
					<strong>Solution</strong>: Run the <a href="mariadb.html" class="Links">MariaDB</a> upgrade tool to upgrade to MariaDB 10.11.10. </p>
					<p> See  <a href="../manual/troubleshooting.html" class="Links">Troubleshooting</a> if you are still having problems, or contact Open Dental support.<br>
					<br>
					Also see: <a href="trialversionimprovements.html" class="Links">Trial Version Improvements</a></p>
				</div>
				<div class="right-column">
					<div class="image-container">
						<a href="../TrialDownload-25-2-57.exe"><img src="images/trial.png" alt="Download button" width="180" height="180" border="0"></a>
					</div>
					<div class="order-box">
						<div class="order-header">ORDER HERE</div>
						<div class="order-content">
							<p>Call now to order <strong>Open Dental</strong> at <strong>503-363-5432</strong>. For $179 per month (twelve month contract) you get all software releases as they come out plus  full telephone support.</p>
							<p>See <a href="order.html">Ordering</a> for more details.</p>
						</div>
					</div>
				</div>
			</div>
			<!-- InstanceEndEditable -->
		</div>	
	</div>
</body>
<!-- InstanceEnd --></html>
```

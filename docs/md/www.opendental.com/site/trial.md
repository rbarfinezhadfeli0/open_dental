[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# Trial Version

The free trial version of Open Dental can be used to evaluate the software, or be used as the first step when installing the full version.

View [User Testimonials](testimonials.html) for existing customer feedback.

### General Information

* For operating system requirements, see [Computer Requirements](../manual/computerrequirements.html).
* Ensure [MySQL](../manual/mysql.html) or [MariaDB](../manual/mariadb.html) is not already installed on the server.
* If you are installing in [Canada](../manual/canada.html), set the [Region and Language Settings](../manual/regionlanguagesettings.html) on your computer to Canada before installing.
* The trial version will not expire so it can be used as long as needed to evaluate the software.
* The trial download includes a blank opendental database and a demo database with fictional patients.
* The trial does not include copyrighted CDT content (e.g., CDT codes and ADA claim forms).
* The trial uses temporary codes. CDT codes will be available once a registration key is issued.
* The trial version is limited to 30 patients.
* The trial version does not work with API.
* The trial version does not work with eServices.

### Download and Installation

There are two types of installation: to a server or to a workstation.

* Server: Installs the Open Dental program, MySQL or MariaDB, the database, and the OpenDentImages folder.
* Workstations: If you have multiple computers, workstations only need the Open Dental program installed. Each workstation will connect to the server to access MySQL or MariaDB, the database and the OpenDentImages folder.

**Installation to a Server**
![](images/youtubeLogo.png) See our Webinar: [Installing the Trial Version](https://youtu.be/gk-ZpBsm1Yw).

1. Download the executable by clicking on this link: [TrialDownload-25-2-57.exe.](../TrialDownload-25-2-57.exe)

* A warning may display stating that Windows protected your PC. Click *More Info*, then *Run Anyway*.

2. When the download is complete, view the executable in the downloads folder.

* Hint: Select *Show in Folder* to open Downloads directly.

3. Right-click the *TrialDownload* executable and run as administrator.

* If the installer does not open, you may need to right-click the installer, click *Properties*, check *Unblock*, and press *OK*.

4. Ensure all boxes are checked.

* The opendental Database path must be a local path (e.g., C:\mysql\data, D:\mysql\data, etc).
* The OpenDentImages folder can be installed to any shareable location.

![](images/TrialInstallerMaria.png)

5. In the lower right, click *Install*.
6. The OpenDental Setup Wizard will launch. Follow the prompts through the wizard to install.
7. Next, the MariaDB will install on its own. Wait for the install to complete.
8. Once complete, you will be prompted to create a MySQL password.
   ![](images/TrialInstallerMySQL.png)
   This step is optional, but highly recommended. When leaving the password blank a warning will appear and a confirmation is required. If you choose to create a MySQL user name and password, do not lose them. They will need to be entered on every workstation from the Choose Database screen. See [MySQL Security](../manual/securitymysql.html) for a more detailed explanation.
9. The installation will complete. Click OK then close out the installer.
   ![](images/TrialInstallerComplete.png)
10. [Share the Open DentImages Folder](../manual/atozshare.html).
11. On the desktop, right-click on the Open Dental icon and select *Run as administrator* to open the program.
12. On the [Choose Database](../manual/choosedatabase.html) window, enter the server name (localhost or computer name) and select the database to connect to.
    - opendental (a blank database that allows up to 30 patients).
    - demo (contains fictional patients and providers).
13. Set the OpenDentImages path to a UNC path (i.e., network path).
    a.
    Click Setup, [Data Paths](../manual/paths.html).
    b.
    Enter the UNC path to the OpenDentImages folder on the server so other workstations can access it.

**Note:** When installing a new trial database, if an 'opendental' database already exists, the new database will be renamed to prevent accidental deletion of the existing database. The new name will have the current date appended, followed by a counter for each new copy made on the same day (e.g., opendental\_20190131\_2).

**Installation to a Workstation**
Follow these instructions to install the trial version to workstations connected to the server.
![](images/youtubeLogo.png) See our Webinar: [Installing the Trial to a Workstation](https://youtu.be/vsDJiQ4mUVw)

1. Download the executable by clicking on this link: [TrialDownload-25-2-57.exe.](../TrialDownload-25-2-57.exe)
2. When the download is complete, view the executable in the Downloads folder.
   Hint: Select *Show in Folder* to open Downloads directly.
3. Right-click on the TrialDownload executable and select *Run as administrator*.
   Note: A warning may display stating that Windows protected your PC. Click *More Info*, then *Run Anyway*.
4. Click *Workstation*, then click *Install*.
5. When installation is complete, close the installer.
6. Right-click on the Open Dental icon and select *Run as administrator.*
7. On the Choose Database window, enter the name of the server and select the database. If you created a MySQL user name and password on the server, enter those details as well.

When you are ready to purchase Open Dental and [Update to the Full Version](../manual/updatefullversion.html), contact [Open Dental support](contact.html).

### Questions & Answers

Last updated 04/08/2022

**Do I need to upgrade my MySQL version to MariaDB?**
No, it is not currently a requirement to upgrade your MySQL version, but you should consider contacting Open Dental for assistance if you are using a MySQL version older than 5.5.

### Troubleshooting

**Problem**: I need to install Maria 10.5.
**Solution**: Use this trial installer instead of the one above: [TrialDownload-24-1-66](../TrialDownload-24-1-66.exe).

**Problem**: I need to install MySQL 5.5.
**Solution**: Use this trial installer instead of the one above: [TrialDownload-20-5-63](../TrialDownload-20-5-63.exe).

**Problem**:  The installer or the program won't start up at all. **Solution:**  You likely need to install [dot Net](../manual/dotnet.html).

**Problem**: How do I install the trial version if I already have MySQL or MariaDB installed?
**Solution**: Some third party software will also use MySQL or MariaDB. If installing Open Dental to demo the software, install it to a different computer. If installing Open Dental for live use in your office,
contact Support for assistance.

**Problem**: I am using an older MySQL or MariaDB and would like to use MariaDB 10.11.10
**Solution**: Run the [MariaDB](mariadb.html) upgrade tool to upgrade to MariaDB 10.11.10.

See [Troubleshooting](../manual/troubleshooting.html) if you are still having problems, or contact Open Dental support.

Also see: [Trial Version Improvements](trialversionimprovements.html)

[![Download button](images/trial.png)](../TrialDownload-25-2-57.exe)

ORDER HERE

Call now to order **Open Dental** at **503-363-5432**. For $179 per month (twelve month contract) you get all software releases as they come out plus full telephone support.

See [Ordering](order.html) for more details.
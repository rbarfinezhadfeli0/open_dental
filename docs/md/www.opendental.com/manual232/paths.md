Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Paths

Edit Paths identifies where Open Dental should store scanned or imported images and documents, export files, and letter merge templates.

In the [Main Menu](mainmenu.html), click Setup, Data Paths.

![](images/paths.png)

Verify all paths are accurate before pointing other computers to the server.

## A to Z Images Folder

Select where the [A to Z Folder](atozfolder.html) is located. This folder is where Open Dental stores images and other documents.

![](images/pathsAtoz.png)

**Store images and documents on a local or network folder**:

1. Enter the path to the folder: This path will be used by all computers using the database.
   * If multiple computers access this folder, the path should point to a folder on a shared network. [Share A to Z Folder](atozshare.html)
   * If a single computer accesses this folder, the path can be local (**C:\OpenDentImages**).
   * OpenDentImages is the default folder name that contains the A to Z folders, but any folder is valid as long as the A to Z folders are contained within it.
2. Use multiple paths: Not recommended for most users. If this option is selected, multiple paths to the A to Z folders can be entered, separated by semicolon (no spaces). When Open Dental starts, the first valid path will be used. It can be used to run backups.
3. Path Override for this computer: If the path to the A to Z folders points to a shared folder on a network, and a path override is needed for this computer only, enter the override path.

**Store Images directly in database. No AtoZ Folder. (Some features unavailable)**: Only visible if this option is currently in use. See [Store Images in Database](imagesstoreindb.html). If selected, images will be stored in the database and it will become very large. There will be no A to Z folders. Once this option is disabled, it will no longer be available in the Paths list. Contact [Open Dental Support](../contact.html) to re-enable this option.

**Store images in Dropbox (an internet connection is required)**: Store images off-site on the cloud using Dropbox ([www.dropbox.com](http://www.dropbox.com)). See: [Dropbox](dropbox.html).

**Store images on a server via SSH File Transfer Protocol (SFTP)**: Store images on a file transfer protocol (FTP) site using SFTP. An internet connection is required. Enter the following details:

* **AtoZ Path**: The folder that will store the images and documents. The default is **AtoZ/**.
* **Hostname**: IP/ host name of the FTP server.
* **Username/Password**: FTP username and password.

Note: Port 22 is always used.

![](images/pathsSFTP.png)

## Export Path

Select the path to the folder where files exported from Open Dental (e.g., reports) are stored.

![](images/pathsExport.png)

**Export Path**: This can be a local or network path. If the folder does not already exist, it will be created automatically when you export a report. The default folder is OpenDentalExports.

## Letter Merge Path

Select the path to the folder where letter templates for [Letter Merge](lettermerge.html) are stored.

![](images/pathsLetterMerge.png)

**Letter Merge Path**: This can be a local or network path. When entering a network path, make sure the folder is shared so all computers can access it. This folder must be created manually. The default folder name is OpenDentalLetters.

## Troubleshooting

**Problem: When clicking OK the in Edit Paths, users are not able to continue.**

Solution: If a valid path for the A to Z folders is not entered, user will not be allowed to continue. Verify the path for the A to Z folder before continuing.

**Problem: Users are seeing Edit Paths when opening Open Dental when it was working properly before.**

Solution: This is likely a Windows permission error. To resolve, leave Edit Paths open and, using Windows, browse to the shared Network folder listed in this window, (e.g., \\SERVER\OpenDentImages). When prompted, enter the Windows Network username and password. Once the credentials have been entered, return to this window and click **OK** without changing anything.

**Problem: The Edit Paths window comes up repeatedly when you start Open Dental.**

Solution: The path to the OpenDentImages (A to Z) folders is invalid. Enter a correct path that can be accessed by all computers all the time (e.g., a path that starts with **\\SERVER\** or similar).

A path to a mapped network drive (e.g., **Z:\OpenDentImages\** is not recommended. Mapped drives must be set up on each computer and sometimes computers fail to properly remap the drive on startup. For example:

* If server has a dynamic IP address, an issue would arise every time the IP address changes at restart.
* DNS issues could cause problems linking the server name to the server IP address.
* If a permission path is set for the path to the server and Remember my credentials is not checked, issue could occur on restart.
Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Store Images in Database

Storing images directly in the database was an option previously available for storing scanned images and documents. Most users did not use this option.

This option is only available in [Paths](paths.html) if currently in use. It is not available for new users or users who switched from storing images in the database to another option.

Practices may require this option in rare circumstances. To enable this option, have the practice's IT professional contact [Open Dental Support](../contact.html).

This table describes the different places where the [A to Z Folder](atozfolder.html) are used and how the behavior differs when storing images directly in the database.

|  | A to Z folder | Database |
| --- | --- | --- |
| [Imaging Module](images.html) |  |  |
| Images | Files are stored in A to Z folder within a sub folder by patient last name. Thumbnails are stored in a subfolder. | Images are stored in the database in document.RawBase64 and document.Thumbnail. |
| [Statement](statement.html) are stored in patient images. | Can email, print, view archive, etc. | Statements are not being properly archived. Unhelpful error message. |
| **\EOBs folder** |  |  |
| [Claim Payment](claimpayfinalize.html) images | Files are stored in the EOBs folder. References linking claim payments to those files are stored in the eobattach table in the database. | Images are stored in the database in eobattach.RawBase64. |
| **\EmailAttachments folder** |  |  |
| [Email Message](emailmessage.html) attachments | Files are stored in the EmailAttachments folder. References linking emails to those files are stored in the emailattach table in the database. | Stored in local temp folder, which does allow sending email, but does not save the attachment for later. |
| [Edit Claim - Attachments Tab](claimtabattach.html) | Files are stored in the EmailAttachments folder. References linking claims to those files are stored in the claimattach table in the database. | -- |
| **\Forms folder** |  |  |
| Template Forms | Put template forms in the Forms folder. | -- |
| **\Reports folder** |  |  |
| RDL Project | When starting program, any .rdl files present load into a Reports button at the top. | -- |
| **\SetupFiles folder** |  |  |
| Update ([Update](update.html)) | Every time a Setup.exe is downloaded, it is archived here for later. Example: Setup\_12\_3\_21.exe | -- |
| **\SheetImages folder** |  |  |
| [Sheets](sheets.html) | Files stored in SheetImages folder Filenames stored in sheet.FieldName, so shared by multiple sheets. | -- |
| **\Sounds folder** |  |  |
| This folder is obsolete and should be deleted. All [Messaging Buttons](messagingbuttons.html) sounds are now stored in sigelementdef.Sound. | -- | -- |
| **\UpdateFiles folder** |  |  |
| After an Update | Deletes the UpdateFiles folder. Then, recreates it and fills it with a copy of all the local files in the OpenDental folder as well as a Manifest.txt. | Deletes the existing UpdateFiles row from the documentmisc table. Then, inserts a new row containing a zipped copy of all the local files as well as a Manifest.txt. |
| Update version upon startup. If the program version does not match pref.ProgramVersion, then OD knows that it needs to update the local program. | Looks in AtoZ\UpdateFiles\Manifest.txt to decide if those files are the right version. If not, gives user option to download new Setup.exe. | Old behavior was to always download a new Setup.exe from internet. As of 12.4, it can update the local files by pulling them from the db. |
| Update Setup window, Recopy button. | Recopies local files to UpdateFiles folder. | Compresses local files into a zip file, which then gets saved in the UpdateFiles row in the documentmisc table in the db. |
| **\Wiki folder** |  |  |
| Images in the [Wiki](wiki.html). | Images are stored in the wiki folder. | -- |
| **Misc** |  |  |
| Setup.exe | The most recent Setup.exe is available directly in the A to Z folder in case it needs to be run again. | -- |
| Claim Form backgrounds ([Claim Forms](claimforms.html)) | These are stored directly in the A to Z folder, except for ADA2006.gif and ADA2012.gif, which are baked into the exe;for copyright reasons. | Claimform editing is blocked, and using custom claimform backgrounds is not supported. |
| Document Info window (Images module) | Shows file size and path. Open Folder button to jump to the A to Z folder for one patient. | Shows file size as stored in database. |
| [Backup Tool](backuptool.html) | Can include A to Z folder | -- |
| Sheets | Can add an image to a sheet. | The button to add an image or patient image to a sheet def is blocked. |
| Patient Picture, in both [Appointments Module](appointments.html) and [Family Module](family.html) | Shows | -- |
| [Chart Module](chart.html), Images section | Shows thumbnails | -- |
| Chart Module, daily hospital report | Shows patient picture | -- |
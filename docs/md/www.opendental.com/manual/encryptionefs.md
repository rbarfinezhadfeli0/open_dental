Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EFS Encryption

See [Encryption of Data at Rest and in Transit](encryption.html)

Open Dental does not provide technical support for Encryption. For assistance, consult your IT person. The information below is provided as a resource for your IT person to help make encryption decisions. It is not for regular users.

Encrypting File System (EFS) is a low cost, useful technology for encrypting the MySQL folder, or any files that are going to be accessed by a single user (or a limited number of users where it may be practical to add permissions file by file). EFS does not work well for encrypting the A to Z Folders because it does not work well for files shared by multiple users. An easy way to avoid the trouble of setting up EFS for small offices is to use [BitLocker Encryption](encryptionbitlocker.html).

## Change Log On User for MySQL Service

1. Go to Services.
2. Double-click the MySQL Service.
3. Select the Log On tab.
4. Change the option to *This Account*.
5. Enter the user credentials for the user that you are going to encrypt the MySQL folder for.

## Implementing EFS for your MySQL Databases

1. Back up your database to external encrypted media (optional but highly recommended).
2. Login as the user that runs the MySQL service.
3. Navigate to the directory containing your MySQL data (default is **C:\**)
4. Right-click the folder named MySQL (default is **C:\MySQL**).
5. Select Properties, then General tab, and click Advanced.
6. Select the checkbox that reads **Encrypt contents to secure data**.
7. Document that you did this in case you ever need to show that you did.

## How does EFS Work

EFS has added features with each new Microsoft Operating System, but this base document is where to look for the latest complete document from Microsoft:

<http://technet.microsoft.com/en-us/library/bb457065.aspx>
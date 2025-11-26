Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API EobAttaches

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [EobAttach Database Schema.](SchemaRedirect%EF%B9%96eobattach.html)

## EobAttaches GET

Version Added: 23.3.8

Gets a list of eobattaches by **ClaimPaymentNum**.

**ClaimPaymentNum:** Required. FK to claimpayment.ClaimPaymentNum.

**Example Request:**
 GET /eobattaches?ClaimPaymentNum=23

**Example Response:**
 [
 {
 "EobAttachNum": 10,
 "ClaimPaymentNum": 23,
 "DateTCreated": "2021-02-16 09:43:17",
 "FileName": "20210216\_153711\_10.png",
 "RawBase64": ""
 },
 {
 "EobAttachNum": 15,
 "ClaimPaymentNum": 23,
 "DateTCreated": "2021-02-18 11:23:10",
 "FileName": "20210218\_153711\_15.png",
 "RawBase64": ""
 },
 {
 "EobAttachNum": 21,
 "ClaimPaymentNum": 23,
 "DateTCreated": "2021-02-20 08:30:11",
 "FileName": "20210220\_153711\_21.png",
 "RawBase64": ""
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## EobAttaches POST DownloadSftp

Version Added: 23.3.12

This will place an image file on an SFTP site that you specify. After running this method, download the resulting file from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the specified name will be overwritten. If the SftpAddress does not contain a file name, the eobattach.FileName will be used. All file storage options (LocalAtoZ, InDatabase, and Cloud) are supported.

**EobAttachNum**: Required.
**SftpAddress**: Required. Specify the full path of the file (using /). The user with the SFTP credentials must have write permission in this directory.
**SftpUsername**: Required.
**SftpPassword**: Required.

**Example Request:**
 POST /eobattaches/DownloadSftp

 {
 "EobAttachNum": 10,
 "SftpAddress": "MySftpSite/myUsername/EOBs/20210220\_153711\_10.png",
 "SftpUsername": "myUsername",
 "SftpPassword": "myPassword"
 }

**Example Response:**

 201 Created, "location": The full filepath of the saved file.
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## EobAttaches POST UploadSftp

Version Added: 24.3.7

Prior to running this method, upload a file to your own SFTP site. This method will then pull the uploaded file into the customer's AtoZ folder, database, or cloud storage. The filePath of the response object will either be the full filepath of the saved file (AtoZ or cloud) or blank (database).

**ClaimPaymentNum**: Required. FK to claimpayment.ClaimPaymentNum.
**SftpAddress**: Required. Specify the full path of the file (using /). The user with the SFTP credentials must have read permission in this directory.
**SftpUsername**: Required.
**SftpPassword**: Required.

**Example Request:**
 POST /eobattaches/UploadSftp

 {
 "ClaimPaymentNum": 25,
 "SftpAddress": "MySftpSite/myUsername/Documents/SmithJ\_EOB\_2024.png",
 "SftpUsername": "myUsername",
 "SftpPassword": "myPassword"
 }

**Example Response:**
 {
 "EobAttachNum": 31,
 "ClaimPaymentNum": 25,
 "DateTCreated": "2024-10-14 09:17:43",
 "FileName": "20241014\_091743\_15.jpg",
 "RawBase64": ""
 }

 201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## EobAttaches DELETE

Version Added: 25.2.25

Deletes an eobattach. Deletes both the database row and any associated file from the A to Z folder.

**EobAttachNum:** Required in the URL.

**Example Request:**
 DELETE /eobattaches/72

**Example Responses:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)
# File: ./www.opendental.com/site/apidocuments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Documents</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apidocuments','apispecification','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>API Documents</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>This includes images, PDFs, etc. There are four ways a document can be inserted into Open Dental:</p>
<p>1. Not using any API - Add a file to the patient folder. When the user later load the Imaging Module within Open Dental, any new files found are always recognized and entries are made in the database for them. By default, the new file will be dropped into the first category of images. If you want the new file to go to a specific category, then you can name it with a prefix of "_##_". Example: "_135_". The prefix number should be the DefNum of the category where the document belongs. To determine the DefNum, you will need to look in the database where definition.Category=18 and pick from that list somehow. Files with prefixes are processed to go into the specified category, and the prefix is removed.</p>
<p>2. Documents POST SetByUrl. </p>
<p>3. Documents POST Upload. </p>
<p>4. Documents POST UploadSftp.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96document.html" target="_blank">Document Database Schema.</a></p>
<h2>Documents GET (single)</h2>
<p>Version Added: 24.2.32</p>
<p>Gets a single document. The result does not include the actual document file. Those can be obtained using Documents POST DownloadSftp.</p>
<p><b>DocNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /documents/7<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DocNum": 7,<br> "Description": "1-26-2009",<br> "DateCreated": "2009-01-26 00:00:00",<br> "DocCategory": 190,<br> "docCategory": "Patient Pictures",<br> "PatNum": 15,<br> "FileName": "SmithJohn7.jpg",<br> "ImgType": "Photo",<br> "ToothNumbers": "",<br> "DateTStamp": "2010-03-01 12:44:26",<br> "ProvNum": 0,<br> "PrintHeading": "false"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)</p>
<h2>Documents GET (multiple)</h2>
<p>Version Added: 21.2</p>
<p>PatNum is required. Gets all documents and mounts for the patient, ordered by DateCreated. If the file storage method is InDatabase, the returned filePath field will be blank. Mounts do not have a filePath, ToothNumbers, PrintHeading, or a DateTStamp. The result does not include the actual document files. Those can be obtained using Documents POST DownloadSftp.</p>
<p><b>Example Request:</b><br> GET /documents?PatNum=101<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "DocNum": 34,<br> "MountNum": 0, <br> "filePath": "\\server\\OpenDentImages\\S\\SmithJohn15\\exampleimage.jpg",<br> "Description": "Scanned image",<br> "PatNum": "101",<br> "Note": "",<br> "DateCreated": "2021-04-08 08:12:21",<br> "docCategory": "Lab Cases",<br> "DocCategory": 14,<br> "ToothNumbers": "1,2,3,4,5",<br> "ProvNum": "0",<br> "PrintHeading": "false",<br> "DateTStamp": "2021-04-18 11:45:01",<br> "serverDateTime": "2021-05-20 13:30:54"<br> },<br>  {<br> "DocNum": 0, <br> "MountNum": 15,<br> "filePath": "",<br> "Description": " 5/11/2021: 4BW",<br> "PatNum": "101",<br> "Note": "Bitewings",<br> "DateCreated": "2021-05-11 13:26:39",<br> "docCategory": "Lab Cases",<br> "DocCategory": 14,<br> "ToothNumbers": "",<br> "ProvNum": "0",<br> "PrintHeading": "",<br> "DateTStamp": "",<br> "serverDateTime": "2021-05-20 13:30:54"<br> }<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest "PatNum is required"<br> 404 NotFound "Patient not found"</p>
<h2>Documents POST DownloadSftp</h2>
<p>Version Added: 21.2</p>
<p>This will place a file on an SFTP site that you specify. After running this method, download the resulting file from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the specified name will be overwritten. If the SftpAddress does not contain a file name, the document.FileName will be used. All file storage options (LocalAtoZ, InDatabase, and Cloud) are supported.</p>
<p><b>DocNum:</b> This or <b>MountNum</b> is required.<br><b>MountNum:</b> This or <b>DocNum</b> is required.<br><b>SftpAddress:</b> Required. Specify the full path of the file (using /). The user with the SFTP credentials must have write permission in this directory.<br><b>SftpUsername:</b> Required.<br><b>SftpPassword:</b> Required.<br></p>
<p><b>Example Requests:</b><br> POST /documents/DownloadSftp<br></p>
<p><span class="codeblock"> {<br>  "DocNum": 389,<br>  "SftpAddress": "MySftpSite/myUsername/Documents/SmithJohn389.png",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><span class="codeblock"> {<br>  "MountNum": 20,<br>  "SftpAddress": "MySftpSite/myUsername/Documents/FMX.jpg",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Response:</b><br> 201 Created, "location": The full filepath of the saved file.<br> 400 BadRequest (Invalid fields, invalid file extension, and Sftp connection errors)<br> 404 NotFound "Document not found" and "Mount not found".<br></p>
<h2>Documents POST UploadSftp</h2>
<p>Version Added: 21.2</p>
<p>Prior to running this method, upload a file to your own SFTP site. This method will then pull the uploaded file into the customer's AtoZ folder, database, or cloud storage. The filePath of the response object will either be the full filepath of the saved file (AtoZ or cloud) or blank (database). </p>
<p><b>PatNum:</b> Required.<br><b>SftpAddress:</b> Required. Specify the full path of the file. The user with the SFTP credentials must have read permission in this directory. <br><b>SftpUsername:</b> Required.<br><b>SftpPassword:</b> Required.<br><br><b>Description: </b> (Added in version 24.2.32) Optional. Default empty string.<br><b>DateCreated:</b> (Added in version 21.4) Optional. Defaults to today's date.<br><b>DocCategory:</b> Optional. Definition.DefNum where definition.Category=18. Defaults to the first definition in that category.<br><b>ImgType:</b> Optional. Either Document, Radiograph, Photo, File or Attachment. Default is Document.<br><b>ToothNumbers:</b> (Added in version 23.1.35) Optional. A string of numbers separated by commas and/or hyphen separated ranges.<br><b>ProvNum: </b> (Added in version 24.2.32) Optional. Default 0.<br><b>PrintHeading: </b> (Added in version 24.2.32) Optional. Default "false".<br></p>
<p><b>Example Request:</b><br> POST /documents/UploadSftp<br></p>
<p><span class="codeblock"> {<br> "PatNum": 15,<br> "DateCreated": "2021-05-26 08:16:46",<br> "DocCategory": 14,<br> "ImgType": "Photo",<br> "ToothNumbers": "1-5,8",<br> "SftpAddress": "MySftpSite/myUsername/Documents/SmithJRadiograph.png",<br> "SftpUsername": "myUsername",<br> "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "DocNum": 411,<br>  "filePath": "\\server\OpenDentImages\S\SmithJohn15\SmithJRadiograph.png",<br>  "Description": "SmithJRadiograph.png",<br> "ToothNumbers": "1,2,3,4,5,8",<br>  "Note": "",<br>  "DateCreated": "2021-05-26 08:16:46",<br>  "DateTStamp": "2021-05-26 08:16:46",<br>  "DocCategory": 14,<br>  "docCategory": "Lab Cases",<br>  "serverDateTime": "2021-05-26 08:16:46"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (missing fields and Sftp connection errors)<br> 404 NotFound "Patient not found"<br></p>
<h2>Documents POST Upload</h2>
<p>Version Added: 21.1</p>
<p>Upload the actual file as rawBase64. Specify the extension of the file. Examples could include .pdf, .jpg, .dcm, .doc, etc. rawBase64 goes into the database in document.Note as "_rawBase64_:" followed by the extension and rawBase64. Example: "_rawBase64_:.jpg_errGEreRi3fWWtB+gWWEgg..." The customer never sees this text, but when they later click on the document, the file is created and the note removed. </p>
<p><b>PatNum:</b> Required.<br><b>rawBase64:</b> Required.<br><b>extension:</b> Required.<br><br><b>Description:</b> Optional.<br><b>DateCreated:</b> (Added in version 22.1) Optional. Default is today's date. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DocCategory:</b> Optional. FK to definition.ItemName, where definition.Category=18. Default is first in DocCategory.<br><b>ImgType:</b> Optional. Either Document, Radiograph, Photo, File or Attachment. Default is Document.<br><b>ToothNumbers:</b> (Added in version 23.1.35) Optional. A string of numbers separated by commas and/or hyphen separated ranges.<br><b>ProvNum: </b> (Added in version 24.2.32) Optional. Default 0.<br><b>PrintHeading: </b> (Added in version 24.2.32) Optional. Default "false".<br></p>
<p><b>Example Request:</b><br> POST /documents/Upload<br></p>
<p><span class="codeblock"> {<br> "PatNum": 101, <br> "rawBase64": "errGEreRi3fWWtB+gWWEgg...",<br> "extension": ".jpg",<br> "DocCategory": 47,<br> "ImgType": "Photo",<br> "Description": "Extraoral",<br> "DateCreated": "2022-03-15 14:30:00",<br> "ToothNumbers": "1-32"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DocNum": 93,<br> "Description": "Extraoral",<br> "DateCreated": "2022-03-15 14:30:00",<br> "DocCategory": 47,<br> "docCategory": "Patient Pictures",<br> "PatNum": 101,<br> "FileName": "x",<br> "ImgType": "Photo",<br> "ToothNumbers": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32",<br> "DateTStamp": "2024-09-24 11:18:57",<br> "ProvNum": 0,<br> "PrintHeading": "false"<br> }<br></span><br> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Documents POST Thumbnails</h2>
<p>Version Added: 21.2</p>
<p>Prior to running this method, first call a GET /documents for the patient to see their list of documents. Only standard image files from this list can be made into thumbnails. Mounts and pdfs will be skipped. This method gets the thumbnails for all images for the patient, creating any that do not already exist as thumbnails. Created thumbnails will be 100 x 100 and will use the same filename as the original image. </p>
<p>This will place files on an SFTP site that you specify. After running this method, download the resulting files from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the specified name will be overwritten. All file storage options (LocalAtoZ, InDatabase, and Cloud) are supported. </p>
<p><b>PatNum:</b> Required.<br><b>SftpAddress:</b> Required. Specify the full path of the file. The user with the SFTP credentials must have read permission in this directory.<br><b>SftpUsername:</b> Required.<br><b>SftpPassword:</b> Required.<br></p>
<p><b>Example Request:</b><br> POST /documents/Thumbnails<br></p>
<p><span class="codeblock"> {<br>  "PatNum": 15,<br>  "SftpAddress": "MySftpSite/myUsername/Thumbnails/",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Responses:</b><br><span class="codeblock"> [<br>  {<br>  "DocNum": 440,<br>  "FileName": "SmithJohn440.gif"<br>  },<br>  {<br>  "DocNum": 441,<br>  "FileName": "SmithJohn441.gif"<br>  }<br> ]<br></span></p>
<p>200 OK "No documents could be made into thumbnails."<br> 201 Created<br> 400 BadRequest (missing fields and Sftp connection errors)<br> 404 NotFound "Patient not found" and "No documents exist for this patient"<br></p>
<h2>Documents POST DownloadMount</h2>
<p>Version Added: 21.2</p>
<p><span style="color:red">You probably don't want to use this.</span> Gets all the individual images for one mount, but there's no information about which position in the mount, flipping, rotation, etc. It is much more common to use Documents POST DownloadSftp to get a composite image for a mount instead of the individual images.</p>
<p>Prior to running this method, first call a GET /documents for the patient to see their list of documents and mounts. Use the MountNum to run this method. All images in the mount will be downloaded to the specified folder. Created files will use the same filename as the original image. </p>
<p>This will place files on an SFTP site that you specify. After running this method, download the resulting files from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the same name will be overwritten. All file storage options (LocalAtoZ, InDatabase, and Cloud) are supported. </p>
<p><b>MountNum:</b> Required.<br><b>SftpAddress:</b> Required. Specify the full path of the file. The user with the SFTP credentials must have read permission in this directory.<br><b>SftpUsername:</b> Required.<br><b>SftpPassword:</b> Required.<br></p>
<p><b>Example Request:</b><br> POST /documents/DownloadMount<br></p>
<p><span class="codeblock"> {<br>  "MountNum": 15,<br>  "SftpAddress": "MySftpSite/myUsername/Mounts/",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Responses:</b><br><span class="codeblock"> [<br>  {<br>  "DocNum": 440,<br>  "FileName": "SmithJohn440.gif"<br>  },<br>  {<br>  "DocNum": 441,<br>  "FileName": "SmithJohn441.gif"<br>  }<br> ]<br></span></p>
<p>200 OK "No mount images could be downloaded."<br> 201 Created<br> 400 BadRequest (missing fields and Sftp connection errors)<br> 404 NotFound "Mount not found."<br></p>
<h2>Documents POST SetByUrl</h2>
<p>Version Added: 21.1</p>
<p>URL goes into the database in document.Note as "_download_:" followed by the URL. The customer never sees this text, but when they later click on the document, the URL is used to perform a download and the prefix is removed.</p>
<p><b>PatNum:</b> Required.<br><b>url:</b> Required.<br><br><b>Description:</b> Optional.<br><b>DateCreated: </b>(Added in version 24.2.32) Optional. Default is today's date. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DocCategory:</b> Optional. FK to definition.ItemName, where definition.Category=18. Default is first in DocCategory.<br><b>ImgType:</b> Optional. Either Document, Radiograph, Photo, File or Attachment. Default is Document.<br><b>ToothNumbers:</b> (Added in version 23.1.35) Optional. A string of numbers separated by commas and/or hyphen separated ranges.<br><b>ProvNum: </b>(Added in version 24.2.32) Optional. Default 0.<br><b>PrintHeading: </b> (Added in version 24.2.32) Optional. Default "false".<br></p>
<p><b>Example Request:</b><br> POST /documents/SetByUrl<br></p>
<p><span class="codeblock"> {<br> "PatNum": 101, <br> "url": "https://www.somesite.com/myimage.jpg",<br> "DocCategory": 47,<br> "Description": "Extraoral",<br> "ImgType": "Photo",<br> "ToothNumbers": "1,2"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DocNum": 94,<br> "Description": "Extraoral",<br> "DateCreated": "2024-09-24 11:45:52",<br> "DocCategory": 47,<br> "docCategory": "Patient Pictures",<br> "PatNum": 101,<br> "FileName": "xx",<br> "ImgType": "Photo",<br> "ToothNumbers": "1,2",<br> "DateTStamp": "2024-09-24 11:45:52",<br> "ProvNum": 0,<br> "PrintHeading": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Documents PUT (update)</h2>
<p>Version Added: 24.2.32</p>
<p>Updates <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imageinfo.html">Image Info</a> of an existing document.</p>
<p><b>DocNum:</b> Required in URL. <br><br><b>Description:</b> Description that will show on the image category tree.<br><b>DateCreated:</b> String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DocCategory:</b> definition.DefNum where definition.Category=18.<br><b>ImgType:</b> Either "Document", "Radiograph", "Photo", "File", or "Attachment".<br><b>ToothNumbers:</b> A string of numbers separated by commas and/or hyphen separated ranges.<br><b>ProvNum:</b> ProvNum of a non-hidden provider.<br><b>PrintHeading:</b> Either "true" or "false". If true, additional information will be displayed when this document is printed.<br></p>
<p><b>Example Request:</b><br> PUT /documents/27<br></p>
<p><span class="codeblock"> {<br> "Description": "Pano",<br> "DateCreated": "2024-01-25 07:45:35",<br> "DocCategory": 190,<br> "ImgType": "Radiograph",<br> "ToothNumbers": "12-15,20,21",<br> "ProvNum": 2,<br> "PrintHeading": "true"<br> } </span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DocNum": 27,<br> "Description": "Pano",<br> "DateCreated": "2024-01-25 07:45:35",<br> "DocCategory": 190,<br> "docCategory": "Xray",<br> "PatNum": 11,<br> "FileName": "AllowedAllenRadio.jpg",<br> "ImgType": "Radiograph",<br> "ToothNumbers": "12,13,14,15,20,21",<br> "DateTStamp": "2024-08-20 15:58:13",<br> "ProvNum": 2,<br> "PrintHeading": "true"<br> } </span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Documents DELETE</h2>
<p>Version Added: 24.2.32</p>
<p>Deletes a document. Deletes both the database row and any associated file from the A to Z folder.</p>
<p><b>DocNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /documents/27<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```

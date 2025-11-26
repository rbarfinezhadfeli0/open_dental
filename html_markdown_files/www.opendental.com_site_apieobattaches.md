# File: ./www.opendental.com/site/apieobattaches.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API EobAttaches</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apieobattaches','apispecification','documentation')">
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
		<div class="TopBar2"><p>API EobAttaches</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96eobattach.html" target="_blank">EobAttach Database Schema.</a></p>
<h2>EobAttaches GET</h2>
<p>Version Added: 23.3.8</p>
<p>Gets a list of eobattaches by <b>ClaimPaymentNum</b>.</p>
<p><b>ClaimPaymentNum:</b> Required. FK to claimpayment.ClaimPaymentNum.</p>
<p><b>Example Request:</b><br> GET /eobattaches?ClaimPaymentNum=23<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "EobAttachNum": 10,<br>  "ClaimPaymentNum": 23,<br>  "DateTCreated": "2021-02-16 09:43:17",<br>  "FileName": "20210216_153711_10.png",<br>  "RawBase64": ""<br> },<br>  {<br> "EobAttachNum": 15,<br>  "ClaimPaymentNum": 23,<br>  "DateTCreated": "2021-02-18 11:23:10",<br>  "FileName": "20210218_153711_15.png",<br>  "RawBase64": ""<br> },<br>  {<br> "EobAttachNum": 21,<br>  "ClaimPaymentNum": 23,<br>  "DateTCreated": "2021-02-20 08:30:11",<br>  "FileName": "20210220_153711_21.png",<br>  "RawBase64": ""<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>EobAttaches POST DownloadSftp</h2>
<p>Version Added: 23.3.12</p>
<p>This will place an image file on an SFTP site that you specify. After running this method, download the resulting file from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the specified name will be overwritten. If the SftpAddress does not contain a file name, the eobattach.FileName will be used. All file storage options (LocalAtoZ, InDatabase, and Cloud) are supported.</p>
<p><b>EobAttachNum</b>: Required.<br><b>SftpAddress</b>: Required. Specify the full path of the file (using /). The user with the SFTP credentials must have write permission in this directory.<br><b>SftpUsername</b>: Required.<br><b>SftpPassword</b>: Required.</p>
<p><b>Example Request:</b><br> POST /eobattaches/DownloadSftp<br><br><span class="codeblock"> {<br> "EobAttachNum": 10,<br>  "SftpAddress": "MySftpSite/myUsername/EOBs/20210220_153711_10.png",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Response:</b><br><br> 201 Created, "location": The full filepath of the saved file.<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>EobAttaches POST UploadSftp</h2>
<p>Version Added: 24.3.7</p>
<p>Prior to running this method, upload a file to your own SFTP site. This method will then pull the uploaded file into the customer's AtoZ folder, database, or cloud storage. The filePath of the response object will either be the full filepath of the saved file (AtoZ or cloud) or blank (database).</p>
<p><b>ClaimPaymentNum</b>: Required. FK to claimpayment.ClaimPaymentNum.<br><b>SftpAddress</b>: Required. Specify the full path of the file (using /). The user with the SFTP credentials must have read permission in this directory.<br><b>SftpUsername</b>: Required.<br><b>SftpPassword</b>: Required.</p>
<p><b>Example Request:</b><br> POST /eobattaches/UploadSftp<br><br><span class="codeblock"> {<br> "ClaimPaymentNum": 25,<br>  "SftpAddress": "MySftpSite/myUsername/Documents/SmithJ_EOB_2024.png",<br>  "SftpUsername": "myUsername",<br>  "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "EobAttachNum": 31,<br> "ClaimPaymentNum": 25,<br> "DateTCreated": "2024-10-14 09:17:43",<br> "FileName": "20241014_091743_15.jpg",<br> "RawBase64": ""<br> }<br></span><br> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>EobAttaches DELETE</h2>
<p>Version Added: 25.2.25</p>
<p>Deletes an eobattach. Deletes both the database row and any associated file from the A to Z folder.</p>
<p><b>EobAttachNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /eobattaches/72<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```

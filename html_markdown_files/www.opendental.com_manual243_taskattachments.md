# File: ./www.opendental.com/manual243/taskattachments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Task Attachments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('taskattachments','taskswindow','tasks','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/taskattachments.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/taskattachments.html" >v24.2</option><option value="https://www.opendental.com/manual241/taskattachments.html" >v24.1</option><option value="https://www.opendental.com/manual233/taskattachments.html" >v23.3</option><option value="https://www.opendental.com/manual232/taskattachments.html" >v23.2</option><option value="https://www.opendental.com/manual231/taskattachments.html" >v23.1</option><option value="https://www.opendental.com/manual224/taskattachments.html" >v22.4</option><option value="https://www.opendental.com/manual223/taskattachments.html" >v22.3</option><option value="https://www.opendental.com/manual222/taskattachments.html" >v22.2</option><option value="https://www.opendental.com/manual221/taskattachments.html" >v22.1</option><option value="https://www.opendental.com/manual214/taskattachments.html" >v21.4</option><option value="https://www.opendental.com/manual213/taskattachments.html" >v21.3</option><option value="https://www.opendental.com/manual212/taskattachments.html" >v21.2</option><option value="https://www.opendental.com/manual211/taskattachments.html" >v21.1</option><option value="https://www.opendental.com/manual205/taskattachments.html" >v20.5</option><option value="https://www.opendental.com/manual204/taskattachments.html" >v20.4</option><option value="https://www.opendental.com/manual203/taskattachments.html" >v20.3</option><option value="https://www.opendental.com/manual202/taskattachments.html" >v20.2</option><option value="https://www.opendental.com/manual201/taskattachments.html" >v20.1</option><option value="https://www.opendental.com/manual194/taskattachments.html" >v19.4</option><option value="https://www.opendental.com/manual193/taskattachments.html" >v19.3</option><option value="https://www.opendental.com/manual192/taskattachments.html" >v19.2</option><option value="https://www.opendental.com/manual191/taskattachments.html" >v19.1</option><option value="https://www.opendental.com/manual184/taskattachments.html" >v18.4</option><option value="https://www.opendental.com/manual183/taskattachments.html" >v18.3</option><option value="https://www.opendental.com/manual182/taskattachments.html" >v18.2</option><option value="https://www.opendental.com/manual181/taskattachments.html" >v18.1</option><option value="https://www.opendental.com/manual174/taskattachments.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Task Attachments</p></div>
<div class="GeneralPageContent">
<p>Tasks can include attachments for other users to easily access.</p>
<p>In the <a href="taskswindow.html">Task Window</a>, click <b>Attachments</b>.</p>
<img src="images/taskAttachments.png" width="676" height="247"/><p>Attachments added to a task display here. Attachments can have a document or image attached or be additional plain text. Attachment documents are saved to the Imaging Module in the Image Category designated as <i>Task Attachments</i> and display in the Attachments grid with an X in the Doc column.</p>
<p class="MarginBottomZero">To add attachments:  </p>
<ul class="MarginBottomGap">
<li>An Image Category must be marked as <i>Task Attachments</i> in <a href="definitionsimagecat.html">Definitions: Image Categories</a>.</li>
<li>The <i>Task Attachments</i> Image Category must be set in <a href="tasksetup.html">Tasks Preferences</a>.</li>
<li>The task must have an object type of <i>Patient</i>.</li>
<li>A patient must be associated to the task.</li>
</ul>
<h2>Add or Edit an Attachment</h2>
<p>Click <b>Add</b> to add a new attachment, or double-click an existing attachment to edit.</p>
<img src="images/taskAttachmentsEdit.png"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Required. Enter a description of the attachment or text.</li>
<li><b>DocNum</b>: An auto-generated document number.</li>
<li><b>Import</b>: Click to open the File Explorer to import an image or document. Once imported, images and documents can be found in the Imaging Module for the associated patient.</li>
<li><b>Attach</b>: Click to select an image from the Imaging Module.</li>
<li><b>View Doc</b>: Click to view the attached document. Documents open in the program associated with the file type. (i.e. A Word document will open in Word).</li>
<li><b>TaskNum</b>: The auto-generated number associated with the task. Useful when using <a href="tasksearch.html">Task Search</a>.</li>
<li><b>Text</b>: Enter text instead of an attachment, or enter details to go along with the imported document. Text does not display in the Imaging Module.</li>
<li><b>Delete</b>: Click to delete the attachment. Deleting an attachment from here does not delete the attachment from the Imaging Module.</li>
</ul>
</div>
</div>
</body>
</html>```

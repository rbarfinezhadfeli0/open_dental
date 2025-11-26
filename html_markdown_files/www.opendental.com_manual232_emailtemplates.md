# File: ./www.opendental.com/manual232/emailtemplates.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Templates</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailtemplates','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/emailtemplates.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/emailtemplates.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailtemplates.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailtemplates.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailtemplates.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/emailtemplates.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailtemplates.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailtemplates.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailtemplates.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailtemplates.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailtemplates.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailtemplates.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailtemplates.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailtemplates.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailtemplates.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailtemplates.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailtemplates.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailtemplates.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailtemplates.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailtemplates.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailtemplates.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailtemplates.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailtemplates.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailtemplates.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailtemplates.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailtemplates.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailtemplates.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailtemplates.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Templates</p></div>
<div class="GeneralPageContent">
<p>Create E-mail Templates for frequently used messages to easily insert text into email bodies and subjects.</p>
<p>In <a href="emailmessage.html">Email Message Edit</a>, on the left, is the E-mail Template area. </p>
<img src="images/emailTemplate.png" width="178" height="260"/><p>Templates can be used for frequently sent email messages that have similar content. </p>
<p class="MarginBottomZero">Templates are listed alphabetically.  </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to add a new template. </li>
<li><b>Delete</b>: Highlight a template, then click to delete it. </li>
<li><b>Insert</b>: Highlight a template, then click to insert it into the email body. The template's subject and message replace any existing text.</li>
<li><b>Edit</b>: Highlight a template, then click to edit it.</li>
</ul>
<h2>Edit Email Template</h2>
<p>Click <b>Add</b> to create a new template or highlight an existing template and click <b>Edit</b> to make changes. <br/><img src="images/emailTemplateEdit.png" width="915" height="512" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter the template name. It can differ from the email subject.</li>
<li><b>Subject</b>: Enter the subject of the email. </li>
<li><b>Body</b>: Enter the body message. </li>
<li><b>Attach</b>: Click to attach images or files to the template. Select the file, then click Open. Attachments are listed in the box. <ul>
<li>Double-click an attachment to preview it.</li>
<li>Right-click an attachment to open, rename, or remove it.</li>
<li>Microsoft account users cannot send attachments that include file names with invalid characters. Invalid characters include spaces and the following: ; , ( ) [ ] { } % $ + ! * = &amp; ? @ # ~ ' " " &lt; &gt; ` ^ </li>
</ul>
</li>
<li><b>Edit Text</b>: Used to edit text in body after HTML template has been applied to email.</li>
<li><b>Edit HTML</b>: Add HTML formatting to email template. See <a href="emailhtml.html">HTML Email</a> for details on use, including the option to edit Raw HTML to further customize templates.</li>
<li><b>Subject Fields / Body Fields</b>: Insert replacement fields into the Subject or Body. Message replacement fields pull information from the database to insert into the message (e.g., insert <span class="codeblock">[ApptDate]</span> to automatically insert appointment date).</li>
</ul>
<p>You may also manually type the replacement (e.g., [LName]), but make sure it exactly matches the field name. They are case-sensitive. </p>
<p>Position the cursor to where you want to insert a field, then double-click an item from the list. Fields in red text cannot be inserted.</p>
<p><img src="images/emailMessageReplace.png" width="789" height="272"/></p>
<p>Click <b>OK</b> to save the template.</p>
</div>
</div>
</body>
</html>```

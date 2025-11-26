# File: ./www.opendental.com/manual232/emailhtml.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - HTML Email</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailhtml','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/emailhtml.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/emailhtml.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailhtml.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailhtml.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailhtml.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/emailhtml.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailhtml.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailhtml.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailhtml.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailhtml.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailhtml.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailhtml.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailhtml.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailhtml.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailhtml.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailhtml.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailhtml.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailhtml.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailhtml.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailhtml.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailhtml.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailhtml.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailhtml.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailhtml.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailhtml.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailhtml.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailhtml.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailhtml.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>HTML Email</p></div>
<div class="GeneralPageContent">
<p>Emails sent from Open Dental can have HTML coding to include images, fonts, and colors. </p>
<p>In the <a href="emailmessage.html">Email Message Edit</a> window, click <b>Edit HTML</b>.</p>
<img src="images/htmlEmail.png" width="915" height="442"/><p> Additionally, click <b>Edit HTML</b> in <a href="emailtemplates.html">Email Templates</a> window to create HTML formatted templates.</p>
<p>The following options are available when editing HTML emails. </p>
<ul>
<li><b>Setup:</b> View the master HTML code template. This sets the default for various HTML tags listed below.<br/><div class="Note">Note: It is not recommended to manually edit the default template. Use Raw HTML edit option for individual messages, or email templates to customize HTML styling instead.</div>
</li>
<li><b>Ext Link:</b> Add a link to an external website (enter the full URL path: <b>http://www.mysite.com</b>).</li>
<li><b>Heading 1, 2, 3:</b> Format text as Page Title (h1), Subtitle (h2) or smaller category (h3). Properties of all tags can be customized in the master template.</li>
<li><b>Table: </b>Add a table. Adding a table in emails follows the same structure as tables created in a wiki page. See the <i>Tables</i> section on <a href="wikiaddedit.html">Wiki Edit</a> for more information.</li>
<li><b>Image: </b> Images can be added to emails by clicking <i>Image</i>, selecting from available images, or importing into the image list. <ul>
<li>To import an image, click <b>Import</b>, select the file and double-click on the image name.</li>
<li>PDFs cannot be imported as images.</li>
<li>Microsoft account users cannot send emails using images that include file names with invalid characters. Invalid characters include spaces and the following: ; , ( ) [ ] { } % $ + ! * = &amp; ? @ # ~ ' " " &lt; &gt; ` ^ </li>
</ul>
</li>
<li><b>Autograph:</b> Insert a saved email autograph, or create a new autograph for future use.</li>
<li><b>Cut:</b> Cuts text to the clipboard.</li>
<li><b>Copy:</b> Copies text to the clipboard.</li>
<li><b>Paste:</b> Pastes text from the clipboard.</li>
<li><b>Undo:</b> Undo the previous action. Only able to undo one action.</li>
<li><b>Bold: </b>Bold specific words or multiple lines at once.</li>
<li><b>Italic:</b> Italicize specific words or multiple lines at once.</li>
<li><b>Color:</b> Make the selected text red. Change the color by replacing the color name in the Markup, for example: color:blue. Not usable on links.</li>
<li><b>Font:</b> Change the font of the selected text. The default font family is courier. To change, edit the font name in the Markup (e.g., font:courier.) Other examples: times, serif, arial, etc.</li>
</ul>
<br/><p>Other valid HTML tags work with the exception of the <i>break &lt;br&gt;</i> tag. Do not use <i>head</i> or <i>body</i> tags in the email, they are already present in the default template.</p>
<p><b>Use Raw HTML (don't use master template):</b> This option is for advanced users with expertise in crafting custom HTML. Check to edit the raw HTML to be sent in the email. No error checking is provided to validate raw HTML. </p>
<p><div class="Note">Note:  Different email clients render HTML code differently. Ensure any raw HTML has been well tested for errors and visual problems across various possible email programs (e.g., Outlook, Thunderbird, Gmail, etc). </div>
</p>
<p>Click <b>OK</b> when done editing to insert the HTML into the email message.</p>
</div>
</div>
</body>
</html>```

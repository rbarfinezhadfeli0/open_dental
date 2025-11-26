# File: ./www.opendental.com/manual232/bridgetrophyenhanced.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Trophy (Enhanced) Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgetrophyenhanced','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgetrophyenhanced.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgetrophyenhanced.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgetrophyenhanced.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgetrophyenhanced.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgetrophyenhanced.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgetrophyenhanced.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgetrophyenhanced.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgetrophyenhanced.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgetrophyenhanced.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgetrophyenhanced.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgetrophyenhanced.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgetrophyenhanced.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgetrophyenhanced.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgetrophyenhanced.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgetrophyenhanced.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgetrophyenhanced.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgetrophyenhanced.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgetrophyenhanced.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgetrophyenhanced.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgetrophyenhanced.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgetrophyenhanced.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgetrophyenhanced.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgetrophyenhanced.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgetrophyenhanced.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgetrophyenhanced.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgetrophyenhanced.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgetrophyenhanced.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgetrophyenhanced.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Trophy (Enhanced) Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click <b>Trophy(enhanced)</b>.</p>
<img src="images/bridgeTrophyEnhanced.png" width="778" height="598"/><p>After version 5.0, this is known as Kodak Dental Imaging (KDI). Also use this bridge for some Carestream products.</p>
<p class="MarginBottomZero">There are two different Trophy bridges available: </p>
<ul class="MarginBottomGap">
<li><i><a href="bridgetrophy.html">Trophy</a> Simple</i>: Not recommended, however may be used for new installations of Trophy. It always uses the patient ID (PatNum) as the image folder name.</li>
<li><i>Trophy Enhanced</i>: Recommended for new installations. Required for existing installations of Trophy. For existing installations, the user must type in the name of the folder in the Edit Patient Information window for each patient.</li>
</ul>
<div class="Note">Note: To change patients, close Kodak, switch patients in Open Dental, then reopen the bridge.</div>
<br/><br/><p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ol>
<li>Storage Path: Where images are stored.</li>
<li>Enter 1 to enable Numbered Mode</li>
</ol>
</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<h2>Technical Details</h2>
<p>Storage Path: The storage path might look similar to</p>
<p class="codeblock">\\SERVER\tw</p>or<p class="codeblock">F:\tw</p><br/><p>The storage path must be set to exactly the same value as the database location within Trophy. To change the database location in Trophy, in the main menu click options or preferences and that will open a window with a series of tabs. Inside one of the tabs there will be a place to enter a location for the database. Trophy uses this database path when searching for patients.</p>
<p><b>Enhanced Bridge</b><br/> If using Fona OrisWin imaging then the enhanced bridge is the correct bridge to use. If using the enhanced bridge, then each patient will have a Trophy Folder path entered in the Patient Edit window. The folder name for one patient might look similar to</p>
<p class="codeblock">G.rvg\G0000001</p>or<p class="codeblock">\\SERVER\tw\G.rvg\G0000001</p><br/><p class="MarginBottomZero">The bridge makes the following assumptions: </p>
<ul class="MarginBottomGap">
<li>User has previously used the standalone mode of Trophy.</li>
<li>The previous program created a text file inside each patient folder. The format of the text file is shown further down.</li>
<li>The storage path contains a series of A to Z folders named like A.rvg, B.rvg, C.rvg, etc.</li>
</ul>
<p class="MarginBottomZero">Automation capabilities of the bridge: </p>
<ul class="MarginBottomGap">
<li>Searches text files for matching LName, FName, Birthdate.</li>
<li>If all three match, uses that folder.</li>
<li>If birthday doesn't match, but there is exactly one match for LName and FName, then it use that folder.</li>
<li>Otherwise, lets user choose from existing list of folders.</li>
<li>User can create folder for new patient, which automatically increments the max folder number by one.</li>
<li>Open Dental does not create new text files. It only makes use of existing text files.</li>
</ul>
<p>Example text file:</p>
<p>Name of file: FILEDATA.txt. Contents:<p class="codeblock">[Patient file]</p><p class="codeblock">NUMERO=W0000022</p><p class="codeblock">NOM=WALIA</p><p class="codeblock">PRENOM=KUNAL</p><p class="codeblock">DATE=19820411</p><p class="codeblock">SECU=...-..-....</p><p class="codeblock">CODE=.....-....</p><p class="codeblock">TEL1= (...)...-.... </p><p class="codeblock">TEL2= (...)...-.... </p><p class="codeblock">PHOTO= </p><p class="codeblock">EXTNUM=W0000022</p></p>
<p><b>Enhanced Bridge, Numbered Mode</b><br/> Some installations of Trophy do not use <span class="codeblock">FILEDATA.txt</span> files, and the folders are numbered according to patient ID. The patient folders are grouped into subfolders with similar numbers. If the user has had a conversion from SoftDent to Open Dental, and if the patient id numbers have been preserved, then many existing patients will already have patient image folders named by their patient numbers.</p>
<p class="MarginBottomZero">Automation sequence: </p>
<ul class="MarginBottomGap">
<li>Searches all subfolders of main image folder, regardless of folder organization.</li>
<li>If a folder name matches the patient ID, then it assigns that folder to the patient.</li>
<li>If no folder is found, it creates a folder with the name of the patient ID. It puts it in a subfolder named by the last two digits. Example: 23/123</li>
</ul>
<p>As an alternative to linking folders on the fly, we provide an image conversion service which links up the folders ahead of time.</p>
<h2>Troubleshooting</h2>
<p>If the bridge isn't working, you can troubleshoot it by creating a windows shortcut. On your desktop, in a blank area, right click, New, Shortcut. The location / target will be the Trophy program itself. For example, <b>C:\Program Files\Trophy\TW.exe</b>. After creating the shortcut, right-click on it and select properties. Edit the target. Add a space after the original target and then -P, then no space, then the full path to a patient folder without any trailing \. Similar to this:</p>
<p class="codeblock">C:\Program Files\Trophy\TW.exe -PF:\tw\G.rvg\G0000001</p><br/><p>Click OK to close the properties window. Then, click your shortcut to test. This simulates exactly what Open Dental is doing. If you can't get this to work, then Open Dental won't work either. If you can't get it to work, please contact support for troubleshooting.</p>
<p>But if it does work, you should be able to change the settings in Open Dental to match.</p>
</div>
</div>
</body>
</html>```

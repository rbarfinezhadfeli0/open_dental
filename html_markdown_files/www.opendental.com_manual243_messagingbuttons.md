# File: ./www.opendental.com/manual243/messagingbuttons.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Messaging Buttons</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('messagingbuttons','+manage','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/messagingbuttons.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/messagingbuttons.html" >v24.2</option><option value="https://www.opendental.com/manual241/messagingbuttons.html" >v24.1</option><option value="https://www.opendental.com/manual233/messagingbuttons.html" >v23.3</option><option value="https://www.opendental.com/manual232/messagingbuttons.html" >v23.2</option><option value="https://www.opendental.com/manual231/messagingbuttons.html" >v23.1</option><option value="https://www.opendental.com/manual224/messagingbuttons.html" >v22.4</option><option value="https://www.opendental.com/manual223/messagingbuttons.html" >v22.3</option><option value="https://www.opendental.com/manual222/messagingbuttons.html" >v22.2</option><option value="https://www.opendental.com/manual221/messagingbuttons.html" >v22.1</option><option value="https://www.opendental.com/manual214/messagingbuttons.html" >v21.4</option><option value="https://www.opendental.com/manual213/messagingbuttons.html" >v21.3</option><option value="https://www.opendental.com/manual212/messagingbuttons.html" >v21.2</option><option value="https://www.opendental.com/manual211/messagingbuttons.html" >v21.1</option><option value="https://www.opendental.com/manual205/messagingbuttons.html" >v20.5</option><option value="https://www.opendental.com/manual204/messagingbuttons.html" >v20.4</option><option value="https://www.opendental.com/manual203/messagingbuttons.html" >v20.3</option><option value="https://www.opendental.com/manual202/messagingbuttons.html" >v20.2</option><option value="https://www.opendental.com/manual201/messagingbuttons.html" >v20.1</option><option value="https://www.opendental.com/manual194/messagingbuttons.html" >v19.4</option><option value="https://www.opendental.com/manual193/messagingbuttons.html" >v19.3</option><option value="https://www.opendental.com/manual192/messagingbuttons.html" >v19.2</option><option value="https://www.opendental.com/manual191/messagingbuttons.html" >v19.1</option><option value="https://www.opendental.com/manual184/messagingbuttons.html" >v18.4</option><option value="https://www.opendental.com/manual183/messagingbuttons.html" >v18.3</option><option value="https://www.opendental.com/manual182/messagingbuttons.html" >v18.2</option><option value="https://www.opendental.com/manual181/messagingbuttons.html" >v18.1</option><option value="https://www.opendental.com/manual174/messagingbuttons.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Messaging Buttons</p></div>
<div class="GeneralPageContent">
<p><a href="messaging.html">Messaging</a> buttons appear in a left vertical toolbar below the module buttons. </p>
<img src="images/lightButtons.gif" width="55" height="181"/><p>Messaging Buttons work with messaging elements to communicate with other computers in the office using light, sound, and/or text. They are a shortcut that is the equivalent of clicking a sequence of messaging elements in the <a href="manage.html">Manage Module</a>.</p>
<p>Clicking a button can cause it to light up, cause other buttons to light up, or can trigger no light at all. Click a lit message button to acknowledge.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/B0qCcxMG42Q">Messaging and Messaging Buttons</a>.</p>
<p class="MarginBottomZero">To customize message buttons, you must complete two steps: </p>
<ol class="MarginBottomGap">
<li>Set up <a href="messagingelements.html">Message Element</a> (select colors, rows).</li>
<li>Set up Messaging Buttons (button text, position, assign messaging elements). See below.</li>
</ol>
<h2>Set up Messaging Buttons</h2>
<p></p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Manage, Messaging Buttons.</p>
<img src="images/messagingButtonSetup.png" width="656" height="410"/><p>All computers in the office list on the left. The computer that you are currently on is indicated by (this computer).</p>
<p>All buttons currently set up for the selected workstation show on the right, listed in row order. If -1-, -2-, etc. shows, the button is blank on this workstation. Up to 40 buttons can be added. Click the up/down arrows to reorder buttons.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select the computer(s) this button will be set up on (an individual computer or All).  <ul>
<li>Highlight All to show the button on all computers (e.g., Op 1, Op 2, Op 3, Pt Ready, Ph Asst).</li>
<li>Highlight a computer to only display the button on that computer. To show the button on multiple computers, but not all, the button must be set up separately for each computer.</li>
</ul>
</li>
<li>Double-click a button in the Buttons area.</li>
<li>Enter button criteria, then click OK.<br/><img src="images/messagingButtonEdit.png" width="673" height="370" class="ImageInParagraph"/><ul>
<li><b>Applies to all computers</b> vs <b>Only applies to one computer</b> is set on the previous screen.</li>
<li><b>Text:</b> The exact label that will appear on the button. Text wraps when it reaches the end of the line.</li>
<li><b>Sync Icon</b> (optional): Enter a cell number (1-9) that lights up when the corresponding messaging button is clicked. 1-9 refers to one of the cells in Open Dental's program icon.  <img src="images/messagingButtonIcon.gif" width="17" height="18" style="margin-bottom: 0px"/> The cells are numbered 1-9, left to right, starting with the top row and working down.</li>
<li><b>To User, Extras, Message:</b> Select the messaging elements that will determine the behavior of this button. Light color, sound, and light row is determined by each element.</li>
</ul>
</li>
</ol>
<h2>Hints</h2>
<p class="MarginBottomZero">Hints: To quickly change the default messaging button setup for your office, here are a few guidelines. </p>
<ul class="MarginBottomGap">
<li>The first and second row are initially blank on all workstations. On each operatory workstation, set up a <i>this computer</i> setting that calls a user (e.g. Doctor, Assistant) to that operatory (e.g. To Op 1).</li>
<li>If you have more than three operatories, create more <i>location</i> messaging buttons (e.g. Op 4, 5, 6, etc.). You will need to create new message elements for each (To Op 4, To Op 5) and in each element set the correct light row. Move the PtReady and Ph Asst buttons down a few rows to accommodate the new buttons.</li>
<li>If you have more than three users that you want to call using a button, create more <i>user</i> message buttons (DrA, DrB, Hygienist) that call each user to each operatory (To Op 2, To Op 3). In each user message element, select a unique light color and sound. Move the Op, PtReady, and Ph Asst buttons down to accommodate the new buttons.</li>
</ul>
<p class="MarginBottomZero">Button colors use the following priority:  </p>
<ol class="MarginBottomGap">
<li>Message</li>
<li>Extras</li>
<li>Users</li>
</ol>
<p>Specific buttons can be set up on specific computers. However, if on computer A you set up an Op1 button in row 5, and for all computers you set up an Op 2 button in row 5, computer A will never see the Op 2 button setup for all computers.</p>
<p>For buttons to work correctly, the light row in a messaging element and the button location (row) in Messaging Button Setup must match.</p>
<h2>Troubleshooting</h2>
<p>If the Sync Icon doesn't work, it may be due to your operating system. In Windows 7, 8 and 10 you may be able to correct this by right clicking on the taskbar and selecting properties (or taskbar settings). Look for the <i>Always Combine</i> option and change it to <i>Never Combine</i> or <i>Combine When Taskbar Is Full</i>.</p>
</div>
</div>
</body>
</html>```

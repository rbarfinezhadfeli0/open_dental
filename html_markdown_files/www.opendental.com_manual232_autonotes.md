# File: ./www.opendental.com/manual232/autonotes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Auto Notes</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('autonotes','procedureedit','entertreatment','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/autonotes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/autonotes.html" >v24.2</option><option value="https://www.opendental.com/manual241/autonotes.html" >v24.1</option><option value="https://www.opendental.com/manual233/autonotes.html" >v23.3</option><option value="https://www.opendental.com/manual232/autonotes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/autonotes.html" >v23.1</option><option value="https://www.opendental.com/manual224/autonotes.html" >v22.4</option><option value="https://www.opendental.com/manual223/autonotes.html" >v22.3</option><option value="https://www.opendental.com/manual222/autonotes.html" >v22.2</option><option value="https://www.opendental.com/manual221/autonotes.html" >v22.1</option><option value="https://www.opendental.com/manual214/autonotes.html" >v21.4</option><option value="https://www.opendental.com/manual213/autonotes.html" >v21.3</option><option value="https://www.opendental.com/manual212/autonotes.html" >v21.2</option><option value="https://www.opendental.com/manual211/autonotes.html" >v21.1</option><option value="https://www.opendental.com/manual205/autonotes.html" >v20.5</option><option value="https://www.opendental.com/manual204/autonotes.html" >v20.4</option><option value="https://www.opendental.com/manual203/autonotes.html" >v20.3</option><option value="https://www.opendental.com/manual202/autonotes.html" >v20.2</option><option value="https://www.opendental.com/manual201/autonotes.html" >v20.1</option><option value="https://www.opendental.com/manual194/autonotes.html" >v19.4</option><option value="https://www.opendental.com/manual193/autonotes.html" >v19.3</option><option value="https://www.opendental.com/manual192/autonotes.html" >v19.2</option><option value="https://www.opendental.com/manual191/autonotes.html" >v19.1</option><option value="https://www.opendental.com/manual184/autonotes.html" >v18.4</option><option value="https://www.opendental.com/manual183/autonotes.html" >v18.3</option><option value="https://www.opendental.com/manual182/autonotes.html" >v18.2</option><option value="https://www.opendental.com/manual181/autonotes.html" >v18.1</option><option value="https://www.opendental.com/manual174/autonotes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Auto Notes</p></div>
<div class="GeneralPageContent">
<p>Auto Notes are templates used to insert frequently-used large notes (e.g., for hygiene, root canals, materials, anesthetic, post-op instructions, etc.).</p>
<p>Place cursor in a <a href="procedureedit.html">Procedure</a> Note box. Above the box, click <b>Auto Note</b>.</p>
<img src="images/autoNoteCompose.png" width="844" height="548"/><p class="MarginBottomZero">Alternatively,  </p>
<ul class="MarginBottomGap">
<li>click <b>Auto Note</b> in the <a href="commlog.html">Commlog</a> window.</li>
<li>click the <b>Auto Note</b> in the <a href="taskswindow.html">Task Window</a>.</li>
<li>click the <b>Auto Note</b> in the <a href="procgroupnote.html">Procedure Group Note</a> window.</li>
<li>right-click and select <b>Insert Auto Note</b> in the Instructions box of a <a href="labcaseedit.html">Lab Case</a>.</li>
<li>right-click and select <b>Insert Auto Note</b> in the Appointment Note box in <a href="aptedit.html">Edit Appointment</a>.</li>
<li>select a <i>Text </i>field in the Ortho Chart notes area and click <b>Auto Note</b> in <a href="orthochart.html">Ortho Chart</a>.</li>
<li>click <b>Auto Note</b> in the Completed Note or TP'd Note tab in the <a href="procedurecodeedit.html">Edit Procedure Code</a> window.</li>
<li>right-click and select <b>Insert Auto Note</b> in the Commlog window in <a href="referralsetup.html"> Edit Referral</a></li>
</ul>
<p>Auto notes can also be used when adding notes in ODTouch.</p>
<p> In addition to static text, prompts can offer a selection of responses or the ability to enter text. Create or edit Auto Note templates in <a href="autonotesetup.html">Auto Note Setup</a>. <div class="Note">Note: Auto notes can be easier if a provider prefers to use one note for an entire visit rather than a separate <a href="notes.html">note</a> for each procedure. In addition to the normal procedures for the day, there is a clinical note, which is just a procedure with a code that is not an ADA code. For example, <i>Zclin</i>. Leave the default notes blank, and use Auto Notes to compose a single clinical note.</div>
</p>
<p>When Auto Notes are supported in a text box, an <b>Auto Note</b> button appears above or below the text box. </p>
<p>Auto Notes can be grouped by category (folder). Click <b>+</b> to expand a folder tree. Auto Notes have a paper icon.</p>
<p>Double-click the Auto Note to insert. The text of the note displays in the text box. Any prompts in the Auto Note are presented in sequence.</p>
<p class="MarginBottomZero">For each prompt, select the response or enter text.  </p>
<ul class="MarginBottomGap">
<li><b>Back:</b> Move back one prompt to change or view a response.</li>
<li><b>Preview</b>: View a preview of the response as it will appear in the completed Auto Note. The preview button only appears for <i>One Response</i> or <i>Multi Response</i> prompts.</li>
<li><b>Remove Prompt</b>: Remove this prompt from the Auto Note completely. If the <a href="preferences.html">Preference</a><i> Block procedure note signatures when there are uncompleted Auto Note prompts</i> is enabled, this button is disabled.</li>
<li><b>Skip for Now</b>: Skip the current prompt. The prompt remains in the Auto Note to answer at a later time. If the preference, <i>Block procedure note signatures when there are uncompleted Auto Note prompts</i> is enabled, this button is hidden. </li>
<li><b>Next:</b> Move on to the next prompt. If current prompt is left blank, the prompt remains in the Auto Note so edits can be made later.</li>
</ul>
<p class="MarginBottomZero">Once all prompts have a response, the Compose Auto Note window remains open with the full text of the note on the right. </p>
<ul class="MarginBottomGap">
<li>To insert additional Auto Notes, repeat steps 2-3.</li>
<li>Edit or add text as desired.</li>
</ul>
<h2>Editing Auto Note in Progress</h2>
<p>Prompts left unanswered can be completed later on. Simply return to the note and select the <b>Edit Auto Note</b> button. The Auto Note resumes at the prompt where it was initially skipped. Button appears on Procedure Notes, Commlogs, and Tasks when available.</p>
<img src="images/autoNoteReturn.gif" width="524" height="168"/><br/></div>
</div>
</body>
</html>```

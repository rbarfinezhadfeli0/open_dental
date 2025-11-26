# File: ./www.opendental.com/manual/dsevaluationsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Evaluation Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsevaluationsetup','dsusergroupdefaults','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dsevaluationsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dsevaluationsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsevaluationsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsevaluationsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsevaluationsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/dsevaluationsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsevaluationsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsevaluationsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsevaluationsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsevaluationsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsevaluationsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsevaluationsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsevaluationsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsevaluationsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsevaluationsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsevaluationsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsevaluationsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsevaluationsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsevaluationsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsevaluationsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsevaluationsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsevaluationsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsevaluationsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsevaluationsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsevaluationsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsevaluationsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsevaluationsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsevaluationsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Evaluation Setup</p></div>
<div class="GeneralPageContent">
<p>Set up Evaluations to track student progress.</p>
<p>In <a href="dsusergroupdefaults.html">Dental School Setup</a>, click <b>Evaluations</b>.</p>
<img src="images/dsevaluationdefs.png" width="463" height="209"/><p>Setting up <a href="dsevaluations.html">Dental Student Evaluations</a> for <a href="dentalschools.html">Dental Schools</a> includes attaching a grading scale and defining the criteria that will be evaluated. To set up evaluations, the logged-on user must have the <i>Setup</i> security permission. The list of evaluation definitions can be filtered by dental course.</p>
<p><b>Evaluation Definitions</b>: Evaluations matching the selected course are listed</p>
<p><b>Course</b>: Select a course from dropdown to filter the Evaluation Definitions list.</p>
<p><b>Duplicate</b>: Highlight an evaluation in the grid and click to create a copy. All details are copied, but the Title is appended with <i>-copy</i>.</p>
<p><b>Add</b>: Click to create a new evaluation. Opens the Evaluation Definition Edit window (see below).</p>
<h2>Evaluation Definition Edit</h2>
<p>From Evaluation Definitions, click <b>Add</b> to create a new Evaluation Definition or double-click an existing Evaluation Definition to edit. The Evaluation Definition Edit window opens.</p>
<img src="images/dsevaluationdefedit.png" width="493" height="358"/><p class="MarginBottomZero">Enter general evaluation information.  </p>
<ul class="MarginBottomGap">
<li><b>Title</b>: The identifying name of this evaluation.</li>
<li><b>Grading Scale</b>: Click <b>[...]</b> to attach a <a href="dsgradingscale.html">Dental School Grading Scale</a>.</li>
<li><b>Course</b>: Click <b>[...]</b> to attach this evaluation to a <a href="dscourses.html">Dental School Course</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Criteria Used</b>: Lists the any criteria currently added to the Evaluation. If using a weighted grading scale, the total points for all criteria is shown at the bottom </p>
<ul class="MarginBottomGap">
<li><b>Up</b> / <b>Down</b> arrows: Select a criterion and click to reorder in the list.</li>
<li><b>Add</b>: Click to add Evaluation Criterion. Opens the Evaluation Criterion Def Edit window (see below).</li>
</ul>
<h2>Evaluation Criterion Def Edit</h2>
<p>From Evaluation Definition Edit, click <b>Add</b> to create new criterion or double-click an existing criterion from the list to edit. </p>
<img src="images/dsevalcriteria.png" width="362" height="201"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: The identifying name of the criterion.</li>
<li><b>Grading Scale</b>: The scale that will be applied to this criterion. By default, the scale of the evaluation is selected. Click <b>[...]</b> to change. The overall grade calculation is always be based on the evaluation's grading scale.</li>
<li><b>Points</b>: Only shows if using a weighted grading scale. Enter the maximum number of points possible for this criterion.</li>
<li><b>Is Category Name</b>: Check this box to use this criterion as a header in the evaluation. No points or grades will be associated with this row; it will be for organization purposes only.</li>
</ul>
<p><b>Delete</b>: Remove this criterion from the evaluation.</p>
<p>Click <b>Save</b> add new criterion or keep changes.</p>
<br/></div>
</div>
</body>
</html>```

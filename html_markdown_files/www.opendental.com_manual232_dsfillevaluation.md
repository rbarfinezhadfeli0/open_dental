# File: ./www.opendental.com/manual232/dsfillevaluation.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fill out Student Evaluations</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsfillevaluation','dsevaluations','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dsfillevaluation.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dsfillevaluation.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsfillevaluation.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsfillevaluation.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsfillevaluation.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dsfillevaluation.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsfillevaluation.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsfillevaluation.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsfillevaluation.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsfillevaluation.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsfillevaluation.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsfillevaluation.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsfillevaluation.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsfillevaluation.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsfillevaluation.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsfillevaluation.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsfillevaluation.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsfillevaluation.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsfillevaluation.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsfillevaluation.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsfillevaluation.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsfillevaluation.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsfillevaluation.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsfillevaluation.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsfillevaluation.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsfillevaluation.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsfillevaluation.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsfillevaluation.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fill out Student Evaluations</p></div>
<div class="GeneralPageContent">
<p>Instructors can fill evaluations for Dental School students.</p>
<p>In <a href="dsevaluations.html">Evaluations</a>, click Add.</p>
<img src="images/dsevaldefSelect.gif" width="471" height="320"/><p>Only <a href="dsinstructors.html">Dental School Instructors</a> can fill out a student evaluation. Users with the <i>Admin Eval Edit</i> permission can view or edit evaluations. </p>
<p><b>Course</b>: Filter the evaluations by course. </p>
<p>Double-click an evaluation to begin.</p>
<img src="images/dsevalFillOut.gif" width="852" height="409"/><p class="MarginBottomZero">Enter general evaluation information. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Defaults to today's date, but can be manually changed.</li>
<li><b>Student</b>: Click [...], then-double click the student this evaluation is for.</li>
<li><b>Scale, Course, Instructor, Title</b>: This information cannot be changed from this window.</li>
</ul>
<p class="MarginBottomZero">Enter the student grade information. What shows as criteria is dependent on how the criteria is defined in evaluation setup.  </p>
<ul class="MarginBottomGap">
<li>If a criteria's grading scale is <i>Pick List</i>:  <ul>
<li>Click on a criteria row on the left and possible values will show on the right.</li>
<li>Click on a value on the right to automatically populate the Showing and Number fields on the left. You can also type the value in the Number cell. Invalid numbers are not saved.</li>
<li>Enter any notes by clicking in the Note cell.</li>
</ul>
</li>
<li>If a criteria's grading scale is <i>weighted</i>:  <ul>
<li>Click on a row and the maximum point value will show on the right.</li>
<li>Click in the Number cell to enter the student's points.</li>
<li>Enter any notes by clicking in the Note cell.</li>
</ul>
</li>
<li>If grading scale is <i>percentage</i>:  <ul>
<li>All percentage criteria are based on 0 - 100.</li>
<li>Click in the Number cell to enter the student's percentage.</li>
<li>Enter any notes by clicking in the Note cell.</li>
</ul>
</li>
</ul>
<p>As you enter evaluation numbers, the Overall Grade Number and Overall Grade fields at the bottom will automatically update using the evaluation's <a href="dsgradingscale.html">Grading Scale</a>. To override a overall calculation, enter the value in the blank boxes to the right of each field.</p>
<p>Click <b>OK</b> to save.</p>
</div>
</div>
</body>
</html>```

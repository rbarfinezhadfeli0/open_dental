# File: ./www.opendental.com/manual232/dsgradingscale.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Grading Scales</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsgradingscale','dsusergroupdefaults','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dsgradingscale.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dsgradingscale.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsgradingscale.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsgradingscale.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsgradingscale.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dsgradingscale.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsgradingscale.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsgradingscale.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsgradingscale.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsgradingscale.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsgradingscale.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsgradingscale.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsgradingscale.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsgradingscale.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsgradingscale.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsgradingscale.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsgradingscale.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsgradingscale.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsgradingscale.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsgradingscale.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsgradingscale.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsgradingscale.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsgradingscale.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsgradingscale.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsgradingscale.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsgradingscale.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsgradingscale.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsgradingscale.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Grading Scales</p></div>
<div class="GeneralPageContent">
<p>Set up Grading Scales to assess student evaluations.</p>
<p>In <a href="dsusergroupdefaults.html">Dental School Setup</a>, click <b>Grading Scales</b>.</p>
<img src="images/dsgradingscale.png" width="462" height="294"/><p>For <a href="dentalschools.html">Dental Schools</a>, grading scales are attached to <a href="dsevaluations.html">Dental Student Evaluations</a> to calculate a grade. To set up grading scales, the logged on user must have the <i>Setup</i> security permission.</p>
<p>Click <b>Add</b>, or double-click an existing grading scale to edit.</p>
<img src="images/dsgradingscaleedit.png" width="433" height="402"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter a grading scale description.</li>
<li><b>Scale Type</b>: Select the type of grading scale. There are three options:  <ul>
<li>Percentage: Assumes a 0 - 100% grading scale. Instructors will manually enter percentages when filling out an evaluation.</li>
<li>Weighted: Used to assign different values (e.g., points) to evaluation criteria. Instructors will manually enter values when setting up an evaluation.</li>
<li>Pick List: Grading scale will contain a list of pick-able items (e.g., A, B, C, D, F). See below.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">If Pick List is the grading scale type, enter the pick list items: </p>
<ol class="MarginBottomGap">
<li>Click Add. <br/><img src="images/dsgradingscaleitem.png" width="415" height="175" class="ImageInParagraph"/></li>
<li>Enter the grading item details, then click OK to save. <ul>
<li>Grade Showing: What shows for the student (e.g., A, B, C, D, F).</li>
<li>Grade Number: The number value associated with the grade.</li>
<li>Description: A description of the grade and value.</li>
</ul>
<p>Repeat for each pick list item.</p>
</li>
</ol>
<p>Click <b>OK</b> to save the grading scale.</p>
<br/></div>
</div>
</body>
</html>```

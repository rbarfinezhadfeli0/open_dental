# File: ./www.opendental.com/manual/periochartingvoice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Voice Perio Charting</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('periochartingvoice','perio','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/periochartingvoice.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/periochartingvoice.html" >v24.2</option><option value="https://www.opendental.com/manual241/periochartingvoice.html" >v24.1</option><option value="https://www.opendental.com/manual233/periochartingvoice.html" >v23.3</option><option value="https://www.opendental.com/manual232/periochartingvoice.html" >v23.2</option><option value="https://www.opendental.com/manual231/periochartingvoice.html" >v23.1</option><option value="https://www.opendental.com/manual224/periochartingvoice.html" >v22.4</option><option value="https://www.opendental.com/manual223/periochartingvoice.html" >v22.3</option><option value="https://www.opendental.com/manual222/periochartingvoice.html" >v22.2</option><option value="https://www.opendental.com/manual221/periochartingvoice.html" >v22.1</option><option value="https://www.opendental.com/manual214/periochartingvoice.html" >v21.4</option><option value="https://www.opendental.com/manual213/periochartingvoice.html" >v21.3</option><option value="https://www.opendental.com/manual212/periochartingvoice.html" >v21.2</option><option value="https://www.opendental.com/manual211/periochartingvoice.html" >v21.1</option><option value="https://www.opendental.com/manual205/periochartingvoice.html" >v20.5</option><option value="https://www.opendental.com/manual204/periochartingvoice.html" >v20.4</option><option value="https://www.opendental.com/manual203/periochartingvoice.html" >v20.3</option><option value="https://www.opendental.com/manual202/periochartingvoice.html" >v20.2</option><option value="https://www.opendental.com/manual201/periochartingvoice.html" >v20.1</option><option value="https://www.opendental.com/manual194/periochartingvoice.html" >v19.4</option><option value="https://www.opendental.com/manual193/periochartingvoice.html" >v19.3</option><option value="https://www.opendental.com/manual192/periochartingvoice.html" >v19.2</option><option value="https://www.opendental.com/manual191/periochartingvoice.html" >v19.1</option><option value="https://www.opendental.com/manual184/periochartingvoice.html" >v18.4</option><option value="https://www.opendental.com/manual183/periochartingvoice.html" >v18.3</option><option value="https://www.opendental.com/manual182/periochartingvoice.html" >v18.2</option><option value="https://www.opendental.com/manual181/periochartingvoice.html" >v18.1</option><option value="https://www.opendental.com/manual174/periochartingvoice.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Voice Perio Charting</p></div>
<div class="GeneralPageContent">
<p>Use Voice Perio Charting to record perio exams hands free. </p>
<p>In the <a href="perio.html">Perio Chart</a>, click the <b>microphone icon</b> to start recording.</p>
<img src="images/periochartVoice.png" width="223" height="243"/><p>The chart can be recorded via voice commands in English, using Universal Tooth Numbering. A microphone must be set up on the computer. Any microphone or headset recognized by Windows will work.<br/><div class="Note">Note: Open Dental Cloud users are not able to utilize Voice Perio Charting.</div>
</p>
<p>Use the following list of voice commands when voice charting. These are the only prompts Open Dental will recognize.</p>
<p class="MarginBottomZero">Adding Exams:  </p>
<ul class="MarginBottomGap">
<li><b><i>Add perio exam</i></b>: Add a new exam.</li>
<li><b><i>New perio exam</i></b>: Add a new exam.</li>
<li><b><i>Copy previous exam</i></b>: Copy the previous exam.</li>
</ul>
<p class="MarginBottomZero">Navigating the Perio Chart: </p>
<ul class="MarginBottomGap">
<li><b><i>Stop Listening</i></b>: Pause listening. Use to pause listening without ending recording completely.</li>
<li><b><i>Start Listening</i></b>: Start the listening. Used to resume listening after having paused it.</li>
<li><b><i>Start giving feedback</i></b>: Turn system back to repeat measurements.</li>
<li><b><i>Stop giving feedback</i></b>: Turn off system from repeating measurements.</li>
<li><b><i>Left</i></b>: Move cursor left.</li>
<li><b><i>Right</i></b>: Move cursor right.</li>
<li><b><i>Delete</i></b>: Delete selected item.</li>
<li><b><i>Backspace</i></b>: Move cursor back a space and clears the newly selected cell.</li>
<li><b><i>Skip tooth</i></b> &lt;<i>say tooth #</i>&gt;: Skip selected tooth.</li>
<li><b><i>Skip current tooth</i></b>: Skip currently selected tooth.</li>
<li><b><i>Probing</i></b>: Move cursor back to probing.</li>
<li><b><i>Check triplets:</i></b> Check the box for Triplets.</li>
<li><b><i>Uncheck triplets</i></b>: Uncheck the box for Triplets.</li>
<li><b><i>Triplets</i></b>: Toggles triplets box.</li>
<li><b><i>Resume Path</i></b>: Place cursor in the first empty probing position. </li>
</ul>
<p class="MarginBottomZero">Selecting Teeth: </p>
<ul>
<li><b><i>Select tooth</i></b> &lt;<i>say tooth #</i>&gt;: Move cursor to selected tooth. Whichever surface was previously selected, will be selected with the current tooth.</li>
<li><b><i>Select</i></b> &lt;<i>say tooth #</i>&gt;: Move cursor to selected tooth. Whichever surface was previously selected, will be selected with the current tooth.</li>
<li><b><i>Select</i></b> &lt;<i>say tooth #</i>&gt; <b><i>facial</i></b>: Move cursor to selected tooth on facial side.</li>
<li><b><i>Select</i></b> &lt;<i>say tooth #</i>&gt; <b><i>lingual</i></b>: Move cursor to selected tooth on lingual side.</li>
<li><b><i>Select</i></b> &lt;<i>say tooth #</i>&gt; <b><i>mesial</i></b> &lt;<i>say facial or lingual</i>&gt;: Move cursor to selected tooth on mesial facial or mesial lingual side.</li>
<li><b><i>Select</i></b> &lt;<i>say tooth #</i>&gt; <b><i>distal</i></b> &lt;<i>say facial or lingual</i>&gt;: Move cursor to selected tooth on distal facial or distal lingual side.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: "Go to Tooth" also works as a command but is not as reliable as "Select tooth" for speech recognition.</div>
</p>
<p class="MarginBottomZero">Charting: </p>
<ul class="MarginBottomGap">
<li><b><i>Zero through nineteen</i></b>: Available probing depths.</li>
<br/><li><b><i>Mark bleeding</i></b>: Mark selected site as having bleeding on probing.</li>
<li><b><i>Bleeding facial</i></b>: Will put a bleeding mark on the facial surface of the current tooth.</li>
<li><b><i>Bleeding lingual</i></b>: Will put a bleeding mark on the lingual surface of the current tooth.</li>
<li><b><i>Bleeding mesial</i></b>: Will put a bleeding mark on the mesial surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<li><b><i>Bleeding distal</i></b>: Will put a bleeding mark on the distal surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<br/><li><b><i>Mark calculus</i></b>: Mark selected tooth surface as having calculus.</li>
<li><b><i>Calculus facial</i></b>: Will put a calculus mark on the facial surface of the current tooth.</li>
<li><b><i>Calculus lingual</i></b>: Will put a calculus mark on the lingual surface of the current tooth.</li>
<li><b><i>Calculus mesial</i></b>: Will put a calculus mark on the mesial surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<li><b><i>Calculus distal</i></b>: Will put a calculus mark on the distal surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<br/><li><b><i>Suppuration</i></b>: Mark selected site as having suppuration.</li>
<li><b><i>Suppuration facial</i></b>: Will put a suppuration mark on the facial surface of the current tooth.</li>
<li><b><i>Suppuration lingual</i></b>: Will put a suppuration mark on the lingual surface of the current tooth.</li>
<li><b><i>Suppuration mesial</i></b>: Will put a suppuration mark on the mesial surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<li><b><i>Suppuration distal</i></b>: Will put a suppuration mark on the distal surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<br/><li><b><i>Plaque</i></b>: Mark selected tooth surface as having plaque.</li>
<li><b><i>Plaque facial</i></b>: Will put a plaque mark on the facial surface of the current tooth.</li>
<li><b><i>Plaque lingual</i></b>: Will put a plaque mark on the lingual surface of the current tooth.</li>
<li><b><i>Plaque mesial</i></b>: Will put a plaque mark on the mesial surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<li><b><i>Plaque distal</i></b>: Will put a plaque mark on the distal surface of the currently selected side (facial/lingual) of the selected tooth.</li>
<br/><li><b><i>Furcation</i></b>: Move cursor to record furcation.</li>
<li><b><i>Gingival margin</i></b>: Move cursor to record gingival margin.</li>
<ul>
<li><b><i>Plus</i></b> &lt;<i>say 1-9</i>&gt;: Add depths greater than 9.</li>
</ul>
<li><b><i>Mobility</i></b>: Move cursor to record mobility.</li>
<li><b><i>Mucogingival junction or MGJ</i></b>: Move cursor to record MGJ.</li>
</ul>
<p>Click the <b>microphone icon</b> to end recording.</p>
<h2>Recommendations</h2>
<p>When considering which headset to purchase, choose one with good noise cancellation built-in to filter out background noise. Keep in mind that a noisy environment or improper microphone setting on the computer will result in less reliable voice recognition. </p>
<p class="MarginBottomZero">The following headsets have been tested by Open Dental and have worked well for us. </p>
<ul class="MarginBottomGap">
<li> Logitech H390 wired headset</li>
<li>Jabra EVOLVE 65</li>
<li>Logitech H800 Bluetooth Wireless headset</li>
</ul>
<h2>Voice controlled charting using other programs</h2>
<p>Perio charting can also be controlled by voice using third party programs. Below are known solutions.</p>
<p><a href="https://www.nuance.com/dragon.html">Dragon Naturally Speaking</a><br/><a href="bridgefloridaprobe.html">Florida Probe Bridge</a><br/><a href="http://www.dentalrat.com/">Dental R.A.T.</a></p>
<h2>Troubleshooting</h2>
<p><b>Error: Unable to initialize audio input. Try plugging a different microphone into the computer.</b></p>
<p>Solution: No microphone was recognized by the computer. Check Windows microphone settings.</p>
<p><b>Error: When trying to chart Furcation, Gingival Margin, Mobility, or Mucogingival Junction, Open Dental goes back to the previous site.</b></p>
<p>Solution: No probing depth has been entered on the site you are attempting to chart Furcation, Gingival Margin, Mobility, or Mucogingival Junction. A probing depth must be entered before these can be charted when utilizing voice perio charting. </p>
</div>
</div>
</body>
</html>```

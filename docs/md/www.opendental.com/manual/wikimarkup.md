Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Wiki Markup

[Wiki](wiki.html) pages are processed from wiki markup to HTML as they are displayed.

The user edits the wiki markup and has no direct control over the actual HTML that results. Only the markup defined below is allowed. Any other html tags are not allowed, and the user is forced to change them before the page can be saved. Most importantly, no attributes are allowed other than those described. So no inline styles or any other typical HTML structures.

## Links

**Internal Links**: [[Internal Link]] links to another page in the wiki. All characters are allowed in the title except \r, \n, |, and double quotes. After translation to HTML, it would look like this: <a href="wiki:Internal Link">Internal Link</a>. If the internal link is to a wiki page that does not yet exist, then the HTML would look like this: <a class="PageNotExists" href="wiki:Internal Link">Internal Link</a>, and the style sheet will likely cause this link to show with a dashed line under it as a visual cue. It's designed so that clicking on this link would cause a new wiki page to be created.

Bracket markup style is required. <a> tags are not allowed for internal links. To make internal links work in HTML, we intercept navigate events. If the user is trying to navigate to an internal page, we load that page into the browser control using C#.

**External Links**: External links must use ordinary <a> tags, like this: <a href="http://www.somesite.com">somesite.com</a>.

**Files**: The following syntax is allowed for files.

[[file:C:\Storage\myfile.gif]]

[[file:\\server\Storage\myfile.gif]]

After translation to HTML, they will look like this:

<a href="wikifile:C:\Storage\myfile.gif">file:C:\Storage\myfile.gif</a>

<a href="wikifile:\\server\Storage\myfile.gif">file:\\server\Storage\myfile.gif</a>

When the user clicks to navigate to one of these links, we intercept and pop up the file or the folder in a separate window.

**Folders**: The following syntax is allowed for folders.

[[folder:C:\Storage]]

[[folder:\\server\Storage]]

After translation to HTML, they will look like this:

<a href="folder:C:\Storage">C:\Storage</a>

<a href="folder:\\server\Storage">\\server\Storage</a>

When the user clicks to navigate to one of these links, we intercept and pop up the file or the folder in a separate window.

## Text Formatting

**Heading 1**: <h1>Heading for Top of Page is Big</h1>

**Heading 2**: <h2>Headings for Sections are Smaller</h2>

**Heading 3**: <h3>Headings for Subsections are Sometimes Needed</h3>

Note: no other h tags are supported or allowed.

**Font**: <b>bold</b> text and <i>italic</> text are supported.

**Text Color**: The syntax below is the only way to specify text color that is different than our master stylesheet.

[[color:red|this text in red]] will be converted to <span style="color:red">this text in red</span>

[[color:#FF0000|this text also in red]] will be converted to <span style="color:#FF0000">this text also in red</span>

[[color:rgb(255,0,0)|more text in red]] will be converted to <span style="color:rgb(255,0,0)">more text in red</span>

**Bulleted Lists**: Use stars \* without a space after them. Deeper levels are not supported yet. A line without a star ends the list.

**Numbered Lists**: Use hashes # without a space after them. Deeper levels are not supported yet. A line without a hash ends the list.

**Line Breaks**: <p> tags and <br> tags are not allowed in markup. During conversion to HTML, text that is not already surrounded by other tags gets surrounded by <p> tags. Each new line within a paragraph is then converted to another paragraph split with <p> tags. <br> tags are not used anywhere. The embedded styles leave zero margin at the tops and bottoms of paragraphs so that however many carriage returns the user types in is how many they will see in the final page.

**Spaces**: Spaces at the beginning of a line are converted to a series of &nbsp; in HTML, which are hard spaces. Typing a tab on the keyboard while editing results in 5 spaces in wiki markup, which then get converted to 5 hard spaces in HTML.

**Special Characters:** The following characters are not allowed in markup other than as part of a valid tag: < >If you need to use them as not part of a tag, you must prefix them with &, like this &> or &<.

## Images

Images must first be placed in the [A to Z](atozfolder.html) wiki folder. Then, they may be referred to in the markup like this:

[[img:myimage.gif]].

[[img:my image with spaces.gif]]

The image must exist, or the page edit cannot be saved. The Image markup is converted to HTML similar to the following:

<img src="file:///C:/OpenDentImages/wiki/myimage.gif"></img>

<img src="file:///C:/OpenDentImages/wiki/my image with spaces.gif"></img>

<img src="file://///server/OpenDentImages/wiki/myimage.gif"></img>

## Tables

Table markup can not be edited directly in wiki page edit, but can be edited by clicking Man Edit in the Table interface. There is no control yet over shading or colors. Border are always 1, cellspacing 0, and cellpadding 2.

Markup looks like this.

{|!Width="100"|Column Heading 1!!Width="150"|Column Heading 2!!Width="90"|Column Heading 3|- |Cell 1||Cell 2||Cell 3 |-|Cell A||Cell B||Cell C |}

Carriage returns are allowed inside cells. They look like this.

{|!Width="100"|Column Heading 1!!Width="150"|Column Heading 2!!Width="90"|Column Heading 3|- |Cell 1||Cell 2 first linecell 2 second linecell 2 third line||Cell 3 |-|Cell A||Cell B||Cell C |}

## Keywords

A keywords tag, if desired, is usually placed at the top of the content, just under the main title.

[[keywords: phrase1, phrase two, etc]]

During conversion to HTML, it will be changed to:

<span class="keywords">keywords: phrase1, phrase two, etc</span>

The style for the keywords class can be set by the user in the master stylesheet. The search function will pick up on all words in the content, but it will give the highest priority to words found inside keywords tags.

## Technical Details

The most recent version of each wiki page is stored in the database as text. Each revision is stored as an entire new entry. Images are stored in the A to Z folders in the wiki subfolder. Wiki pages are displayed in HTML in a browser control inside of Open Dental. But pages are not stored internally as HTML; they are only processed from wiki markup to HTML as they are displayed. The user edits the wiki markup and has no direct control over the actual HTML that results. The absence of a wysiwyg editor results in very consistent pages and fast editing. The instant preview lets users see changes as they work.
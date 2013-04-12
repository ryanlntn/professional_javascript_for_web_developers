// Chapter 2
// JavaScript in HTML

// The <script> element is used to embed JavaScript code in HTML documents.
// Code may be place between the <script> tags or linked to in seperate files even
// from different servers.

// The <script> element may take the following attributes:
  // ➤ async    — Indicates that the script should begin downloading immediately but should not prevent other actions
  //              on the page such as downloading resources or waiting for other scripts to load.

  // ➤ charset  — The character set of the code specified using the src attribute. This attribute is rarely used.

  // ➤ defer    — Indicates that the execution of the script can safely be deferred until after the document’s
  //              content has been completely parsed and displayed.

  // ➤ language — Deprecated. Originally indicated the scripting language being used.

  // ➤ src      — Indicates an external file that contains code to be executed.

  // ➤ type     — Replaces language; This attribute is safe to omit, as “text/javascript” is assumed when missing.

  // They are all optional.

// Best practice is to always link to JavaScript in external files.

// Document modes used to be important. (HTML5 ftw!)

// The <noscript> element allows you to send passive aggressive messages to losers that disable their JavaScript.
var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://127.0.0.1:8000/js/webscripts_index_js_scripts.js', 'dir': '_m0/0', 'linked': 2, 'len': 2534 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_js_scripts.js', 'dir': '_m0/1', 'linked': 2, 'len': 4612 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_script_js_scripts.js', 'dir': '_m0/2', 'linked': 2, 'len': 25799 },
    { 'url': 'http://127.0.0.1:8000/api', 'dir': '_m0/3', 'linked': 0, 'len': 20339 },
    { 'url': 'http://127.0.0.1:8000/web', 'dir': '_m0/4', 'linked': 2, 'len': 7579 },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'dir': '_m0/5', 'linked': 2, 'len': 8780 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'dir': '_m1/0', 'linked': 0, 'len': 14420 },
    { 'url': 'http://127.0.0.1:8000/static/commons.html', 'dir': '_m1/1', 'linked': 2, 'len': 43944 },
    { 'url': 'http://127.0.0.1:8000/static/csp.html', 'dir': '_m1/2', 'linked': 2, 'len': 4295 },
    { 'url': 'http://127.0.0.1:8000/static/error_pages.html', 'dir': '_m1/3', 'linked': 2, 'len': 8560 },
    { 'url': 'http://127.0.0.1:8000/static/Errors.html', 'dir': '_m1/4', 'linked': 2, 'len': 32853 },
    { 'url': 'http://127.0.0.1:8000/static/index.html', 'dir': '_m1/5', 'linked': 2, 'len': 19469 },
    { 'url': 'http://127.0.0.1:8000/static/manage_defaults_databases.html', 'dir': '_m1/6', 'linked': 2, 'len': 27643 },
    { 'url': 'http://127.0.0.1:8000/static/Pages.html', 'dir': '_m1/7', 'linked': 2, 'len': 7729 },
    { 'url': 'http://127.0.0.1:8000/static/requests_management.html', 'dir': '_m1/8', 'linked': 2, 'len': 11934 },
    { 'url': 'http://127.0.0.1:8000/static/uploads_management.html', 'dir': '_m1/9', 'linked': 2, 'len': 14190 },
    { 'url': 'http://127.0.0.1:8000/static/utils.html', 'dir': '_m1/10', 'linked': 2, 'len': 30944 } ]
  },
  { 'mime': 'image/png', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/webscripts_header.png', 'dir': '_m2/0', 'linked': 2, 'len': 95444 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/webscripts_index_style.css', 'dir': '_m3/0', 'linked': 2, 'len': 874 },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_style.css', 'dir': '_m3/1', 'linked': 2, 'len': 5195 },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_script_style.css', 'dir': '_m3/2', 'linked': 2, 'len': 3389 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m4/0', 'linked': 2, 'len': 165 } ]
  }
];

var issue_samples = [
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://127.0.0.1:8000/web', 'extra': '', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/js/`%20%2B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20`/`false`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/static/\x27`true`\x27', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/static/commons.html/`echo%20skip12``echo%2034fish`', 'extra': 'Shell injection (spec)', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/static/manage_defaults_databases.html/`sleep%24{IFS}3`', 'extra': 'Shell injection (spec)', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/static/requests_management.html', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/static/share.html/`false`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/static/uploads_management.html/\x27`uname`\x27', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/static/WebScripts.html', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_icon.png', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_style.css/`false`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/static/requests_management.py', 'extra': 'during initial resource fetch', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_script_style.css/', 'extra': 'during node type checks', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/web/doc/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/web/doc/auth/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i1/13' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://127.0.0.1:8000/web', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i2/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/api', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/sfi9876/', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Server', 'sid': '0', 'dir': '_i7/3' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WebScripts 2.4.1', 'sid': '0', 'dir': '_i8/0' } ]
  }
];


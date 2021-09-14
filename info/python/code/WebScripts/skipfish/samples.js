var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://127.0.0.1:8000/js/webscripts_index_js_scripts.js', 'dir': '_m0/0', 'linked': 2, 'len': 2263 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_js_scripts.js', 'dir': '_m0/1', 'linked': 2, 'len': 4326 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_script_js_scripts.js', 'dir': '_m0/2', 'linked': 2, 'len': 20726 },
    { 'url': 'http://127.0.0.1:8000/web', 'dir': '_m0/3', 'linked': 2, 'len': 5399 },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'dir': '_m0/4', 'linked': 2, 'len': 6591 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/commons.html', 'dir': '_m1/0', 'linked': 2, 'len': 43982 },
    { 'url': 'http://127.0.0.1:8000/static/error_pages.html', 'dir': '_m1/1', 'linked': 2, 'len': 8663 },
    { 'url': 'http://127.0.0.1:8000/static/Errors.html', 'dir': '_m1/2', 'linked': 2, 'len': 32865 },
    { 'url': 'http://127.0.0.1:8000/static/manage_defaults_databases.html', 'dir': '_m1/3', 'linked': 2, 'len': 27746 },
    { 'url': 'http://127.0.0.1:8000/static/Pages.html', 'dir': '_m1/4', 'linked': 2, 'len': 7678 },
    { 'url': 'http://127.0.0.1:8000/static/uploads_management.html', 'dir': '_m1/5', 'linked': 2, 'len': 13834 },
    { 'url': 'http://127.0.0.1:8000/static/utils.html', 'dir': '_m1/6', 'linked': 2, 'len': 17131 },
    { 'url': 'http://127.0.0.1:8000/static/WebScripts.html', 'dir': '_m1/7', 'linked': 2, 'len': 19979 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/webscripts_header.jpg', 'dir': '_m2/0', 'linked': 2, 'len': 44039 } ]
  },
  { 'mime': 'image/png', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/webscripts_icon.png', 'dir': '_m3/0', 'linked': 2, 'len': 1741 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/webscripts_index_style.css', 'dir': '_m4/0', 'linked': 2, 'len': 874 },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_script_style.css', 'dir': '_m4/1', 'linked': 2, 'len': 2039 },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_style.css', 'dir': '_m4/2', 'linked': 2, 'len': 5195 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m5/0', 'linked': 2, 'len': 165 },
    { 'url': 'http://127.0.0.1:8000/auth/', 'dir': '_m5/1', 'linked': 0, 'len': 8232 },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new', 'dir': '_m5/2', 'linked': 2, 'len': 8215 },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new//', 'dir': '_m5/3', 'linked': 2, 'len': 8227 } ]
  }
];

var issue_samples = [
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/web', 'extra': '', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/js/webscripts_index_js_scripts.js', 'extra': '', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_js_scripts.js', 'extra': '', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_script_js_scripts.js', 'extra': '', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_index_style.css', 'extra': '', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_script_style.css', 'extra': '', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/static/webscripts_style.css', 'extra': '', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'extra': '', 'sid': '0', 'dir': '_i1/6' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://127.0.0.1:8000/web', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i2/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new', 'extra': '', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/', 'extra': '', 'sid': '0', 'dir': '_i5/1' } ]
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
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WebScripts 1.4.2', 'sid': '0', 'dir': '_i8/0' } ]
  }
];


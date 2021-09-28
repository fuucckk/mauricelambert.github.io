var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://127.0.0.1:8000/js/webscripts_index_js_scripts.js', 'dir': '_m0/0', 'linked': 2, 'len': 2263 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_js_scripts.js', 'dir': '_m0/1', 'linked': 2, 'len': 4326 },
    { 'url': 'http://127.0.0.1:8000/js/webscripts_script_js_scripts.js', 'dir': '_m0/2', 'linked': 2, 'len': 21573 },
    { 'url': 'http://127.0.0.1:8000/api', 'dir': '_m0/3', 'linked': 0, 'len': 20055 },
    { 'url': 'http://127.0.0.1:8000/web', 'dir': '_m0/4', 'linked': 2, 'len': 7028 },
    { 'url': 'http://127.0.0.1:8000/web/auth', 'dir': '_m0/5', 'linked': 2, 'len': 8228 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/auth/', 'dir': '_m1/0', 'linked': 0, 'len': 10754 },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new', 'dir': '_m1/1', 'linked': 2, 'len': 10737 },
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new//', 'dir': '_m1/2', 'linked': 2, 'len': 10749 },
    { 'url': 'http://127.0.0.1:8000/static/commons.html', 'dir': '_m1/3', 'linked': 2, 'len': 43873 },
    { 'url': 'http://127.0.0.1:8000/static/error_pages.html', 'dir': '_m1/4', 'linked': 2, 'len': 8560 },
    { 'url': 'http://127.0.0.1:8000/static/Errors.html', 'dir': '_m1/5', 'linked': 2, 'len': 32865 },
    { 'url': 'http://127.0.0.1:8000/static/manage_defaults_databases.html', 'dir': '_m1/6', 'linked': 2, 'len': 27643 },
    { 'url': 'http://127.0.0.1:8000/static/Pages.html', 'dir': '_m1/7', 'linked': 2, 'len': 7545 },
    { 'url': 'http://127.0.0.1:8000/static/requests_management.html', 'dir': '_m1/8', 'linked': 2, 'len': 11938 },
    { 'url': 'http://127.0.0.1:8000/static/uploads_management.html', 'dir': '_m1/9', 'linked': 2, 'len': 13731 },
    { 'url': 'http://127.0.0.1:8000/static/utils.html', 'dir': '_m1/10', 'linked': 2, 'len': 16998 },
    { 'url': 'http://127.0.0.1:8000/static/WebScripts.html', 'dir': '_m1/11', 'linked': 2, 'len': 20348 } ]
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
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m5/0', 'linked': 2, 'len': 165 } ]
  }
];

var issue_samples = [
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://127.0.0.1:8000/error_pages/Report/new', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/web', 'extra': '', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/devops.sfish', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i1/0' } ]
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
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WebScripts 1.4.13', 'sid': '0', 'dir': '_i8/0' } ]
  }
];


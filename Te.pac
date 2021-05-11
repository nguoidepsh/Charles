function alert_eval(str) { alert(str + ' is ' + eval(str)) }
function FindProxyForURL(url, host) {
  alert_eval('isInNet(host, "63.245.213.24", "255.255.255.255")')
  // "PAC-alert: isInNet(host, "63.245.213.24", "255.255.255.255") is true"
}

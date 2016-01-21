115200

usr: pi
pwd: raspberry

usr: root
pwd: raspberry


1. 中文乱码
SecureCRT选项->会话选项->外观->字符编码->UTF-8 

2. 互传文件
sudo apt-get update
sudo apt-get install lrzsz

3. WiFi连接
扫描 => sudo iwlist wlan0 scan
无密 => sudo iwconfig wlan0 essid demo
有密 => sudo iwconfig wlan0 essid demo key 123456789
启动 => sudo ifconfig wlan0 up
DHCP => sudo dhclient wlan0

sudo vim /etc/wpa_supplicant/wpa_supplicant.conf

sudo wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf

sudo killall wpa_supplicant
sudo wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant_demo.conf


关闭连接  wpa_cli terminate
连接状态  wpa_cli status
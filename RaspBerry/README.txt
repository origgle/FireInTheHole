115200

usr: pi
pwd: raspberry

usr: root
pwd: raspberry


1. ��������
SecureCRTѡ��->�Ựѡ��->���->�ַ�����->UTF-8 

2. �����ļ�
sudo apt-get update
sudo apt-get install lrzsz

3. WiFi����
ɨ�� => sudo iwlist wlan0 scan
���� => sudo iwconfig wlan0 essid demo
���� => sudo iwconfig wlan0 essid demo key 123456789
���� => sudo ifconfig wlan0 up
DHCP => sudo dhclient wlan0

sudo vim /etc/wpa_supplicant/wpa_supplicant.conf

sudo wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf

sudo killall wpa_supplicant
sudo wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant_demo.conf


�ر�����  wpa_cli terminate
����״̬  wpa_cli status
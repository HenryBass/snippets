echo "Setting up antenna..."

sudo modprobe rt2800usb
sudo airmon-ng start wlx9cefd5fa4abc
airmon-ng check kill

echo "Setup Finished"

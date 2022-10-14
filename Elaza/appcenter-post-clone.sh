# Install watchman
echo "Install watchman -- start"
curl -LJO https://github.com/facebook/watchman/releases/download/v2022.08.15.00/watchman-v2022.08.15.00-macos.zip
unzip watchman-*-macos.zip
sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman
cd watchman-*-macos
sudo cp bin/* /usr/local/bin
sudo cp lib/* /usr/local/lib
sudo chmod 755 /usr/local/bin/watchman
sudo chmod 2777 /usr/local/var/run/watchman
watchman --version
cd ..

# Creates an .env from ENV variables to use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env

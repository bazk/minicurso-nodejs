# instalação do node e npm

mkdir -p ~/nodejs/src
cd ~/nodejs/src
wget http://nodejs.org/dist/node-latest.tar.gz
tar xzf node-latest.tar.gz
cd node-v*
./configure --prefix=~/nodejs
make install
FROM python:2.7

ENV TZ 'Asia/Manila'
RUN echo $TZ > /etc/timezone && \
apt-get update && apt-get install -y tzdata && \
rm /etc/localtime && \
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
dpkg-reconfigure -f noninteractive tzdata && \
apt-get clean

COPY . /usr/src/app/
WORKDIR /usr/src/app/
RUN chmod a+rwx -R /usr/src/app/
RUN pip install -r requirements.txt
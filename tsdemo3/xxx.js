
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip  on;

    include /etc/nginx/conf.d/*.conf;

    server{
        listen 80 default_server;
        root /opt/sati/workbench/master;
        index index.html;
        error_page 404 /index.html;

        location / {
                index index.html;
        }
        location = /ccb {
           # root /opt/sati/workbench/master;
           # index index.html;
                return 301 http://localhost:8099/;
        }
        location /app/ {
            proxy_pass http://192.168.1.44/;
        }
    }
    server{
        listen 8099;
        root /opt/sati/workbench/master;
        index index.html;
        error_page 404 /index.html;

        location / {
         index index.html;
        }

    }
    server {
        listen 8000;
        root /opt/sati/workbench/develop;                                                                                                                                                            index index.html;
        error_page 404 /index.html;

        location / {
            index index.html;
        }

        location /app/ {
            proxy_pass http://192.168.1.44:8088/;
        }
    }

    server {
        listen 8089;
        root /home/easyMock/easy-mock/dist;
        index index.html;
        error_page 404 /index.html;

        location / {
            proxy_pass http://localhost:7300;
        }
    }

    server {
        listen     8001;
        root       /opt/sati/workbench/shanghai-culture;
        index      index.html;
        error_page 404 /index.html;

        location / {
            index index.html;
        }

        location /app/ {
            proxy_pass http://192.168.1.44/;
        }
    }

    server {
        listen     8002;
        root       /opt/sati/workbench/test;
 index      index.html;
        error_page 404 /index.html;

        location / {
            index index.html;
        }

        location /app/ {
            proxy_pass http://192.168.1.133:8080;
        }
    }

    server {
        listen     9000;
        root       /opt/sati/workbench/dev-visual-upgrade;
        index      index.html;
        error_page 404 /index.html;

        location / {
            index index.html;
        }

        location /app/ {
            proxy_pass http://192.168.1.44/;
        }
    }


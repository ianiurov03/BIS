FROM nginx:alpine
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser --ingroup appgroup
WORKDIR /usr/share/nginx/html
RUN mkdir -p /var/cache/nginx && \
    chown -R appuser /var/cache/nginx && \
    mkdir -p /run && \
    chown -R appuser /run && \
    mkdir -p /var/log/nginx && \
    chown -R appuser /var/log/nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY . .
USER appuser
RUN rm -rf /var/cache/apt
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

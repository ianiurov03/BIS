FROM nginx:alpine
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser --ingroup appgroup
WORKDIR /usr/share/nginx/html
RUN mkdir -p /var/cache/nginx && \
    chown -R appuser /var/cache/nginx && \
    mkdir -p /run && \
    chown -R appuser /run
USER appuser
COPY . .
RUN rm -rf /var/cache/apt
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

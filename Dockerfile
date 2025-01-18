#베이스 도커 이미지
FROM nginx:latest

#"npm build" 결과를 도커 컨테이너 내부에 복사
COPY ./build /usr/share/nginx/html

#nginx 설정 파일을 컨테이너 내부에 복사
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#웹 포트 오픈
EXPOSE 80

#nginx 실행
CMD ["nginx", "-g", "daemon off;"]

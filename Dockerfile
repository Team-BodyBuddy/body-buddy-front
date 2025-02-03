#베이스 도커 이미지
FROM nginx:latest

#"npm build" 결과를 도커 컨테이너 내부에 복사
COPY ./build /usr/share/nginx/html

#nginx 설정 파일을 컨테이너 내부에 복사
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#시스템 환경변수 가져오기
ARG BUILD_TIMESTAMP
ARG BUILD_NUMBER

#빌드 관련 라벨 설정
LABEL build.branch "develop"
LABEL build.date ${BUILD_TIMESTAMP}
LABEL build.number ${BUILD_NUMBER}

#시간대 설정
ENV TZ=Asia/Seoul

#웹 포트 오픈
EXPOSE 80

#nginx 실행
CMD ["nginx", "-g", "daemon off;"]

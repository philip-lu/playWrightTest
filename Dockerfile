FROM mcr.microsoft.com/playwright:v1.32.0-jammy
ARG test_env
ENV test_env=$test_env
USER root
RUN mkdir /tests
COPY . /tests
WORKDIR /tests
RUN npm ci
RUN npx playwright install --with-deps
RUN npx playwright test -g '@uismoke' --project=chromium

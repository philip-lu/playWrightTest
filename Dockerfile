FROM mcr.microsoft.com/playwright:v1.32.0-jammy
USER root
RUN mkdir /tests
COPY . /tests
WORKDIR /tests
RUN npm install
RUN npx @playwright/test install
RUN npx playwright install --with-deps
RUN npx playwright test --project=chromium
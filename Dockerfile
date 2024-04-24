FROM gcr.io/distroless/nodejs18-debian11@sha256:61bda9d564bf1a64a6108dc3e318cae214a3b732cf413cc32e10c7fa2dfcc828

WORKDIR /aktivitetskrav-mikrofrontend

ENV NODE_ENV production

COPY dist ./dist

EXPOSE 8080

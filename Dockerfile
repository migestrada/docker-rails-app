FROM ruby:3.0.2-alpine3.14
RUN apk update
RUN apk add yarn postgresql-client
RUN apk add --virtual build-dependencies build-base
RUN apk add postgresql-dev tzdata
WORKDIR /myapp

EXPOSE 3000

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install

CMD ["rails", "server", "-b", "0.0.0.0"]
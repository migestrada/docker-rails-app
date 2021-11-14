FROM ruby:3.0.2-alpine3.14
RUN apk update
RUN apk add yarn postgresql-client
RUN apk add --virtual build-dependencies build-base
RUN apk add postgresql-dev tzdata
RUN apk add git
WORKDIR /myapp

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN gem update bundler
RUN bundle install
RUN yarn install

CMD ["rails", "server", "-b", "0.0.0.0"]
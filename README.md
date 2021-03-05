# Capstone Proposal

Name of Project: Guffaw?

Project's Purpose or Goal: (allow users to send messages to contacts and potentially send other media types as well)

List the absolute minimum features the project requires to meet this purpose or goal:

A user can sign up and create an account

A user can send a text message

## What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

Socket.io - I will probably start here

React -

Firebase - potentially for saving chat history? Ideally, if some stretch goals are reached, save other types of files sent between users

## If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

-User can send voice message using default system microphone (or file upload)

-Speech-to-text message

-Utilize an encryption library

-A user can send/accept friend requests

## What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

Either SoX or tonejs to access microphone and save audio

Google Speech-to-Text API for transcription services (free 60min/mo)

Encryption Libraries, one for Native: Crypto-js

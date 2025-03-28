# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.18.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.17.0...v0.18.0) (2025-03-28)

### Features

- **core:** add conversationId to AgentContext, fix typos in memory plugin template methods ([e02e7e8](https://github.com/UraniumCorporation/maiar-ai/commit/e02e7e8397d4de6ee79b8c9d6d83910e817e2117))
- **core:** add memory:remove_document memory:query to all MemoryProvider classes ([3fb4f69](https://github.com/UraniumCorporation/maiar-ai/commit/3fb4f69f90b00eb938fe3dbd96072e5da6e24edd))
- **core:** implement memory plugin for sqlite, postgres and filesystem based memory, add memory plugin to runtime plugin registry ([2a422f9](https://github.com/UraniumCorporation/maiar-ai/commit/2a422f95b56c344cf37b0d148979c0d9c0410321))
- **core:** update error handling for sandbox database file ([ea3b583](https://github.com/UraniumCorporation/maiar-ai/commit/ea3b5834656163920b83da13bc2e70bbeb051c2b))

# [0.17.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.16.1...v0.17.0) (2025-03-27)

### Features

- add logLevel type to MonitorEvent ([7c358bf](https://github.com/UraniumCorporation/maiar-ai/commit/7c358bf1505321bbe4e99277ed4f75a42b5e3045))

## [0.16.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.16.0...v0.16.1) (2025-03-24)

### Features

- capabilty compile time type checking with module augmentation ([369ddca](https://github.com/UraniumCorporation/maiar-ai/commit/369ddca5387289f5713b2f4eb23ee1704669c1f1))

# [0.16.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.15.0...v0.16.0) (2025-03-23)

### Features

- **plugin-discord:** more intelligent behavior in discord plugin ([4d9d845](https://github.com/UraniumCorporation/maiar-ai/commit/4d9d845fda6ba1041f650e813eae250ed0f3f34d))
- stand up discord plugin ([7f6df61](https://github.com/UraniumCorporation/maiar-ai/commit/7f6df6143ee956f89bf61090e8df39e47509e335))
- use new logging system instead of the old one ([a9e1ec3](https://github.com/UraniumCorporation/maiar-ai/commit/a9e1ec3ea67d6092a4ccbed25ec3183f34f887e5))

# [0.15.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.14.0...v0.15.0) (2025-03-23)

### Features

- add postgres memory provider for remote ([a1f1dad](https://github.com/UraniumCorporation/maiar-ai/commit/a1f1dad1520173e79629ba0e94c8498c2392f0f4))

# [0.14.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.13.0...v0.14.0) (2025-03-23)

### Features

- make monitor service a singleton ([da4c575](https://github.com/UraniumCorporation/maiar-ai/commit/da4c575c3280dba55bf39b8494a38f82dfd8c8cb))

# [0.13.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.12.0...v0.13.0) (2025-03-13)

### Bug Fixes

- address PR comments, remove sqlite-vec files, update capability aliases type and implementation ([d92fb59](https://github.com/UraniumCorporation/maiar-ai/commit/d92fb59a17d52395d2a9720df74a4af32d5a3b60))
- **deps:** update pnpm lock file ([ad2005a](https://github.com/UraniumCorporation/maiar-ai/commit/ad2005afbc61d6d47dff4fc2e16fbaa35f6ff145))

### Features

- **core:** cleanup unused code and duplicate methods ([9e1cdbf](https://github.com/UraniumCorporation/maiar-ai/commit/9e1cdbf689652e5e2873f060dd88fee8831ba0ba))
- **core:** dynamic type definitions for capabilities ([772c6a1](https://github.com/UraniumCorporation/maiar-ai/commit/772c6a1f51a53b89de43af9d280fa8c4c1bfc858))
- **core:** multimodal model support with capabilities registry ([064aa57](https://github.com/UraniumCorporation/maiar-ai/commit/064aa5740e0cb1a401305ee0aaa888134f1eb022))
- **core:** runtime type checking for capability execute methods ([e1ab2b1](https://github.com/UraniumCorporation/maiar-ai/commit/e1ab2b1f716a706c873e24f0fe593b8110d96993))
- **core:** update log messages and JSDoc comments ([df48c33](https://github.com/UraniumCorporation/maiar-ai/commit/df48c33b609005541eb2fc85230a5b74b96dbd11))

# [0.12.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.11.0...v0.12.0) (2025-03-13)

### Features

- **plugin-x:** use official x api ([50c258d](https://github.com/UraniumCorporation/maiar-ai/commit/50c258db115ae7e994759db76a6383879c5e378f))

### BREAKING CHANGES

- **plugin-x:** x plugin configuration change, complete auth flow rework

# [0.11.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.10.0...v0.11.0) (2025-03-06)

### Features

- add a chat panel to work with the model directly in the dashboard ([fccf2dd](https://github.com/UraniumCorporation/maiar-ai/commit/fccf2dd354ef1b02b7b3b44e8a4c5d1fedd0fcb8))
- cool looking agent client ([bcaca88](https://github.com/UraniumCorporation/maiar-ai/commit/bcaca880f1580b3fbee304bb35123d29c3f3de98))
- **core:** monitoring provider standup ([e15b347](https://github.com/UraniumCorporation/maiar-ai/commit/e15b347146ef9712d055e2515ad0a8af0e6c00e4))

# [0.10.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.9.0...v0.10.0) (2025-02-27)

### Features

- **core:** add dynamic pipeline evaluation and modification with permissions plugin example ([f1143f1](https://github.com/UraniumCorporation/maiar-ai/commit/f1143f1b1e918cceb996681f802604910b3f20b5))

# [0.9.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.8.0...v0.9.0) (2025-02-22)

### Bug Fixes

- add pnpm-locak.yaml ([bf39aae](https://github.com/UraniumCorporation/maiar-ai/commit/bf39aaea4ada05d5e8900f209cdcb9e5afd14c2f))
- address comments & update docs ([250de8f](https://github.com/UraniumCorporation/maiar-ai/commit/250de8f3b19fa15eaaba21c1a2dd2fba24966053))
- incorrect types used on handlers ([c047356](https://github.com/UraniumCorporation/maiar-ai/commit/c0473567dd0e9de1876bd059f78c7276a70d0fc6))
- update landing page ca ([8e15e19](https://github.com/UraniumCorporation/maiar-ai/commit/8e15e191da01456af069c412af5bc788221bdcf2))

### Features

- breaking change: making plugin-telegram composable through composers ([965d1a0](https://github.com/UraniumCorporation/maiar-ai/commit/965d1a043a3f658b8c92c5acff4f60bca473aa31))
- making telegram plugin generic ([6f3ed20](https://github.com/UraniumCorporation/maiar-ai/commit/6f3ed207161f1fa23317d87ac371793a7b564828))
- plugin-telegram changes ([4f3fd3c](https://github.com/UraniumCorporation/maiar-ai/commit/4f3fd3c0a1cc830ba4db1470a0262140c98868f0))

### BREAKING CHANGES

- moving telegram plugin to accept Telegraf composer resulting in a backwards compatability break

# [0.8.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.7.0...v0.8.0) (2025-02-20)

### Features

- **maiar-starter:** add terminal plugin to starter project ([297ec63](https://github.com/UraniumCorporation/maiar-ai/commit/297ec63bf3c496a17bf1d9bb90ee8817d1e1dce2))
- **plugin-terminal:** generic chat feature, configurable through plugin class ([55b2797](https://github.com/UraniumCorporation/maiar-ai/commit/55b27979013abc3aaa9688287baf2430926be148))

# [0.7.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.6.1...v0.7.0) (2025-02-19)

### Features

- plugin-x abstract more settings to plugin config ([459502c](https://github.com/UraniumCorporation/maiar-ai/commit/459502c9c8962ae927f210854afe2cce6331b457))

## [0.6.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.6.0...v0.6.1) (2025-02-18)

### Bug Fixes

- correct error logging syntax in plugin-x ([8861366](https://github.com/UraniumCorporation/maiar-ai/commit/8861366aa6986a557c22f8ad1e9a25fe4e0b6667))

# [0.6.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.5.0...v0.6.0) (2025-02-18)

### Bug Fixes

- support methods on ExpressRoutes ([a5d1a6e](https://github.com/UraniumCorporation/maiar-ai/commit/a5d1a6e2504ba8744adce3d0baf02737418ade44))

### Features

- support method specification in ExpressRoute type ([527d950](https://github.com/UraniumCorporation/maiar-ai/commit/527d95054e00bfbf66b2480af933cb9098913aba))

# [0.5.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.4.0...v0.5.0) (2025-02-17)

### Bug Fixes

- **core:** :drunk: :recycle: remove repeated code ([fd0fd68](https://github.com/UraniumCorporation/maiar-ai/commit/fd0fd681012074376501dc1c78796d944ababfd9))
- **core:** :recycle: checkHealth init for ollama/deepseek ([ae7f69a](https://github.com/UraniumCorporation/maiar-ai/commit/ae7f69aaf14f7ede1226efeab33d147cbe0b6f57))
- **core:** :recycle: create strategy to share ollama verification ([0af1bc9](https://github.com/UraniumCorporation/maiar-ai/commit/0af1bc95c14c225e6e84d5fa9ea67406136aedce))
- **core:** :recycle: fix checkHealth for ollama models API ([18e4a2c](https://github.com/UraniumCorporation/maiar-ai/commit/18e4a2c7342f000473d6912530e6e4b45b4b56b8))
- **core:** :recycle: split init() and checkHealth() in runtime ([e893a5e](https://github.com/UraniumCorporation/maiar-ai/commit/e893a5e0f04b843b15ef4e1c25ecb37829ad5186))
- **core:** add checkHealth for Deepseek model ([a3c119b](https://github.com/UraniumCorporation/maiar-ai/commit/a3c119b8ec19a15ccb5cf435980980b5173fcde5))
- **core:** openai checkHealth should limit response payload + maxTokens ([3e81ddd](https://github.com/UraniumCorporation/maiar-ai/commit/3e81ddd082c5047709d9d27553fc54aaf8b0c251))

### Features

- **core:** :recycle: add openai checkHealth() ([96cd9e4](https://github.com/UraniumCorporation/maiar-ai/commit/96cd9e424358d1865f0bd34a96d0c090103325ef))
- **core:** :recycle: implement checkHealth for Ollama ([fb6c13d](https://github.com/UraniumCorporation/maiar-ai/commit/fb6c13d11eb49b4bfcf13e54211e1aa52071d3b5))
- **core:** add checkHealth extention to model core ([f923b74](https://github.com/UraniumCorporation/maiar-ai/commit/f923b7432578490f4f10bf177bcdcd273677bcf7))
- **core:** add info-level log to model init ([381119f](https://github.com/UraniumCorporation/maiar-ai/commit/381119f7548fa3cddff95ea89620f9d00f15cc7c))
- **core:** print existing ollama models when healthcheck fails ([365bbbf](https://github.com/UraniumCorporation/maiar-ai/commit/365bbbf761a8b291c4af867f4a2879991d11bac8))

# [0.4.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.3.0...v0.4.0) (2025-02-15)

### Features

- perplexity search plugin ([e32dea6](https://github.com/UraniumCorporation/maiar-ai/commit/e32dea6c4c55f5bae3609accf954ea1a5941ca61))

# [0.3.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.2.0...v0.3.0) (2025-02-15)

### Features

- plugin for character configuration ([73fb16b](https://github.com/UraniumCorporation/maiar-ai/commit/73fb16b3a27d2daca55d759692e7b4b7c05e3398))

# [0.2.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.1.2...v0.2.0) (2025-02-15)

### Features

- stand up x plugin ([a07886a](https://github.com/UraniumCorporation/maiar-ai/commit/a07886a3ccd22bdbbfc0ea02113c6ed52afed81f))

# 0.1.2 (2025-02-12)

# 🎉 Introducing Maiar v0.1.2

The initial release of Maiar, a composable, plugin-based AI agent framework.  
This release includes the core framework and official plugins we will support, which include:

- 🧠 Models
- 🔌 Integrations
- 💾 Memory Providers

# 📦 Packages

- ⚙️ Core
  - 🏗 **@maiar-ai/core** - The core framework for building AI agents.
- 🔌 Official Plugins
  - 🧠 Models
    - 🤖 **@maiar-ai/model-openai** - An OpenAI model provider.
    - 🦙 **@maiar-ai/model-ollama** - An Ollama model provider.
  - 🔗 Integrations
    - 🌐 **@maiar-ai/plugin-express** - A plugin for using Maiar with Express.
    - ✍️ **@maiar-ai/plugin-text** - A plugin for text generation capabilities.
    - 🖥️ **@maiar-ai/plugin-terminal** - A plugin for command-line interface interactions.
    - 🔄 **@maiar-ai/plugin-websocket** - A plugin for WebSocket communication.
    - 📩 **@maiar-ai/plugin-telegram** - A plugin for Telegram bot integration.
    - ⏳ **@maiar-ai/plugin-time** - An example plugin for adding time to the agent context.
    - 🖼️ **@maiar-ai/plugin-image** - A plugin for image processing capabilities.
  - 💾 Memory Providers
    - 📂 **@maiar-ai/memory-filesystem** - A filesystem-based memory provider.
    - 🗄️ **@maiar-ai/memory-sqlite** - A SQLite-based memory provider.

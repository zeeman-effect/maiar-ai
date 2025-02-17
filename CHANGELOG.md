# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

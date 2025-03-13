# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.13.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.12.0...v0.13.0) (2025-03-13)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.12.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.11.0...v0.12.0) (2025-03-13)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.11.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.10.0...v0.11.0) (2025-03-06)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.10.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.9.0...v0.10.0) (2025-02-27)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.9.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.8.0...v0.9.0) (2025-02-22)

### Bug Fixes

- address comments & update docs ([250de8f](https://github.com/UraniumCorporation/maiar-ai/commit/250de8f3b19fa15eaaba21c1a2dd2fba24966053))
- incorrect types used on handlers ([c047356](https://github.com/UraniumCorporation/maiar-ai/commit/c0473567dd0e9de1876bd059f78c7276a70d0fc6))

### Features

- breaking change: making plugin-telegram composable through composers ([965d1a0](https://github.com/UraniumCorporation/maiar-ai/commit/965d1a043a3f658b8c92c5acff4f60bca473aa31))
- making telegram plugin generic ([6f3ed20](https://github.com/UraniumCorporation/maiar-ai/commit/6f3ed207161f1fa23317d87ac371793a7b564828))
- plugin-telegram changes ([4f3fd3c](https://github.com/UraniumCorporation/maiar-ai/commit/4f3fd3c0a1cc830ba4db1470a0262140c98868f0))

### BREAKING CHANGES

- moving telegram plugin to accept Telegraf composer resulting in a backwards compatability break

# [0.8.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.7.0...v0.8.0) (2025-02-20)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.7.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.6.1...v0.7.0) (2025-02-19)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.6.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.5.0...v0.6.0) (2025-02-18)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.5.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.4.0...v0.5.0) (2025-02-17)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.4.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.3.0...v0.4.0) (2025-02-15)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.3.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.2.0...v0.3.0) (2025-02-15)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

# [0.2.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.1.2...v0.2.0) (2025-02-15)

**Note:** Version bump only for package @maiar-ai/plugin-telegram

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

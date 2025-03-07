# maiar-ai/core

Maiar is designed around the **thesis** that AI agents, in their current iteration, primarily consist of three major steps:

1. **Data Ingestion & Triggers** – What causes the AI to act.
2. **Decision-Making** – How the AI determines the appropriate action.
3. **Action Execution** – Carrying out the selected operation.

Instead of rigid workflows or monolithic agent logic, Maiar abstracts these steps into a **modular, plugin-based system**. Developers define **triggers** and **actions** as standalone plugins, while the core runtime dynamically handles decision-making. This enables a highly extensible, composable, and model driven framework where new functionality can be added seamlessly.

You can read about how to use the core library in the [API Documentation](https://maiar.dev/api).

## **How It Works**

At its core, Maiar builds execution pipelines dynamically. When an event or request is received, the runtime:

1. **Processes triggers** to determine when and how the AI should act.
2. **Uses model based reasoning** to construct an execution pipeline.
3. **Runs plugins in sequence**, modifying a structured **context chain** as it progresses.

Rather than hardcoding client logic, Maiar produces **emergent behavior** by selecting the most relevant plugins and actions based on context. This enables adaptability and ensures that agents can evolve without rewriting core logic.

## **Pipes & Context Chains**

Maiar's architecture is influenced by **Unix pipes**, where structured input flows through a sequence of operations, using a standard in and out data interface. Each plugin acts as an independent unit:

1. **Receives input (context) from prior steps**
2. **Performs a specific operation**
3. **Outputs a structured result to the next step**

This structured **context chain** ensures:

- **Highly composable plugins** – New functionality can be added without modifying existing logic.
- **Dynamic execution pipelines** – Workflows are built on-the-fly rather than being hardcoded.
- **Transparent debugging & monitoring** – Each step in the chain is tracked and can be audited.

This design enables Maiar to remain **declarative** and **extensible**, allowing developers to build complex AI workflows without locking themselves into rigid architectures.

## **Extensibility & Modularity**

Maiar is intentionally **unopinionated** about external dependencies, ensuring developers have full control over their infrastructure. The framework avoids enforcing specific technologies, making it easy to integrate with:

- **Database Adapters** – Works with any database system.
- **Model Providers** – Supports OpenAI, local models, or custom integrations.
- **Logging & Monitoring** – Custom logging systems can be plugged in without modifying core logic.
- **Future Expansions** – As needs evolve, new capabilities can be added without disrupting existing workflows.

By maintaining a **flexible core**, Maiar ensures that AI agents can adapt to different environments and use cases without unnecessary constraints.

## **Design Principles**

- **Plugin-First** – Every capability, from event ingestion to action execution, is encapsulated in a plugin.
- **Modular & Composable** – No rigid loops, no hardcoded workflows. The agent dynamically assembles execution pipelines.
- **Model-Driven Behavior** – Instead of pre-defined workflows, the AI evaluates its available tools and selects the best course of action.
- **Declarative Plugin Interface** – Plugins declare their triggers and actions, while the runtime orchestrates them.
- **Pipes & Context Chains** – Input flows through plugins in a structured sequence, mirroring Unix pipes.
- **Extensibility & Flexibility** – The core library avoids enforcing specific tools or integrations. It's designed around interfaces and providers that allow you to plug in your own tools and integrations.

## **Why Maiar?**

- **Effortless Development** – Define a plugin, specify its triggers & actions, and the agent handles the rest.
- **Dynamic AI Workflows** – Pipelines are built on-the-fly, allowing flexible and emergent behavior.
- **Composability-First** – Standardized context chains make plugins reusable and easily integrable.
- **Unopinionated & Extensible** – Developers have full control over databases, models, and infrastructure choices.

Maiar isn't just another AI agent framework—it's a **declarative, extensible, and composable way to build intelligent applications**. Whether you're adding new capabilities or integrating with existing platforms, Maiar makes it simple.

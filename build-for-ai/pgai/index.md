---
title: Build search, RAG, and other AI apps with pgai
excerpt: Develop RAG, semantic search, and other AI applications directly in PostgreSQL
products: [cloud]
keywords: [ai, vector, pgvector, timescale vector, pgvectorizer]
tags: [ai, vector, pgvectorizer]
---

# Build search, RAG, and other AI apps with pgai

pgai simplifies the process of building [search](https://en.wikipedia.org/wiki/Similarity_search),
[Retrieval Augmented Generation](https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation) (RAG), and other AI applications with PostgreSQL. It complements popular extensions for vector search in PostgreSQL like pgvector and pgvectorscale, building on top of their capabilities.

## Overview

The goal of pgai is to make working with AI easier and more accessible to developers. Because data is
the foundation of most AI applications, pgai makes it easier to leverage your data in AI workflows. In particular, pgai supports:

**Working with embeddings generated from your data:**
* Automatically create and sync vector embeddings for your data ([learn more](#automatically-create-and-sync-llm-embeddings-for-your-data))
* Search your data using vector and semantic search ([learn more](#search-your-data-using-vector-and-semantic-search))
* Implement Retrieval Augmented Generation inside a single SQL statement ([learn more](#implement-retrieval-augmented-generation-inside-a-single-sql-statement))
* Perform high-performance, cost-efficient ANN search on large vector workloads with [pgvectorscale](https://github.com/timescale/pgvectorscale), which complements pgvector.

**Leverage LLMs for data processing tasks:**
* Retrieve LLM chat completions from models like Claude Sonnet 3.5, OpenAI GPT4o, Cohere Command, and Llama 3 (via Ollama). ([learn more](#usage-of-pgai))
* Reason over your data and facilitate use cases like classification, summarization, and data enrichment on your existing relational data in PostgreSQL ([see an example](/docs/openai.md)).

This section shows you how to :

* Get started: explanation 
* other docs

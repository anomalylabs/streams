---
title: Data Modeling
category: core_concepts
intro: Data modeling is where we begin.
stage: drafting
enabled: true
sort: 0
---

## Introduction

Data modeling is a fundamental aspect of building with the Streams platform.

- [Data Modeling Introduction](core/introduction#data-modeling)

### Domain Information

The Streams platform leans heavily on domain-driven design (DDD). We call these domain abstractions `streams`, hence our namesake.

An example could be configuring a domain model (a stream) for a website's pages, users of an application, or feedback submissions from a form.

- [Defining Streams](/docs/core/streams#defining-streams)

#### Data Sources

If not configured otherwise, streams will utilize the built-in flat-file database. All databases available to Laravel are supported as well.

- [Stream Sources](/docs/core/sources)

### Domain Entities

Domain entities are called `entries` within the Streams platform. A stream also defines entry attributes, or fields, that dictate the entry's properties, data-casting, and more.

- [Stream Entries](/docs/core/entries)
- [Entry Fields](/docs/core/fields)
- [Field Types](/docs/core/fields#field-types)

### Retrieving Entities

The Streams platform separates methods to retrieve and store entries from the entry objects themselves, less a few convenient functions like `save` and `delete`, by using a repository pattern.

- [Repositories](/docs/core/repositories)
- [Querying Entries](/docs/core/querying)

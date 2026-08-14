// Auto-généré depuis src/pages/e/blog/*.astro - liste partagée home + archive (/blog). Trié date desc.
// ⚠️ À REGÉNÉRER APRÈS CHAQUE AJOUT : un article absent d'ici répond 200 mais n'est
// listé nulle part. 25 articles étaient dans ce cas de juin au 2026-08-14.
// Contrôle: python3 scripts/guard-index-desync.py (câblé dans cortex-cycle §0-ter).
export const articles = [
  {
    "href": "/e/blog/2026-08-14-what-is-opentelemetry.html",
    "title": "What Is OpenTelemetry? Traces, Metrics and Logs Explained (2026)",
    "dek": "OpenTelemetry is a vendor-neutral standard for producing traces, metrics and logs: you instrument your code once and choose the backend afterwards. What the API, SDK and Collector each do, what the three signals are for, and what OpenTelemetry deliberately does not give you.",
    "img": "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "imgAlt": "A silver laptop open on a dark low table in a living room, its screen filled with a web analytics dashboard: a trend line, a blue cohort grid, a world map and a blue donut chart",
    "date": "Aug 14, 2026",
    "read": "9 min read",
    "cats": "Opentelemetry, Observability, Devops"
  },
  {
    "href": "/e/blog/2026-08-12-read-haskell-type-signature.html",
    "title": "How to Read a Haskell Type Signature (2026)",
    "dek": "Haskell signatures look cryptic until you know the three rules that govern them: the arrow groups to the right, lowercase names are variables, and the fat arrow is not an argument. Read left to right, with worked examples.",
    "img": "https://images.pexels.com/photos/4458203/pexels-photo-4458203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "imgAlt": "A blue-toned architectural drawing photographed at a shallow angle, its cover sheet lettered in white with the Russian words for architectural drawings above a dimensioned floor plan",
    "date": "Aug 12, 2026",
    "read": "8 min read",
    "cats": "Haskell, Types, Beginners"
  },
  {
    "href": "/e/blog/2026-08-10-hoogle-haskell-search.html",
    "title": "Hoogle: Searching Haskell by Type Signature (2026)",
    "dek": "Hoogle searches the Haskell libraries by function name and, unusually, by type signature. How type search works, the query syntax that matters, how to scope results to your own dependencies, and when to run it locally.",
    "img": "https://images.pexels.com/photos/6550462/pexels-photo-6550462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "imgAlt": "A wall of pale wooden card-catalogue drawers with small metal label holders, one drawer pulled out at mid height revealing tightly packed upright index cards",
    "date": "Aug 10, 2026",
    "read": "7 min read",
    "cats": "Haskell, Hoogle, Tooling"
  },
  {
    "href": "/e/blog/2026-08-07-what-is-cron.html",
    "title": "What Is Cron? The Five Fields, and the One That Is an OR (2026)",
    "dek": "A cron expression is five fields and a command. Most of it is obvious. The part that is not, and that silently runs jobs on days you never intended, is what happens when you fill in both day-of-month and day-of-week.",
    "img": "https://images.pexels.com/photos/2087742/pexels-photo-2087742.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "imgAlt": "A vintage Kodak mechanical darkroom timer on a wooden surface, its dial marked in minutes",
    "date": "Aug 7, 2026",
    "read": "8 min read",
    "cats": "Cron, Scheduling, Unix"
  },
  {
    "href": "/e/blog/2026-08-06-what-is-regex.html",
    "title": "What Is Regex? Patterns, Engines, and the One That Hangs Your Server (2026)",
    "dek": "A regular expression is a small language for describing shapes of text. What the common symbols mean, why the same pattern behaves differently across languages, and the catastrophic backtracking case that turns a harmless-looking regex into an outage.",
    "img": "https://cdn.pixabay.com/photo/2018/04/22/14/32/fishing-nets-3341187_1280.jpg",
    "imgAlt": "Piles of pale fishing nets, two different mesh sizes side by side, filling the frame",
    "date": "Aug 6, 2026",
    "read": "9 min read",
    "cats": "Regex, Patterns, Security"
  },
  {
    "href": "/e/blog/2026-08-05-what-is-serverless.html",
    "title": "What Is Serverless? The Servers Are Still There (2026)",
    "dek": "Serverless does not mean there is no server. It means you do not provision, patch or size one. What it actually removes, how per-invocation billing works, the constraints the pitch leaves out, and the traffic level where a plain VPS costs less.",
    "img": "https://cdn.pixabay.com/photo/2024/02/14/22/47/pylon-8574348_1280.jpg",
    "imgAlt": "Looking straight up through the steel lattice of an electricity transmission pylon against a blue sky",
    "date": "Aug 5, 2026",
    "read": "7 min read",
    "cats": "Serverless, Cloud, Architecture"
  },
  {
    "href": "/e/blog/2026-08-04-cabal-add-dependency.html",
    "title": "How to Add a Dependency in Cabal: build-depends, Version Bounds and the PVP (2026)",
    "dek": "Adding a package to a Haskell project means editing build-depends in the .cabal file. What the field expects, what the caret operator really means under the Package Versioning Policy, and why cabal update matters before anything else.",
    "img": "https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_1280.jpg",
    "imgAlt": "Tall stacks of second-hand books filling a bookshop aisle",
    "date": "Aug 4, 2026",
    "read": "7 min read",
    "cats": "Haskell, Cabal, Packages"
  },
  {
    "href": "/e/blog/2026-08-02-what-is-webassembly.html",
    "title": "What Is WebAssembly? A Compilation Target, Not a Language (2026)",
    "dek": "WebAssembly is a binary instruction format for a stack-based virtual machine, and a portable compilation target for other languages. What the official definition says, the four design goals, and why it was never limited to the browser.",
    "img": "https://images.pexels.com/photos/20034017/pexels-photo-20034017.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "imgAlt": "Shipping containers stacked several rows high against a blue sky",
    "date": "Aug 2, 2026",
    "read": "7 min read",
    "cats": "Wasm, Compilers, Web"
  },
  {
    "href": "/e/blog/2026-07-31-haskell-vs-rust.html",
    "title": "Haskell vs Rust (2026): Two Answers to the Same Question",
    "dek": "Haskell and Rust both promise correctness through the type system, then diverge completely on memory. Garbage collection versus ownership, lazy versus strict, and which question each one actually answers.",
    "img": "https://images.pexels.com/photos/17342282/pexels-photo-17342282.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "imgAlt": "Two dirt tracks diverging across a meadow under an overcast sky",
    "date": "Jul 31, 2026",
    "read": "8 min read",
    "cats": "Haskell, Rust, Types"
  },
  {
    "href": "/e/blog/2026-07-21-what-is-a-linked-list.html",
    "title": "What Is a Linked List? Nodes, Pointers and Trade-offs, Explained (2026)",
    "dek": "A linked list stores a sequence as a chain of nodes, where each node holds a value and a pointer to the next one. How singly and doubly linked lists work, how they compare to arrays, the real complexities, and when to reach for one.",
    "img": "/img/2026-07-21-what-is-a-linked-list-hero.jpg",
    "imgAlt": "Programming code on a screen",
    "date": "Jul 21, 2026",
    "read": "8 min read",
    "cats": "Data-structures, Linked-list, Concepts"
  },
  {
    "href": "/e/blog/2026-07-18-what-is-a-cdn.html",
    "title": "What Is a CDN? Content Delivery Networks, Explained (2026)",
    "dek": "A CDN caches your static content on servers spread around the world so visitors get it from a nearby machine. How the edge, cache hit and miss, TTL and invalidation work, static vs dynamic, and where a CDN fits with your host.",
    "img": "/img/2026-07-18-what-is-a-cdn-hero.jpg",
    "imgAlt": "A world map with connected network nodes representing a global delivery network",
    "date": "Jul 18, 2026",
    "read": "8 min read",
    "cats": "Cdn, Performance, Web"
  },
  {
    "href": "/e/blog/2026-07-16-what-is-a-hash-table.html",
    "title": "What Is a Hash Table? Fast Key-Value Lookup, Explained (2026)",
    "dek": "A hash table stores key-value pairs and finds any value by its key in roughly constant time. How the hash function and buckets work, how collisions are handled, the real complexity, and why dictionaries are built on it.",
    "img": "/img/2026-07-16-what-is-a-hash-table-hero.jpg",
    "imgAlt": "Colorful programming code on a screen",
    "date": "Jul 16, 2026",
    "read": "8 min read",
    "cats": "Data-structures, Hash-table, Concepts"
  },
  {
    "href": "/e/blog/2026-07-14-what-is-big-o-notation.html",
    "title": "What Is Big O Notation? Time Complexity, Explained Simply (2026)",
    "dek": "Big O notation describes how an algorithm slows down as the input grows. The common complexities from O(1) to O(n!), why constants are dropped, real examples, and how to reason about the performance of your own code.",
    "img": "/img/2026-07-14-what-is-big-o-notation-hero.jpg",
    "imgAlt": "Close-up of colorful programming code on a screen",
    "date": "Jul 14, 2026",
    "read": "8 min read",
    "cats": "Algorithms, Complexity, Concepts"
  },
  {
    "href": "/e/blog/2026-07-13-gitea-docker-cve-2026-20896.html",
    "title": "Gitea Docker Auth Bypass (CVE-2026-20896): Are You Exposed, and How to Fix It",
    "dek": "A critical authentication bypass in the official Gitea Docker image (CVE-2026-20896, CVSS 9.8) is under active exploitation. What the flaw is, who is actually affected, and the exact steps to check and fix a self-hosted Gitea.",
    "img": "/img/2026-07-13-gitea-docker-cve-2026-20896-hero.jpg",
    "imgAlt": "A hand working on a server in a blue-lit data center rack",
    "date": "Jul 13, 2026",
    "read": "6 min read",
    "cats": "Security, Gitea, Docker"
  },
  {
    "href": "/e/blog/2026-07-10-open-source-single-maintainer-risk.html",
    "title": "The open-source library holding up your stack might have one maintainer",
    "dek": "Much of the modern software stack rests on small open-source projects run by one or two unpaid people. What xkcd 2347, Heartbleed, Log4Shell and the xz-utils backdoor teach about single-maintainer risk, and what teams can actually do about it.",
    "img": "/img/2026-07-10-open-source-single-maintainer-risk-hero.jpg",
    "imgAlt": "Syntax-highlighted source code on a dark screen",
    "date": "Jul 10, 2026",
    "read": "7 min read",
    "cats": "Opensource, Supplychain, Security"
  },
  {
    "href": "/e/blog/2026-07-09-what-is-a-message-queue.html",
    "title": "What Is a Message Queue? Producers, Consumers & Brokers Explained (2026)",
    "dek": "A message queue is a buffer between services: one part of your app drops off a task and another picks it up later. What a message queue is, producers vs consumers, pub/sub, delivery guarantees, and RabbitMQ vs Kafka vs Redis.",
    "img": "https://images.pexels.com/photos/18631424/pexels-photo-18631424.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "imgAlt": "An automated conveyor belt carrying items through a factory",
    "date": "Jul 9, 2026",
    "read": "8 min read",
    "cats": "Messagequeue, Architecture, Backend"
  },
  {
    "href": "/e/blog/2026-07-01-concurrency-vs-parallelism.html",
    "title": "Concurrency vs Parallelism: What's the Difference? (2026)",
    "dek": "Concurrency is about structuring a program to deal with many tasks at once (interleaving); parallelism is about executing multiple tasks literally at the same time on several cores. The core distinction, Rob Pike\\'s framing, threads vs async, Python and Haskell examples, when each matters, and common pitfalls.",
    "img": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "A macro photograph of a printed circuit board",
    "date": "Jul 1, 2026",
    "read": "9 min read",
    "cats": "Concurrency, Parallelism, Performance"
  },
  {
    "href": "/e/blog/2026-06-27-docker-vs-podman.html",
    "title": "Docker vs Podman: Which Container Engine, and When (2026)",
    "dek": "Docker runs containers through a central daemon; Podman is daemonless and rootless by design. They share OCI images and a near-identical CLI. Architecture, rootless security, pods, systemd, Compose and Docker Desktop licensing compared.",
    "img": "/img/what-is-a-webhook-2026-servers.jpg",
    "imgAlt": "A 3D render of three identical black server units side by side with green status lights",
    "date": "Jun 27, 2026",
    "read": "9 min read",
    "cats": "Docker, Podman, Containers"
  },
  {
    "href": "/e/blog/2026-06-26-what-is-a-load-balancer.html",
    "title": "What Is a Load Balancer? Spreading Traffic Across Servers (2026)",
    "dek": "A load balancer spreads incoming requests across several servers so none gets overwhelmed and the app stays up if one fails. What a load balancer is, the algorithms, L4 vs L7, health checks, and how it differs from a reverse proxy.",
    "img": "/img/load-balancer-2026.jpg",
    "imgAlt": "Rack-mounted server units in a data centre",
    "date": "Jun 26, 2026",
    "read": "8 min read",
    "cats": "Load-balancer, Scaling, Networking"
  },
  {
    "href": "/e/blog/2026-06-26-what-is-a-reverse-proxy.html",
    "title": "What Is a Reverse Proxy? Nginx, Caddy & Routing Explained (2026)",
    "dek": "A reverse proxy sits in front of your servers, takes every incoming request and forwards it to the right backend. What a reverse proxy is, how it differs from a forward proxy and a load balancer, why you use one (TLS, caching, routing), and the common tools.",
    "img": "/img/reverse-proxy-2026.jpg",
    "imgAlt": "Ethernet cables plugged into a network switch panel in a data centre",
    "date": "Jun 26, 2026",
    "read": "8 min read",
    "cats": "Reverse-proxy, Servers, Networking"
  },
  {
    "href": "/e/blog/2026-06-26-what-is-a-websocket.html",
    "title": "What Is a WebSocket? Real-Time, Two-Way Connections Explained (2026)",
    "dek": "A WebSocket keeps a single connection open so the server and browser can send messages to each other at any time. What a WebSocket is, how it differs from HTTP, the handshake, ws vs wss, and when to use it instead of polling.",
    "img": "/img/websocket-2026.jpg",
    "imgAlt": "Network cables plugged into a server rack in a data centre",
    "date": "Jun 26, 2026",
    "read": "8 min read",
    "cats": "Websocket, Realtime, Networking"
  },
  {
    "href": "/e/blog/2026-06-24-higher-order-functions.html",
    "title": "What Is a Higher-Order Function? Functions as Values, Explained (2026)",
    "dek": "A higher-order function takes a function as an argument or returns one as its result. What higher-order functions are, why map, filter and fold are the classic examples, how they replace loops, and how they work in Haskell.",
    "img": "/img/hof-laptop-editor.jpg",
    "imgAlt": "A laptop on a desk with a code editor open, showing syntax-highlighted source code",
    "date": "Jun 24, 2026",
    "read": "8 min read",
    "cats": "Functional, Concepts, Haskell"
  },
  {
    "href": "/e/blog/2026-06-23-what-is-a-compiler.html",
    "title": "What Is a Compiler? Source Code to Machine Code Explained (2026)",
    "dek": "A compiler turns the source code you write into a program the machine can run. What a compiler is, how it works stage by stage, compiler vs interpreter, and where GHC fits for Haskell.",
    "img": "/img/px-c0mp1ler-src.jpg",
    "imgAlt": "Highlighted C++ source code with line numbers in a dark editor",
    "date": "Jun 23, 2026",
    "read": "8 min read",
    "cats": "Compiler, Concepts, Haskell"
  },
  {
    "href": "/e/blog/2026-06-22-what-is-ci-cd.html",
    "title": "What Is CI/CD? Continuous Integration & Delivery Explained (2026)",
    "dek": "CI/CD automates the path from a code change to a tested, deployed application. What continuous integration and continuous delivery/deployment mean, how a pipeline works, the common tools, and why teams rely on it.",
    "img": "/img/ci-cd-hero.jpg",
    "imgAlt": "An industrial robotic arm on an automated production line",
    "date": "Jun 22, 2026",
    "read": "8 min read",
    "cats": "Cicd, Devops, Automation"
  },
  {
    "href": "/e/blog/2026-06-22-what-is-ssh.html",
    "title": "What Is SSH? Secure Shell Explained for Developers (2026)",
    "dek": "SSH (Secure Shell) is the encrypted protocol you use to log in to and run commands on a remote server safely. What SSH is, how the handshake and keys work, passwords vs SSH keys, and the everyday commands you actually need.",
    "img": "/img/px-3a3f8ed9e2ea.jpg",
    "imgAlt": "Lines of source code and a network port shown on a dark screen",
    "date": "Jun 22, 2026",
    "read": "8 min read",
    "cats": "Ssh, Servers, Security"
  },
  {
    "href": "/e/blog/2026-06-19-what-is-a-vps.html",
    "title": "What Is a VPS? Virtual Private Servers Explained (2026)",
    "dek": "A VPS (virtual private server) is your own isolated slice of a physical server, with dedicated resources and full root access. What a VPS is, how virtualization works, VPS vs shared/dedicated/cloud, managed vs unmanaged, and what you actually use one for.",
    "img": "/img/what-is-a-vps-2026.jpg",
    "imgAlt": "A close-up of a green printed circuit board with electronic components",
    "date": "Jun 19, 2026",
    "read": "8 min read",
    "cats": "Vps, Hosting, Servers"
  },
  {
    "href": "/e/blog/2026-06-19-what-is-docker.html",
    "title": "What Is Docker? Containers Explained Clearly (2026)",
    "dek": "Docker is a platform that packages an application and everything it needs into a container that runs the same way on any machine. What Docker is, containers vs virtual machines, the key concepts (image, container, Dockerfile, registry), why it matters, and Docker vs Kubernetes.",
    "img": "/img/what-is-docker-2026.jpg",
    "imgAlt": "A container ship loaded with stacked shipping containers at a port at night",
    "date": "Jun 19, 2026",
    "read": "8 min read",
    "cats": "Docker, Containers, Devops"
  },
  {
    "href": "/e/blog/2026-06-19-what-is-kubernetes.html",
    "title": "What Is Kubernetes? Container Orchestration Explained (2026)",
    "dek": "Kubernetes is an open-source system that runs and coordinates containers across many machines - scheduling, scaling, healing and networking them automatically. What Kubernetes is, the core concepts (pod, node, cluster, deployment, service), how it relates to Docker, and when you actually need it.",
    "img": "/img/what-is-kubernetes-2026.jpg",
    "imgAlt": "An old wooden ship's steering wheel, the helm",
    "date": "Jun 19, 2026",
    "read": "8 min read",
    "cats": "Kubernetes, Containers, Devops"
  },
  {
    "href": "/e/blog/2026-06-18-grpc-vs-rest.html",
    "title": "gRPC vs REST: Which API Style, and When (2026)",
    "dek": "gRPC vs REST in 2026: REST uses HTTP + JSON and is human-readable and universal; gRPC uses HTTP/2 + Protocol Buffers for fast, typed, streaming service-to-service calls. The real differences, performance, streaming, browser support, and when to pick each.",
    "img": "",
    "imgAlt": "A network switch with fibre-optic and Ethernet cables plugged in",
    "date": "Jun 18, 2026",
    "read": "8 min read",
    "cats": "Grpc, Rest, Api"
  },
  {
    "href": "/e/blog/2026-06-18-sql-vs-nosql.html",
    "title": "SQL vs NoSQL: which database, and when (2026)",
    "dek": "SQL vs NoSQL in 2026: SQL databases store structured data in related tables with a fixed schema and strong consistency; NoSQL trades some of that for flexible schemas and horizontal scale. The real differences, consistency, scaling, and which to choose.",
    "img": "",
    "imgAlt": "Rows of equipment racks in a data centre",
    "date": "Jun 18, 2026",
    "read": "8 min read",
    "cats": "Sql, Nosql, Databases"
  },
  {
    "href": "/e/blog/2026-06-18-what-is-an-ide.html",
    "title": "What Is an IDE? Integrated Development Environments (2026)",
    "dek": "An IDE (Integrated Development Environment) bundles a code editor, build tools, a debugger and more into one app - so you write, run and fix code in one place. What an IDE is, what it includes, IDE vs editor, and how to pick one.",
    "img": "",
    "imgAlt": "A code editor open on a laptop, showing syntax-highlighted code",
    "date": "Jun 18, 2026",
    "read": "7 min read",
    "cats": "Ide, Tools, Beginners"
  },
  {
    "href": "/e/blog/2026-06-17-rest-vs-graphql.html",
    "title": "REST vs GraphQL: Which API Style, Honestly (2026)",
    "dek": "REST and GraphQL are two ways to build a web API. REST uses many endpoints with fixed responses; GraphQL uses one endpoint where the client asks for exactly the fields it needs. The real differences, over/under-fetching, caching, and when to choose each.",
    "img": "",
    "imgAlt": "A laptop showing stylesheet code in a dark-themed editor",
    "date": "Jun 17, 2026",
    "read": "8 min read",
    "cats": "Api, Rest, Graphql"
  },
  {
    "href": "/e/blog/2026-06-17-what-is-a-webhook.html",
    "title": "What Is a Webhook? How They Work, with Examples (2026)",
    "dek": "A webhook is an automated HTTP request a service sends you when an event happens - the \"reverse\" of an API call you make. What webhooks are, how they differ from polling an API, how to receive one safely, and real examples.",
    "img": "",
    "imgAlt": "A server and a network switch connected by an orange Ethernet cable",
    "date": "Jun 17, 2026",
    "read": "7 min read",
    "cats": "Webhook, Api, Web"
  },
  {
    "href": "/e/blog/2026-06-16-what-is-recursion.html",
    "title": "What Is Recursion? A Clear Introduction with Examples (2026)",
    "dek": "Recursion is when a function calls itself to solve a problem by reducing it to smaller subproblems. What it is, the base case and recursive case, real code examples in Python and Haskell, recursion vs iteration, tail recursion, common pitfalls, and how it fits functional programming.",
    "img": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Colourful syntax-highlighted source code on a dark screen",
    "date": "Jun 16, 2026",
    "read": "8 min read",
    "cats": "Recursion, Concepts, Functional"
  },
  {
    "href": "/e/blog/2026-06-15-what-is-a-database.html",
    "title": "What Is a Database? A Clear Introduction (2026)",
    "dek": "A database is an organised collection of data, managed by software that lets you store, query and update it reliably. What a database is, relational vs NoSQL, key concepts (tables, schema, ACID), real examples, and how it relates to SQL.",
    "img": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Racks of servers in a data center",
    "date": "Jun 15, 2026",
    "read": "7 min read",
    "cats": "Database, Data, Concepts"
  },
  {
    "href": "/e/blog/2026-06-15-what-is-a-variable.html",
    "title": "What Is a Variable in Programming? A Clear Introduction (2026)",
    "dek": "A variable is a named container that holds a value your program can read and change. What a variable is, how you declare and assign one, types and scope, constants vs variables, and why they are the building blocks of every program.",
    "img": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Code on a computer screen",
    "date": "Jun 15, 2026",
    "read": "6 min read",
    "cats": "Variables, Basics, Concepts"
  },
  {
    "href": "/e/blog/2026-06-15-what-is-functional-programming.html",
    "title": "What Is Functional Programming? A Clear Introduction (2026)",
    "dek": "Functional programming is a style built on pure functions, immutability and treating functions as values. What it is, its core ideas, how it differs from imperative/OOP code, the trade-offs, and where Haskell fits.",
    "img": "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Lines of source code on a dark screen",
    "date": "Jun 15, 2026",
    "read": "7 min read",
    "cats": "Functional, Paradigms, Concepts"
  },
  {
    "href": "/e/blog/2026-06-14-ghc-compiler-guide.html",
    "title": "GHC, the Glasgow Haskell Compiler: a practical 2026 guide",
    "dek": "GHC is the standard Haskell compiler. What it is, installing it with GHCup, using GHCi, the flags that matter (-O2, -Wall, -threaded, -j), and how it fits with Cabal and Stack in 2026.",
    "img": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Source code on a screen",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Haskell, Ghc, Compiler"
  },
  {
    "href": "/e/blog/2026-06-14-ghcup-install-haskell.html",
    "title": "Install Haskell with GHCup: the 2026 toolchain guide (GHC, Cabal, Stack, HLS)",
    "dek": "GHCup is the recommended way to install and manage the Haskell toolchain in 2026. How to install GHC, cabal-install, Stack and the Haskell Language Server, switch versions, and fix the common pitfalls - on Linux, macOS and Windows.",
    "img": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Syntax-highlighted source code on a dark screen",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Haskell, Ghcup, Cabal"
  },
  {
    "href": "/e/blog/2026-06-14-haskell-language-server.html",
    "title": "Haskell Language Server (HLS) in 2026: setup, editors and common fixes",
    "dek": "A practical 2026 guide to the Haskell Language Server: what HLS does, installing it with GHCup, wiring it into VS Code and Neovim, matching it to your GHC version, and fixing the errors people hit most.",
    "img": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Source code open in a code editor",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Haskell, Hls, Editor"
  },
  {
    "href": "/e/blog/2026-06-14-haskell-list-comprehensions.html",
    "title": "Haskell List Comprehensions, Explained (2026)",
    "dek": "A list comprehension builds a list from one or more generators with optional guards - concise, readable, and close to mathematical set-builder notation. The syntax, multiple generators, guards, and how they relate to map and filter.",
    "img": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Source code on a screen",
    "date": "Jun 14, 2026",
    "read": "6 min read",
    "cats": "Haskell, Lists, Syntax"
  },
  {
    "href": "/e/blog/2026-06-14-haskell-monads.html",
    "title": "Monads in Haskell, explained without the jargon (2026)",
    "dek": "A monad in Haskell is a type that sequences computations carrying context - Maybe, Either, IO, lists. What a monad really is, bind (>>=) and return, do-notation, and the common monads, explained plainly.",
    "img": "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Source code on a dark screen",
    "date": "Jun 14, 2026",
    "read": "8 min read",
    "cats": "Haskell, Monads, Concepts"
  },
  {
    "href": "/e/blog/2026-06-14-lazy-evaluation-haskell.html",
    "title": "Lazy Evaluation in Haskell, Explained (2026)",
    "dek": "Lazy evaluation means Haskell computes a value only when it is actually needed - not when it is defined. What lazy evaluation is, thunks, why it enables infinite data structures, the space-leak trap, and how to force strictness with seq and BangPatterns.",
    "img": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "imgAlt": "Colourful source code on a screen",
    "date": "Jun 14, 2026",
    "read": "8 min read",
    "cats": "Haskell, Laziness, Concepts"
  },
  {
    "href": "/e/blog/2026-06-14-stack-vs-cabal-haskell.html",
    "title": "Stack vs Cabal: Choosing a Haskell Build Tool (2026)",
    "dek": "Cabal and Stack are the two main ways to build Haskell projects. What each one is, how they differ (Hackage vs Stackage, reproducibility, GHC management), the equivalent commands, and how to choose in 2026.",
    "img": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "A laptop on a desk showing code in an editor",
    "date": "Jun 14, 2026",
    "read": "8 min read",
    "cats": "Haskell, Cabal, Stack"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-an-algorithm.html",
    "title": "What Is an Algorithm? A Clear Introduction (2026)",
    "dek": "An algorithm is a finite, step-by-step procedure that turns input into a desired output. What an algorithm is, its key properties, everyday and code examples, why efficiency (Big-O) matters, and how it differs from a program.",
    "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Streams of green code on a dark screen",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Algorithm, Concepts, Cs"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-an-api.html",
    "title": "What Is an API? A Clear Introduction for Developers (2026)",
    "dek": "An API is a contract that lets one piece of software talk to another. What an API is, the main kinds (web/REST, library, OS), how a web API request and response work, and why APIs are everywhere in modern software.",
    "img": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Code on an editor screen",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Api, Web, Concepts"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-git.html",
    "title": "What Is Git? Version Control Explained for Beginners (2026)",
    "dek": "Git is a distributed version-control system that tracks every change to your code so you can branch, merge, collaborate and undo. What Git is, the core concepts (commit, branch, merge, remote), why it matters, and how it differs from GitHub.",
    "img": "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Lines of source code on a dark screen",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Git, Tools, Workflow"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-haskell.html",
    "title": "What Is Haskell? A Clear Introduction (2026)",
    "dek": "Haskell is a purely functional, statically typed, lazy programming language with powerful type inference. What Haskell is, the ideas that define it - purity, immutability, laziness, strong types - what it is used for, and how to start.",
    "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "An open laptop showing code on a desk",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Haskell, Functional, Intro"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-json.html",
    "title": "What Is JSON? The Data Format Behind Modern Apps (2026)",
    "dek": "JSON is a lightweight, human-readable text format for structured data - the language most web APIs and config files speak. What JSON is, its syntax, why it is everywhere, how it compares to XML, and its honest limits.",
    "img": "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Code in an editor on a screen",
    "date": "Jun 14, 2026",
    "read": "6 min read",
    "cats": "Json, Data, Web"
  },
  {
    "href": "/e/blog/2026-06-14-what-is-sql.html",
    "title": "What Is SQL? The Language of Databases, Explained (2026)",
    "dek": "SQL is the standard language for storing, querying and changing data in relational databases. What SQL is, the core commands (SELECT, INSERT, UPDATE, DELETE), how a query works, SQL vs NoSQL, and why it is still essential in 2026.",
    "img": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80&auto=format&fit=crop",
    "imgAlt": "Colorful source code on a monitor",
    "date": "Jun 14, 2026",
    "read": "7 min read",
    "cats": "Sql, Databases, Data"
  },
  {
    "href": "/e/blog/2017-09-09-Cabal-2-0.html",
    "title": "Cabal 2.0: the Release that Reshaped Haskell Builds (Updated)",
    "dek": "A community-updated guide to Cabal 2.0 (2017) - nix-style local builds, Backpack mixins, the caret-version operator and a better solver - and how each of those features stands in the 2026 toolchain.",
    "img": "https://coldwa.st/img/cabal-2-0.svg",
    "imgAlt": "A dependency graph and a terminal running cabal new-build, illustrating Cabal 2.0 nix-style builds",
    "date": "Sep 9, 2017",
    "read": "7 min read",
    "cats": "Haskell, Cabal, Build"
  },
  {
    "href": "/e/blog/2013-08-20-Cabal-sandbox.html",
    "title": "Cabal Sandboxes: What They Were, and What Replaced Them (Updated)",
    "dek": "A modern, community-updated guide to Cabal sandboxes - the per-project dependency isolation introduced in cabal-install 1.18 - and the nix-style v2-build workflow that replaced them in today\\'s Haskell toolchain.",
    "img": "https://coldwa.st/img/cabal-sandbox.svg",
    "imgAlt": "Three isolated Cabal sandboxes, each holding its own package set, beside a terminal running cabal sandbox init",
    "date": "Aug 20, 2013",
    "read": "9 min read",
    "cats": "Haskell, Cabal, Build"
  },
  {
    "href": "/e/blog/2011-08-22-GSoC-Final.html",
    "title": "Parallelising cabal-install: How Haskell Builds Use Your Cores (Updated)",
    "dek": "A community-updated guide to parallel builds in cabal-install - the dependency-graph parallelism whose foundations were laid in a 2011 Google Summer of Code project - and how -j builds and GHC semaphores work in the 2026 toolchain.",
    "img": "https://coldwa.st/img/gsoc-parallel.svg",
    "imgAlt": "Parallel build lanes showing independent Haskell packages compiling concurrently under cabal build -j",
    "date": "Aug 22, 2011",
    "read": "6 min read",
    "cats": "Haskell, Cabal, Performance"
  }
];

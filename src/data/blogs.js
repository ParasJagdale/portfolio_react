export const blogs = [
  {
    id: 1,
    slug: "systems-mindset-front-end",
    title: "A Systems Mindset for Front-End Engineering",
    summary:
      "How I think about consistency, performance, and design systems when shipping UI at speed.",
    date: "2026-01-22",
    readTime: "6 min read",
    tags: ["Frontend", "Design Systems", "Performance"],
    cover: "/images/blog-systems.jpg",
    content: `# A Systems Mindset for Front-End Engineering

Modern front-end work is a systems problem, not a screens problem. I use three anchors to keep projects stable while shipping fast:

## 1. Consistency beats complexity
I prefer a small set of primitives with clear rules. The UI becomes predictable and less fragile.

## 2. Performance is a feature
I budget for render time, CPU, and network early. Good defaults matter more than late optimizations.

## 3. Collaboration scales quality
A shared language between design and engineering avoids drift and rework.

**Takeaway:** I ship UI that feels cohesive because the system itself is cohesive.
`,
  },
  {
    id: 2,
    slug: "react-architecture-2026",
    title: "React Architecture in 2026: Practical Patterns",
    summary:
      "A pragmatic look at routing, state boundaries, and component ownership in modern React apps.",
    date: "2025-12-02",
    readTime: "7 min read",
    tags: ["React", "Architecture"],
    cover: "/images/blog-react-arch.jpg",
    content: `# React Architecture in 2026: Practical Patterns

### Routing as a product decision
Route boundaries map to ownership and performance budgets.

### State boundaries
Keep state close to the UI and lift only when coordination is required.

### Components as contracts
I design components with strict input/output expectations and clear responsibilities.

**Result:** Less coupling, faster iteration, and easier maintenance.
`,
  },
  {
    id: 3,
    slug: "ui-motion-with-intent",
    title: "UI Motion with Intent",
    summary:
      "Small motion decisions that make interfaces feel premium without hurting usability.",
    date: "2025-10-11",
    readTime: "5 min read",
    tags: ["UX", "Motion"],
    cover: "/images/blog-motion.jpg",
    content: `# UI Motion with Intent

Motion should explain, not distract. I focus on:

- Direction and hierarchy
- Reduced motion support
- Performance-conscious transitions

**Principle:** If motion does not communicate, it does not belong.
`,
  },
];

---
name: project-adhd-app
description: Neuro-Adaptive ADHD planner monorepo — architecture decisions, what's been built, what's next
metadata:
  type: project
---

Monorepo scaffold complete as of 2026-06-16. pnpm workspaces, Expo 53, React Native 0.76, Reanimated v3, Gesture Handler, expo-haptics.

**Structure:**
- `apps/mobile/` — Expo Router app, metro.config with workspace watchFolders
- `packages/ui/` — component library, exports via `src/index.ts`, Storybook 8 on-device
- `tsconfig.base.json` — shared: target ES2020, moduleResolution bundler

**Design Bible location:** `/Users/ilja.petrovs/Documents/Wise/Projects/Good habits/Context.md`

**Atoms complete (typecheck clean):**
- `Button3D` — Y-axis 3.5px press, 80ms ease-out, haptic.Medium on release
- `TactileCheckbox` — spring scale 1.15 (mass 1, stiff 300, damp 15), dual 40ms micro-ticks
- `EnergyBadge` — LOW/MEDIUM/HIGH color tokens
- `ProgressBar` — 5% overshoot elastic spring

**Storybook:** stories at `packages/ui/src/atoms/*/*.stories.tsx`. Run via `pnpm ui:storybook`.

**Fix applied:** `@storybook/react` must be installed as devDep in `packages/ui` — v8 `@storybook/react-native` doesn't re-export `Meta`/`StoryObj` types directly.

**Why:** `moduleResolution: bundler` requires `module: esnext` — added both to tsconfig.base.json.

**Next up:** Install Expo Go / dev client on phone and test tactile feel. Then build ActionCard molecule (swipe gestures + collapse animation).

# gql.tada monorepo issue

Copied from https://discord.com/channels/1082378892523864074/1211808756325683210/1211808756325683210

## Reproduction steps

1. Clone this repo
2. Run `bun install` in the top-level dir
3. Open `packages/server/fragments.ts`
4. See TS warning on `PersonFragment`

```
The inferred type of 'PersonFragment' references an inaccessible 'unique symbol' type. A type annotation is necessary.ts(2527)

Exported variable 'PersonFragment' has or is using name '$tada' from external module "/Users/byrne/Code/gql-tada-monorepo-issue/node_modules/gql.tada/dist/gql-tada" but cannot be named.ts(4023)

const PersonFragment: TadaDocumentNode<{
    homeworld: {
        [$tada.fragmentRefs]: {
            Planet: unique symbol;
        };
    } | null;
    id: string | number;
}, {}, {
    fragment: "Person";
    on: "Person";
    masked: true;
}>
```
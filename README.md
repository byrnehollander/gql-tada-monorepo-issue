# gql.tada monorepo issue

Copied from https://discord.com/channels/1082378892523864074/1211808756325683210/1211808756325683210

---

I'm struggling to use gql.tada with my bun monorepo. 

Any single fragment works just fine, for example:

```
export const UserFragment = graphql(`
  fragment User on User {
    id
    tags {
      id
    }
  }
`);
```

However, once I pull Tag out to a fragment like below (/Users/myUser/myMonorepo/packages/server/fragments.ts):

```
import { graphql } from "gql.tada";

export const TagFragment = graphql(`
  fragment Tag on Tag {
    id
  }
`);

export const UserFragment = graphql(
  `
    fragment User on User {
      id
      tags {
        ...Tag
      }
    }
  `,
  [TagFragment]
);
```

I get this error:

```
The inferred type of 'UserFragment' references an inaccessible 'unique symbol' type. A type annotation is necessary.ts(2527)

Exported variable 'UserFragment' has or is using name '$tada' from external module "/Users/myUser/monorepo/node_modules/gql.tada/dist/gql-tada" but cannot be named.ts(4023)

const UserFragment: TadaDocumentNode<{
    tags: {
        [$tada.fragmentRefs]: {
            Tag: unique symbol;
        };
    }[] | null;
    id: string | number;
}, {}, {
    fragment: "User";
    on: "User";
    masked: false;
}>
```

import { graphql } from "./graphql";

export const PlanetFragment = graphql(`
  fragment Planet on Planet {
    id
    name
  }
`);

export const PersonFragment = graphql(
  `
    fragment Person on Person {
      id
      homeworld {
        ...Planet
      }
    }
  `,
  [PlanetFragment]
);

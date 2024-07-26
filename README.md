# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Contact Form Information:
https://codingoblin.com/post-request-in-nuxt-3/

Gutenberg Blocks Query:
https://github.com/funkhaus/wp-gql-gutenberg/issues/52

query NewQuery {
  menus(where: {id: 6}) {
    nodes {
      menuItems {
        nodes {
          uri
          label
          title
        }
      }
    }
  }
}

query getPost {
  post(id: "46", idType: DATABASE_ID) {
    title
    blocks {
      name
      ... on CoreHeadingBlock {
        attributes {
          ... on CoreHeadingBlockAttributes {
            align
            anchor
            backgroundColor
            className
            content
            level
            style
            textAlign
            textColor
          }
        }
      }
      ... on CoreParagraphBlock {
        attributes {
          ... on CoreParagraphBlockAttributes {
            align
            anchor
            backgroundColor
            className
            content
            dropCap
            style
            align
            textColor
          }
        }
      }
    }
  }
}



allWpPost {
Edges {
Node {
databaseId

Title
}
}
}

$P$BvCpgwrPQg2vw3nQx3AJaOtlTeZ.6H.

$P$BvCpgwrPQg2vw3nQx3AJaOtlTeZ


const poopy = async () => {
  const url = 'https://...';
  try {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return false;
};

const data = await poopie();4

if (!data) {
  // not poopie
}

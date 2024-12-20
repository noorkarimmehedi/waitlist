const COMPONENT_GRAPHQL_FIELDS = `
  slug
  name
  thumbnail {
    url
  }
  demo {
    url
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      cache: 'force-cache',
      next: { tags: ["components"] },
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  });
}

function extractWork(fetchResponse: any): any {
  return fetchResponse?.data?.componentsCollection?.items?.[0];
}

function extractWorkEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.componentsCollection?.items;
}

export async function getAllWorks(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      componentsCollection(where: { slug_exists: true }) {
        items {
          ${COMPONENT_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractWorkEntries(entries);
}

export async function getWork(slug: string): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      componentsCollection(where: { slug: "${slug}" }) {
        items {
          ${COMPONENT_GRAPHQL_FIELDS}
        }
      }
    }` );

  return extractWork(entry);
}

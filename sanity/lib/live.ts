import 'server-only';

import { defineLive } from 'next-sanity';
import { client } from '@/sanity/lib/client';

// set your viewer token
const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error(
    'The SANITY_API_READ_TOKEN environment variable is required to enable live preview'
  );
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});

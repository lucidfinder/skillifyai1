/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:dub27olVyiAp@ep-black-fog-a5zqmm81.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
  },
};

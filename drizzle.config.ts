import type {defineConfig} from 'drizzle-kit'
import * as dotenv from 'dotenv';
dotenv.config({path:".env"});

export default {
    drive: 'pg',
    schema: '.src/lib/db/schema.ts',
    dbCredentials:{
        url: process.env.DATABASE_URL!,
    },
} satisfies Config

//npx drizzle-kit push:pg
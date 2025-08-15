import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "@/app/(home)/protected/client";

export default async function Home() {
    void trpc.hello.prefetch({ text: 'Aleksey' });

    return (
        <HydrateClient>
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorBoundary fallback={<p>Error...</p>}>
                    <PageClient />
                </ErrorBoundary>
            </Suspense>
        </HydrateClient>
);
}

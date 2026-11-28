import { Head } from '@inertiajs/react';

export default function VerifyEmail() {
    return (
        <>
            <Head title="Email verification" />
            <p className="text-center text-sm text-muted-foreground">
                Email verification is disabled.
            </p>
        </>
    );
}

VerifyEmail.layout = {
    title: 'Email verification',
    description: 'Email verification is disabled for this application.',
};
